import{ 
    manager,
    elementCreation
}from '../Dependencies.js';
export class mainScreen{
constructor(name){
    this.name=name
}
show(){
    console.log('yay')
    let screenDiv = document.getElementById('screenDiv')
        screenDiv.classList.add('divMainScreen')
elementCreation('div',screenDiv,'browseDiv')
elementCreation('div',screenDiv,'addRecipe')



// let div=document.createElement('div')
// let div=document.createElement('div')
// let div=document.createElement('div')
// let div=document.createElement('div')
// let div=document.createElement('div')

elementCreation('button',screenDiv,null,'Log Out')
// let logOutButton=document.createElement('button')
// let logOutButtonText=document.createTextNode('Log Out')
// logOutButton.appendChild(logOutButtonText)
// screenDiv.appendChild(logOutButton)

        let divChildren=screenDiv.querySelectorAll('*');
        for(let i of divChildren){
        i.classList.add('mainScreenElement')
    }
}


hide() {
    for(let i of document.getElementsByClassName('mainScreenElement')){
        console.log(document.getElementsByClassName('mainScreenElement'))
        i.remove()
    }
    screenDiv.classList.remove('divMainScreen')
}

}