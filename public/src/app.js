import "./style/main.scss";
import fazenda from "../fazenda.json";
import Handlebars from "handlebars/runtime";
const debugTemplate = require("./template/partials/person.handlebars");
import fazendaLogo from "./images/logo-fazenda.png";

const logoImg = document.getElementsByClassName("header-logo-image")[0];
logoImg.src = fazendaLogo;


Handlebars.registerHelper("getPositive", function(positive, negative) {
    if (positive && negative) {
        const total = Number(positive) + Number(negative);
    
        const percentage = (positive / total) * 100;
    
        return `${Math.round(percentage)}%`;
    }
    return "?";
});

Handlebars.registerHelper("getNegative", function(positive, negative) {
    if (positive && negative) {
        const total = Number(positive) + Number(negative);
    
        const percentage = (negative / total) * 100;
    
        return `${Math.round(percentage)}%`;
    }
    return "?";
});

Handlebars.registerHelper("getPersonIndex", function(index) {
    return Number(index) + 1;
});

function createPeopleList(data) {
    console.log(data)
    var debugContainer = document.getElementsByClassName("ranking-list")[0];
    debugContainer.innerHTML = debugTemplate(data);
}

createPeopleList(fazenda);
