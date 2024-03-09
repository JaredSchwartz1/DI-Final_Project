import {
    manager,
    elementCreation,
    recipes
} from "../Dependencies.js"

export class browseScreen {
    constructor(name) {
        this.name = name;
        this.current=0;
    }
    static recipeSearch(event) {
        event.preventDefault()

    }
    static display(index, direction = null) {
        console.log(index)
        if (direction == 'forward' && (index + 12) >= recipes.length) {
            alert('there are no more recipes')
            return;
        }
        if (direction == 'back' && index == 0) {
            alert('there are no prior recipes')
            return;
        }
        if (direction == 'forward') {
            index += 12
        }
        if (direction == 'back') {
            index -= 12
        }
        for (let i=index; i < (index + 12); i++) {
            console.log(index)
            // if (index!=0){

            // }
            elementCreation('div', displayDiv, recipes[i].name, '', ['click', () => { }], ['style', 'background:grey;'])//height:200px;width:200px;
        }
        elementCreation('button', displayDiv, 'previous', null, ['click', () => { browseScreen.display(this.current,'back') }], ['type', 'button','style', 'grid-column:span 2;'])
        elementCreation('button', displayDiv, 'next', null, ['click', () => { browseScreen.display(this.current,'forward') }], ['type', 'button','style', 'grid-column:span 2;'])
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
        browseScreen.display(this.current)

     
       
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

