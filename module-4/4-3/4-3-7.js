const DEBOUNCE_TIME = 500
const DROP_DOWN_REPOS_COUNT = 5
const searchFieldElement = document.querySelector('.search-field')
const cardsContainerElement = document.querySelector('.cards-container')
const dropDownMenuElement = document.querySelector('.search-result')
let currentRepos

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
        if (!data.items[i]) {
           break
        }
        firstRepos.push(data.items[i])
    }
    return firstRepos
}

const createRepoCard = (evt) => {
    const datasetName = currentRepos.find((repo) => repo.id === Number(evt.target.dataset.repoId))
    if (datasetName) {
        let {name, owner: {login}, stargazers_count} = datasetName
        const repoCard = document.createElement('div');
        const repoName = document.createElement('p');
        const repoOwner = document.createElement('p');
        const repoStars = document.createElement('p');
        const closeButtonElement = document.createElement('div')

        closeButtonElement.classList.add('repo-card-close')
        repoCard.classList.add('repo-card')

        repoName.textContent = `Name: ${name}`
        repoOwner.textContent = `Owner: ${login}`
        repoStars.textContent = `Stars: ${stargazers_count}`

        repoCard.append(closeButtonElement)
        repoCard.append(repoName, repoOwner, repoStars)
        cardsContainerElement.append(repoCard)
        searchFieldElement.value = ''
    }
}

const closeRepoCard = (evt) => {
    if (evt.target.classList.value === 'repo-card-close') {
        evt.target.parentElement.remove()
    }
}

const createSearchResultItem = (repo) => {
    const repoNameElement = document.createElement('li')
    repoNameElement.textContent = repo.name
    repoNameElement.classList.add('repo-name')
    repoNameElement.dataset.repoId = repo.id
    dropDownMenuElement.append(repoNameElement)
}

const showReposList = (reposList) => {
    dropDownMenuElement.innerHTML = ''
    reposList.forEach((repo) => {
        createSearchResultItem(repo)
})}

const searchFieldHandler = (evt) => {
    if (evt.target.value.trim()) {
        getRepos(evt.target.value)
            .then((reposList) => {
                currentRepos = reposList
                showReposList(reposList)
            })
    } else {
        dropDownMenuElement.innerHTML = ''
    }
}

searchFieldElement.addEventListener('input', debounce(searchFieldHandler, DEBOUNCE_TIME))
dropDownMenuElement.addEventListener('click', createRepoCard)
cardsContainerElement.addEventListener('click', closeRepoCard)
