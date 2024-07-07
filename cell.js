function Cell(pos, r, c, speed) {
    this.pos = pos ? pos.copy() : createVector(random(width), random(height));
    this.r = r || 60;
    this.c = c || color(random(100, 255), random(100, 255), random(100, 255), 100);
    this.speed = speed || createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  
    this.move = function() {
      this.pos.add(this.speed);
      if (this.pos.x > width - this.r || this.pos.x < this.r) {
        this.speed.x *= -1;
      }
      if (this.pos.y > height - this.r || this.pos.y < this.r) {
        this.speed.y *= -1;
      }
    }
  
    this.show = function() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
  
    this.clicked = function(x, y) {
      var d = dist(this.pos.x, this.pos.y, x, y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    }
  
    this.mitosis = function() {
      var newPos = createVector(this.pos.x + random(-this.r, this.r), this.pos.y + random(-this.r, this.r));
      var newCell = new Cell(newPos, this.r * 0.8, this.c);
      return newCell;
    }
  }
  