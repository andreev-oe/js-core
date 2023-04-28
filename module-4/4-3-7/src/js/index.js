const DEBOUNCE_TIME = 500
const REPOS_COUNT = 5
const GIT_SEARCH_URL = new URL('https://api.github.com/search/repositories')
const CssClass = {
    LOAD_ERROR: 'load-error-message',
    SHOW_ELEMENT: 'js-shown',
    REPO_CARD: 'repo-card',
    REPO_NAME: 'search__repo-name',
    CLOSE_BTN: 'repo-card__close-btn'
}
const HtmlElement = {
    DIV: 'div',
    P: 'p',
    LI: 'li'
}
const ErrorMessage = {
    LOAD: 'Загрузка списка репозиториев не удалась, попробуйте обновить страницу или ввести запрос еще раз.',
    REPO_NOT_FOUND: 'Нет репозиториев по указанному запросу. Поробуйте использовать другие ключевые слова.'
}
const ErrorType = {
    LOAD: 'loadError',
    REPO_NOT_FOUND: 'noReposError'
}
const InsertPosition = {
    BEFORE_END: 'beforeend'
}
const searchFieldElement = document.querySelector('.search__field')
const cardsContainerElement = document.querySelector('.cards-container')
const dropDownMenuElement = document.querySelector('.search__result')
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

const getRepos = async (url, resultsCount, repoName) => {
    url.searchParams.set('q', repoName)
    url.searchParams.set('per_page', `${resultsCount}`)
    try {
        const response = await fetch(url)
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
    const errorMessageContainerElement = document.createElement(HtmlElement.DIV);
    const errorMessageTextElement = document.createElement(HtmlElement.P);
    switch (errorType) {
        case ErrorType.LOAD:
            errorMessageTextElement.textContent = ErrorMessage.LOAD;
            break
        case ErrorType.REPO_NOT_FOUND:
            errorMessageTextElement.textContent = ErrorMessage.REPO_NOT_FOUND;
            break
        default:
            errorMessageTextElement.textContent = ErrorMessage.LOAD;
            break
    }
    errorMessageContainerElement.classList.add(CssClass.LOAD_ERROR);
    errorMessageContainerElement.append(errorMessageTextElement);
    dropDownMenuElement.append(errorMessageContainerElement);
    dropDownMenuElement.classList.add(CssClass.SHOW_ELEMENT)
};

const createRepoCard = (evt) => {
    if (evt.target.dataset.repoId) {
        const datasetName = currentRepos.find((repo) => repo.id === Number(evt.target.dataset.repoId))
        let {name, owner: {login}, stargazers_count} = datasetName
        const repoCard = `
            <div class=${CssClass.REPO_CARD}>
                <div class=${CssClass.CLOSE_BTN}></div>
                <p>Name: ${name}</p>
                <p>Owner: ${login}</p>
                <p>Stars: ${stargazers_count}</p>
            </div>
        `
        cardsContainerElement.insertAdjacentHTML(InsertPosition.BEFORE_END, repoCard)
        searchFieldElement.value = ''
        dropDownMenuElement.innerHTML = ''
        dropDownMenuElement.classList.remove(CssClass.SHOW_ELEMENT)
    }
}

const closeRepoCard = (evt) => {
    if (evt.target.classList.value === CssClass.CLOSE_BTN) {
        evt.target.parentElement.remove()
    }
}

const createSearchResultItem = (repo) => {
    const repoNameElement = document.createElement(HtmlElement.LI)
    repoNameElement.textContent = repo.name
    repoNameElement.classList.add(CssClass.REPO_NAME)
    repoNameElement.dataset.repoId = repo.id
    dropDownMenuElement.append(repoNameElement)
    dropDownMenuElement.classList.add(CssClass.SHOW_ELEMENT)
}

const showReposList = (reposList) => {
    dropDownMenuElement.innerHTML = ''
    if (reposList.length) {
        reposList.forEach((repo) => {
            createSearchResultItem(repo)
        })
    } else {
        showErrorMessage(ErrorType.REPO_NOT_FOUND)
    }
}

const searchFieldHandler = (evt) => {
    if (evt.target.value.trim()) {
        getRepos(GIT_SEARCH_URL, REPOS_COUNT, evt.target.value)
            .then((reposList) => {
                currentRepos = reposList
                showReposList(reposList)
            })
            .catch(() => {
                dropDownMenuElement.innerHTML = ''
                const errorMessageElement = document.querySelector(CssClass.LOAD_ERROR)
                if (!errorMessageElement) {
                    showErrorMessage(ErrorType.LOAD)
                }
            })
    } else {
        dropDownMenuElement.innerHTML = ''
        dropDownMenuElement.classList.remove(CssClass.SHOW_ELEMENT)
    }
}

searchFieldElement.addEventListener('input', debounce(searchFieldHandler, DEBOUNCE_TIME))
dropDownMenuElement.addEventListener('click', createRepoCard)
cardsContainerElement.addEventListener('click', closeRepoCard)
