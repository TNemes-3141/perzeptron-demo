import { rectContainsPoint } from "../shared/rect_contains_point.js";

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

        this.hover = false;
        this.color = "rgb(" + this.data[0] + ", " + this.data[1] + ", " + this.data[2] + ")";
    }

    onMouseMove(mousePos) {
        this.hover = rectContainsPoint(this.position.x, this.position.y, this.size.width, this.size.height, mousePos);
    }

    draw() {
        this.color = "rgb(" + this.data[0] + ", " + this.data[1] + ", " + this.data[2] + ")";
        this.context.fillStyle = this.color
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.lineWidth = 5;
        this.context.strokeStyle = "white";
        this.context.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.strokeStyle = this.hover ? "gray" : "black";
        this.context.beginPath();
        this.context.roundRect(this.position.x - 5, this.position.y - 5, this.size.width + 10, this.size.height + 10, 5);
        this.context.stroke();
        if (this.hover) {
            this.context.font = "25px UnicaOne";
            this.context.textAlign = "center";
            this.context.fillStyle = this.color;
            this.context.fillText(this.title, 140, 580);
            this.context.fillStyle = "white"
            this.context.fillText(this.data[0] + ", " + this.data[1] + ", " + this.data[2], 140, 610);
        }
    }

    update() {
        this.draw();
    }
}

export default InputItem;