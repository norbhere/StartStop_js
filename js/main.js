var interval = 0;
var index;
function loop(i) {
	var square = document.getElementById("square");
	stop();
	square.style.background = getRandomColor();
	interval = setInterval(function() {
		square.style.marginLeft = i + "px";
		i++;
    	index = i;
		}, 10);
}

function start() {

}




function stopFn() {
	clearInterval(interval);
	/*for (var i = 0; i < 1000; i++) {
		clearInterval(i);
	}*/
}
document.getElementById("stop").addEventListener("click", stopFn, true);

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}