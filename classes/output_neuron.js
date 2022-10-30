class OutputNeuron {
    constructor(context, {x, y, sprite, offsetX, offsetY}) {
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
        this.value = 0;
        this.font = "Abel";
    }

    getValue() {
        return this.value;
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

export default OutputNeuron;