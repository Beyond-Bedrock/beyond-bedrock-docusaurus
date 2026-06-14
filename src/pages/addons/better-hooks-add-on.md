---
id: better-hooks-add-on
title: "Better Hooks Add-on"
description: "Grapple, swing, and teleport with 6 tiers of modular grappling hooks. Fully multiplayer compatible and requires no Beta APIs!"
image: img/addons/Better-hooks-add-on/thumbnail.png
author:
  name: "ilyasseah1"
  avatar: img/authors/ilyasseah1.webp
tags:
  - utility
  - tools
  - traversal
  - gameplay
contributors:
  - ilyasseah1
  - MinecraftBedrockArabic
lastUpdated: "2026-06-14T21:23:16"
supportedVersions:
  - "26.20+"
downloads:
  "26.20+": "https://www.mediafire.com/file/yi20sksqyslddjn/hook_addon.mcaddon/file"
---

# Better Hooks Add-on

![Better Hooks Thumbnail](/img/addons/Better-hooks-add-on/thumbnail.png)

Tired of slow walking, climbing ladders, or using basic ender pearls to get around? **Better Hooks** is a comprehensive traversal add-on that introduces **6 progressive tiers of grappling hooks** to Minecraft Bedrock Edition!

From simple wood hooks to god-tier ender hooks that teleport entities and shoot fireballs, this add-on expands how you travel, explore, and fight.

<SectionSpacer 
  title="Key Features"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #4dedf4, #d443e6)"
  textColor="linear-gradient(90deg, #4dedf4, #d443e6)"
/>

- ⛓️ **Progression-Based Tiers:** Craft and upgrade your way through 6 tiers of hooks, each with enhanced speed, distance, hook count, and capabilities.
- 👥 **Multiplayer Ready:** Custom scripting ensures multiple players can grapple simultaneously without performance hits or crossed lines.
- 🛠️ **No Beta APIs Required:** Runs entirely on stable APIs, ensuring high compatibility, seamless installation, and fewer updates breaking the pack.
- 🔊 **Custom Sounds:** Immersive audio cues play when you launch, attach, release, or snap a hook.

---

## Hook Stats & Abilities

Here is a quick breakdown comparing all 6 grappling hook tiers:

| Hook Tier        | Projectile Speed  | Max Distance | Max Hooks | Midpoint Pull | Special Abilities                                                                                                               |
| :--------------- | :---------------: | :----------: | :-------: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------ |
| **Wooden Hook**  |   `2.6` (Slow)    | `28` blocks  |     1     |      No       | None                                                                                                                            |
| **Iron Hook**    |  `3.4` (Medium)   | `40` blocks  |     2     | Yes (2 hooks) | 💥 Area Damage (4 dmg, 3 blocks radius)                                                                                         |
| **Diamond Hook** |   `4.2` (Fast)    | `55` blocks  |     4     | Yes (2 hooks) | 💥 Area Damage (5 dmg, 3.5 blocks), ❤️ Regeneration I while active                                                              |
| **Emerald Hook** | `5.0` (Very Fast) | `70` blocks  |     5     | Yes (2 hooks) | 💥 Area Damage (6 dmg, 4 blocks), ❤️ Regeneration I, 🏡 Village Buffs (Hero of the Village I, Strength II)                      |
| **Red Hook**     |  `5.8` (Extreme)  | `85` blocks  |     5     | Yes (5 hooks) | 💥 Area Damage (7 dmg, 4.5 blocks), ❤️ Regeneration I, 🧲 Sneak-Attack pulls entities                                           |
| **Ender Hook**   |  `8.0` (Fastest)  | `120` blocks |     1     |      No       | 💥 Area Damage (8 dmg, 4 blocks), 🌌 Grapple Air/Sky, 🌀 Sneak-Attack teleports entities, ☄️ Dragon Fireball (with Dragon Head) |

<SectionSpacer 
  title="Hook Tiers"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #4dedf4, #d443e6)"
  textColor="linear-gradient(90deg, #4dedf4, #d443e6)"
/>

### 🪵 Wooden Hook

The entry-level hook. Slow, short-ranged, and can only support one hook at a time. Ideal for early-game climbing.

- **Max Hooks:** 1
- **Distance:** 28 blocks
- **Speed:** 2.6
- **Abilities:** None

![Wooden Hook Crafting](/img/addons/Better-hooks-add-on/wooden_hook_crafting.png)

---

### 🪙 Iron Hook

A solid mid-game upgrade. You can throw up to **2 hooks** simultaneously. If both hooks attach, you will be pulled straight to their midpoint. Deals area damage on impact.

- **Max Hooks:** 2 (pulls to midpoint)
- **Distance:** 40 blocks
- **Speed:** 3.4
- **Abilities:** 💥 Deals 4 area damage in a 3-block radius when the hook hits an entity.

