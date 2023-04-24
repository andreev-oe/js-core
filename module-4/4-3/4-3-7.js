const DEBOUNCE_TIME = 500
const DROP_DOWN_REPOS_COUNT = 5
const searchFieldElement = document.querySelector('.search-field')
const cardsContainerElement = document.querySelector('.cards-container')
const dropDownMenuElement = document.querySelector('.drop-down-menu')

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
    const datasetName = iop.filter((repo) => repo.name === evt.target.dataset.repoName)
    console.log(datasetName)
    if (datasetName) {
        let {name, owner: {login}, stargazersCount} = datasetName[0]
        const repoCard = document.createElement('div');
        const repoName = document.createElement('p');
        const repoOwner = document.createElement('p');
        const repoStars = document.createElement('p');

        repoName.textContent = `Name: ${name}`
        repoOwner.textContent = `Name: ${login}`
        repoStars.textContent = `Name: ${stargazersCount}`

        repoCard.append(repoName, repoOwner, repoStars)
        cardsContainerElement.append(repoCard)
    }
}

const createDropDownMenuItem = (repo) => {
    const repoNameElement = document.createElement('li')
    repoNameElement.textContent = repo.name
    repoNameElement.classList.add('repo-name')
    repoNameElement.dataset.repoName = repo.name
    dropDownMenuElement.append(repoNameElement)
}

const showReposList = (reposList) => {
    dropDownMenuElement.innerHTML = ""
    reposList.forEach((repo) => {
        createDropDownMenuItem(repo)
})}

const searchFieldHandler = (evt) => {
    if (evt.target.value.trim()) {
        getRepos(evt.target.value)
            .then((reposList) => showReposList(reposList))
    } else {
        dropDownMenuElement.innerHTML = ""
    }
}

searchFieldElement.addEventListener('input', debounce(searchFieldHandler, DEBOUNCE_TIME))
dropDownMenuElement.addEventListener('click', createRepoCard)

const iop = [{
    name: 'NAME1',
    owner: {
        login: 'LOGIN1'
    },
    stargazersCount: 123
}, {
    name: 'NAME2',
    owner: {
        login: 'LOGIN2'
    },
    stargazersCount: 123
}, {
    name: 'NAME3',
    owner: {
        login: 'LOGIN3'
    },
    stargazersCount: 123
}]

showReposList(iop)
