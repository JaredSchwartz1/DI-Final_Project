import{ 
    manager 
}from '../Dependencies.js';
export class homeScreen{
constructor(name){
   this.name=name
 
}

show() {
    let screenDiv=document.createElement('div')
    screenDiv.setAttribute('id','screenDiv')
    document.body.appendChild(screenDiv)
    let title=document.createElement('h1')
    let titleText=document.createTextNode('The Recipe Reserve')
    title.appendChild(titleText)
    screenDiv.appendChild(title)
    let subtitle=document.createElement('h2')
    let subtitleText=document.createTextNode('The home of your next delicious meal recipe.')
    subtitle.appendChild(subtitleText)
    screenDiv.appendChild(subtitle)
    let signUpButton=document.createElement('button')
    let signUpButtonText=document.createTextNode('Sign Up')
    signUpButton.appendChild(signUpButtonText)
    signUpButton.setAttribute('type','button')
    signUpButton.addEventListener('click',manager.switchScreen('register'))
    screenDiv.appendChild(signUpButton)
    let loginButton=document.createElement('button')
    let loginButtonText=document.createTextNode('Login')
    loginButton.appendChild(loginButtonText)
    loginButton.setAttribute('type','button')
    loginButton.addEventListener('click',manager.switchScreen('main'))//for now have this as main screen but remember to change it back to log in.
    screenDiv.appendChild(loginButton)
}


hide() {
    screenDiv.remove()
}

}