class PreviewWindow {
    constructor(context, {x, y, width, height, text, getBackground, foreground, getSelected}) {
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
        this.getSelected = getSelected;
        
        this.background = "rgb(73, 126, 118)";
        this.frameOpacity = 0;
    }

    draw() {
        this.context.fillStyle = this.background;
        this.context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
        this.context.lineWidth = 5;
        this.context.strokeStyle = "black";
        this.context.strokeRect(this.position.x, this.position.y, this.size.width, this.size.height);
        let fontSize = 40;
        this.context.font = fontSize + "px UnicaOne";
        this.context.textAlign = "center";
        this.context.fillStyle = this.foreground;
        this.context.fillText(this.text, this.position.x + this.size.width / 2, this.position.y + this.size.height / 2 + fontSize / 4);
        if (this.getSelected()) {
            if (1 - this.frameOpacity > 0.01) {
                this.frameOpacity = (this.frameOpacity + 1) / 2;
            }
        }
        else {
            if (this.frameOpacity > 0.01) {
                this.frameOpacity = this.frameOpacity / 2;
            }
        }
        this.context.strokeStyle = "rgba(255, 255, 255, " + this.frameOpacity + ")";
        this.context.strokeRect(this.position.x - 5, this.position.y - 5, this.size.width + 10, this.size.height + 10);
    }

    update() {
        this.background = this.getBackground();
        this.draw();
    }
}

export default PreviewWindow