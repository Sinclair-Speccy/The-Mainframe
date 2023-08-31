// mainframe.js
document.addEventListener('DOMContentLoaded', function() {
  const textOverlay = document.getElementById('text-overlay');
  let userInputEnabled = false;

  const bootMessages = [
    'Initializing RedSYS Mainframe Core...',
    'Loading System Modules... OK',
    'Configuring Control Units... OK',
    'Verifying Memory Banks Integrity... OK',
    'Initializing I/O Devices... OK',
    'Configuring Peripheral Interfaces... OK',
    'Running System Diagnostics... OK',
    'Initiating System Self-Checks...',
  ];

  const selfCheckComponents = [
    'Central Processing Unit (CPU)',
    'Memory Banks',
    'Input/Output Controllers',
    'Storage Subsystems',
    'Network Interfaces',
    'System Clock',
  ];

  const diagnosticsMessages = [
    'A self-check failure indicates a potential hardware anomaly requiring meticulous analysis.',
    'Possible root causes encompass hardware degradation, signal integrity issues, or complex system interactions.',
    'Detailed diagnostic logs have been generated and should be meticulously reviewed by qualified technicians.',
    'Collaborate with technical experts to expedite the diagnosis process, referencing system documentation and past experiences.',
  ];

  function displayMessage(message) {
    textOverlay.innerHTML += `<p>${message}</p>`;
    textOverlay.scrollTop = textOverlay.scrollHeight;
  }

  function clearScreen() {
    textOverlay.innerHTML = '';
  }

  function handleUserInput(input) {
    displayMessage(`> ${input}`);
    enableUserInput();
  }

  function enableUserInput() {
    textOverlay.innerHTML += `<p>> <input id="user-input" type="text" autofocus></p>`;
    const userInput = document.getElementById('user-input');
    userInput.focus();

    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const input = userInput.value.trim();
        userInput.value = '';
        userInput.disabled = true;
        handleUserInput(input);
      }
    });
  }

  function simulateCheckWithFailure(component) {
    setTimeout(() => {
      displayMessage(`Performing self-checks... ${component}... OK`);

      if (component !== selfCheckComponents[selfCheckComponents.length - 1]) {
        simulateCheckWithFailure(selfCheckComponents[selfCheckComponents.indexOf(component) + 1]);
      } else {
        clearScreen();
        displayMessage('Welcome to RedSYS');
        userInputEnabled = true;
        enableUserInput();
      }
    }, 1000);
  }

  function bootOS() {
    let delay = 0;
    bootMessages.forEach((message) => {
      setTimeout(() => displayMessage(message), delay);
      delay += 1500;
    });

    setTimeout(() => {
      clearScreen();
      simulateCheckWithFailure(selfCheckComponents[0]);
    }, delay);
  }

  bootOS();
});
