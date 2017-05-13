var marvel = {
	renderCharacter: function() {
		var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=43634ab5f5b50782274a50ec7e7d9811&hash=4761558e45170642234948dc70f24c20";

		var message = document.getElementById("message");
		var container = document.getElementById("marvel-container");
		var footer = document.getElementById("footer");

		$.ajax({
			url: url,
			type: "GET",
			beforeSend: function() {
				message.innerHTML = "<p class='lead'>Loading..</p>";
			},
			complete: function() {
				message.innerHTML = "<p class='lead'>Successfully done!</p>";
			},
			success: function(data) {
				var string = "";
				string += "<div class='row'>";
				for(var i = 0 ; i < data.data.results.length ; i++) {
					var element = data.data.results[i];
					var image = element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension;

					string += "<div class='col-md-3'>";
					string += "  <a href='" + element.urls[0].url +"' target='_blank'>";  
					string += "    <image src="+image + " />";
					string += "  </a>";
					string += "  <h3 class='name'>"+element.name+"</h3>";
					string += "</div>";

					if(i != 0 && (i+1) % 4 == 0) {
						string += "</div>";
						string += "<div class='row'>";
					}
				}

				container.innerHTML = string;

				footer.innerHTML = "<p>"+ data.attributionHTML +"</p>";

			},
			error: function() {
				message.innerHTML = "<p class='lead'>We are sorry!</p>";
			}
		});
	}
};

marvel.renderCharacter();

