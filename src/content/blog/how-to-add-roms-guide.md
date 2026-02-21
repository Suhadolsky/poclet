---
title: 'Guide: How to Add Games (ROMs) and BIOS to Miyoo Mini Plus'
description: 'Step-by-step guide to organizing your SD card for OnionOS. Where to put GBA, PS1, and BIOS files.'
pubDate: 'Feb 25 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

So you bought a Miyoo Mini, installed OnionOS, and now you have a blank screen.
Don't panic. You just need to put your game files in the right place.

## Step 1: Access the SD Card 💾
Pop the MicroSD card out of your Miyoo and plug it into your PC/Mac using a card reader.
You will see a folder structure created by OnionOS.

## Step 2: Where to put Games (ROMs) 📂
Go to the `Roms` folder. You will see subfolders for each system.
*   **Game Boy Advance:** Put `.gba` files in `Roms/GBA`
*   **PlayStation 1:** Put `.chd` or `.pbp` files in `Roms/PS`
*   **SNES:** Put `.sfc` or `.zip` files in `Roms/SFC`

> **Tip:** Do not rename the folders! OnionOS looks for these specific names.

## Step 3: The BIOS Files (Critical!) 🧬
If your PS1 or GBA games show a black screen and quit, you are missing BIOS files.
Go to the `BIOS` folder (in the root of the SD card).
Paste your bios files here.
*   **PS1:** `scph1001.bin`
*   **GBA:** `gba_bios.bin`

## Step 4: Refresh Roms 🔄
1.  Eject the card and put it back in the Miyoo.
2.  Turn it on.
3.  Press the **Select** button on the main menu.
4.  Choose **"Refresh all Roms"**.

Done! Your games should now appear with their box art (if you scraped them).
