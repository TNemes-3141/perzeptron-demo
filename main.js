import MainNeuron from "./classes/main_neuron.js";
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
const mainNeuron = new MainNeuron(context, {
    x: 650,
    y: 360,
    sprite: "./assets/images/main_node.png",
    offsetX: 75,
    offsetY: 50,
})
mainNeuron.addInput(input1);
mainNeuron.addInput(input2);
mainNeuron.addInput(input3);

const RENDER_PRORITY = [input1, input2, input3, mainNeuron];

export function main() {
    context.font = "40px UnicaOne";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("R", input1.position.x, input1.position.y - 60);
    context.fillText("G", input2.position.x, input2.position.y - 60);
    context.fillText("B", input3.position.x, input3.position.y - 60);

    let inputValues = [255, 165, 79];

    input1.value = inputValues[0];
    input1.value = inputValues[1];
    input1.value = inputValues[2];

    mainNeuron.getInputs();

    return RENDER_PRORITY;
}

export function clear() {
    context.fillStyle = "rgb(1, 65, 91)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}