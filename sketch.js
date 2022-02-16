var torreImg, torre;
var portaImg, porta, grupoPorta;
var climberImg, climber, grupoClimber;
var fantasma, fantasmaImg;
var grupoBlocoInvisivel, blocoInvisivel;
var estadoJogo = "play"
var somAssustador;

function preload() {
    torreImg = loadImage("tower.png");
    portaImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    fantasmaImg = loadImage("ghost-standing.png");
    //somAssustador = ("spooky.wav");

    grupoClimber = new Group();
    grupoPorta = new Group();
    grupoBlocoInvisivel = new Group();

}

function setup() {
    createCanvas(600, 600);
    torre = createSprite(300, 300);
    torre.addImage("torre", torreImg);
    torre.velocityY = 1;

    // somAssustador.loop();
    fantasma = createSprite(200, 200, 50, 50);
    fantasma.addImage(fantasmaImg);
    fantasma.scale = 0.3;

    edges = createEdgeSprites();
}

function draw() {
    background(200);

    if (estadoJogo === "play") {

        //código para controlar o jogador para cima

        //código para controlar o jogador para Esquerda

        //código para controlar o jogador para direita

        //gravidade

        //Código para reiniciar a torre



        if (fantasma.isTouching(grupoBlocoInvisivel) || fantasma.y > 600) {
            fantasma.destroy();
            estadoJogo = "end";
        }

        gerarPortas();
        drawSprites();


    }
    if (estadoJogo === "end") {
        background(0)
        fill("yellow")
        textSize(70)
        text("VOCÊ PERDEU", 30, 200);

    }

}


function gerarPortas() {

    if (frameCount % 240 === 0) {
        porta = createSprite(200, -50);
        porta.addImage(portaImg);

        porta.x = Math.round(random(120, 400))
        porta.velocityY = 1;
        //porta. = ;

        climber = createSprite(posicaoX, 10);
        climber.addImage(climberImg);
        climber.velocityY = 1;
        //climber.lifetime = ;
        fantasma.depth = climber.depth + 1;

        blocoInvisivel = createSprite(porta.x, 15, climber.width, 2);
        blocoInvisivel.velocityY = 1;



        blocoInvisivel.visible = false;
        blocoInvisivel.debug = true;

        grupoBlocoInvisivel.add(blocoInvisivel);


    }


}