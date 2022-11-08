class PreviewWindow {
    constructor(context, {x, y, width, height, text, getBackground, foreground}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        };
        this.size = {
            width: width,
            height: height,
        }
        this.text = text;
        this.getBackground = getBackground;
        this.foreground = foreground;
        
        this.background = "rgb(73, 126, 118)";
    }

    draw() {
        this.context.fillStyle = this.background;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.lineWidth = 5;
        this.context.strokeStyle = "black";
        this.context.beginPath();
        this.context.roundRect(this.position.x, this.position.y, this.size.width, this.size.height, 5);
        this.context.stroke();
        let fontSize = 40;
        this.context.font = fontSize + "px UnicaOne";
        this.context.textAlign = "center";
        this.context.fillStyle = this.foreground;
        this.context.fillText(this.text, this.position.x + this.size.width / 2, this.position.y + this.size.height / 2 + fontSize / 4);
    }

    update() {
        this.background = this.getBackground();
        this.draw();
    }
}

export default PreviewWindow