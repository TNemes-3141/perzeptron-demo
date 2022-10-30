import InputNeuron from "./classes/input_neuron.js";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = 720;

console.log(context);

const n1 = new InputNeuron(context);

function main() {
    n1.update();
}

function myApp () {
    requestAnimationFrame(myApp);
    context.clearRect(0, 0, canvas.width, canvas.height);
    main();
}

myApp();