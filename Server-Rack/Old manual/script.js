document.addEventListener('DOMContentLoaded', function () {
    const minimizeButton = document.querySelector('.cde-minimize');
    const maximizeButton = document.querySelector('.cde-maximize');
    const closeButton = document.querySelector('.cde-close');

    let isMaximized = false;

    minimizeButton.addEventListener('click', () => {
        // Implement minimize behavior here (e.g., minimize the window).
        alert('Minimize button clicked');
    });

    maximizeButton.addEventListener('click', () => {
        if (isMaximized) {
            // Restore the window to its normal size.
            document.querySelector('.cde-window').style.width = '400px';
            isMaximized = false;
        } else {
            // Maximize the window to fill the screen.
            document.querySelector('.cde-window').style.width = '100%';
            isMaximized = true;
        }
    });

    closeButton.addEventListener('click', () => {
        // Implement close behavior here (e.g., close the window).
        alert('Close button clicked');
    });
});
