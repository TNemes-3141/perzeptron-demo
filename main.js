import InputNeuron from "./classes/input_neuron.js";

const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;

console.log(context);

const n1 = new InputNeuron(context);

export function main() {

    let instances = [n1]
    console.log(instances);
    return instances;
}

export function clear() {
    context.fillStyle = "rgb(1, 65, 91)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}