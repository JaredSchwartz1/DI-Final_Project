export class ScreenManager {
    constructor() {
        this.screens = {};
        this.currentScreen = null;
    }

    // Register a screen with a unique name
    registerScreen(name, screenInstance) {
        this.screens[name] = screenInstance;
    }

    // Switch to a registered screen by name
    switchScreen(name,params=null) {
        const newScreen = this.screens[name];
        if (newScreen) {
            if (this.currentScreen) {
                this.currentScreen.hide();
            }
            this.currentScreen = newScreen;
            this.currentScreen.show();
        } else {
            console.error(`Screen "${name}" is not registered.`);
        }
    }
}