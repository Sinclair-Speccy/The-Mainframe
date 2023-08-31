document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('decade-form');
  const decadeList = document.querySelector('.decade-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const decade = form.decade.value;
    displayDecadeInfo(decade);
  });

  function displayDecadeInfo(decade) {
    const decadeInfo = {
      '1940s': [
        '1940: Red Engineering is founded, laying the groundwork for future technological endeavors.',
        '1945: Red Engineering continues to grow, expanding its expertise in various engineering fields.',
        '1947: Red Engineering introduces Red Colossus, the first mainframe computer. It was used by businesses and government agencies for large-scale data processing and scientific computing.'
      ],
      '1950s': [
        '1953: Red Engineering launches its first generation of computing devices, marking the company\'s technological shift.',
        '1955: The release of Red Leviathan, a powerful mainframe computer used by businesses and government agencies around the world for scientific computing, engineering design, and other complex tasks.',
        '1958: The revolutionary Red Behemoth, a mainframe computer that used transistors instead of vacuum tubes, brought unprecedented speed and efficiency to computing.'
      ],
      '1960s': [
        '1964: Red Engineering introduces the concept of integrated circuits, revolutionizing computing capabilities.',
        '1965: The PentaVision display technology is developed, paving the way for advanced visual interfaces.',
        '1969: Navigating the transformative 1960s, Red Engineering adapts to technological and cultural changes, setting the stage for the next era.'
      ],
      '1970s': [
        '1971: The iconic Crimson Rebel single-board computer debuts, capturing the imagination of enthusiasts. It marked a leap forward in personal computing technology.',
        '1972: The ScarletFusion 2000 arrives, showcasing Red Engineering\'s commitment to cutting-edge computing technology. The ScarletFusion 2000 was a pioneering system that redefined computing power.',
        '1975: The Spectrum-10 microcomputer gains popularity for its compact design and versatility, making computing more accessible.',
        '1978: The PixelPlus graphics technology revolutionizes visual displays, enhancing the quality and realism of digital images.'
        // Add more decade information as needed
      ]
      // Add more decades as needed
    };

    const decadeEntries = decadeInfo[decade].map(entry => `<li>${entry}</li>`).join('');
    decadeList.innerHTML = decadeEntries;
  }
});
