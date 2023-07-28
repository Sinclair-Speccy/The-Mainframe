document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        showBypassContent();
    } else {
        showConsentBox();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            showBypassContent();
        }
    });

    function showConsentBox() {
        offLimitsBox.style.display = 'block';
        contentArea.style.display = 'none';
        enterButton.addEventListener('click', function () {
            window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html';
        });
    }

    function showBypassContent() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        showBypassContent();
    } else {
        showConsentBox();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            showBypassContent();
        }
    });

    function showConsentBox() {
        offLimitsBox.style.display = 'block';
        contentArea.style.display = 'none';
        enterButton.addEventListener('click', function () {
            window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html';
        });
    }

    function showBypassContent() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        showBypassContent();
    } else {
        showConsentBox();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            showBypassContent();
        }
    });

    function showConsentBox() {
        offLimitsBox.style.display = 'block';
        contentArea.style.display = 'none';
        enterButton.addEventListener('click', function () {
            window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html';
        });
    }

    function showBypassContent() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
    }
});
