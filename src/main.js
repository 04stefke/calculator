const slider = document.querySelector(".slider");
const keys = document.querySelectorAll("#key");
const displayOutput = document.getElementById("displayOutput");
const displayInput = document.getElementById("displayInput");
const body = document.body;

let input = "";
let currentPosition = 1;

for (let key of keys) {
	const value = key.value;
	key.addEventListener("click", () => {
		if (value == "reset") {
			input = "";
			displayOutput.textContent = "";
			displayInput.textContent = "";
		} else if (value == "del") {
			input = input.slice(0, -1);
			displayOutput.textContent = input;
			displayInput.textContent = "";
		} else if (value == "=") {
			let result = eval(input);
			console.log(input);
			displayInput.textContent = result;
		} else {
			input += value;
			displayOutput.textContent = input;
		}
	});
}

function switchTheme(position) {
	currentPosition = position;
	body.classList.remove("theme-1", "theme-2", "theme-3");
	body.classList.add(`theme-${position}`);
	slider.setAttribute("data-position", currentPosition);

	localStorage.setItem("themePosition", position);
}

slider.addEventListener("click", () => {
	currentPosition = currentPosition < 3 ? currentPosition + 1 : 1;
	switchTheme(currentPosition);
});

window.addEventListener("DOMContentLoaded", () => {
	const savedPosition = localStorage.getItem('themePosition')
	if(savedPosition) {
		switchTheme(Number(savedPosition));
	}else {
		switchTheme(1); 
	}
})


