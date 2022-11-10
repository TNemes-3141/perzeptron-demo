class ResultArrow {
    constructor(context, {startX, startY, endX1, endY1, endX2, endY2, getResults}) {
        this.context = context;
        this.positionStart = {
            x: startX,
            y: startY,
        };
        this.destination1 = {
            x: endX1,
            y: endY1,
        };
        this.destination2 = {
            x: endX2,
            y: endY2,
        };
        this.currentDestination = {
            x: this.destination1.x,
            y: this.destination1.y,
        };
        this.getResults = getResults;
        
        this.headSize = 15;
    }

    draw() {
        this.context.strokeStyle = "white";
        this.context.fillStyle = "white";
        this.context.lineWidth = 7;
        this.context.beginPath();
        this.context.ellipse(this.positionStart.x, this.positionStart.y, 10, 10, 0, 0, 2*Math.PI);
        this.context.stroke();
        this.context.fill();
        this.context.beginPath();
        this.context.moveTo(this.positionStart.x, this.positionStart.y);
        this.context.lineTo(this.currentDestination.x, this.currentDestination.y);
        this.context.stroke();
        
        //30DEG-angle: PI / 6
        let v = {
            x: this.currentDestination.x - this.positionStart.x,
            y: this.currentDestination.y - this.positionStart.y,
        };
        let theta = Math.acos(v.y / Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)));
        let s1 = {
            x: Math.sin(theta + Math.PI / 6) * (-1) * this.headSize,
            y: Math.cos(theta + Math.PI / 6) * (-1) * this.headSize,
        }
        let s2 = {
            x: Math.sin(theta - Math.PI / 6) * (-1) * this.headSize,
            y: Math.cos(theta - Math.PI / 6) * (-1) * this.headSize,
        }
        let point1 = {
            x: this.currentDestination.x + s1.x,
            y: this.currentDestination.y + s1.y,
        }
        let point2 = {
            x: this.currentDestination.x + s2.x,
            y: this.currentDestination.y + s2.y,
        }

        this.context.beginPath();
        this.context.lineTo(point1.x, point1.y);
        this.context.lineTo(this.currentDestination.x, this.currentDestination.y);
        this.context.lineTo(point2.x, point2.y);
        this.context.lineTo(point1.x, point1.y);
        this.context.lineTo(this.currentDestination.x, this.currentDestination.y);
        this.context.stroke();
        this.context.fill();
    }

    update() {
        this.draw();
        if (this.getResults() == 0 && this.currentDestination.y - this.destination1.y > 0.01) {
            this.currentDestination.x = (this.destination1.x + this.currentDestination.x) / 2;
            this.currentDestination.y = (this.destination1.y + this.currentDestination.y) / 2;
        }
        if (this.getResults() == 1 && this.currentDestination.y - this.destination2.y < 0.01) {
            this.currentDestination.x = (this.destination2.x + this.currentDestination.x) / 2;
            this.currentDestination.y = (this.destination2.y + this.currentDestination.y) / 2;
        }
    }
}

export default ResultArrow;