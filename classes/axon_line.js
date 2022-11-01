const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class AxonLine {
    constructor(context, {startX, startY, endX, endY, getValue, range, sectionLength, gap, animationSpeed}) {
        this.context = context;
        this.positionStart = {
            x: startX,
            y: startY,
        }
        this.positionEnd = {
            x: endX,
            y: endY,
        }
        this.getValue = getValue;
        this.range = range;
        this.value = (range[0] + range[1]) / 2;
        this.sectionLength = sectionLength;
        this.gap = gap;
        this.animationSpeed = animationSpeed;
        this.animationOffset = 0;
        this.font = "Abel";
    }

    draw() {
        let v = {
            x: this.positionEnd.x - this.positionStart.x,
            y: this.positionEnd.y - this.positionStart.y,
        };
        let length = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
        let division = Math.floor(length / (this.sectionLength + this.gap));
        let lambda = (length - (division - 1) * this.gap) / (division * length);
        let gapLambda = Math.sqrt(Math.pow(this.gap, 2) / (Math.pow(v.x, 2) + Math.pow(v.y, 2)));

        this.context.beginPath();
        for (let i = 0; i < division; i++) {
            let start = {
                x: this.positionStart.x + (i + this.animationOffset) * (lambda + gapLambda) * v.x,
                y: this.positionStart.y + (i + this.animationOffset) * (lambda + gapLambda) * v.y,
            };
            let end = {
                x: start.x + lambda * v.x,
                y: start.y + lambda * v.y,
            };

            if (start.x < end.x) {
                this.context.moveTo(start.x, start.y);
                this.context.lineTo(end.x, end.y);
            }
        }
        this.context.stroke();
    }

    update() {
        this.value = this.getValue()
        this.context.lineWidth = 1 + 14 * ((this.value - this.range[0]) / (this.range[1] - this.range[0]));
        this.context.strokeStyle = "rgba(255, 255, 255, " + ((this.value - this.range[0]) / (this.range[1] - this.range[0])) + ")";
        this.draw()
        this.animationOffset += 1/60 * this.animationSpeed;
        if (this.animationOffset > 1) {
            this.animationOffset = 0;
        }
    }
}

export default AxonLine;