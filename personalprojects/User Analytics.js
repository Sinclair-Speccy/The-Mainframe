const showUserStats = () => {
  document.getElementById("loadingUser").textContent = "Loading user info, please wait...";
  document.getElementById("userStats").classList.add("hidden");
};

const hideLoadingMessage = () => {
  document.getElementById("loadingUser").classList.add("hidden");
};

const updateLoadingMessage = (message) => {
  document.getElementById("loadingUser").textContent = message;
};

const updateLoadingProgressUser = (percentage) => {
  document.getElementById("loadingProgressUser").textContent = `Loading progress: ${percentage}%`;
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchUserData = async () => {
  const userUrl = "https://api.github.com/users/Sinclair-Speccy";
  const userResponse = await fetch(userUrl);
  return await userResponse.json();
};

const loadUserContributionsLastYear = async () => {
  updateLoadingMessage("Loading user contributions last year...");
  const userData = await fetchUserData();

  const contributionsLastYear = userData.contributions;
  document.getElementById("contributionsLastYear").textContent = contributionsLastYear;

  updateLoadingProgressUser(20);
};

const loadUserContributionActivity = async () => {
  updateLoadingMessage("Loading user contribution activity...");
  const userData = await fetchUserData();

  const contributionActivity = userData.contribution_activity.last_year;
  const contributionActivityHTML = contributionActivity.map(entry => {
    return `<li>${entry.week}: ${entry.total} contributions</li>`;
  }).join("");

  document.getElementById("contributionActivity").innerHTML = `<ul>${contributionActivityHTML}</ul>`;

  updateLoadingProgressUser(40);
};

const loadUserMostUsedLanguages = async () => {
  updateLoadingMessage("Loading user most used languages...");
  const userData = await fetchUserData();
  const languagesUrl = userData.repos_url;
  const languagesResponse = await fetch(languagesUrl);
  const languagesData = await languagesResponse.json();

  const languages = {};

  // Loop through each repo to get language data
  for (const repo of languagesData) {
    const repoLanguagesUrl = repo.languages_url;
    const repoLanguagesResponse = await fetch(repoLanguagesUrl);
    const repoLanguagesData = await repoLanguagesResponse.json();

    for (const language in repoLanguagesData) {
      if (languages[language]) {
        languages[language] += repoLanguagesData[language];
      } else {
        languages[language] = repoLanguagesData[language];
      }
    }
  }

  const totalSize = Object.values(languages).reduce((acc, val) => acc + val, 0);
  const mostUsedLanguages = Object.keys(languages)
    .map(lang => `${lang}: ${(languages[lang] / totalSize * 100).toFixed(2)}%`)
    .join(', ');

  document.getElementById("mostUsedLanguages").textContent = mostUsedLanguages;

  updateLoadingProgressUser(60);
};

const loadUserTotalStars = async () => {
  updateLoadingMessage("Loading user total stars...");
  const userData = await fetchUserData();
  const totalStars = userData.starred;
  document.getElementById("totalStars").textContent = totalStars.length;

  updateLoadingProgressUser(70);
};

const loadUserTotalCommits = async () => {
  updateLoadingMessage("Loading user total commits...");
  const userData = await fetchUserData();
  const totalCommits = userData.total_commits.year;
  document.getElementById("totalCommits").textContent = totalCommits;

  updateLoadingProgressUser(80);
};

const loadUserTotalIssues = async () => {
  updateLoadingMessage("Loading user total issues...");
  const userData = await fetchUserData();
  const totalIssues = userData.total_issues.year;
  document.getElementById("totalIssues").textContent = totalIssues;

  updateLoadingProgressUser(85);
};

const loadUserContributedTo = async () => {
  updateLoadingMessage("Loading user contributed to...");
  const userData = await fetchUserData();
  const contributedTo = userData.contributed_to;
  document.getElementById("contributedTo").textContent = contributedTo.length;

  updateLoadingProgressUser(90);
};

const loadUserRepos = async () => {
  updateLoadingMessage("Loading user repositories...");
  const userData = await fetchUserData();
  const reposUrl = userData.repos_url;
  const reposResponse = await fetch(reposUrl);
  const reposData = await reposResponse.json();

  const reposList = reposData.map(repo => {
    const repoLink = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
    return `<li>${repoLink}</li>`;
  }).join("");

  document.getElementById("reposList").innerHTML = `<ul>${reposList}</ul>`;

  updateLoadingProgressUser(100);
  hideLoadingMessage();
  document.getElementById("userStats").classList.remove("hidden");
};

const loadStatistics = async () => {
  updateLoadingProgress(0);
  await loadStars();
  updateLoadingProgress(10);

  await loadForks();
  updateLoadingProgress(20);

  await loadWatchers();
  updateLoadingProgress(30);

  await loadRepoSize();
  updateLoadingProgress(40);

  await loadLastUpdated();
  updateLoadingProgress(50);

  await loadDeployments(); // Remove the unnecessary setTimeout here
  updateLoadingProgress(60);

  await loadLanguages();
  updateLoadingProgress(70);

  // Update the "Statistics last updated" section
  updateLastUpdated();

  // Show the stats section and hide the loading message
  showStats();
};

// Call loadStatistics to load and display the stats
loadStatistics();

// Set an interval to update the "Statistics last updated" section every 5 minutes
setInterval(updateLastUpdated, 5 * 60 * 1000); // 5 minutes in milliseconds

// Make the stats static.
document.querySelectorAll(".stats").forEach((el) => {
  el.classList.add("static");
});
