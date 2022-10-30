import InputNeuron from "./classes/input_neuron.js";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

console.log(context);

const input1 = new InputNeuron(context, {
    x: 350,
    y: 200,
    sprite: "./assets/images/input_1.png",
    offsetX: 80,
    offsetY: 50,
    value: 0,
    weight: 0,
});
const input2 = new InputNeuron(context, {
    x: 350,
    y: 360,
    sprite: "./assets/images/input_2.png",
    offsetX: 80,
    offsetY: 50,
    value: 0,
    weight: 0,
});
const input3 = new InputNeuron(context, {
    x: 350,
    y: 520,
    sprite: "./assets/images/input_3.png",
    offsetX: 80,
    offsetY: 50,
    value: 0,
    weight: 0,
});

const RENDER_PRORITY = [input1, input2, input3];

export function main() {

    return RENDER_PRORITY;
}

export function clear() {
    context.fillStyle = "rgb(1, 65, 91)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}