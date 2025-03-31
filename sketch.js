// On a touchscreen device, touch the canvas using one or more fingers
// at the same time.

let bgColor = 50;
let fillColor = 255;
let borderWidth = 0.5;

function setup() {
  createCanvas(100, 100);

  describe(
    'A gray square with the number 0 at the top-center. The number tracks the number of places the user is touching the screen. Circles appear at each touch point and change style in response to events.'
  );
}

function draw() {
  background(bgColor);

  // Style the text.
  textAlign(CENTER);
  textSize(16);
  fill(0);
  noStroke();

  // Display the number of touch points.
  text(touches.length, 50, 20);

  // Style the touch points.
  fill(fillColor);
  stroke(0);
  strokeWeight(borderWidth);

  // Display the touch points as circles.
  for (let touch of touches) {
    circle(touch.x, touch.y, 40);
  }
}

// Set the background color to a random grayscale value.
function touchStarted() {
  bgColor = random(80, 255);
}

// Set the fill color to a random grayscale value.
function touchEnded() {
  fillColor = random(0, 255);
}

// Set the stroke weight.
function touchMoved() {
  // Increment the border width.
  borderWidth += 0.1;

  // Reset the border width once it's too thick.
  if (borderWidth > 20) {
    borderWidth = 0.5;
  }
}
