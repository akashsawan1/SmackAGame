let currentMoleTile;
let currentPlantTile;
let points=0;
let gameover= false;

window.onload = function (){
    setGame();
}

function setGame(){
    for(let i=0; i<9; i++){
        let tile = document.createElement("div"); //<div id=0-8></div>
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);  //interting the created tag inside the div tag with id board in the created HTMl file.
    }
    setInterval(setMole,1000); //2000 miliseconds = 2 seconds
    setInterval(setPlant, 2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameover){
        return;
    }

    if(currentMoleTile){
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty.png"



    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id === num){
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameover){
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./pirana.png"



    let num = getRandomTile();
    if(currentMoleTile && currentMoleTile.id === num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover){
        return;
    }
    if(this == currentMoleTile){
        points +=10 ;
        document.getElementById("score").innerText = points.toString(); //to update the score
    }
    else if(this == currentPlantTile){
        document.getElementById("score").innerText = "Khtm tata bye bye(Game over). \n "+ "Your Score is: " + points.toString();
        gameover = true;
    }
}
