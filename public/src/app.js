import "./style/main.scss";
import fazenda from "../fazenda.json";

const debugTemplate = require("./template/partials/person.handlebars");

function createPeopleList(data) {
    console.log(data)
    var debugContainer = document.getElementsByClassName("ranking-list")[0];
    debugContainer.innerHTML = debugTemplate(data);
}

createPeopleList(fazenda);