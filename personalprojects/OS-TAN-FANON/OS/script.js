document.addEventListener("DOMContentLoaded", function () {
    var secretPage = "https://sinclair-speccy.github.io/The-Mainframe/personalprojects/OS-TAN-FANON/Rendezvous/index.html";
    var code = ['O', 'S', '-', 't', 'a', 'n', ' ', 'R', 'e', 'n', 'd', 'e', 'z', 'v', 'o', 'u', 's'];
    var index = 0;

    document.addEventListener("keydown", function (event) {
        event.preventDefault(); // Prevent default actions if needed
        
        // Convert both the input key and code character to lower case for case-insensitive comparison
        var inputChar = event.key.toLowerCase();
        var expectedChar = code[index].toLowerCase();

        if (inputChar === expectedChar) {
            index++;
            if (index === code.length) {
                window.location.href = secretPage;
            }
        } else {
            index = 0; // Reset index if the character does not match
        }
    });
});
