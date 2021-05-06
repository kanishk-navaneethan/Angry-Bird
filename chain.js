class Chain {
    constructor(MyA,MyB){
        var opt = {
            bodyA:MyA,
            bodyB:MyB,
            length:10,
            stiffness:0.04
        }
        this.chain = Constraint.create(opt);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        push()
        stroke("blue")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}