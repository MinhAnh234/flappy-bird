var base = function(game) {
    this.game= game;
    this.pape=null;
    var self = this;
    this.init= function() {
        this.loadImg();
    }
    this.loadImg= function() {
        this.pape= new Image();
        this.pape.src= './imgs/pipe.png';
    }
    this.update= function() {

    }
    this.draw= function() {
        
    }

}