const Operations = Object.freeze({
    Add: Symbol(0),
    Subtract: Symbol(1),
    Multiply: Symbol(2),
    Divide: Symbol(3),
});

class InputNeuron {
    constructor(context, {x, y, sprite, offsetX, offsetY, value, weight}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        };
        this.sprite = new Image();
        this.sprite.src = sprite;
        this.offset = {
            x: offsetX,
            y: offsetY,
        }
        this.value = value;
        this.weight = weight;
        this.operation = Operations.Add;
    }

    draw() {
        this.context.drawImage(this.sprite, this.position.x - this.offset.x, this.position.y - this.offset.y);
    }

    update() {
        this.draw();
    }
}

export default InputNeuron;