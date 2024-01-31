        const repoOwner = 'Sinclair-Speccy';
        const repoName = 'The-Mainframe';
        const folderPath = 'personalprojects/OS-TAN-FANON';
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                let updates = data.filter(commit => commit.commit.message.startsWith(folderPath))
                                  .slice(0, 5); // get the 5 most recent updates

let updatesHtml = updates.map(update => {
    let message = update.commit.message.replace(folderPath + '/', ''); // remove the folder path from the message
    return `
        <li>
            <a href="${update.html_url}" target="_blank">${message}</a>
            <span>Last updated on: ${new Date(update.commit.committer.date).toLocaleDateString()}</span>
        </li>
    `;
}).join('');


                document.getElementById('recent-updates').innerHTML = `<ul>${updatesHtml}</ul>`;
            });