const body = document.body;
const inputText = document.getElementById("inputText");
const inputColor = document.getElementById("inputColor");


inputText.addEventListener("input", () => {
    body.style.backgroundColor = inputText.value;
    inputColor.value = inputText.value;
}) 


