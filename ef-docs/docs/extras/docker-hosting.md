---
sidebar_position: 2
---

# Hosting on Docker

This guide details an _advanced_ server setup using Docker. It is strictly intended for users with experience in Linux environments, command-line interfaces, and Docker's ecosystem (including a solid understanding of images, containers, volumes, networking, and docker-compose).
- Comfortable navigating and operating within a Linux terminal.
- Proficient with Docker concepts, including how Docker images are built and run, how containers are managed, and how docker-compose orchestrates multi-container applications.

Proceeding with this setup implies you possess the prerequisite technical knowledge. Due to the complexity and user-specific nature of such a setup, direct support for this Docker configuration will be inherently limited, and you assume all responsibility if something goes awry. **Consider yourself warned!**

***

For those seeking a scalable and manageable solution for creating and managing Spellbreak servers, Docker offers a robust approach. This method involves using `docker-compose `to define and run your multi-container Spellbreak server application.
#### Prerequisites
1. Docker Installation: You must have Docker Engine and Docker Compose installed on your Linux server. If you haven't installed them yet, please refer to the official Docker documentation for instructions specific to your Linux distribution.
2. Directory Setup: Create a dedicated directory on your server where you will store the `docker-compose.yml` file and any related configuration or data persistence mappings.
#### Utilitizing the Configuration:
The configuration provided below should be saved into a file named `docker-compose.yml` within the directory you just created. Before you attempt to launch the services, it is absolutely crucial that you edit the `docker-compose.yml` file and replace all placeholder passwords (e.g., YOUR_MYSQL_PASSWORD, YOUR_DB_ROOT_PASSWORD) with your own strong, unique passwords. Failure to do so will result in a non-functional and insecure setup.

### Adding and Configuring Game Servers
To run multiple game servers or customize existing ones, you'll need to edit two main parts of your `docker-compose.yml` file: the `elixir_service` configuration and the individual game server service definitions.

#### Configure the elixir_service (Matchmaker)

The `elixir_service` needs to be aware of all game servers you intend to run. Update its environment section as follows:

* GAME_SERVER_NAMES: A comma-separated list of user-friendly names for your servers (e.g., `Solos-Alpha,Duos-Beta`).
* GAME_SERVER_HOSTS: A comma-separated list of hostnames for your game servers. These must exactly match the hostname (and typically the service name) defined for each game server service in the `docker-compose.yml` (e.g., `solo1,solo2,duo1`).
* GAME_SERVER_PORTS: A comma-separated list of game ports that each corresponding game server listens on (e.g., `7777,7778,7779`). These must match the `GAMEPORT` environment variable of the respective game server.
* GAME_MANAGER_PORTS: A comma-separated list of game manager ports for each corresponding game server. These must match the `ELIXIRPORT` environment variable of the respective game server (e.g., `3387,3388,3389`).
**Important**: The order of entries in `GAME_SERVER_NAMES`, `GAME_SERVER_HOSTS`, `GAME_SERVER_PORTS`, and `GAME_MANAGER_PORTS` must correspond. For example, the first name, first host, first port, and first manager port all refer to the same game server instance.

Here's an example of what you'll need to change:
```
# Inside elixir_service:
#   environment:
#     # ... other environment variables ...
#     GAME_SERVER_NAMES: Solos-US-East,Solos-US-West
#     GAME_SERVER_HOSTS: solo_use,solo_usw
#     GAME_SERVER_PORTS: 7777,7778
#     GAME_MANAGER_PORTS: 3387,3388
#     # ... other environment variables ...
#     ports: # UDP is required!
#         - "7777:7777/udp"
#         - "7778:7778/udp"
```
#### Defining Each Game Server Service
For each new game server, you need to add a new service definition to your `docker-compose.yml file.` You can copy and adapt the example solo1 server (if present in your base file) or use the template below.

```
your_service_name: # e.g., solo2, duo1. Conventionally matches hostname and SERVERNAME.
    container_name: YOUR_CONTAINER_NAME # e.g., spellbreak_solo2
    hostname: YOUR_SERVER_HOSTNAME # e.g., solo2. Must be registered in elixir_service's GAME_SERVER_HOSTS!
    environment:
      - GAMEMODE=GAME_MODE # Suitable options are Solo, Duo, Squad, and Capture
      - GAMEPORT=7777 # e.g., 7778. Must be unique on the host if exposed & registered in elixir_service's GAME_SERVER_PORTS.
      - SERVERNAME=YOUR_SERVER_NAME # e.g., solo2. Conventionally matches hostname.
      - ELIXIRPORT=3387 # e.g., 3388. Game Manager Port, must be registered in elixir_service's GAME_MANAGER_PORTS.
      - PATCH_ENV=prod # Or vanilla
      - IDLETIMER=60
    # =-=-=!!! No touchy anything below this line! >:o !!!=-=-= #
    image: brendoncintas/spellbreak_game_server:stable
    restart: always
    volumes:
      - game_logs:/spellbreak-server/BaseServer/g3/Saved/Logs/ # Shared volume for logs
    networks:
      - spellbreak
```

