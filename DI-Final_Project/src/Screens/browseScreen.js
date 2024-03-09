import {
    manager,
    elementCreation,
    recipes
} from "../Dependencies.js"

export class browseScreen {
    constructor(name) {
        this.name = name;
    }
    static recipeSearch(event) {
        event.preventDefault()

    }

    show() {
        let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divBrowseScreen')

        let searchDiv = elementCreation('div', screenDiv, null, 'searchDiv')
        let searchForm = elementCreation('form', searchDiv, null, 'searchForm', ['submit', () => { browseScreen.recipeSearch(event) }])
        elementCreation('label', searchForm, 'Search for a recipe', null, null, ['for', 'nameSearch'])
        elementCreation('input', searchForm, null, 'nameSearch', null, ['type', 'text'])
        elementCreation('button', searchForm, 'Search')

        let displayDiv = elementCreation('div', screenDiv, null, 'displayDiv')
        let current = 0;
        display(current)
        function display(index, direction = null) {
            if (direction == 'forward') {
                if ((index + 12) >= recipes.length) {
                    alert('there are no more recipes')
                    return;
                }
                else if (Math.min((recipes.length - index), (index + 12)) == (recipes.length - index)) {
                    index += 12
                    for (let i = index; i < (recipes.length); i++) {
                        document.getElementById(`${recipes[((2 * index) - i - 1)].name}`).remove()
                        elementCreation('div', displayDiv, recipes[i].name, `${recipes[i].name}`, ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
                    }
                    for (let i = (recipes.length - index); i < 12; i++) {
                        document.getElementById(`${recipes[(index - i - 1)].name}`).remove()
                        elementCreation('div', displayDiv, null, null, null, ['class', 'holder'])
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }

                else {
                    index += 12
                    for (let i = index; i < (index + 12); i++) {
                        document.getElementById(`${recipes[i - 12].name}`).remove()
                        elementCreation('div', displayDiv, recipes[i].name, `${recipes[i].name}`, ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
            }
            else if (direction == 'back') {
                if (index == 0) {
                    alert('there are no prior recipes')
                    return;
                }
                else if(index+12>recipes.length){
                    let divArr=document.getElementsByClassName('holder')
                    for(let i=0;i<divArr.length;i){
                        divArr[i].remove()
                    }
                    for (let i = index; i < (recipes.length); i++) {
                        document.getElementById(`${recipes[i].name}`).remove()
                    }
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        elementCreation('div', displayDiv, recipes[i].name, `${recipes[i].name}`, ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
                else {
                    index -= 12
                    for (let i = index; i < (index + 12); i++) {
                        document.getElementById(`${recipes[i + 12].name}`).remove()
                        elementCreation('div', displayDiv, recipes[i].name, `${recipes[i].name}`, ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
                    }
                    current = index;
                    document.getElementById('previous').remove()
                    document.getElementById('next').remove()
                    elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                    elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                }
            }
            else {
                for (let i = index; i < (index + 12); i++) {
                    elementCreation('div', displayDiv, recipes[i].name, `${recipes[i].name}`, ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
                }
                current = index;
                elementCreation('button', displayDiv, 'previous', 'previous', ['click', () => { display(current, 'back') }], ['type', 'button', 'style', 'grid-column:span 2;'])
                elementCreation('button', displayDiv, 'next', 'next', ['click', () => { display(current, 'forward') }], ['type', 'button', 'style', 'grid-column:span 2;'])
            }
        }

        elementCreation('button', screenDiv, 'back', null, ['click', () => { manager.switchScreen('main') }], ['type', 'button'])
    }


    hide() {
        let divChildren = screenDiv.querySelectorAll('*');
        for (let i of divChildren) {
            i.remove()
        }
        screenDiv.classList.remove('divBrowseScreen')
    }
}

