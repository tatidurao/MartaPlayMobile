let sprite;
let directions = { up: false, down: false, left: false, right: false };

function setup() {
  createCanvas(windowWidth, windowHeight);
  sprite = createSprite(width / 2, height / 2, 50, 50);
}

function draw() {
  background(200);
  
  // Movimenta o sprite com base nas direções tocadas
  if (directions.up) sprite.velocityY -= 5;
  if (directions.down) sprite.position.y += 5;
  if (directions.left) sprite.position.x -= 5;
  if (directions.right) sprite.position.x += 5;

  drawSprites();
}

// Quando toca na tela (simula keyWentDown)
function touchStarted() {
  for (let t of touches) {
    if (t.y < height / 3) directions.up = true;  // Topo da tela → Cima
    if (t.y > (2 * height) / 3) directions.down = true; // Base da tela → Baixo
    if (t.x < width / 3) directions.left = true; // Esquerda da tela → Esquerda
    if (t.x > (2 * width) / 3) directions.right = true; // Direita da tela → Direita
  }
}

// Quando solta o toque (simula keyWentUp)
function touchEnded() {
  directions = { up: false, down: false, left: false, right: false }; // Reseta ao soltar o toque
}
