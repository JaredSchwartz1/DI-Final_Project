import {
    manager,
    elementCreation
} from '../Dependencies.js';
export class homeScreen {
    constructor(name) {
        this.name = name

    }

    show() {
        let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divHomeScreen')

        elementCreation('h1',screenDiv,'The Recipe Reserve')
        
        elementCreation('h2',screenDiv,'The home of your next delicious meal')

        elementCreation('button',screenDiv,'Sign Up','register',['click', ()=>{manager.switchScreen('register')}],['type','button'])

        elementCreation('button',screenDiv,'Login','login',['click', ()=>{manager.switchScreen('main')}],['type','button'])//for now have this as main screen but remember to change it back to log in.

         //     let divChildren=screenDiv.querySelectorAll('*');
    //     for(let i of divChildren){
    //     i.classList.add('homeScreenElement')
    // }
}

hide() {
    let divChildren=screenDiv.querySelectorAll('*');
    for(let i of divChildren){
        i.remove()
    }
    screenDiv.classList.remove('divHomeScreen')
}

}