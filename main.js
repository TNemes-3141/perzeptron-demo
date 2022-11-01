import MainNeuron from "./classes/main_neuron.js";
import InputNeuron from "./classes/input_neuron.js";
import BiasNeuron from "./classes/bias_neuron.js";
import OutputNeuron from "./classes/output_neuron.js";
import AxonLine from "./classes/axon_line.js";

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
    weight: 6.4,
});
const input2 = new InputNeuron(context, {
    x: 350,
    y: 360,
    sprite: "./assets/images/input_2.png",
    offsetX: 80,
    offsetY: 50,
    value: 0,
    weight: -5,
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
const biasNeuron = new BiasNeuron(context, {
    x: 620,
    y: 100,
    sprite: "./assets/images/bias_node.png",
    offsetX: 80,
    offsetY: 50,
    value: 1,
});
const outputNeuron = new OutputNeuron(context, {
    x: 950,
    y: 360,
    sprite: "./assets/images/output_node.png",
    offsetX: 50,
    offsetY: 50,
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
mainNeuron.addBias(biasNeuron);
mainNeuron.addOutput(outputNeuron);
const axon1 = new AxonLine(context, {
    startX: input1.position.x,
    startY: input1.position.y,
    endX: mainNeuron.position.x,
    endY: mainNeuron.position.y,
    getValue: () => input1.weight,
    range: [-10, 10],
    sectionLength: 20,
    gap: 10,
    animationSpeed: 1,
});
const axon2 = new AxonLine(context, {
    startX: input2.position.x,
    startY: input2.position.y,
    endX: mainNeuron.position.x,
    endY: mainNeuron.position.y,
    getValue: () => input2.weight,
    range: [-10, 10],
    sectionLength: 20,
    gap: 10,
    animationSpeed: 1,
});
const axon3 = new AxonLine(context, {
    startX: input3.position.x,
    startY: input3.position.y,
    endX: mainNeuron.position.x,
    endY: mainNeuron.position.y,
    getValue: () => input3.weight,
    range: [-10, 10],
    sectionLength: 20,
    gap: 10,
    animationSpeed: 1,
});

const RENDER_PRORITY = [axon1, axon2, axon3, input1, input2, input3, biasNeuron, mainNeuron, outputNeuron];

export function main() {
    context.font = "40px UnicaOne";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText("R", input1.position.x, input1.position.y - 60);
    context.fillText("G", input2.position.x, input2.position.y - 60);
    context.fillText("B", input3.position.x, input3.position.y - 60);

    let inputValues = [255, 165, 79];

    input1.value = inputValues[0];
    input2.value = inputValues[1];
    input3.value = inputValues[2];

    mainNeuron.getInputs();

    return RENDER_PRORITY;
}

export function clear() {
    context.fillStyle = "rgb(1, 65, 91)";
    context.fillRect(0, 0, canvas.width, canvas.height);
}