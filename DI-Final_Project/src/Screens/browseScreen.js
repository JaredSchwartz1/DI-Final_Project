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

        let displayDiv = elementCreation('div', screenDiv, null, 'displayDiv')
        let current = 0;
        display(current, recipes)
        function display(index, arr, direction = null) {
            if (direction == 'forward') {
                if ((index + 12) >= arr.length) {
                    alert('there are no more recipes')
                    return;
                }
                else if (Math.min((arr.length - index), (index + 12)) == (arr.length - index)) {
                    index += 12
                    for (let i = index; i < (arr.length); i++) {
                        document.getElementById(`${arr[((2 * index) - i - 1)].name}`).remove()
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    for (let i = (arr.length - index); i < 12; i++) {
                        document.getElementById(`${arr[(index - i - 1)].name}`).remove()
                        elementCreation('div', displayDiv, null, null, null, ['class', 'holder'])
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }

                else {
                    index += 12
                    for (let i = index; i < (index + 12); i++) {
                        document.getElementById(`${arr[i - 12].name}`).remove()
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
            }
            else if (direction == 'back') {
                if (index == 0) {
                    alert('there are no prior recipes')
                    return;
                }
                else if (index + 12 > arr.length) {
                    let divArr = document.getElementsByClassName('holder')
                    for (let i = 0; i < divArr.length; i) {
                        divArr[i].remove()
                    }
                    for (let i = index; i < (arr.length); i++) {
                        document.getElementById(`${arr[i].name}`).remove()
                    }
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])//height:200px;width:200px;
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
                else {
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        document.getElementById(`${arr[i + 12].name}`).remove()
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
            }
            else if (arr != recipes) {
                let recipesArr = document.getElementsByClassName('onScreen')
                for (let i = 0; i < recipesArr.length; i) {
                    recipesArr[i].remove()
                }
                document.getElementById('previous').remove()
                document.getElementById('next').remove()
                if (Math.min((arr.length - index), (index + 12)) == (arr.length - index)) {
                    index += 12
                    for (let i = 0; i < (arr.length); i++) {
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    for (let i = arr.length; i < 12; i++) {
                        elementCreation('div', displayDiv, null, null, null, ['class', 'holder'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
                else {
                    for (let i = index; i < (index + 12); i++) {
                        elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                    }
                    current = index;
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
            }
            else {
                for (let i = index; i < (index + 12); i++) {
                    elementCreation('div', displayDiv, arr[i].name, `${arr[i].name}`, ['click', () => { }], ['style', 'background:grey;', 'class', 'onScreen'])
                }
                current = index;
                elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, recipes, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, recipes, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
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
            else if (nameSearch.value.indexOf(' ') != -1) {
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
                if (filteredArray != []) {
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

