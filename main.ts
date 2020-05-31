class Point {
    x:Number;
    y:Number;

draw(){
    console.log('X: '+this.x+',Y: '+this.y);
}
    anotherPoint(another: Point){
        // ...
    }
}
let point = new Point;
point.x = 1;
point.y = 3;
point.draw();
