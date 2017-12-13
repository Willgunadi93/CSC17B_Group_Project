//the model in MVC
function Board(tableName, cellName) {
	//let tab = this;
	this.table = this.makeTable(tableName, cellName);
	document.getElementById("tables").appendChild(this.table);

	this.shipArray = [];
	this.shipArray.push(new Ship("carrier", 5));	
	this.shipArray.push(new Ship("battleship", 4));	
	this.shipArray.push(new Ship("cruiser", 3));	
	this.shipArray.push(new Ship("submarine", 3));	
	this.shipArray.push(new Ship("destroyer", 2));	

	this.shipCounter = 0;
	//used for changing the controller
	this.currentShip = 0;
        
        this.set = false;
}

Board.prototype.makeTable = function(tableId, tableDataId) {
	let counter;

	if(tableId == "playerTable"){
            counter = 0;
        }
	if(tableId == "oppTable"){
            counter = 100;
        }

	//creates table with value passed to tableID
	var table = document.createElement("table");
	table.id = tableId;

	//creates the A-J row (AKA xAxis)
	var ROW_COL = 10;
	var xAxisRow = document.createElement("tr");
	var xAxisData = document.createElement("td");
	xAxisData.className = "xAxis";
	xAxisRow.appendChild(xAxisData);

	for(var i=0; i<ROW_COL; i++) {
		xAxisData = document.createElement("td");
		xAxisData.className = "xAxis";
		xAxisData.innerHTML = String.fromCharCode(65+i);
		xAxisRow.appendChild(xAxisData);
	}
	table.appendChild(xAxisRow);

	var tableRow;
	var tableData;
	var yAxisData; //creates the 0-9 column (AKA yAxis)
 
	for(var i=0; i<ROW_COL; i++) {

		//creates row
		tableRow = document.createElement("tr");

		//append a y-value (0,1,2,3,etc..) at beginning of each row
		yAxisData = document.createElement("td");
		yAxisData.className = "yAxis";
		yAxisData.innerHTML = String.fromCharCode(48+i);
		tableRow.appendChild(yAxisData);

		//create the actual cells where a ship might be placed
		for(var j=0; j<ROW_COL; j++) {
			tableData = document.createElement("td");
			tableData.className = "waterCell"
			tableData.id = counter++;
			//let tempBoard = this;
			/*if(tableId === "playerTable") {
				tableData.addEventListener("click", function(){
					//console.log(tempBoard);
					obj.setShip(this.id);
				});
			}*/
			tableRow.appendChild(tableData);
		}
		table.appendChild(tableRow);
	}
	return table;
};

Board.prototype.checkCells = function(shipInput) {
	let ship = shipInput;
	for(let i=0; i<this.shipArray.length; i++) {
		let shipCompare = this.shipArray[i];
		for(let j=0; j<ship.size; j++) {
			for(let k=0; k<shipCompare.size; k++) {
				if(ship.name !== shipCompare.name && ship.cell_nums[j] === shipCompare.cell_nums[k]) {
					return false;
				}
			}
		}
	}
	return true;
};

Board.prototype.setShip = function(cell) {
	let condition = this.shipArray[this.currentShip];
        if(condition.isSet()){
            alert("Ship already set");
            return;
        }

	if(this.currentShip === 0) {
		if(condition.start === null) {
			condition.setStart(cell);
			return;
		} else if(condition.start !== null) {
			condition.setEnd(cell);
			if(condition.isSet() && this.checkCells(condition)) {
				this.setImage(condition);
				this.shipCounter++;
                                this.nextShip();
			} else {
				condition.resetShip();
				window.alert(condition.name + " is not set!");
			}
			return;
		}
	}

	if(this.currentShip === 1) {
		if(condition.start === null) {
			condition.setStart(cell);
			return;
		} else if(condition.start !== null) {
			condition.setEnd(cell);
			if(condition.isSet() && this.checkCells(condition)) {
				this.setImage(condition);
				this.shipCounter++;
                                this.nextShip();
			} else {
				condition.resetShip();
				window.alert(condition.name + " is not set!");
			}
			return;
		}
	}

	if(this.currentShip === 2) {
		if(condition.start === null) {
			condition.setStart(cell);
			return;
		} else if(condition.start !== null) {
			condition.setEnd(cell);
			if(condition.isSet() && this.checkCells(condition)) {
				this.setImage(condition);
				this.shipCounter++;
                                this.nextShip();
			} else {
				condition.resetShip();
				window.alert(condition.name + " is not set!");
			}
			return;
		}
	}

	if(this.currentShip === 3) {
		if(condition.start === null) {
			condition.setStart(cell);
			return;
		} else if(condition.start !== null) {
			condition.setEnd(cell);
			if(condition.isSet() && this.checkCells(condition)) {
				this.setImage(condition);
				this.shipCounter++;
                                this.nextShip();
			} else {
				condition.resetShip();
				window.alert(condition.name + " is not set!");
			}
			return;
		}
	}

	if(this.currentShip === 4) {
		if(condition.start === null) {
			condition.setStart(cell);
			return;
		} else if(condition.start !== null) {
			condition.setEnd(cell);
			if(condition.isSet() && this.checkCells(condition)) {
				this.setImage(condition);
				this.shipCounter++;
                                this.nextShip();
			} else {
				condition.resetShip();
				window.alert(condition.name + " is not set!");
			}
			return;
		}
	}

	if(this.shipCounter === 5) {
		window.alert("All ships are set!");
	}

};

