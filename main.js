const slider = document.querySelector(".slider");
const keys = document.querySelectorAll("#key");
const displayOutput = document.getElementById("displayOutput");
const displayInput = document.getElementById("displayInput");

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

slider.addEventListener("click", () => {
	currentPosition = currentPosition < 3 ? currentPosition + 1 : 1;
	slider.setAttribute("data-position", currentPosition);
});
