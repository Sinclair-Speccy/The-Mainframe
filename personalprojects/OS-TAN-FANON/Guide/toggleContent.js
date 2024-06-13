// toggleContent.js

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to button for Canon/Fanon content
    document.getElementById('toggleCanonFanonButton').addEventListener('click', function() {
        var canonFanonContent = document.getElementById("canonFanonContent");
        canonFanonContent.style.display = canonFanonContent.style.display === "none" ? "block" : "none";
    });

    // Attach event listener to button for Information content
    document.getElementById('toggleInfoButton').addEventListener('click', function() {
        var infoContent = document.getElementById("infoContent");
        infoContent.style.display = infoContent.style.display === "none" ? "block" : "none";
    });
});
