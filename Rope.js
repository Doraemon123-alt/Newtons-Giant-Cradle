class Rope{

    constructor(body1,body2,offsetX,offsetY)
    {
    
this.offsetX=offsetX
this.offsetY=offsetY

    var options={
    
    bodyA:body1,
    bodyB:body2,
   pointB:{x:this.offsetX,y:this.offsetY}
    
    
    
    }
    
    this.rope=Matter.Constraint.create(options)
    World.add(world,this.rope)
    
    }
    
    
    display()
    {
    var pointA,pointB
    
    pointA=this.rope.bodyA.position
    pointB=this.rope.bodyB.position
    
    
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    
    
    
    }
    
    
    
    
    
    
    }