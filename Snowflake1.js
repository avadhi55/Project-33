class SnowFlakes1 {
    constructor(x,y){
        var options = {
            'restituion':0.04,
            'friction':1.0,
            'density':1.0
        }
        this.r = 40;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();

    }
};