![Iron Hook Crafting](/img/addons/Better-hooks-add-on/iron_hook_crafting.png)

---

### 💎 Diamond Hook

High performance and great utility. You can throw up to **4 hooks** at once. If at least 2 hooks are attached, you are drawn to their midpoint. Gives you regeneration while in use.

- **Max Hooks:** 4 (midpoint pull starts at 2 hooks)
- **Distance:** 55 blocks
- **Speed:** 4.2
- **Abilities:**
  - 💥 Deals 5 area damage in a 3.5-block radius when hitting an entity.
  - ❤️ Gives you **Regeneration I** passive effect while you are actively using the hook.

![Diamond Hook Crafting](/img/addons/Better-hooks-add-on/diamond_hook_crafting.png)

---

### emerald_hook 🧪 Emerald Hook

The explorer's choice. Can throw up to **5 hooks**, pulling you to the midpoint. Possesses all Diamond Hook features, plus a special synergy with villages.

- **Max Hooks:** 5 (midpoint pull starts at 2 hooks)
- **Distance:** 70 blocks
- **Speed:** 5.0
- **Abilities:**
  - 💥 Deals 6 area damage in a 4-block radius when hitting an entity.
  - ❤️ Gives you **Regeneration I** passive effect while actively using the hook.
  - 🏡 **Village Harmony:** When you are within 48 blocks of a village, you receive **Hero of the Village I** and **Strength II**!

![Emerald Hook Crafting](/img/addons/Better-hooks-add-on/emerald_hook_crafting.png)

---

### 🔴 Red Hook

An advanced, redstone-powered traversal hook. Shoots up to **5 hooks**, but only pulls you to the midpoint if all **5 hooks** are attached. Features an active entity pull mechanism.

- **Max Hooks:** 5 (pulls to midpoint only when all 5 hooks are attached)
- **Distance:** 85 blocks
- **Speed:** 5.8
- **Abilities:**
  - 💥 Deals 7 area damage in a 4.5-block radius when hitting an entity.
  - ❤️ Gives you **Regeneration I** passive effect while actively using the hook.
  - 🧲 **Magnetic Pull (Active):** Sneak and use/hit an entity with the hook to pull the entity directly to your location.

![Red Hook Crafting](/img/addons/Better-hooks-add-on/red_hook_crafting.png)

---

### 👁️ Ender Hook

The ultimate grappling hook. It has unmatched speed, incredible distance, and unique void abilities. Though it only throws 1 hook, it breaks the laws of physics.

- **Max Hooks:** 1
- **Distance:** 120 blocks
- **Speed:** 8.0 (Instantaneous feel)
- **Abilities:**
  - 💥 Deals 8 area damage in a 4-block radius when hitting an entity.
  - 🌌 **Air Grapple:** You can fire the hook directly into the sky or open air, and it will pull you in that direction!
  - 🌀 **Ender Warp (Active):** Sneak and use/hit an entity with the hook to instantly teleport that entity directly in front of you.
  - ☄️ **Dragon's Wrath:** If you are wearing an **Ender Dragon Head**, sneak and hit/use the hook on an entity to shoot an **Ender Dragon Fireball** at them!

![Ender Hook Crafting](/img/addons/Better-hooks-add-on/ender_hook_crafting.png)

---

<SectionSpacer 
  title="How to Use"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #4dedf4, #d443e6)"
  textColor="linear-gradient(90deg, #4dedf4, #d443e6)"
/>

### Traversal and Controls

- **Throwing a Hook:** Use (Right Click / Tap) the hook item while holding it. Alternatively, you can use/swing it by attacking.
- **Releasing Hooks:** Shift (Sneak) to release all active hooks and detach from blocks.
- **Hotbar Slot 9 Integration:** If you put a hook in your last hotbar slot (Slot 9), it will remain active even when you hold other items. If you switch slots or move the hook out of Slot 9, all active hooks are immediately released.
- **Special Sneak Abilities:** For the **Red Hook** and **Ender Hook**, sneaking while using/hitting an entity will trigger their active manipulation abilities (Pulling/Teleporting) rather than releasing your hook.

---

## Installation & Setup

No experimental toggles or Beta APIs are required to run this add-on! Simply activate the resource pack and behavior pack in your world settings, and you are ready to play.

<RequirementToggle
  title='Beta APIs'
  description='Required for some scripting add-ons, but NOT needed for Better Hooks!'
  required={false}
/>

## Downloads

<DownloadButton
title="Better Hooks Add-on"
description="Download the latest version compatible with Minecraft Bedrock 26.20+ and above."
visibleButtons={[
{
label: "26.20+ (MediaFire)",
link: "https://www.mediafire.com/file/yi20sksqyslddjn/hook_addon.mcaddon/file",
},
]}
/>
