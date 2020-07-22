class Paper{
    constructor(x, y, r) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':1.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r;
        this.image = loadImage("paper.png");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS)
        fill("white");
        translate(pos.x,pos.y)
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER)
        image(this.image, 0, 0, 70, 70);
        pop();
    }
} 