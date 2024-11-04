import InputItem from "./input_item.js";
import { rectContainsPoint } from "../shared/rect_contains_point.js";

class InputGrid {
    constructor(context, {x, y, width, columns, childAspectRatio, gap}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        };
        this.width = width;
        this.height = 0;
        this.columns = columns;
        this.rows = 0;
        this.childAspectRatio = childAspectRatio;
        this.gap = gap;

        this.childWidth = (this.width - (this.columns - 1) * this.gap) / this.columns;
        this.childHeight = this.childWidth / this.childAspectRatio;

        this.children = []
        fetch("https://tnemes-3141.github.io/perzeptron-demo/colors.json")
            .then((response) => response.json())
            .then((data) => {
                for (var key in data) {
                    this.children.push(new InputItem(this.context, {
                        x: this.position.x,
                        y: this.position.y,
                        width: this.childWidth,
                        height: this.childHeight,
                        data: data[key]["data"],
                        label: data[key]["label"],
                        title: key
                    }))
                }

                let itemIndex = 0;
                this.rows = Math.ceil(this.children.length / this.columns);
                this.height = this.childHeight * this.rows + this.gap * (this.rows - 1);
                for (let i = 0; i < this.rows; i++) {
                    for (let j = 0; j < this.columns; j++) {
                        if (itemIndex < this.children.length) {
                            this.children[itemIndex].position.x = this.position.x + (this.childWidth + this.gap) * j
                            this.children[itemIndex].position.y = this.position.y + (this.childHeight + this.gap) * i;
                            itemIndex ++;
                        }
                    }
                }
            });
    }

    getItem(index) {
        if (typeof this.children[index] !== "undefined") {
            return this.children[index];
        }
        else {
            return {
                position: {x: 0, y: 0},
                size: {width: 0, height: 0},
                data: [0, 0, 0],
                color: "black",
            };
        }
    }

    onMouseMove(mousePos) {
        if (rectContainsPoint(this.position.x - 10, this.position.y - 10, this.width + 20, this.height + 20, mousePos)) {
            this.children.forEach(child => child.onMouseMove(mousePos));
        }
    }

    onMouseClick(mousePos) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (rectContainsPoint(child.position.x, child.position.y, child.size.width, child.size.height, mousePos)) {
                return i;
            }
        }
        return -1;
    }

    update() {
        this.children.forEach(child => child.update());
    }
}

export default InputGrid;