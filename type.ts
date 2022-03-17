// this variable is number type. it must contain number value
let count = 5;
// count = '5';   //Type 'string' is not assignable to type 'number'.

// this variable is not initially define. thats why this variable is contain any value

let a;
a = 2;
a = true;
a = 'a';

// this variable is initially define. thats why this variable is contain define type value

let b: number;
b = 2;
// b = true;
// b = 'a';


let c:number;
let d:boolean;
let e:string;
let f:any;
let g:number[] = [ 1, 2, 3, 4 ];
let h:any = [1,true, 'a', false];

 // need to discuss

 const ColorRed = 0;
 const ColorGreen = 1;
 const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;


// variable is not define bu there is used string method
let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string ).endsWith('c');

// define function

let log = function(message){
    console.log(message);
};

let doLog = (message)=> console.log(message);

// Type Annotations exm -> point:{x:number, y:number}

let drewPoint = (point:{x:number, y:number})=>{
    //...
};

drewPoint({
    x:1,
    y:2
})

// alternativeWay with interface

interface Point {
    x:number,
    y:number
}

let drewPointer = (point:Point)=>{
    //...
};


// drewPointer({
//     x:1,
//     y:2
// })