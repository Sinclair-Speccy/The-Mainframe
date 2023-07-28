document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';
    const originalPageKey = 'originalPage';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        redirectToOriginalPage();
    } else {
        showConsentBox();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            if (localStorage.getItem(originalPageKey)) {
                redirectToOriginalPage();
            } else {
                showBypassContent();
            }
        }
    });

    function showConsentBox() {
        offLimitsBox.style.display = 'block';
        contentArea.style.display = 'none';
        // Store the original page URL in localStorage
        localStorage.setItem(originalPageKey, window.location.href);
        // Redirect to the consent page
        enterButton.addEventListener('click', function () {
            window.location.href = 'https://sinclair-speccy.github.io/The-Mainfame/Off-Limits/index-special.html';
        });
    }

    function showBypassContent() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
    }

    function redirectToOriginalPage() {
        const originalPageUrl = localStorage.getItem(originalPageKey);
        if (originalPageUrl) {
            localStorage.removeItem(originalPageKey);
            window.location.href = originalPageUrl;
        } else {
            showBypassContent();
        }
    }
});
