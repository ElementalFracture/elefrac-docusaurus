---
title: 'Elemental Fracture Balance Patch v6.0'
description: 'Summary of changes from the community edition modded balance patch 6.'
authors: [doobs, capnhappy]
tags: [balance-patch]
---

This document outlines the changes introduced in the sixth and most current modded balance patch for the Community Edition of Spellbreak.

[Download](https://cdn.elefrac.com/patch/latest.zip)

<!-- truncate -->
## General Changes
* **Dodge** has been disabled.
* The ability to cancel levitate by firing your gauntlets has been removed. You must now stop levitating (release the spacebar) before you can fire your gauntlets.

## Class & Gauntlet Changes

### Lightning / Conduit
* The **Lightning Gauntlet** is now a burst-fire weapon, akin to its pre-alpha behavior, but with faster bursts and a quicker gap between bursts.
* The projectile speed has been decreased.
* Damage has been changed to reflect this new behavior:
    * **Common**: 3
    * **Uncommon**: 4
    * **Rare**: 5
    * **Epic**: 6
    * **Legendary**: 7

### Ice / Frostborn
* The movement speed penalty while charging the **Ice Gauntlet** has been increased from 0.75x normal speed to 0.5x normal speed.
* Sprint speed on ice has been reduced from 1440 to 960.
* The Freeze Slow Effect (aka **Chilly**) has returned with the following changes:
    * Ice trail mist duration increased from 0.5s to 3s.
    * Ice cloud mist duration increased from 1s to 3s.
    * Chilly's lasting effect after leaving the mist is reduced from 2s to 1s.
    * Chilly will initially affect animations and speed less, but the effect will ramp up the longer you are within it until you are completely frozen.
* The **Ice Gauntlet** now deals 75% damage if you are within 15m of your target.
* Class level skills have been reordered and changed:
    * **Level 1 - Frozen Alacrity**: Ice trails return to level 1 under this new name. The faster acceleration on ice trails has been removed from this skill.
    * **Level 2 - Icicle**: Returns to level 2. It now gains the faster acceleration on ice trails from the old Frozen Alacrity and increases skating speed on ice trails by 50% (to 1440).
    * **Level 3 - Tundra**: The full immunity to damage has been removed. Instead, you now gain 30 temporary Armor when casting.

### Pyromancer
* **Level 1 - Lasting Burn**: Firewalls now deal double damage over 2 seconds. Enemies ignited by your firewalls take less damage per tick (3) but stay ignited for longer (4s).
* **Level 3 - Ignite**: On a direct fireball hit, you ignite your target for 2 seconds.

### Stoneshaper
* **Bedrock**: The increased shockwave length has been reduced from +50% to +25%.

### Toxic
* The random angle spread of the toxic gauntlet is now 0, meaning every shot follows a consistent and even spread.
* The spread of toxic projectiles has been reduced from 4.5 to 4 degrees.
* Instead of projectile "thresholds" dictating damage, each projectile now counts individually towards the maximum damage (damage values remain unchanged).
* Toxic projectile lifetime has been decreased from 1s to 0.75s.

## Talents
* **Blight**:
    * No longer slows potion consume speed.
    * Increased healing reduction to 20/30/40/50%.
    * Increased duration to 10s.
* **Harmony**: Cost increased to 4.

## Runes
* **Blink**: Cooldown increased from 3.5s to 4.5s (to match Legendary Dash).
* **Wolf's Blood**: Speed boost reduced from +12 to +6.

## Items
* **Infected Amulet**: The puddle size increase effect has been removed.
* **Scribe Amulet**: Has been vaulted for now.
* **Thinker's Amulet**: Now gives a 10% mana recharge rate instead of -10% mana cost.
* **Eruption (Earthbind) Amulet**: Now increases the target's gravity for 0.2s, pulling them to the ground quickly.
* **Constitution Belt**:
    * Increased the health gain from 20 to 50.
    * No longer gives any armor.
* **Berserker Belt**:
    * Now gives 20 health and armor on exile.
    * No longer gives rune charges.
* **Boots of the Mender**: The effect has been changed. While running for over 5s, you now gain +2 health every 2 seconds.

### New Items
* **New - Reactive Amulet**:
    * Highlights visible opponents.
    * Grants +45 Max Mana.
* **New - Wanderer Belt**:
    * Grants +1 rune charge.
    * Grants +60 Armor.
* **New - Padded Shoes**:
    * Falling for more than 10m creates a shockwave that deals 25 damage to nearby opponents.
    * Grants +6 Speed.
* **New - Boots of the Mouse**:
    * You become invisible while emoting.
    * Grants +4 Speed.
