var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point.prototype.anotherPoint = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point;
point.x = 1;
point.y = 3;
point.draw();
