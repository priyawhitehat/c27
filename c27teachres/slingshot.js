class Slingshot
{
    constructor(body1,body2)
    {
        var option={bodyA:body1,pointB:body2,stiffness:0.04,length:10}
        this.sling=Matter.Constraint.create(option);
        World.add(world,this.sling);
    }

    display()
    {
        stroke("red");
        strokeWeight(10);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
        noStroke();
    }
}