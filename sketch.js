var dog, happyDog, database, foodS, FoodStock; 


function preload()
{
  dog = loadImage("images/doglmg.png");
  happyDog = loadImage("images/doglmg.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,50,50);

  FoodStock=database.ref('Food');
    FoodStock.on("value",readStock);
}


function draw() {  

 
  if(keyWentDown(UP_ARROW)){
    writwStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  
  textSize(35)
  fill("white")
  text("fooStock", 450,450);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food: x
  })
}