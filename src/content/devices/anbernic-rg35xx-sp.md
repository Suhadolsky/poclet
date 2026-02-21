---
name: "Anbernic RG35XX SP"
manufacturer: "Anbernic"
releaseDate: "2024-05-15"
price: "$60 - $75"
chipset: "Allwinner H700"
screen: "3.5\" IPS (640x480)"
battery: "3300 mAh"
os: "Linux"
rating: 9.2
pros:
  - "Clamshell design protects screen"
  - "Nostalgia overload (GBA SP style)"
  - "Powerful enough for Dreamcast/PSP"
  - "HDMI Out + Bluetooth"
cons:
  - "Buttons are clicky/loud"
  - "Gets warm near the hinge"
  - "Sleep mode drains battery on stock OS"
heroImage: "https://raw.githubusercontent.com/muos-dev/site/main/public/images/devices/rg35xxsp.png"
---

The **RG35XX SP** is the Game Boy Advance SP reborn. It snaps shut, protects its screen, and fits in any pocket.

## 💿 Firmware Guide

| OS Name | Status | Why use it? | Link |
| :--- | :--- | :--- | :--- |
| **MuOS** | 🏆 **Best** | Fast boot (10s), great PortMaster support, customizable. | [muOS.dev](https://muos.dev/) |
| **Knulli** | Visual | Beautiful EmulationStation interface, but slower boot. | [Knulli Wiki](https://knulli.org/) |
| **Stock Mod** | Good | Anbernic's OS but debloated. Good for HDMI out. | [cbepx-me](https://github.com/cbepx-me) |

## 🛠️ Troubleshooting (Fixes)

### 1. Battery Drain in Sleep
*   **Problem:** You close the lid, but the battery is dead the next day.
*   **Fix:** Stock OS "sleep" is fake (it just turns off the screen). **Use MuOS** for proper sleep or set the device to "Shutdown on Close".

### 2. Device Getting Hot
*   **Cause:** The H700 chip runs hot, and the hinge area is where the CPU lives.
*   **Fix:** Totally normal. Don't worry unless it shuts down. Removing the battery cover sticker can help slightly.

### 3. Loud Buttons
*   **Fix:** The microswitches are clicky by design. Some users apply electrical tape inside the buttons (requires disassembly) to dampen the sound.
