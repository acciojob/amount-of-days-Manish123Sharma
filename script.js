//your JS code here. If required.
function daysOfAYear(year){
	if(year % 4 == 0){
		return 366;
	}
	else{
		return 365;
	}
}
year = prompt('Enter Yeare');
a = daysOfAYear(year);
console.log(a);