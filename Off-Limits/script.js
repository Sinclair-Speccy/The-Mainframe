document.addEventListener("DOMContentLoaded", function () {
    const agreementCheckbox = document.getElementById("agreement");
    const enterButton = document.getElementById("enterBtn");
    const consentKey = 'userConsent';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        redirectToBypassPage();
    }

    agreementCheckbox.addEventListener("change", function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener("click", function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            redirectToBypassPage();
        }
    });

    function redirectToBypassPage() {
        // Replace "your-page-url" with the URL of the page you want to redirect to
        window.location.href = "https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html";
    }
});
