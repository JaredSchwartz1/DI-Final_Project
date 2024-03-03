class ScreenManager {
    constructor() {
        this.screens = {};
        this.currentScreen = null;
    }

    // Register a screen with a unique name
    registerScreen(name, screenInstance) {
        this.screens[name] = screenInstance;
    }

    // Switch to a registered screen by name
    switchScreen(name) {
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

// Example screen class

// Example usage:


// Register screens
const screen1 = new Screen("Screen 1");
const screen2 = new Screen("Screen 2");
manager.registerScreen("screen1", screen1);
manager.registerScreen("screen2", screen2);

// Switch between screens
manager.switchScreen("screen1"); // This will show Screen 1
manager.switchScreen("screen2"); // This will hide Screen 1 and show Screen 2