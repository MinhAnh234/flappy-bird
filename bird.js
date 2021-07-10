var bird= function(game) {
    this.game= game;
    this.images = [];
    this.loaded = false;
    this.currentImage= null;
    this.currentFrame=0;
    var self = this;
    this.Y=100;
    this.acc=2;
    this.speechY=0;
    this.init = function() {
       this.loadImage();
    }
    this.loadImage = function() {
        var img1 = new Image();
        var img2 = new Image();
        img1.onload = function() {
            self.loaded = true;
            console.log('image loaded');
        }
        img2.onload = function() {
            self.loaded = true;
            console.log('image loaded');
        }
        img1.src= './imgs/bird.png';
        img2.src= './imgs/bird2.png';
        this.images.push(img1);
        this.images.push(img2);
       
    }
    this.flap=function() {
        self.speechY=-20;
        if(self.Y>=466) {
            self.Y=400;
        }
       
    }
    this.update = function() {
      
        if(self.Y>=game.height) {
            self.Y=500;
        }
       else {
        this.speechY += this.acc;
        this.Y+=this.speechY;
        self.currentFrame++;
        if(self.currentFrame ==5) {
            this.currentImage=this.images[1];
            self.currentFrame =0;
        } else
        this.currentImage=this.images[0];
    }
    this.draw();
}
this.draw = function() {
    if(!this.loaded) {
        return;
    }
    this.game.context.drawImage(this.currentImage,100,this.Y);
}

}