Some things to look out for in the configuration:
* Naming Convention: It's standard practice that the `Docker service name` (e.g., `your_service_name`), the `hostname` within that service, and the `SERVERNAME` environment variable all match (e.g., all could be `solo2`).
* Elixir Registration: The `hostname` and `GAMEPORT` of **each** game server must be correctly listed in the `elixir_service` environment variables (`GAME_SERVER_HOSTS` and `GAME_SERVER_PORTS` respectively) for the matchmaker to recognize and use the server. Similarly, the `ELIXIRPORT` must correspond to an entry in `GAME_MANAGER_PORTS`.
* Port Exposure: Each game server requires its `GAMEPORT` to be accessible externally for players to connect. If you add a new game server, you must add a ports section to that new game server's definition (as shown in the template). This maps its `GAMEPORT` from the host to the container (e.g., `"7778:7778/udp"`). Ensure this port is also open on your server's firewall. The `GAMEPORT` value in the environment variables should match the port number used in the ports mapping.

### Example `docker-compose.yml` file
```
# Made with <3 by Doobs. 3/6/2025

services:
  # ==================== SPELLBREAK MATCHMAKING SERVER ====================
  elixir_service:
    image: brendoncintas/spellbreak_matchmaking:stable
    container_name: spellbreak_matchmaking
    environment:
      # Database connection settings (match mariadb service)
      DB_HOST: spellbreak_db # This must match the hostname in the mariadb service.
      DB_USER: blackmarla # This must match the MYSQL_USER in the mariadb service.
      DB_PASSWORD: YOUR_MYSQL_PASSWORD  # This must match the MYSQL_PASSWORD in the mariadb service.
      DB_NAME: spellbreak_server
      DB_PORT: "3306"

      # Game server port allocation for outbound connections
      OUTBOUND_PORT_START: "8000"
      OUTBOUND_PORT_END: "9000"
      RECYCLE_PORT_MINUTES: "240"

      # Debug settings
      RECORDING_ENABLED: "false"
      LOG_LEVEL: "debug"
      
      GAME_SERVER_NAMES: Solos
      GAME_SERVER_HOSTS: solo1
      GAME_SERVER_PORTS: 7777
      GAME_MANAGER_PORTS: 3387 # Used for issuing custom commands to the game (e.g. server restarts)

    volumes:
      - game_logs:/app/log  # Shared log directory across all game servers
    restart: always
    networks:
      - spellbreak

    # Expose game ports for external players to connect. Left side is the host (same ports in GAME_SERVER_PORTS), right side is the forward port for your game server.
    # UDP is a requirement!
    ports:
      - "7777:7777/udp"

  # ==================== DATABASE ====================
  mariadb:
    image: brendoncintas/spellbreak_db:stable
    container_name: spellbreak_db
    hostname: spellbreak_db # This must match the entry within DB_HOST for the elixir_service.
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: YOUR_DB_ROOT_PASSWORD  # Superadmin password (should not be shared).
      MYSQL_DATABASE: spellbreak_server
      MYSQL_USER: blackmarla
      MYSQL_PASSWORD: YOUR_MYSQL_PASSWORD  # Matches DB_PASSWORD in elixir_service.
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - spellbreak

 # ==================== GAME SERVER ====================
  solo1:
    container_name: solo1
    hostname: solo1
    environment:
      - GAMEMODE=Solo
      - GAMEPORT=7777
      - SERVERNAME=solo1
      - ELIXIRPORT=3387
      - PATCH_ENV=prod
      - IDLETIMER=60
    # =-=-=!!! No touchy anything below this line! >:o !!!=-=-= #
    image: brendoncintas/spellbreak_game_server:stable
    restart: always
    volumes:
      - game_logs:/spellbreak-server/BaseServer/g3/Saved/Logs/
    networks:
      - spellbreak

# ==================== SHARED VOLUMES & NETWORKS ====================
volumes:
  db_data:  # Stores MySQL database files
  game_logs:  # Shared log directory between game servers and matchmaking

networks:
  spellbreak:
    driver: bridge
```
### Simplified Setup without Elixir or MariaDB for Limited Functionality
For smaller server setups where features like matchmaking or IP address logging (typically handled by elixir_service) are not required, you might consider a more streamlined configuration. This involves running only the game server(s).
1. Remove elixir_service: Delete the entire elixir_service definition from your docker-compose.yml file.
1. Remove mariadb service: Since the mariadb service is primarily used by elixir_service in this stack, it can also be removed if elixir_service is omitted.
1. Direct Port Exposure: Ensure each game server service (e.g., solo1, or any custom game servers you've defined using the template above) has its GAMEPORT directly exposed in its ports section. For example:
```
# In your game server service definition (e.g., solo1):
# environment:
#   - GAMEPORT=7777
#   # ... other env vars
ports:
  - "7777:7777/udp" # Exposes the game port directly
```

#### Consequences and Limitations of Direct Game Hosting:
* **No Database Functionality:** Features that rely on the database (via elixir_service), such as persistent player data, statistics, or advanced logging that elixir_service might handle, will not be available.
* **Simplified Hosting:** This setup is reduced to basic game instance hosting.
* **Configuration Changes:** Environment variables in the game server services that were related to elixir_service (like ELIXIRPORT or specific SERVERNAME registrations for Elixir) may no longer be relevant or used.
This simplified approach is only recommended if you understand the trade-offs and require only direct game server hosting without the broader features provided by the Elixir matchmaking and database components.

***

