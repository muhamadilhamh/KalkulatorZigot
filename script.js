let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
let input,
  output = "";
const inputField = document.getElementById("inputField");
const outputField = document.getElementById("outputField");

function encode() {
  input = inputField.value;
  input = input.split("");
  output = "";
  input.forEach(encodeForeach);

  outputField.value = output;
}

function encodeForeach(item, index) {
  let isLowercase = false;
  if (item === item.toLowerCase()) {
    isLowercase = true;
  }
  let position = alphabet.indexOf(item.toUpperCase());
  if (position != -1) {
    position += 13;
    if (position >= alphabet.length) {
      position -= alphabet.length;
    }
    item = alphabet[position];
  }
  if (isLowercase) {
    item = item.toLowerCase();
  }
  output += item;
}

const selectField = function(element) {
  element.select();
  element.setSelectionRange(0, 99999);
};
const deselectField = function() {
  document.activeElement.selectionStart = document.activeElement.selectionEnd;
};
const copyValue = function(element) {
  // copy to clipboard
  selectField(outputField);
  document.execCommand("copy");
  deselectField();
  showTooltip(element, "Copied!");
};
const switchFields = function() {
  // switch output and input text
  input = inputField.value;
  output = outputField.value;
  inputField.value = output;
  outputField.value = input;
};
const cleanFields = function() {
  // wipe all field values
  inputField.value = "";
  outputField.value = "";
};
const showTooltip = function(element, message) {
  // shows the tooltip
  element.setAttribute("data-tooltip", message);
};
const hideTooltip = function(element) {
  // hides the tooltip
  element.removeAttribute("data-tooltip");
};
