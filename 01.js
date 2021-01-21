function multiply(x, y){
	var total = 0;
	var abs   = y < 0 ? (y-y)-y : y;
	for(i=0; i<abs; i++){
		total = y < 0 ? total - x : total + x;
	}
	return total;
}
var div = document.getElementById('total');
var btn = document.getElementById('btn');
var i1  = document.getElementById('input1');
var i2  = document.getElementById('input2');
btn.addEventListener('click', function(){
	div.textContent = multiply(parseInt(i1.value), parseInt(i2.value) );
});