window.onload = function () {
  const threshold = 50; //滚动 50px 之后出按钮

  function GoTop(id){
    this.button = document.getElementById(id);
    
    var self = this;
    
    this.button.onclick = function(){
      // window.scrollTo(0, 0);
      goTopAnimation();
    }
    
    window.onscroll = function(evt){
      self.update();
    }
    
    this.update();
  }

  function goTopAnimation(el){
    let startTime = Date.now(),
        duration = 500;
        currentY = window.scrollY;
    
    requestAnimationFrame(function move(){
      let currentTime = Date.now();
      let p = (currentTime - startTime) / duration;
      window.scrollTo(0, currentY * (1 - p));
      if(window.scrollY){
        requestAnimationFrame(move);
      }
    });
  }

  GoTop.prototype.update = function(){
    if(window.scrollY > threshold){
      this.button.className = 'scroll';
    }else{
      this.button.className = '';
    }
  };

  var gotop = new GoTop('go-top');
};