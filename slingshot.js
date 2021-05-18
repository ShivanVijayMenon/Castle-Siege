class Slingshot{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;

        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);

    } 
    
    attach(body){

        this.slingShot.bodyA = body;

    }

    fly(){

        this.slingShot.bodyA = null;

    }

    display(){

        if(this.slingShot.bodyA){

            var a = this.slingShot.bodyA.position
            var b = this.pointB

            strokeWeight(4);
            line(a.x, a.y, b.x, b.y);

        }

    }

}