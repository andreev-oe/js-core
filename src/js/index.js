const DEBOUNCE_TIME = 500
const REPOS_COUNT = 5
const searchFieldElement = document.querySelector('.search-field')
const cardsContainerElement = document.querySelector('.cards-container')
const dropDownMenuElement = document.querySelector('.search-result')
const loadError = `Загрузка списка репозиториев не удалась, попробуйте обновить страницу или ввести запрос еще раз.`
const noReposError = `Нет репозиториев по указанному запросу. Поробуйте использовать другие ключевые слова.`
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
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${repoName}&per_page=${REPOS_COUNT}`)
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных, статус ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        return data.items
    } catch (error) {
        throw new Error(error)
    }
}

const showErrorMessage = (errorType) => {
    const errorMessageContainerElement = document.createElement('div');
    const errorMessageTextElement = document.createElement('p');
    switch (errorType) {
        case 'loadError':
            errorMessageTextElement.textContent = loadError;
            break
        case 'noReposError':
            errorMessageTextElement.textContent = noReposError;
            break
        default:
            errorMessageTextElement.textContent = loadError;
            break
    }
    errorMessageContainerElement.classList.add('load-error-message');
    errorMessageContainerElement.append(errorMessageTextElement);
    dropDownMenuElement.append(errorMessageContainerElement);
    dropDownMenuElement.classList.add('js-shown')
};

const createRepoCard = (evt) => {
    if (evt.target.dataset.repoId) {
        const datasetName = currentRepos.find((repo) => repo.id === Number(evt.target.dataset.repoId))
        let {name, owner: {login}, stargazers_count} = datasetName
        const repoCard = `
            <div class="repo-card">
                <div class="repo-card-close"></div>
                <p>Name: ${name}</p>
                <p>Owner: ${login}</p>
                <p>Stars: ${stargazers_count}</p>
            </div>
        `
        cardsContainerElement.insertAdjacentHTML('beforeend', repoCard)
        searchFieldElement.value = ''
        dropDownMenuElement.innerHTML = ''
        dropDownMenuElement.classList.remove('js-shown')
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
    dropDownMenuElement.classList.add('js-shown')
}

const showReposList = (reposList) => {
    dropDownMenuElement.innerHTML = ''
    if (reposList.length > 0) {
        reposList.forEach((repo) => {
            createSearchResultItem(repo)
        })
    } else {
        showErrorMessage('noReposError')
    }
}

const searchFieldHandler = (evt) => {
    if (evt.target.value.trim()) {
        getRepos(evt.target.value)
            .then((reposList) => {
                currentRepos = reposList
                showReposList(reposList)
            })
            .catch(() => {
                dropDownMenuElement.innerHTML = ''
                const errorMessageElement = document.querySelector('.load-error-message')
                if (!errorMessageElement) {
                    showErrorMessage('loadError')
                }
            })
    } else {
        dropDownMenuElement.innerHTML = ''
        dropDownMenuElement.classList.remove('js-shown')
    }
}

searchFieldElement.addEventListener('input', debounce(searchFieldHandler, DEBOUNCE_TIME))
dropDownMenuElement.addEventListener('click', createRepoCard)
cardsContainerElement.addEventListener('click', closeRepoCard)
