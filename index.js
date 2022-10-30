// Entry-point for HTML5 canvas application
// (c) Tamas Nemes, 2022
// DO NOT TOUCH THIS FILE!

import { main, clear } from "./main.js";

// Update instances
function update() {
    let instances = main(); 
    instances.forEach(instance => {
        if (typeof(instance.update) == "function")
        {
            instance.update();
        }
    });
}

// Main loop
function myApp () {
    clear();
    try {
        update();
    }
    catch (e) {
        throw e;
    }
    requestAnimationFrame(myApp);
}

// Run app
myApp();