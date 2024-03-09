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
import { 
    browsescreen 
} from './src/Dependencies.js'

manager.registerScreen('home', homescreen)
manager.registerScreen('login', loginscreen)
manager.registerScreen('main', mainscreen)
manager.registerScreen('register', registerscreen)
manager.registerScreen('browse',browsescreen)

manager.switchScreen('browse')
//this is supposed to be homescreen but since I am working on another screen I made it that. 