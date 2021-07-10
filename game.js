var game = function () {
    this.canvas = null;
    this.context = null;
    this.width= 350;
    this.height= 550;
    this.bird= null;
    this.bg = null;
    this.pipe=null;
    this.score=1;
    var self = this;

    // create a new bird

    this.init = function() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        document.body.appendChild(this.canvas);
        this.bird = new bird(this);
        this.bird.init();
        this.bg = new bg(this);
        this.bg.init();
        this.pipe= new pipe(this);
        this.pipe.init();
        self.loop();
        this.listenMouse();
    }
    this.listenMouse = function() {
       this.canvas.addEventListener("click",function(){
        var audio = new Audio('../swoosh.mp3');
        audio.play();
        self.bird.flap();
        if(self.pipe.X1==100 ) {
            console.log(self.bird.Y);
            if(self.bird.Y<(self.height-self.pipe.randomHeightMath[0]) ) {
                console.log(2);
            }
           
        }
        
    })
    }
   
    this.loop = function() {
        if(self.pipe.X1==100 ) {
            if(self.bird.Y<self.pipe.randomHeightMath[0] && self.bird.Y>150 ) {
                self.score+=1;
                var audio = new Audio('../point.mp3');
                audio.play();
            }
            else {
                var audio = new Audio('../hit.mp3');
                audio.play();

            }
           
        }
        if(self.pipe.X2==100 ) {
            if(self.bird.Y<self.pipe.randomHeightMath[1] && self.bird.Y>150 ) {
                self.score+=1;
                var audio = new Audio('../point.mp3');
                audio.play();
            }
            else {
                var audio = new Audio('../hit.mp3');
                audio.play();
            }
           
        }


        self.update();
        self.draw();
        document.getElementsByTagName("canvas")[0].getContext("2d").font = "80px Qahiri-Regular";
        document.getElementsByTagName("canvas")[0].getContext("2d").fillText(self.score, 173,75);
        document.getElementsByTagName("canvas")[0].getContext("2d").fillStyle = "white";

        
        setTimeout(self.loop,30);
    }
    this.update = function() {
        this.bg.update();
        this.bird.update();
        this.pipe.update();
      
    }
    this.draw = function() {
        this.bg.draw();
        this.bird.draw();
        this.pipe.draw();
    }

}
var g = new game();

