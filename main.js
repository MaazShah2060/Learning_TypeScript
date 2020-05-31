var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point.prototype.anotherPoint = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point(1, 3);
point.draw();
