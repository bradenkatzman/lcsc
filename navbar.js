//array of all links
	var links = document.getElementsByClassName("link");

	//add event listener to each link
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", navigation, false);
	}


	function navigation() {
		//concatenate link value with .html file extension
		var value = this.getAttribute("value") + ".html";

		document.location.href = value;
	}