"use strict";
(() => {
    const hero = "Iron Man";
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return "Bat Signal Activated!";
    };
    console.log(typeof activateBatSignal);
    const heroName = returnName();
})();
