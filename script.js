// Replace 'username' and 'repository' with your GitHub username and repository name
const username = "Sinclair-Speccy";
const repository = "The-Mainframe";

// GitHub API endpoint for getting the latest commit
const apiUrl = `https://api.github.com/repos/${username}/${repository}/commits?per_page=1`;

// Function to format date nicely
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Fetch the latest commit from GitHub API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const lastCommitDate = data[0].commit.author.date;
    document.getElementById(
      "lastUpdated"
    ).textContent = `Last updated: ${formatDate(lastCommitDate)}`;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    document.getElementById("lastUpdated").textContent = "Error fetching data";
  });
