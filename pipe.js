var pipe = function(game) {
    this.X1=400;
    this.X2=600;

    this.randomHeightMath=[280,320];
    this.game= game;
    this.pipeImg=[];
    var self = this;
    this.init= function() {
        this.loadImg();
    }
    this.loadImg= function() {
        this.pipe= new Image();
        this.pipeDown= new Image();
        this.pipe.src= './imgs/pipe.png';
        this.pipeDown.src='./imgs/pipe-down.png';
        this.pipeImg.push( this.pipe);
        this.pipeImg.push( this.pipeDown);
    }
    this.random= function() {
        min = Math.ceil(280);
        max = Math.floor(400);
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    this.update= function() {
      
        if(this.X1<0) {
            
            this.randomHeightMath[0]=this.random();
            this.X1=400;
            this.draw();
        }
        if(this.X2<0) {
            this.randomHeightMath[1]=this.random();
            this.X2=400;
            this.draw();
        }
        
    }
    
    this.draw= function() {
        this.game.context.drawImage(this.pipeImg[0],this.X1,this.randomHeightMath[0]);
        this.game.context.drawImage(this.pipeImg[1],this.X1,-100);
        this.game.context.drawImage(this.pipeImg[0],this.X2,this.randomHeightMath[1]);
        this.game.context.drawImage(this.pipeImg[1],this.X2,-100);
        }
    

}