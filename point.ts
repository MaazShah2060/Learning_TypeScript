export class Point {
    constructor(private _x?:Number,private _y?:Number){ //Added '?' for enabling optional values
        
    }
get x(){
    return this._x;
}
set x(value){
    this._x=value;
}
draw(){
    console.log('X: '+this._x+',Y: '+this._y);
}
    anotherPoint(another: Point){
        // ...
    }
}