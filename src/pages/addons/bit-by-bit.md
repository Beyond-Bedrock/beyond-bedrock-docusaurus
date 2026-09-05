---
id: bit-by-bit
title: "Bit By Bit Add-on"
description: "A micro-voxel building addon that breaks down traditional blocks into 2x2x2 grids of smaller sub-units called 'bits' for unprecedented creative freedom and detail."
image: img/addons/bit-by-bit/thumbnail.png
author:
  name: "Minato"
  avatar: img/authors/minato.webp
tags:
  - building
  - blocks
  - colors
  - creative
  - construction
  - tools
  - micro-voxel
contributors:
  - MinecraftBedrockArabic
lastUpdated: "2026-09-05T21:00:00"
supportedVersions:
  - "26.4x+"
downloads:
  "Latest": "https://github.com/MinecraftBedrockArabic/bit-by-bit/releases/download/Stable/bit.by.bit.mcaddon"
---

# Bit By Bit Add-on

![Bit By Bit Thumbnail](/img/addons/bit-by-bit/thumbnail.png)

**Bit By Bit** is a micro-voxel building addon that completely redefines detail in Minecraft. By breaking down the traditional block grid, it gives you unprecedented creative freedom to sculpt your world with 2x2x2 grids of smaller sub-units called "bits."

<SectionSpacer 
  title="Key Features"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

- **Micro-Voxel Precision:** Every standard Minecraft block is divided into a 2x2x2 grid of 8 smaller sub-units called "bits" for unprecedented detail.
- **164 Vanilla Block Variants:** Extensive support for vanilla blocks including wood types, stone variants, nether blocks, glass, wool, and more.
- **64 Custom Color Blocks:** Vibrant colored blocks to expand your building palette beyond vanilla limitations.
- **Blueprint Tool:** Powerful utility to copy and place custom bit configurations instantly, saving time on complex builds.
- **Block Deconstructor:** Process vanilla blocks into 8 equivalent bits for micro-voxel building.
- **Dynamic Light System:** Adaptive light blocks that get brighter as you pack more light bits into a single block space.
- **Special Bit Properties:** Magma bits deal damage, ice bits remain slippery, wood bits can be stripped with axes.

<SectionSpacer 
  title="Included Content"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

### Custom Items
- **Blueprint:** Powerful utility tool to copy and place custom bit configurations instantly
- **Guide Book:** Essential companion for navigating the add-on with detailed instructions
- **Block Deconstructor:** Workbench that processes vanilla blocks into 8 equivalent bits

### Block Categories
- **164 Vanilla Block Variants:** Comprehensive support for all major vanilla block types (wood, stone, nether, glass, wool, special blocks)
- **64 Custom Color Blocks:** Vibrant colored blocks to expand your building palette beyond vanilla limitations
- **Special Bit Properties:** Magma bits (damage), ice bits (slippery), wood bits (strippable), adaptive light blocks (dynamic brightness)

![Creative inventory overview](/img/addons/bit-by-bit/creative-inventory.png)

<SectionSpacer 
  title="How to Use"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

1. **Install the Add-on:** Download the .mcaddon file and open it with Minecraft Bedrock Edition.
2. **Enable in World:** Create a new world or edit an existing one, enable the "Bit By Bit" behavior and resource packs.
3. **Get the Guide Book:** Craft it using a basic recipe or use the command `/Bit-By-Bit-Guide` for instant access.
4. **Craft the Block Deconstructor:** Use oak planks and a stonecutter to create the deconstructor workbench.
5. **Process Blocks into Bits:** Interact with the deconstructor while holding any vanilla block to break it down into 8 equivalent bits.
6. **Place Bits:** Bits are placed like standard blocks but align to a precise 2x2x2 grid within a single block space.
7. **Use Blueprints:** Use the blueprint tool to copy and place custom bit configurations instantly for complex builds.
8. **Reconstruct Blocks:** Craft partial bit blocks back to vanilla blocks at the crafting table to save resources.

---

## Crafting

<SectionSpacer 
  title="Block Deconstructor Crafting"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

**Block Deconstructor** recipe:
- **Oak Planks** arranged in a frame pattern
- **Stonecutter** in the center slots
- Crafted at a crafting table
- Produces **1 Block Deconstructor**

<SectionSpacer 
  title="Processing Blocks into Bits"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

**Standard vanilla blocks** cannot be crafted into bits directly in your inventory - they must be processed through the Block Deconstructor:
- **Interact** with the deconstructor while holding any vanilla block
- The workbench processes the block and drops **8 equivalent bits**
- Works with all 164 supported vanilla block variants

<SectionSpacer 
  title="Color Block Crafting"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

**Custom color blocks** can be crafted directly:
- **1 White Concrete** as the base
- **Various Dyes** (combinations depend on the desired color)
- Shapeless crafting at a crafting table
- Produces **8 blocks** per craft

<SectionSpacer 
  title="Sub-Unit Crafting"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

**Certain bits** function identically to their vanilla counterparts in standard recipes:
- Process micro-materials directly within the crafting grid
- Example: Convert log bits into plank bits
- Enables efficient resource management

---

## Bit Placement

<SectionSpacer 
  title="Micro-Voxel Building"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

Bits are placed just like standard blocks, but they align to a precise 2x2x2 grid within a single block space. The add-on dynamically handles block merging and updates collision boxes automatically as you build.

**Special Bit Properties:**
- **Magma Bits:** Deal damage if you stand on them (retain their heat)
- **Adaptive Light Blocks:** Dynamic lighting - the more light bits you pack into a single block space, the brighter the light level becomes
- **Strippable Wood:** All wood bit variants can be stripped using an axe, just like standard vanilla wood
- **Slippery Ice:** Ice bits retain their low-friction properties, making them just as slippery as regular ice blocks

<SectionSpacer 
  title="Blueprint Tool Usage"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

The **Blueprint** is a powerful utility tool designed to save you time:
- **Copy Configurations:** Use it to copy custom bit configurations
- **Instant Placement:** Place saved configurations instantly
- **No Manual Rebuilding:** Never manually rebuild the same intricate structures block by block again

![Blueprint item](/img/addons/bit-by-bit/blueprint.png)

<SectionSpacer 
  title="Guide Book Controls"
  type="plain"
  thickness={8}
  font="Minecraft Ten"
  color="linear-gradient(90deg, #3498db, #2ecc71)"
  textColor="linear-gradient(90deg, #3498db, #2ecc71)"
/>

**Guide Book Navigation:**
- **Interact:** Next page / Open Guide
- **Attack:** Close Guide
- **Sneak + Interact:** Previous page / Open Config (if book is closed)

![In-game guide UI](/img/addons/bit-by-bit/guide-ui.png)

---

## Requirements

<RequirementToggle
  title="Beta APIs / Experiments"
  description="No experimental toggles or Beta APIs required!"
  required={false}
/>

> ⚠️ **Compatibility Warning:** This addon adds many block permutations and is not recommended for use with other addons that add excessive blocks.

---

## Downloads

<DownloadButton
  title="Bit By Bit Add-on"
  description="Download the latest version for Minecraft Bedrock Edition."
  visibleButtons={[
    {
      label: "Download for 26.4x+",
      link: "https://github.com/MinecraftBedrockArabic/bit-by-bit/releases/download/Stable/bit.by.bit.mcaddon",
    },
  ]}
/>