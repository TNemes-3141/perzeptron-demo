const Operations = Object.freeze({
    Add: Symbol(0),
    Subtract: Symbol(1),
    Multiply: Symbol(2),
    Divide: Symbol(3),
});

class InputNeuron {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        };
        this.sprite = "";
        this.value = 0;
        this.weight = 0;
        this.operation = Operations.Add;
    }

    draw() {
        context.ellipse(this.position.x, this.position.y, 100, 100);
    }
}