class Pig {

    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        var option = {

            restitution: 0.8
        }

        this.body = Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y)
        
        rotate (angle)

        rectMode (CENTER);

        strokeWeight(5);

        stroke("brown");

        fill ("green");

        rect(0,0,this.width,this.height);
        pop ();
    }

}