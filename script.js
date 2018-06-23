var itemname = document.getElementById("inputitem");
var button = document.getElementById("button");
var list = document.querySelector("ul");
button.addEventListener("click", function() {
	console.log("Reeeeeeeeeeeeeeeeeeeeeeeeep");
	var li = document.createElement("li");
	if(itemname.value !== "") {
		li.appendChild(document.createTextNode(itemname.value));
		list.appendChild(li);
		itemname.value = ""
	}
	
})
itemname.addEventListener("keypress", function(event) {

	if(event.keyCode == 13) {
		console.log("Reeeeeeeeeeeeeeeeeeeeeeeeep");
		var li = document.createElement("li");
		if(itemname.value !== "") {
			li.appendChild(document.createTextNode(itemname.value));
			list.appendChild(li);
			itemname.value = ""
		}
	}
	
	
})