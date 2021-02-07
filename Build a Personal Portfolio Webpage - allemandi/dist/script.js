/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}


var intYear = new Date().getFullYear();
// get current year
var replaceYear = "CopyrightYearHere";
// Substitution text

$('#copyright').each(function () {$(this).text($(this).text().replace(replaceYear, intYear));
});