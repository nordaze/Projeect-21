class Ground{

    constructor(x_usr,y_usr,w_usr,h_usr){

        var options={
            isStatic:true
    
        }

        this.body = Bodies.rectangle(x_usr,y_usr,w_usr,h_usr,options)
        this.width = w_usr
        this.height = h_usr
        World.add(world,this.body)

    }
    display(){

        var groundPos= this.body.position;

        push()
        translate(groundPos.x, groundPos.y);
	    rectMode(CENTER)
        fill(0xffff00)
        rect(0,0,this.width,this.height)
        pop()    
    }
}

