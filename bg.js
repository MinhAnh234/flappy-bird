var bg= function(game) {
    this.game= game;
    this.image = null;
    this.loaded = false;
    this.X=0;
    var self = this;

    this.init = function() {
       this.loadImage();
    }
    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {
            self.loaded = true;
            console.log('image loaded');
        }
        this.image.src= './imgs/bg.png';

    }
    this.update = function() {
        this.X-=1;
        if(this.X==-300) {
           this.X=0;
        }
        this.draw();
       
        
        
    }
    this.draw = function() {
        if(!this.loaded) {
            return;
        }
        this.game.context.drawImage(this.image,this.X,0 );
        this.game.context.drawImage(this.image,this.X+300,0 );
    }

}