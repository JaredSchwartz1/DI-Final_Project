import {
    manager,
    elementCreation,
    recipes
} from "../Dependencies.js"

export class browseScreen {
    constructor(name) {
        this.name = name;
    }
    show() {
        let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divBrowseScreen')

        let searchDiv = elementCreation('div', screenDiv, null, 'searchDiv')
        let searchForm = elementCreation('form', searchDiv, null, 'searchForm', ['submit', () => { recipeSearch(event) }])
        elementCreation('label', searchForm, 'Search for a recipe', null, null, ['for', 'nameSearch'])
        elementCreation('input', searchForm, null, 'nameSearch', null, ['type', 'text'])
        elementCreation('button', searchForm, 'Search')
        elementCreation('button',searchDiv,'reset',null,['click', () => {display(current,recipes)}],['type', 'button'])
        elementCreation('button',searchDiv,'Advanced Search',null,['click', () => {}],['type', 'button'])//I make the top section which has the buttons and the form.

        let displayDiv = elementCreation('div', screenDiv, null, 'displayDiv')//this guy holds the grid of objects.
        let current = 0;
        display(current, recipes)
        function display(index, arr, direction = null) {
            if (direction == 'forward') {
                if ((index + 12) >= arr.length) {
                    alert('there are no more recipes')
                    return;
                }
                else if (Math.min((arr.length - index), (index + 12)) == (arr.length - index)) {
                    let recipesArr = document.getElementsByClassName('onScreen')
                    for (let i = 0; i < recipesArr.length; i) {
                        recipesArr[i].remove()
                    }
                    index += 12
                    for (let i = index; i < (arr.length); i++) {
                        const Recipe=arr[i]
                    elementCreation('div', displayDiv, Recipe.name, `${Recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    for (let i = (arr.length - index); i < 12; i++) {
                        elementCreation('div', displayDiv, null, null, null, ['class', 'holder','class','onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                }

                else {
                    let recipesArr = document.getElementsByClassName('onScreen')
                    for (let i = 0; i < recipesArr.length; i) {
                        recipesArr[i].remove()
                    }
                    index += 12
                    for (let i = index; i < (index + 12); i++) {
                        const recipe=arr[i]
                    elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;','class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;','class', 'onScreen'])
                }
            }
            else if (direction == 'back') {
                if (index == 0) {
                    alert('there are no prior recipes')
                    return;
                }
                else if (index + 12 > arr.length) {
                    let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        const recipe=arr[i]
                        elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                }
                else {
                    let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        const recipe=arr[i]
                        elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                }
            }
            else if (arr != recipes) {
                let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                if (Math.min((arr.length - index), (index + 12)) == (arr.length - index)) {
                    index += 12
                    for (let i = 0; i < (arr.length); i++) {
                        const recipe=arr[i]
                        elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    for (let i = arr.length; i < 12; i++) {
                        elementCreation('div', displayDiv, null, null, null, ['class', 'holder','class','onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                }
                else {
                    let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                    for (let i = index; i < (index + 12); i++) {
                        const recipe=arr[i]
                        elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                }
            }
            else {
                let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                for (let i = index; i < (index + 12); i++) {
                    const recipe=arr[i]
                    elementCreation('div', displayDiv, recipe.name, `${recipe.name}`, ['click', () => {manager.switchScreen('view',recipe)}], ['style', 'background:grey;', 'class', 'onScreen'])
                }
                current = index;
                elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
                elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;', 'class', 'onScreen'])
            }
        }
        elementCreation('button', screenDiv, 'back', null, ['click', () => { manager.switchScreen('main') }], ['type', 'button'])
        function recipeSearch(event) {
            event.preventDefault()
            let nameSearch = document.getElementById('nameSearch')
            if (nameSearch.value == '') {
                alert('Missing search. Enter words to find recipes')
                return;
            }
            else if (nameSearch.value.includes(' ') == true) {
                alert('Can only search using a single word.')
            }
            else {
                let searchWord = nameSearch.value
                let filteredArray = []
                function filteredArrayMaker(filterWord, arr) {
                    let wordSearchFiltering = (value) => {
                        return value.name.split(' ').includes(filterWord) == true;
                    }
                    filteredArray = arr.filter(wordSearchFiltering)
                }
                filteredArrayMaker(searchWord, recipes)
                if (filteredArray.length!==0) {
                    display(current, filteredArray)
                }
                else {
                    alert('no recipes with that word')
                }
            }
        }
    }


    hide() {
        let divChildren = screenDiv.querySelectorAll('*');
        for (let i of divChildren) {
            i.remove()
        }
        screenDiv.classList.remove('divBrowseScreen')
    }
}

