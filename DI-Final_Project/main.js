import {
    manager
} from './src/Dependencies.js';
import {
    homescreen
} from './src/Dependencies.js'
import {
    loginscreen
} from './src/Dependencies.js'
import {
    mainscreen
} from './src/Dependencies.js'
import {
    registerscreen
} from './src/Dependencies.js'

manager.registerScreen('home', homescreen)
manager.registerScreen('login', loginscreen)
manager.registerScreen('main', mainscreen)
manager.registerScreen('register', registerscreen)

manager.switchScreen('home')
//mainscreen.show()//this is supposed to be homescreen but since I am working on main screen i made it that. 