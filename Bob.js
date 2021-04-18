class Bob{
    constructor(x,y,width){
        var Option={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
                  }
          this.body=Bodies.circle(x,y,width,Option);
          World.add(world,this.body);
          this.width=width;
         
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push() ;
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.width);
        pop();
    }
}