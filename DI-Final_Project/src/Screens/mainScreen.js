import{ 
    manager,
    elementCreation
}from '../Dependencies.js';
export class mainScreen{
constructor(name){
    this.name=name
}
show(){
    let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divMainScreen')

let browseDiv=elementCreation('div',screenDiv,null,'browseDiv',['click', ()=>{manager.switchScreen('browse')}])
elementCreation('h1',browseDiv,'Browse Recipes')

let addRecipeDiv=elementCreation('div',screenDiv,null,'addRecipeDiv')
elementCreation('h1',addRecipeDiv,'Add a recipe')

let shoppingListDiv=elementCreation('div',screenDiv,null,'shoppingListDiv')
elementCreation('h1',shoppingListDiv,'Make a shopping list')

let favoritesDiv=elementCreation('div',screenDiv,null,'favoritesDiv')
elementCreation('h1',favoritesDiv,'Favorites')


elementCreation('button',screenDiv,'Log Out',null,['click', ()=>{manager.switchScreen('home')}],['type','button'])


    //     let divChildren=screenDiv.querySelectorAll('*');
    //     for(let i of divChildren){
    //     i.classList.add('mainScreenElement')
    // }
}


hide() {
    let divChildren=screenDiv.querySelectorAll('*');
    for(let i of divChildren){
        i.remove()
    }
    screenDiv.classList.remove('divMainScreen')
}

}