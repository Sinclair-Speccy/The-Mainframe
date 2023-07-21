document.addEventListener('DOMContentLoaded', function () {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

  // Define the file paths for each season's CSS file
  const summerCSS = 'Summer.css';
  const autumnCSS = 'Autumn.css';
  const winterCSS = 'Winter.css';
  const springCSS = 'Spring.css';

  // Function to set the active CSS file based on the current month
  function setThemeCSS() {
    let themeCSS = '';
    if (currentMonth >= 12 || currentMonth <= 2) { // Summer theme: December, January, February
      themeCSS = summerCSS;
    } else if (currentMonth >= 3 && currentMonth <= 5) { // Autumn theme: March, April, May
      themeCSS = autumnCSS;
    } else if (currentMonth >= 6 && currentMonth <= 8) { // Winter theme: June, July, August
      themeCSS = winterCSS;
    } else if (currentMonth >= 9 && currentMonth <= 11) { // Spring theme: September, October, November
      themeCSS = springCSS;
    }

    // Set the active CSS file by updating the href attribute of the <link> element
    const themeLink = document.getElementById('theme-styles');
    themeLink.setAttribute('href', themeCSS);
  }

  // Call the function to set the initial theme on page load
  setThemeCSS();
});
