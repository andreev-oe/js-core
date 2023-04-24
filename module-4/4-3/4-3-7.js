const DEBOUNCE_TIME = 500
const DROP_DOWN_REPOS_COUNT = 5
const searchField = document.querySelector('.search-filed')

const debounce = (fn, debounceTime) => {
    let debounceTimer
    return function(...data) {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            fn.apply(this, data)
            clearTimeout(debounceTimer)
            debounceTimer = null
        }, debounceTime)
    }
};
const getRepos = async (repoName) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${repoName}`)
    const data = await response.json()
    const firstRepos = []
    for (let i = 0; i < DROP_DOWN_REPOS_COUNT; i++) {
        firstRepos.push(data.items[i])
    }
    return firstRepos
}

const showReposList = (reposList) => {
    reposList.forEach((repo) => {
        console.log(repo.name)
        console.log(repo.owner.login)
        console.log(repo.stargazers_count)
        console.log('====================')
    })
}



const searchFieldHandler = (evt) => {
    console.log(evt.target.value)
    getRepos(evt.target.value)
        .then((reposList) => showReposList(reposList))

}



searchField.addEventListener('input', debounce(searchFieldHandler, DEBOUNCE_TIME))
