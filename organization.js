let All = document.getElementById("All");
let Knitting = document.getElementById("Knitting");
let Hiking = document.getElementById("Hiking");
let Sewing = document.getElementById("Sewing");
let Quilting = document.getElementById("Quilting");
let Soapmaking = document.getElementById("Soapmaking");
let Crochet = document.getElementById("Crochet");

all_icons = [All, Knitting, Hiking, Sewing, Quilting, Soapmaking, Crochet];
selected = [false, false, false, false, false, false, false];

all_icons.forEach((e, index) => {
  e.addEventListener("click", function () {
    selected[index] = !selected[index];
    toggleColor()
  });
});

function toggleColor() {
  all_icons.forEach((e, index) => {
    if (selected[index] == true) {
      e.style.backgroundColor = "#DAD0D0";
    } else {
      e.style.backgroundColor = "rgb(240, 255, 240)";
    }
  });
}
