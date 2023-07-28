document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        redirectToBypassPage();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        localStorage.setItem(consentKey, 'true');
        redirectToBypassPage();
    });

    function redirectToBypassPage() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'Bypass-The-Filter/index.html';
        }, 1000); // Redirect to the new page after 1 second delay
    }
});
