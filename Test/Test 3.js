document.addEventListener("DOMContentLoaded", async function () {
  const output = document.querySelector(".output");

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function clearOutput() {
    output.textContent = "";
  }

  async function typeText(text) {
    for (let i = 0; i < text.length; i++) {
      output.textContent += text[i];
      await sleep(20); // Delay between characters
    }
  }

  async function runBios() {
    await typeText("DIGI-3 BIOS Ver 3.5D\n");
    await typeText("Copyright (C) 1977 Red MicroSystems Ltd.\n");
    await typeText("Main Processor: TRI ADVANCED 1MHz\n\n");

    await sleep(1000); // Faster wait for 1 second

    const memTestPromise = new Promise(async resolve => {
      await typeText("MEMORY test ");
      const memoryTestHz = 1000000;
      for (let i = 0; i <= memoryTestHz; i++) {
        if (i % 5000 === 0) {
          output.textContent = `DIGI-3 BIOS Ver 3.5D\nCopyright (C) 1977 Red MicroSystems Ltd.\nMain Processor: TRI ADVANCED 1MHz\n\nMEMORY test ${i} Hz`;
          await sleep(10); // Faster delay for each update
        }
      }
      resolve();
    });

    await memTestPromise;

    await sleep(15000); // Faster wait for 15 seconds

    await typeText("\nHARD DISK SPACE: ");
    const hardDiskTestKb = 250000;
    for (let i = 0; i <= hardDiskTestKb; i++) {
      if (i % 1000 === 0) {
        output.textContent = `DIGI-3 BIOS Ver 3.5D\nCopyright (C) 1977 Red MicroSystems Ltd.\nMain Processor: TRI ADVANCED 1MHz\n\nMEMORY test 1000000 Hz\n\nHARD DISK SPACE: ${i} kB`;
        await sleep(10); // Faster delay for each update
      }
    }

    await sleep(15000); // Faster wait for 15 seconds

    await typeText("\n\nVoyagetronics Plug and Play BIOS Extension 3.0A\n");
    await typeText("Copyright (C) 1970, Voyagetronics, Inc.\n");

    await sleep(30000); // Wait for 30 seconds

    await clearOutput();

    // Display System Configuration
    await typeText("[System Configuration]\n");
    await typeText("*******************************************************\n");
    await typeText("| Main Processor : TRI ADVANCED 1MHz   | Base Memory Size: 4 KB |\n");
    await typeText("| Numeric Processor: Absent            | Ext. Memory Size: 8 KB |\n");
    await typeText("| Floppy Drive A: 5.25in                 | Master Disk 1: Present |\n");
    await typeText("| Floppy Drive B: None                 | Master Disk 2: Absent |\n");
    await typeText("| Display Type : Amber CRT        | Serial Port(s): None |\n");
    await typeText("| ROM BIOS Date: 04/25/77              | Parallel Port(s): None |\n");
    await typeText("*******************************************************\n");

    await sleep(30000); // Wait for 30 seconds

    await typeText("\nAtlantis S-100 Bus Chrysoprase video card detected.\n");
    await typeText("Sound card not detected. Using onboard Seta sound chip.\n");
    await typeText("RedNet Network card not detected.\n");
    await typeText("Keyboard and mouse detected.\n");
  }

  runBios();
});
