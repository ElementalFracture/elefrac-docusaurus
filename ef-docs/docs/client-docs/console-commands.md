---
sidebar_position: 2
---

# Console Commands

This document lists and describes all the commands that can be issued while playing Spellbreak.

Commands are issued by pressing the `~` (tilde) key in the upper left of your keyboard, then typing the command and any optional parameters, and pressing enter.

Pressing the `~` (tilde) key multiple times will toggle the console between single-line mode, full console mode, and hidden. Some commands have output that can only be seen when in full console mode.

**Fair Warning:** These commands were never meant to be player-facing, and some of them may be a bit fragile. For example, you can crash the game client by typing `SetMatchBotDifficulty 5`. See if you can find other crashes!

---

## Table of Contents

- [Match Parameters](#match-parameters)
- [Using Bots](#using-bots)
- [Spawning/Dropping Items](#spawningdropping-items)
- [Changing Character Class and Talents](#changing-character-class-and-talents)
- [Dominion Commands](#dominion-commands)
- [Other Useful Commands](#other-useful-commands)

---

## Match Parameters

- **StartMatch**: Starts the current match.
- **StartInfiniteMatch**: Combination of `StartMatch` and `SetAllowRoundEnd` commands. Starts a match that will not end when the timer hits 0 or when there is only 1 player remaining. Allows for Dominion matches to start with 1 player.
- **SetAllowRoundEnd \<bool\>**: Bool takes a 1 or 0. Determines whether or not the match can end when the timer hits 0 or there is only 1 player/squad remaining.
- **StopCountdown**: Pauses the countdown in the match lobby.
- **ResumeCountdown**: Resumes the countdown after being paused.
- **StopCircles**: Gets rid of the storm and prevents it from closing.
- **CloseCircle**: Forces the circle to begin closing.

---

## Using Bots

Bots will automatically spawn into a BR match to ensure it always hits capacity.

- **SpawnMatchBot**: Spawns a bot near where the player is standing.
- **RevealNearbyMatchBots**: Nearby bots will appear on the player’s map/minimap.
- **SetNumMatchBots \<amount\>**: Sets the number of bots that will spawn when the match starts (must be used after entering the server but prior to the match starting).
- **SetNoMatchBotAggro \<true\/false\>**: Changes whether or not bots will attack you.
- **SetMatchBotDifficulty \<difficulty_number\>**: Changes the bot difficulty, where 0 is Very Easy, 1 is Easy, 2 is Medium, 3 is Hard, and 4 means no bots.

---

### Spawning/Dropping Items

For every spawned item, the higher the tier, the higher the rarity (e.g., "1" is common, and "5" is legendary).

- **Spawning Gauntlets:** `SpawnGauntlet Loot:BP_Item_Weapon_<Element>_Tier_<rarity> <amount>`
<br></br> Ex. `SpawnGauntlet Loot:BP_Item_Weapon_Earth_Tier_1 1`<br></br>

- **Spawning Runes:** `SpawnRune Loot:BP_Item_Rune_<rune name>_Tier_<rarity> <amount>`
<br></br> Ex. `SpawnRune Loot:BP_Item_Rune_Chronomaster_Tier_1 1`
    - If you want to try out the Gateway Rune: `SpawnRune Loot:BP_Item_Rune_Gateway_Tier_5 1` <br></br>

- **Spawning Amulets:** `SpawnAmulet Loot:BP_Item_Amulet_Tier_<rarity> <amount>` 
<br></br> Ex. `SpawnAmulet Loot:BP_Item_Amulet_Tier_1 1`<br></br>

- **Spawning Boots:** `SpawnBoot Loot:BP_Item_Boots_Tier_\<rarity\> \<amount\>`
<br></br> Ex. ```SpawnBoot Loot:BP_Item_Boots_Tier_5 1```<br></br>

---

## Changing Character Class and Talents

- **Changing Character Class:**  `ChooseCharacterClass CharacterClass:BP_CharacterClass_<class>`
<br></br> Ex. `ChooseCharacterClass CharacterClass:BP_CharacterClass_Frostborn`

- **Choosing Character Talents:** `ChooseCharacterPerk CharacterPerk:BP_Perk_<talent>`
<br></br> Ex. `ChooseCharacterPerk CharacterPerk:BP_Perk_Dexterity`

- **Resetting Talents:** `ResetCharacterPerks`

---

## Dominion Commands

- **ToggleBoons \<bool\>**: `Bool` takes in 1 or 0. Used in the match lobby to enable/disable the use of boons.
- **ToggleZones \<bool\>**: `Bool` takes in 1 or 0. Used in the match lobby to enable/disable capture points.
- **ToggleNPCs \<bool\>**: `Bool` takes in 1 or 0. Used in the match lobby to enable/disable Vowguards.
- **SetArena \<arena name\>**: Used in the match lobby to set the arena (Hymnwood/Halcyon/Dustpool/Bogmore/Banehelm).
- **SwitchTeam**: Switches the client to the other team.
- **AddFriendlyPoints \<amount\>**: Amount of points to add to your team’s score.
- **AddEnemyPoints \<amount\>**: Amount of points to add to the enemy team’s score.

---

## Other Useful Commands

- **Die**: Instantly kills the player.
- **FastCooldowns**: Heavily reduces the cooldowns of all abilities.
- **Superspeed \<amount\>**: Changes the speed at which the player moves. 1 is normal. 10 is fast.
- **God**: Makes you invincible.
- **LevelUpCharacterClass**: Levels up current class and unlocks skills.
- **ApplyPlayerEffect \<effect\>**: Set of commands that allows for stats related to the player to be changed.
    - Example: To change the player’s max health:
        ```plaintext
        ApplyPlayerEffect GameplayEffect:BP_Effect_Player_Max_Health 1000 1.0
        ApplyPlayerEffect GameplayEffect:BP_Effect_Player_Adjust_Health 900 1.0
        ```
- **Teleport**: If you open the map with “m” and then hold “t”, you can left click on any part of the map to teleport there (the one exception is you can’t teleport into the fracture).
- **ToggleDebugCamera**: Allows the camera to detach from the player and move around on its own.
- **ToggleHUD**: Hides all HUD elements.