Board.prototype.resetShip = function(int){
    if(this.set === true){
        alert("Board already set! Cannot reset!");
        return;
    }
    var ship = this.shipArray[int];
    if(ship.isSet()){
        for(let i = 0 ; i<ship.size; i++){
            let cell = document.getElementById(ship.cell_nums[i].toString());
            cell.style.backgroundImage = "url('././pic/water.gif')";
            cell.style.height = "40px";
        }
        ship.resetShip();
        this.shipCounter--;
    }
};

Board.prototype.resetBoard = function(){
    if(this.set === true){
        alert("Board already set! Cannot reset!");
        return;
    }
    for(var i = 0; i < this.shipArray.length; i++){
        this.resetShip(i);
    }
    
};

Board.prototype.setImage = function(shipToSet) {
	//ensure toString works as intended
	let numStart = shipToSet.start;

	if(shipToSet.isVertical()) {
		for(let i=0; i<shipToSet.size; i++) {
			let stringStart = numStart.toString();
			let cell = document.getElementById(stringStart);
			numStart+=10;
                
			if(shipToSet.name === "carrier") {
				cell.style.backgroundImage = "url('././Carrier/c" + (i+1) + ".png')";
			}
			if(shipToSet.name === "battleship") {
				cell.style.backgroundImage = "url('././Battleship/b" + (i+1) + ".png')";
			}
			if(shipToSet.name === "cruiser") {
				cell.style.backgroundImage = "url('././Cruiser/cr" + (i+1) + ".png')";

			}
			if(shipToSet.name === "submarine") {
				cell.style.backgroundImage = "url('././Submarine/s" + (i+1) + ".png')";

			}
			if(shipToSet.name === "destroyer") {
				cell.style.backgroundImage = "url('././Destroyer/d" + (i+1) + ".png')";

			}
		}
	}

	if(shipToSet.isHorizontal()) {
		for(let i=0; i<shipToSet.size; i++) {
			let stringStart = numStart.toString();
			let cell = document.getElementById(stringStart);
			numStart+=1;
                        
			if(shipToSet.name === "carrier") {
				cell.style.backgroundImage = "url('././Carrier/ch" + (i+1) + ".png')";
			}
			if(shipToSet.name === "battleship") {
				cell.style.backgroundImage = "url('././Battleship/bh" + (i+1) + ".png')";
			}
			if(shipToSet.name === "cruiser") {
				cell.style.backgroundImage = "url('././Cruiser/crh" + (i+1) + ".png')";
			}
			if(shipToSet.name === "submarine") {
				cell.style.backgroundImage = "url('././Submarine/sh" + (i+1) + ".png')";
			}
			if(shipToSet.name === "destroyer") {
				cell.style.backgroundImage = "url('././Destroyer/dh" + (i+1) + ".png')";
			}
		}
	}
};

Board.prototype.nextShip = function() {
	run();
	if(this.currentShip < 4) this.currentShip++;
	else this.currentShip = 0;
};

Board.prototype.checkHit = function(cell){
    var ship;
    if(this.set === false){
        alert("board is not set");
        return;
    }
    
    for(var i = 0; i<this.shipArray.length; i++){
        ship = this.shipArray[i];
        for(var j = 0; j < ship.cell_nums.length; j++){
            if(ship.cell_nums[j] === cell){
                var hit_index = ship.cell_nums.indexOf(cell);
                if(ship.hit_arr[hit_index] === ""){
                    setHit_img(cell);
                  //  alert(ship.name + " is hit");
                    ship.hit_arr[hit_index] = "hit";
                    if(ship.isSunk()){
                        alert(ship.name + " is sunk!");
                        this.shipCounter++;
                    }
                    return;
                }
                else{
                    if(ship.isSunk()){
                        alert(ship.name + " is already sunk!");
                    }
                    else{
                        alert("ship is already hit on that cell");
                    }
                    return;
                }
            }
        }
    }
//alert("miss");
setMiss_img(cell);
};

Board.prototype.sendBoard = function(receivingBoard){
    if(this.shipCounter !== 5){
        alert("All ships need to be set");
        return;
    }
    let controller = document.getElementById("dashboard");
    controller.style.display = "none";
    receivingBoard.shipArray = this.shipArray;
    receivingBoard.set = true;
    this.set = true;
};


function setMiss_img(cell){
    cell = cell + 100;
    var cell_id = document.getElementById(cell.toString());
    cell_id.style.backgroundImage = "url('././pic/miss.png')";
}


function setHit_img(cell){
    var animation;
    cell = cell + 100;
    var cell_id = document.getElementById(cell.toString());
    cell_id.style.backgroundImage =  "url('././pic/hit.gif')";
    animation = setInterval(afterHit, 1400);
    function afterHit(){
        
        cell_id.style.backgroundImage = "url('././pic/fire2.gif')"; 
    }
}
