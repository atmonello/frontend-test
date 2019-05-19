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
    var debugContainer = document.getElementsByClassName("ranking-list")[0];

    const validVotes = data.data.filter(item => {
        return (item.positive && item.negative) && (typeof item.positive == 'number' || typeof item.negative == 'number');
    });

    const ignoreVotes = data.data.filter(item => {
        return (!item.positive && !item.negative) || (typeof item.positive != 'number' || typeof item.negative != 'number');
    });

    validVotes.sort((a, b) => {
        const posA = (Number(a.positive) / (Number(a.positive) + Number(a.negative))) * 100;
        const posB = (Number(b.positive) / (Number(b.positive) + Number(b.negative))) * 100;

        if (posA > posB) return -1;
        if (posA < posB) return 1;
        return 0;
    });

    ignoreVotes.sort((a, b) => {
        const posA = (Number(a.positive) / (Number(a.positive) + Number(a.negative))) * 100;
        const posB = (Number(b.positive) / (Number(b.positive) + Number(b.negative))) * 100;

        if (posA > posB) return -1;
        if (posA < posB) return 1;
        return 0;
    });

    ignoreVotes.map((item, index) => {
        validVotes.push(item);
    })

    const obj = {
        data: validVotes,
    };
    
    debugContainer.innerHTML = debugTemplate(obj);
}

createPeopleList(fazenda);
