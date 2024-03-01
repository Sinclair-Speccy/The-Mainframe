var clickCounter = 0;
var secretClicks = 7; // Change this to the number of clicks you want
var secretPage = "https://sinclair-speccy.github.io/The-Mainframe/personalprojects/OS-TAN-FANON/Rendezvous/index.html"; // Your hidden page

document.getElementById("secretImage").addEventListener("click", function() {
    clickCounter++;
    if (clickCounter === secretClicks) {
        window.location.href = secretPage;
    }
});
