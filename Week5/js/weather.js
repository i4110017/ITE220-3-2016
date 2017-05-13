window.onload = function() {
	function render() {
		var bangkok = document.getElementById("bangkok");
		bangkok.addEventListener("click", function(){
			//alert("bangkok");
			var url = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=55d193b8cc97a9dfba634b0c0297f27a";
			$.ajax({
				type: "GET",
				url: url,
				success: function(data){
					var temp = data.main.temp -273.15;
					var ele = document.getElementById("temp");
					ele.textContent = temp.toFixed(2);

					var icon = data.weather[0].icon;
					var ele2 = document.getElementById("icon");
					ele2.innerHTML = "<img src='http://openweathermap.org/img/w/"+icon+".png' />"; 

					var humidity = data.main.humidity ;
					var ele3 = document.getElementById("humidity");
					ele3.textContent = humidity;
				}

			});
		});

	}
	render();
};








