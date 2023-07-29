document.addEventListener('DOMContentLoaded', function () {
    const currentUrlElement = document.getElementById('current-url');
    const crtEffect = document.querySelector('.crt-effect');

    function updateCurrentUrl() {
        currentUrlElement.textContent = window.location.href;
    }

    // Update current URL every 200 milliseconds
    setInterval(updateCurrentUrl, 200);

    // Update CRT flickering every 300 milliseconds
    setInterval(() => {
        crtEffect.classList.toggle('flicker-effect');
    }, 300);
});
