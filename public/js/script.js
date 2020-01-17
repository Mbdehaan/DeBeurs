// bij klik op de menu_toggle , wordt de functie uitgevoerd
document.getElementById('menu_toggle').onclick = function() {
	//om de tekstkleur te veranderen naar wit
	(this).classList.toggle('active');

	//om het menu aan te geven dat hij uit moet klappen
    document.getElementById('mobile_menu').classList.toggle('active');

	// tekst veranderen van menu naar close en terug
	if (this.innerHTML === "MENU") {
		this.innerHTML = "CLOSE";
	} else {
		this.innerHTML = "MENU";
	}
};