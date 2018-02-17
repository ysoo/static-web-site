var month = document.getElementById("month");
var year = document.getElementById("year");
var date = document.getElementById("date");
var submit = document.getElementById("submit");
var greg = [2, 0, 5, 3];
var doomsdate = [];
var message = document.getElementById("message");
var day;

submit.addEventListener("click", function() {
	 if (validate() === true) {
		run();
	}
	alert(printout(day));
});

function validate() {
	if(isNaN(month) || isNaN(year) || isNaN(date)) {
		alert("Please key in a valid number");
		return false;
	} else if(month < 0 || month > 12) {
		alert("Invalid month");
		return false;
	} else if(date < 0)  { 
		alert("Invalid date");
		return false;
	}
	else 
		return true;
}

function run() {
	var century1 = year.value.substring(0, 2);
	var a = greg[century1%4];
	if(leapyear(year) == 0) {
		doomsdate = [3, 28, 14, 4, 9, 6, 11, 8, 5, 10, 7, 12];
	} else {
		doomsdate = [4, 29, 14, 4, 9, 6, 11, 8, 5, 10, 7, 12];
	}
	var century2 = year.value.substring(2, 4);
	var b = parseInt(century2/12);
	var c = parseInt(century2%12);
	var d = parseInt(c/4);
	var e = a + b + c + d;
	var f = parseInt(e % 7);

	var doomsday = doomsdate[month.value - 1];

	var difference = date.value - doomsday;
	var dayofweek = difference % 7;

	day = (dayofweek + f) % 7;
	return day;
}

function leapyear(ayear){
	if (ayear.value % 4 != 0) { return 0; } 
	else if (ayear.value % 100 != 0) { return 1; }
	else if (ayear.value % 400 != 0) { return 0; }
	else { return 1; }
}

function printout(day) {
	var text = "";
	switch(day) {
		case 0 :
		text = "Sunday";
		break;
		case 1 : 
		text = "Monday";
		break;
		case 2: 
		text = "Tuesday";
		break;
		case 3: 
		text = "Wednesday";
		break;
		case 4: 
		text = "Thursday";
		break;
		case 5: 
		text = "Friday";
		break;
		case 6: 
		text = "Saturday";
		break;
		default:
		text = "Error";
	}
	return text;
}

