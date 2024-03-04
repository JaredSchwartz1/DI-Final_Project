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

homescreen.show()