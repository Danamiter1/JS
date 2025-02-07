// Задание №1
class Figure{
    #x;
    #y;
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    square(){
        return undefined
    }
}

// Задание №2
class Circle extends Figure{
    constructor(x,y,r){
        super(x,y);
        this.r=r;
    }
    square(){
        return Math.PI*this.r**2
    }
}

// Задание №3
class Rectangle extends Figure{
    constructor(x,y,h,w){
        super(x,y);
        this.h=h;
        this.w=w;
    }
    square(){
        return this.h*this.w
    }
}

// Задание №4
const c = new Circle(1,1,2);
console.log(c.square())
const r = new Rectangle(1,1,2,3)
console.log(r.square())