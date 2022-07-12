let text = document.getElementById("textType");
let fontsSize = document.getElementById("sizeFont")
let textColors = document.getElementById("textColor");
let textBackColor = document.getElementById("textBackColor");

function addBold() {
  text.classList.toggle("bold");
}

function addItalic() {
  text.classList.toggle("italic");
}

function addUnderline() {
  text.classList.toggle("underline");
}

function changeSize() {
  text.style.fontSize = fontsSize.value + "px";
}

function changeTextColor() {
  text.style.color = textColors.value;
}


fontsSize.onchange = changeSize;
document.getElementById("bold").onclick = addBold;
document.getElementById("italic").onclick = addItalic;
document.getElementById("underline").onclick = addUnderline;
textColors.onchange = changeTextColor;