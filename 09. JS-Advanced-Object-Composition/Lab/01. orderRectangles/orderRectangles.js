function createRect(width, height) {
    return {
        width: width,
        height: height,
        area: function () {
            return this.width * this.height;
        },
        compareTo: function (other) {
            let result = other.area() - this.area();
            return result || (other.width - this.width);
        }
    };
}

function orderRects(rectsData) {
    let rects = [];

    for (let [width, height] of rectsData) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    rects.sort((a,b) => a.compareTo(b));
    return rects;
}

console.log(orderRects([[10, 5], [5, 12]]));
