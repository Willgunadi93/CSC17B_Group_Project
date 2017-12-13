function Ship(shipName, shipSize) {
    this.cell_nums = []; // Used to test whether or not ships overlap
    this.name = shipName;
    this.size = shipSize;
    this.start = null; // Starting cell for ship; defaulted at null
    this.end = null; // Ending cell for ship; defaulted at null
    this.hit_arr = [];
    for(var i = 0; i < this.size; i++){ // Array with empty strings; when ship is hit set the string to "hit"
      this.hit_arr.push("");
  }
}

Ship.prototype.setStart = function(cell) {
	this.start = parseInt(cell);
};

Ship.prototype.setEnd = function(cell) {
	cell = parseInt(cell);
	if(this.isHoriz(this.start, cell) || this.isVert(this.start, cell)) {
		if(this.start < cell) {
			this.end = cell;
		} else {
			this.end = this.start;
			this.start = cell;
		}
		//if buggy, add to both if and else statements
		this.setCellNums();
		return true;
	} else {
		return false;
	}
};

Ship.prototype.isHoriz = function(cell, cell2) {
	cell = parseInt(cell);
	cell2 = parseInt(cell2);
	let isLength = Math.abs(cell - cell2) === (this.size-1);
	let isRow = Math.floor(cell/10) === Math.floor(cell2/10);
	if(isLength && isRow) return true;
	return false;
};

Ship.prototype.isHorizontal = function() {
	return this.isHoriz(this.start, this.end);
};

Ship.prototype.isVert = function(cell, cell2) {
	cell = parseInt(cell);
	cell2 = parseInt(cell2);
	let isLength = (Math.abs(cell - cell2)/10) === (this.size-1);
	if(isLength) return true;
	return false;
};

Ship.prototype.isVertical = function() {
	return this.isVert(this.start, this.end);
};

Ship.prototype.resetShip = function() {
	this.start = null;
	this.end = null;
	this.cell_nums = [];
};

Ship.prototype.setCellNums = function() {
	let currentCell = this.start;
	if(this.isVert(this.start, this.end)) {
		for(let i=0; i<this.size; i++) {
			this.cell_nums.push(currentCell);
			currentCell+=10;
		}
	} 
	if(this.isHoriz(this.start, this.end)) {
		for(let i=0; i<this.size; i++) {
			this.cell_nums.push(currentCell);
			currentCell++;
		}
	}
};

Ship.prototype.isSet = function() {
	if(this.start !== null && this.end !== null) return true;
	return false;
};

Ship.prototype.isSunk = function(){
    var counter = 0;
    for(let i = 0; i<this.size; i++){
        if(this.hit_arr[i] === "hit"){ 
            counter++;
        }
    }
    console.log(counter);
    console.log(this.size);
    if(counter === this.size){
        return true;
    }
    return false;
};


