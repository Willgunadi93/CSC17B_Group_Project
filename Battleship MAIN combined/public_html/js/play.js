function main() {
	let playerTable = new Board("playerTable", "playerCell");
	let oppTable = new Board("oppTable", "oppCell");

	let arrow = document.getElementById("nextArrow");
	arrow.addEventListener("click", function(){
            playerTable.nextShip();
            console.log(playerTable.shipCounter);
        });
        
        let reset = document.getElementById("ship-icon");
        reset.addEventListener("click",function(){
            playerTable.resetShip(playerTable.currentShip);
        });
        
        let board_reset = document.getElementById("reset-icon");
        board_reset.addEventListener("click",function(){
            playerTable.resetBoard();
        });
        
        let submit = document.getElementById("submit-icon");
        submit.addEventListener("click",function(){
            playerTable.sendBoard(oppTable);
            console.log(oppTable);
        });
        
        var playerCells = [];
        for(var i = 0 ; i < 100 ; i++){
            playerCells[i] = document.getElementById(i);
            playerCells[i].addEventListener("click", function(){
                playerTable.setShip(this.id);
            });
        }
        
        var oppCells = [];
        for(var i = 0 ; i < 100 ; i++){
            var id = i + 100;
            playerCells[i] = document.getElementById(id);
            playerCells[i].addEventListener("click", function(){
                oppTable.checkHit(this.id - 100);
            });
        }
}


window.onload = main;


let shipImages = ["url('shipImg/carrier.png')","url('shipImg/battleship.png')",
"url('shipImg/cruiser.png')","url('shipImg/submarine.png')", "url('shipImg/destroyer.png')"];
let shipImgCounter = 1;

function run() {
	console.log("xx");
	let shipImage = document.getElementById("shipImage");
	if(shipImgCounter >= shipImages.length) {
		shipImgCounter = 0;
		shipImage.style.backgroundImage = shipImages[shipImgCounter];
		shipImgCounter++;
	}else {
		shipImage.style.backgroundImage = shipImages[shipImgCounter];
		shipImgCounter++;
	}
}

function getCoordinates() {
	let tableCells = document.getElementsByClassName("waterCell");
	let numChoosen = 0;
	for(let i=0; i<tableCells.length; i++) {
		if(tableCells[i].style.backgroundColor == "blue") {
			numChoosen++;
			console.log(tableCells[i].id);
		}
	}
}




/*
//object that needs work
function Controller() {
	this.shipNames = ["Carrier","Cruiser","Battleship","Submarine","Destroyer"];
}

Controller.prototype.shipLocation = function() {
	var shipDetail = document.getElementById("shipDetail");
	
	for(var ship in this.shipNames) {
		shipDetail.innerHTML += this.shipNames[ship];
	}	
}


function main() {
	var model = new Board();
	var controller = new Controller();
	controller.shipLocation();
}

window.onload = main;
*/