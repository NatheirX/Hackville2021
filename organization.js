let All = document.getElementById("All");
let Knitting = document.getElementById("Knitting");
let Hiking = document.getElementById("Hiking");
let Sewing = document.getElementById("Sewing");
let Quilting = document.getElementById("Quilting");
let Soapmaking = document.getElementById("Soapmaking");
let Crochet = document.getElementById("Crochet");

let c1 = document.getElementById("c1"); //knitting, crochet Knitters
let c2 = document.getElementById("c2"); //sewing, textiles, upcycling AnimalRescue
let c3 = document.getElementById("c3"); //sewing GirlGuides
let c4 = document.getElementById("c4"); //knitting, crochet Chesterfield
let c5 = document.getElementById("c5"); //soapmaking, sewing FoodBank
let c6 = document.getElementById("c6"); //all Alzheimers

class Organization {
  constructor(tags) {
    this.tags = tags;
  }
}

Knitters = new Organization(["Knitting", "Crochet"]);
AnimalRescue = new Organization(["Sewing", "Textiles"]);
GirlGuides = new Organization(["Sewing"]);
Chesterfield = new Organization(["Knitting", "Crochet"]);
FoodBank = new Organization(["Soapmaking", "Sewing"]);
Alzheimers = new Organization([
  "Knitting",
  "Hiking",
  "Sewing",
  "Quilting",
  "Soapmaking",
  "Crochet",
]);

// for (var organization in organization_list){
//     console.log(organization)
// }

let all_icons = [All, Knitting, Hiking, Sewing, Quilting, Soapmaking, Crochet];
let selected = [false, false, false, false, false, false, false];
let selected_activities = [];

let organization_list = [c1, c2, c3, c4, c5, c6];

let organization_objects = [
  Knitters,
  AnimalRescue,
  GirlGuides,
  Chesterfield,
  FoodBank,
  Alzheimers,
];

function search() {
  selected_activities.forEach((activity) => {
    console.log(activity);
    organization_list.forEach((org_div, index) => {
      org_obj = organization_objects[index];
      console.log(org_obj);
      if (org_obj.tags.includes(activity)) {
        org_div.style.display = "flex";
        console.log(org_div);
      } else {
        org_div.style.display = "none";
      }
    });
  });
}

let all_activities = [
  "All",
  "Knitting",
  "Hiking",
  "Sewing",
  "Quilting",
  "Soapmaking",
  "Crochet",
];

// change button window colours
all_icons.forEach((e, index) => {
  e.addEventListener("click", function () {
    selected[index] = !selected[index];
    selected.forEach((select, index2) => {
      if (select) {
        selected_activities.push(all_activities[index2]);
      }
    });
    toggleColor();
    search();
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
