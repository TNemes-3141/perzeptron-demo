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
        this.font = "Abel";
    }

    getValue() {
        let result = 0;
        switch (this.operation) {
            case Operations.Add: result = this.value + this.weight;
                break;
            case Operations.Subtract: result = this.value - this.weight;
                break;
            case Operations.Multiply: result = this.value * this.weight;
                break;
            case Operations.Divide: result = this.value / this.weight;
                break;
            default: result = this.value * this.weight;
                break;
        }
        return result;
    }

    draw() {
        this.context.drawImage(this.sprite, this.position.x - this.offset.x, this.position.y - this.offset.y);
        let fontSize = 30;
        this.context.font = fontSize + "px " + this.font;
        this.context.textAlign = "center";
        this.context.fillStyle = "white";
        this.context.fillText(this.value, this.position.x, this.position.y + fontSize / 4);
    }

    update() {
        this.draw();
    }
}

export default InputNeuron;