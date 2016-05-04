
//GrundOpbygning af kalender
var opdaterKalender = function(year, month){
	var d1 = new Date();
    d1.setFullYear(year);
	d1.setMonth(month-1);
	
	var firstDay = firstDayOfMonth(d1);
	var dEnd = daysInMonth(d1);
	
	document.getElementById("kalenderOverskrift").innerHTML = d1.getMonth()+1 + " - " + d1.getFullYear();
	for(i=1; i <= 42; i++) {
		var c = document.getElementById('kalenderFeltNr' + i);
		c.innerHTML = "";
		c.className = "kalenderFelt";
	}
	for(i=0; i < dEnd; i++) {
		var felt = document.getElementById('kalenderFeltNr' + (firstDay + i));felt.innerHTML = i+1;
		felt.className += ' dagIValgtMaaned';	
	
	}
	//Indskriv datoer i måneden før og måneden efter
	d1.setMonth(d1.getMonth() - 1);
	var dEndFoer = daysInMonth(d1);
	for(i=0; i < firstDay-1; i++) {
		var felt = document.getElementById('kalenderFeltNr' + (firstDay - (i+1)));
		felt.innerHTML = dEndFoer - i;
		felt.className += ' ikkeDagIValgtMaaned';
	}
	for(i = dEnd; i <= 42-firstDay; i++) {
		var felt = document.getElementById('kalenderFeltNr' + (firstDay + i));
		felt.innerHTML = i - dEnd + 1;
		felt.className += ' ikkeDagIValgtMaaned';
	}
	
}	
//Ugedag for månedens første dag
var firstDayOfMonth = function(d) {
	var dato = d;
	dato.setDate(1);
	if (dato.getDay() == 0) return 7;
	else return dato.getDay();
}
//Antal dage i måneden
var daysInMonth = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	var d2 = new Date(year, month+1, 0);
	return d2.getDate();
}	


//skal modtage d fra server
var d = new Date();

opdaterKalender(d.getFullYear(),d.getMonth()+1);

var skiftKalenderMaaned = function(x) {
    var monthNu = document.getElementById('kalenderOverskrift').innerHTML.substr(0,2);
    var aarNu = document.getElementById('kalenderOverskrift').innerHTML.substr(4);
    opdaterKalender(Number(aarNu), Number(monthNu)+x);   
}