class Chain {
    constructor (a,b) {
        var options={bodyA:a,
            bodyB:b}
    
      this. chain= Matter.Constraint.create(options)
       World.add(world,this.chain)
    }
    display(){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}