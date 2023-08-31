document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('decade-form');
  const computerList = document.getElementById('computer-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const decade = form.decade.value;
    populateComputerList(decade);
  });

  function populateComputerList(decade) {
    const computerData = {
      '40s': [
        { year: '1947', model: 'Red Colossus' }
        // Add more computer models for the 1940s if needed
      ],
      '50s': [
        { year: '1950', model: 'Red Leviathan' },
        { year: '1955', model: 'Red Kraken' },
        { year: '1958', model: 'Red Behemoth' }
        // Add more computer models for the 1950s if needed
      ],
      '60s': [
        { year: '1964', model: 'Red Titan II' },
        { year: '1965', model: 'MegaVision 5000' },
        { year: '1969', model: 'NovaTech 100' }
        // Add more computer models for the 1960s if needed
      ],
      '70s': [
        { year: '1971', model: 'Crimson Rebel' },
        { year: '1972', model: 'ScarletFusion 2000' }
        // Add more computer models for the 1970s if needed
      ],
      '80s': [
        { year: '1980', model: 'RubyVision' },
        { year: '1983', model: 'Emerald 500' },
        { year: '1986', model: 'TopazPro 1000' }
        // Add more computer models for the 1980s if needed
      ],
      '90s': [
        { year: '1990', model: 'Sapphire 2000' },
        { year: '1994', model: 'Diamond Fusion' },
        { year: '1998', model: 'Opal Pro 3000' }
        // Add more computer models for the 1990s if needed
      }
      // Add more decades as needed
    };

    // Clear existing table rows
    computerList.innerHTML = `
      <tr>
        <th>Year</th>
        <th>Model</th>
      </tr>
    `;

    // Populate the computer list based on the selected decade
    computerData[decade].forEach(computer => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${computer.year}</td>
        <td>${computer.model}</td>
      `;
      computerList.appendChild(row);
    });
  }
});
