import {
    manager,
    elementCreation,
} from "../Dependencies.js"
export class viewScreen {
    constructor(name, Recipe) {
        this.name = name;
        this.Recipe=Recipe;
    }
    show() {
        let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divViewScreen')

        let recipeDiv = elementCreation('div', screenDiv, null, 'RecipeDiv', null, ['color', 'lightgray'])
        elementCreation('h1', recipeDiv, this.Recipe.name)
        elementCreation('h2', recipeDiv, this.Recipe.author)
        function listCategories(arr) {
            for (let i of arr) {
                elementCreation('p', recipeDiv, `${arr[i][0]}: ${arr[i][1]}`)
            }
        }
        listCategories(this.Recipe.categories)
        elementCreation('p',recipeDiv,`Prep time: ${this.Recipe.prepTime} minutes`)
        elementCreation('p',recipeDiv,`Cook time: ${this.Recipe.cookTime} minutes`)
        function listIngredients(arr){
            for (let i of arr) {
                elementCreation('p', recipeDiv, `${arr[i][0]}: ${arr[i][1]}`)
            } 
        }
        listIngredients(this.Recipe.ingredients)
        function listSteps(arr){
            for (let i of arr) {
                elementCreation('p', recipeDiv, `${arr[i][0]}: ${arr[i][1]}`)
            } 
        }
        listSteps(this.Recipe.steps)

        elementCreation('button',screenDiv,'back',null,['click',()=>{manager.switchScreen('browse')}])
    }


    hide() {
        let divChildren = screenDiv.querySelectorAll('*');
        for (let i of divChildren) {
            i.remove()
        }
        screenDiv.classList.remove('divBrowseScreen')
    }

}