const files = {
  'post1.html': 'blog/post1.html',
  'post2.html': 'blog/post2.html',
  'post3.html': 'blog/post3.html',
};

const commandInput = document.getElementById('command-input');

// Automatically refocus the input when the user clicks anywhere on the terminal
document.getElementById('terminal').addEventListener('click', () => {
  commandInput.focus();
});

// Ensure focus on page load
window.onload = () => {
  commandInput.focus();
};

const commandInput = document.getElementById('command-input');
const typeSound = document.getElementById('type-sound');
const executeSound = document.getElementById('execute-sound');

// Commands
const commands = {
  ls: () => Object.keys(files).join('\n'),
  open: (filename) => {
    if (files[filename]) {
      window.open(files[filename], '_blank');
      return `Opening ${filename}...`;
    }
    return `File not found: ${filename}`;
  },
  clear: () => {
    outputElement.innerHTML = '';
    return '';
  },
  help: () => `Available commands:
  ls              - List files
  open <filename> - Open a file in a new tab
  clear           - Clear the terminal
  help            - Show available commands`,
};

// Typing effect
async function typeText(element, text) {
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    typeSound.currentTime = 0;
    typeSound.play();
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

// Handle commands
async function handleCommand(input) {
  const [cmd, ...args] = input.trim().split(' ');
  const output = commands[cmd] ? commands[cmd](args.join(' ')) : `Command not found: ${cmd}`;
  const outputLine = document.createElement('div');
  await typeText(outputLine, `> ${input}\n${output}`);
  outputElement.appendChild(outputLine);
  commandInput.value = '';
  executeSound.play();
  outputElement.scrollTop = outputElement.scrollHeight;
}

// Event listener for Enter key
commandInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleCommand(commandInput.value);
  }
});

// Welcome message
(async () => {
  const welcomeMessage = `Welcome to My Retro Terminal Blog!
Type "help" for a list of commands.\n\n`;
  const line = document.createElement('div');
  await typeText(line, welcomeMessage);
  outputElement.appendChild(line);
})();
