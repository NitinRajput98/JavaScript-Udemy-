const task3Element = document.getElementById("task-3");
function simpleAlert() {
  alert("Hello");
}
function inputAlert(name) {
  alert(name);
}

simpleAlert();
inputAlert();

task3Element.addEventListener("click", simpleAlert);

function combinedString(a, b, c) {
  return a + b + c;
}

alert(combinedString("Hello", "Nitin", "Rajput"));
