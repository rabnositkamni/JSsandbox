// добавление и удаление класса active у первого объекта с классом item

let item = document.querySelector('.item');
console.log(item.style)

item.onclick = (event) => {
	event.target.classList.toggle('active')
}


//добавление и удаление класса у одной айди при нажатии на другую

let content = document.getElementById("content");
let button = document.getElementById("show-more");

button.onclick = function () {
	if (content.className == "open") {
		content.className = "";
		button.innerHTML = "Show More";
	}
	else {
		content.className = "open";
		button.innerHTML = "Show Less";
	}
};