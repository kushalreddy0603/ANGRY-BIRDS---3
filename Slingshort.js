class Slingshort{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.Slingshort = Constraint.create(options);
        World.add(world, this.Slingshort);
    }

    fly(){
        this.Slingshort.bodyA=null
    }

    display(){
        if(this.Slingshort.bodyA){
        
        
        var pointA = this.Slingshort.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}