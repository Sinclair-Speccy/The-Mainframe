document.addEventListener('DOMContentLoaded', function () {
    const agreementCheckbox = document.getElementById('agreement');
    const enterButton = document.getElementById('enterBtn');
    const contentArea = document.getElementById('contentArea');
    const offLimitsBox = document.getElementById('offLimitsBox');
    const consentKey = 'userConsent';
    const previousPageKey = 'previousPage';

    // Check if the user has already given consent
    const userConsent = localStorage.getItem(consentKey);
    if (userConsent === 'true') {
        const previousPage = localStorage.getItem(previousPageKey);
        if (previousPage) {
            const confirmRedirect = confirm('Would you like to go back to the previous page?');
            if (confirmRedirect) {
                window.location.href = previousPage;
            } else {
                window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html';
            }
        } else {
            showBypassContent();
        }
    } else {
        showConsentBox();
    }

    agreementCheckbox.addEventListener('change', function () {
        enterButton.disabled = !agreementCheckbox.checked;
    });

    enterButton.addEventListener('click', function () {
        if (agreementCheckbox.checked) {
            localStorage.setItem(consentKey, 'true');
            const previousPage = localStorage.getItem(previousPageKey);
            if (previousPage) {
                const confirmRedirect = confirm('Would you like to go back to the previous page?');
                if (confirmRedirect) {
                    window.location.href = previousPage;
                } else {
                    window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/Bypass-The-Filter/index.html';
                }
            } else {
                showBypassContent();
            }
        }
    });

    function showConsentBox() {
        offLimitsBox.style.display = 'block';
        contentArea.style.display = 'none';
        enterButton.addEventListener('click', function () {
            localStorage.setItem(previousPageKey, window.location.href);
            window.location.href = 'https://sinclair-speccy.github.io/The-Mainframe/Off-Limits/index-special.html';
        });
    }

    function showBypassContent() {
        offLimitsBox.style.display = 'none';
        contentArea.style.display = 'block';
    }
});
