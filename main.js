var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ',Y: ' + this._y);
    };
    Point.prototype.anotherPoint = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point(1, 3);
point.draw();
var X = point.x;
point.x = 10;
point.draw();
