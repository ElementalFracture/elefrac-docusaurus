---
sidebar_position: 1
---
# How to Use the Client

This page will discuss how to use the client's features.

Before we begin, a meesage from Proletariat: 

> Hi Breakers!
>
> Like many of you, we were sad to see the development of Spellbreak come to a close. In order to help memorialize Spellbreak and allow players to continue to enjoy the Hollow Lands, we created a standalone version where players can host their own servers and play with their friends or explore the game-space at their own pace!
>
> We’ve also unlocked all cosmetics, so you can try out your favorite skins as well as ones that you were unable to previously experience. Alongside this, we’ve enabled access to the majority of console commands used within development. With this you can hopefully customize matches to your liking and enjoy Spellbreak for years to come.
>
> Thank you for playing and being a part of the wonderful and passionate community that allowed us to bring Spellbreak to life. We wish you all the best! :)
>
> \- Spellbreak Development Team

---

## Table of Contents

- [Clients and Servers](#clients-and-servers)
- [Running Spellbreak Client](#running-spellbreak-client)
- [Joining A Match](#joining-a-match)
- [Additional Notes and Troubleshooting](#additional-notes-and-troubleshooting)

---

## Clients and Servers

This version of Spellbreak is split into two apps: the client and the server.

The client includes all the graphics and menus you would expect from a game. This page focuses on the client, which is all you need to join someone else’s match.

If you would like to host your own match, you will also need a server. To learn more about how to set up a server, check out the “How to Host a Server” pdf file.

---

## Running Spellbreak Client

You’ll need to download the Spellbreak Client and extract it into a folder of your choice.
There are multiple ways to do this, as outlined in the [quick setup guide](https://github.com/ElementalFracture/Guides/wiki/Elemental-Fracture-Quick%E2%80%90Setup-Guide). 

If you'd prefer to install the game manually, follow the [manual install](https://github.com/ElementalFracture/Guides/wiki/Elemental-Fracture-Quick%E2%80%90Setup-Guide#b-manual-setup-only-conduct-the-steps-below-if-the-launcher-is-not-working-for-you) tutorial. 

### Prerequisites

Before running Spellbreak for the first time, you may need to run the Unreal Engine 4 Prerequisites installer. The installer can be found inside a folder named “Prereqs”. Both files are executables (they have the file extension “.exe”).

- For 64-bit versions of Windows, run `UE4PrereqSetup_x64`
- For 32-bit versions of Windows, run `UE4PrereqSetup_x86`

If you aren’t sure which version of Windows you are running, follow [this link](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d) for easy instructions on how to find out.

### Running the game

Enter the folder you created by extracting the client zip file, and run `Spellbreak`.

If the game pops up any errors instead of playing the game, then make sure you have installed the prerequisites (see above).

---

## Joining A Match

After the game starts up, click “Start” on the title screen.

When you enter the main menu, select the Game Mode button. This will allow you to set the mode that the client wants to play on (and it must match the mode the server is running in order to connect).

Selecting the Dominion game mode will prompt you to select a role (Host or Participant). Hosts get additional options in match settings, but only 1 player should select this role per match. It's recommended that the person who is running the dedicated server is the person who selects the host role, but that’s ultimately left up to the players to determine amongst themselves.

If you have not selected the Dominion game mode, or are a participant in Dominion, you will see a match settings screen with only the Team Number setting.

You can optionally enter a team number (e.g. 1) to specify which team you want to play on. If you do not enter a number, the server will randomly assign you to a team. If you made any changes, save them by clicking “Apply Changes”. For all other match options, see the “Dominion Host Match Settings” section below.

If you want to change your role, you can click the “Change Role” button to bring you back to the role selection screen (if it’s available for your game mode).

You can return to the main menu by selecting the “Back” button in the bottom left corner.

When you’re ready to join a match, find the “Server Address” field in the lower right corner of the main menu. Enter the public IP address and port of the server you want to connect to (get this from whoever is running the server).

Click “Play”, then customize your character and loadout however you like, then click “Confirm” to join the server.

---

### Dominion Host Match Settings

This is a rundown of all the configurable fields the host will see when setting up a dominion match:

- **Team Number**: Dominion has 2 teams so players will choose either 1 or 2 (empty will randomly assign each player who didn’t specify a team).
- **Arena Select**: Players can choose which portion of the map they’d like to play on. You can choose a specific location (Hymnwood, Halcyon, Dustpool, Bogmore, or Banehelm) or let the server choose by selecting Random.
- **Dynamic Max Score**: This determines whether or not the ‘Max Score’ changes based on player count.
- **Max Score**: Specifies the fixed score that a team must achieve to win. If ‘Dynamic Max Score’ is enabled, this value is the minimum score which is adjusted according to the number of players.
- **Max Score Bonus Per Player**: If ‘Dynamic Max Score’ is enabled, the score teams must achieve is increased by the maximum size of the two teams multiplied by this value. For example, if ‘Max Score’ is 100, ‘Max Score Bonus Per Player’ is 10, team 1 has 4 players, and team 2 has 3 players, then the total score will be 140 (100 + 10 * 4).
- **Match Duration**: The maximum length of the match. If the max score is not achieved before this time runs out, the team with the most points wins.
- **Spawn Delay**: The delay that occurs before players can drop into the arena (does not affect the time it takes to respawn).
- **Zones Enabled**: Determines whether or not capture points will spawn in (when turned off essentially makes this a TDM mode).
- **Boons Enabled**: Enables/disables the accumulation and use of boons.
- **NPCs Enabled**: Determines whether or not Vowguards will spawn.

---

## Additional Notes and Troubleshooting

- The first time you run the Spellbreak client it will ask you for a name. If you wish to change it later, you can go to the Menu icon in the upper right corner (it looks like “☰”), then select “Account”, and change it there, clicking “Confirm” when you are done.
- If two or more players wish to be on the same team, then they must set the same Team Number in the match settings before joining. If no Team Number is set, then that player is assigned a team by the server.
- You are free to run multiple Spellbreak clients on a single PC, although that may demand a lot of your hardware. If you want to try this, it may help to switch the clients to Windowed mode (In “Settings” -> “Video”), and to then reduce the size of each window.
- For information about hosting matches and issues connecting to a Spellbreak server, see the “How to Host a Server” pdf file.
