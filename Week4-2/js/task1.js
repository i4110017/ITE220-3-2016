window.onload = function() {
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;

		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;

		document.getElementById("location").textContent = window.location.pathname;

		document.getElementById("lastmo").textContent = document.lastModified;


		var word = "Web 2 is awesome!";
		document.getElementById("myword").textContent = word;


		document.getElementById("awesome").textContent = word.indexOf("awesome") > -1 ? "YES" : "NO";
		
	},
	resize: function() {
		window.addEventListener("resize", this.render);
	},
	devInfo: function() {
		var ele = document.getElementById("dev-info");

		var info = document.getElementById("myinfo");

		ele.addEventListener("click", function() {
			info.innerHTML = "Mintra <b>Ruensuk</b>";
		});
	}
};
task1.render();
task1.resize();
task1.devInfo();
}







