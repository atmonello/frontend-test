import "./style/main.scss";
import fazenda from "../fazenda.json";
const debugTemplate = require("./template/partials/person.handlebars");

import Handlebars from "handlebars/runtime";

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

function createPeopleList(data) {
    console.log(data)
    var debugContainer = document.getElementsByClassName("ranking-list")[0];
    debugContainer.innerHTML = debugTemplate(data);
}

createPeopleList(fazenda);