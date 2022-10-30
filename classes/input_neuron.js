const Operations = Object.freeze({
    Add: Symbol(0),
    Subtract: Symbol(1),
    Multiply: Symbol(2),
    Divide: Symbol(3),
});

class InputNeuron {
    constructor(context) {
        this.context = context;
        this.position = {
            x: 100,
            y: 100,
        };
        this.sprite = "";
        this.value = 0;
        this.weight = 0;
        this.operation = Operations.Add;
    }

    draw() {
        this.context.fillRect(this.position.x, this.position.y, 100, 100);
    }

    update() {
        this.draw();
        this.position.y += 10;
    }
}

export default InputNeuron;