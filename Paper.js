class Paper {
    constructor(x,y,r){
var option = {
  isStatic : false,
restitution : 0.3,
friction : 0,
density : 1.2
}
this.body = Bodies.circle(x,y,r,option)
this.r = r
this.image = loadImage("paper.png")
World.add(world,this.body)
    }
   display(){
    var paperPos=this.body.position;		

    push()
    translate(paperPos.x, paperPos.y);
    imageMode(CENTER)
    //strokeWeight(4);
    fill(128,128,128)
    image(this.image,0,0,this.r*2,this.r*2);
    pop()
    
}

}