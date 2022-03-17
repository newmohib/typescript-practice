//Class: Groyps variables (properties) and functions (methods) that are highly related

class Point {
    x:number;
    y:number;

    draw(){
        console.log(' X: ' + this.x + ' Y: ' + this.y);
    };
    getDistance(another: Point){

    }
};

// point is object //  object is instace in all class
let point = new Point();
point.x = 1;
point.y = 2;

point.draw();


// another way with optional constructor examp => x?:number, y?:number with ? 

class Point2 {
    x:number;
    y:number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log(' X: ' + this.x + ' Y: ' + this.y);
    };
    getDistance(another: Point){

    }
};

// point is object //  object is instace in all class
let point2 = new Point2(1, 2);
point2.draw();


// access modifiers 
    // public
    // private
    //protected


class Point3 {

    constructor(public x?:number, private y?:number){}

    draw(){
        console.log(' X: ' + this.x + ' Y: ' + this.y);
    };
    getDistance(another: Point){

    }
};

let point3 = new Point3(1, 2);
point3.x = 3;
point3.draw();


