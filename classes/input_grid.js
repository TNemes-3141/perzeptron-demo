import InputItem from "./input_item.js";

class InputGrid {
    constructor(context, {x, y, width, columns, childAspectRatio, gap}) {
        this.context = context;
        this.position = {
            x: x,
            y: y,
        };
        this.width = width;
        this.columns = columns;
        this.rows = 0;
        this.childAspectRatio = childAspectRatio;
        this.gap = gap;

        this.childWidth = (this.width - (this.columns - 1) * this.gap) / this.columns;
        this.childHeight = this.childWidth / this.childAspectRatio;

        this.children = []
        fetch("../stores/colors.json")
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

    update() {
        this.children.forEach(child => child.update());
    }
}

export default InputGrid;