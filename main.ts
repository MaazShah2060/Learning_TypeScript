class Point {
    x:Number;
    y:Number;
    constructor(x?:Number,y?:Number){ //Added '?' for enabling optional values
        this.x = x;
        this.y = y;
    }

draw(){
    console.log('X: '+this.x+',Y: '+this.y);
}
    anotherPoint(another: Point){
        // ...
    }
}
let point = new Point(1,3);
point.draw();
