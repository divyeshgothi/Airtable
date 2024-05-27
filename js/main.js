// Header Menu JS
/*Mobile Menu Show Hide Start*/
function navigation() {
  document.querySelector("html").classList.toggle("menu-open");
}
document.querySelector(".mobile-toggle").addEventListener("click", navigation);
/*Mobile Menu Show Hide End*/
/*Dropdown Menu Start*/
let navitems = document.querySelectorAll(".menu ul li");
navitems.forEach(function (t) {
  t.addEventListener("click", function (e) {
    navitems.forEach(function (e) {
      e !== t || e.classList.contains("subnav-open")
        ? e.classList.remove("subnav-open")
        : e.classList.add("subnav-open");
    });
  });
});
/*Dropdown Menu End*/

// Accordian
let items = document.querySelectorAll(".frequently_accordion .faq-accordions .title");

items.forEach(function (t, index) {
    t.addEventListener("click", function () {
        items.forEach(function (e, i) {
            let parentRow = e.parentElement;
            if (e === t && !parentRow.classList.contains("open")) {
                parentRow.classList.add("open");
                e.classList.add("open");
            } else {
                parentRow.classList.remove("open");
                e.classList.remove("open");
            }
        });
    });

    // Ensure the first item remains open
    if (index === 0) {
        let parentRow = t.parentElement;
        parentRow.classList.add("open");
        t.classList.add("open");
    }
});




