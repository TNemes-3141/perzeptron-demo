class MainNeuron {
    constructor(context, {x, y, sprite, offsetX, offsetY}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        }
        this.sprite = new Image();
        this.sprite.src = sprite;
        this.offset = {
            x: offsetX,
            y: offsetY,
        }
        this.inputs = [];
        this.bias = null;
        this.output = null;
        this.value = 0;
    }

    addInput(input) {
        this.inputs.push(input);
    }

    addBias(bias) {
        this.bias = bias;
    }

    addOutput(output) {
        this.output = output;
    }

    getInputs() {
        let result = 0;
        this.inputs.forEach(inputNode => {
            result += inputNode.getValue();
        });
        this.value = result;
    }

    draw() {
        this.context.drawImage(this.sprite, this.position.x - this.offset.x, this.position.y - this.offset.y);
        let fontSize = 25;
        this.context.font = fontSize + "px Abel";
        this.context.textAlign = "center";
        this.context.fillStyle = "white";
        this.context.fillText(this.value, this.position.x - this.sprite.width / 4, this.position.y + fontSize / 4);
    }

    update() {
        this.draw();
    }
}

export default MainNeuron;