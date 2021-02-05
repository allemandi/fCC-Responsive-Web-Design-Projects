var intYear = new Date().getFullYear();
// get current year
var replaceYear = "CopyrightYearHere";
// Substitution text

$('#copyright').each(function () {$(this).text($(this).text().replace(replaceYear, intYear));
});