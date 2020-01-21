document.getElementById('menu_toggle').onclick = function() {
	(this).classList.toggle('active');
    document.getElementById('mobile_menu').classList.toggle('active');

	if (this.innerHTML === "MENU") {
		this.innerHTML = "CLOSE";
	} else {
		this.innerHTML = "MENU";
	}
};

