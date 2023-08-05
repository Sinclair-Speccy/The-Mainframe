const updateLastUpdated = () => {
  const currentTime = new Date().toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", hour12: true });
  document.getElementById("lastUpdatedStats").textContent = `Statistics last updated: ${currentTime}`;
};

const showStats = () => {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("stats").classList.remove("hidden");
};

const updateLoadingProgress = (percentage) => {
  document.getElementById("loadingProgress").textContent = `Loading progress: ${percentage}%`;
};

const loadStars = async () => {
  const repoUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe";

  const repoResponse = await fetch(repoUrl);
  const repoData = await repoResponse.json();

  const stars = repoData.stargazers_count;
  document.getElementById("stars").textContent = stars;
};

const loadForks = async () => {
  const repoUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe";

  const repoResponse = await fetch(repoUrl);
  const repoData = await repoResponse.json();

  const forks = repoData.forks_count;
  document.getElementById("forks").textContent = forks;
};

const loadWatchers = async () => {
  const repoUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe";

  const repoResponse = await fetch(repoUrl);
  const repoData = await repoResponse.json();

  const watchers = repoData.subscribers_count;
  document.getElementById("watchers").textContent = watchers;
};

const loadRepoSize = async () => {
  const repoUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe";

  const repoResponse = await fetch(repoUrl);
  const repoData = await repoResponse.json();

  const repoSizeKB = repoData.size; // Size is returned in KB
  document.getElementById("repoSize").textContent = repoSizeKB;
};

const loadLastUpdated = async () => {
  const repoUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe";

  const repoResponse = await fetch(repoUrl);
  const repoData = await repoResponse.json();

  const utcUpdated = new Date(repoData.updated_at);
  const melbourneTime = new Date(utcUpdated.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
  const lastUpdated = melbourneTime.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", hour12: true });
  document.getElementById("lastUpdated").textContent = lastUpdated;
};

const loadDeployments = async () => {
  const deploymentsUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe/deployments";

  const deploymentsResponse = await fetch(deploymentsUrl);
  const deploymentsData = await deploymentsResponse.json();

  const deploymentsCount = deploymentsData.length;
  document.getElementById("deployments").textContent = deploymentsCount;
};

const loadLanguages = async () => {
  const languagesUrl = "https://api.github.com/repos/Sinclair-Speccy/The-Mainframe/languages";

  const languagesResponse = await fetch(languagesUrl);
  const languagesData = await languagesResponse.json();

  const totalSize = Object.values(languagesData).reduce((acc, val) => acc + val, 0);
  const languages = Object.keys(languagesData)
    .map(lang => `${lang}: ${(languagesData[lang] / totalSize * 100).toFixed(2)}%`)
    .join(', ');

  document.getElementById("languages").textContent = languages;
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

  await loadDeployments();
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

