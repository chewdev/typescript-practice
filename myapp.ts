import $ = require("jquery");

const appEl: HTMLElement = document.getElementById("app");

appEl.innerHTML = "This element has been changed!";

$("#app").css({ "font-weight": "bold" });
