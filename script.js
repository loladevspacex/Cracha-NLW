/* Pegando API do GitHub */
function getGitHubInfo() {
  const url = 'https://api.github.com/users/loladevspacex'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      bio.textContent = data.location
    })
}
getGitHubInfo()
