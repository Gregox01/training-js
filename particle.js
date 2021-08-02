class Particle {
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx= random(-1,1);
    this.vy= random(-5,-1);
    this.col = random(255);
    this.alpha =255;

  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  finished(){
    return this.alpha <0;
  }

  show(){
    noStroke();
    fill(255,this.alpha);
    ellipse(this.x,this.y,16)
  }
}
