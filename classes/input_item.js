class InputItem {
    constructor(context, {x, y, width, height, data, label, title}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        };
        this.size = {
            width: width,
            height: height,
        };
        this.data = data;
        this.label = label;
        this.title = title;
    }

    draw() {
        this.context.fillStyle = "rgb(" + this.data[0] + ", " + this.data[1] + ", " + this.data[2] + ")";
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
    }

    update() {
        this.draw();
    }
}

export default InputItem;