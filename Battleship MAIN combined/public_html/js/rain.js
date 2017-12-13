// number of drops created.
var nbDrop = 200; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,2000); //range for right side
	var dropTop = randRange(-1000,1400); //how fast the drops fall


var dropDiv = document.createElement('div');
dropDiv.className = 'drop';
dropDiv.id = 'drop' + i;
document.querySelector('.rain').appendChild(dropDiv);

	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain
createRain();