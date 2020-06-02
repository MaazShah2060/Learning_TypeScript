"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(1, 3);
point.draw();
var X = point.x;
point.x = 10;
point.draw();
