let particles;

function setup(){
    createCanvas(600, 400);
    particles = Array(100).fill().map(p=> new Particle);
}


function draw(){
  background(0);
  for (var i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (var particle of particles) {
    particle.update();
    particle.show();
  }
  particles=particles.filter( p => !p.finished());
}
