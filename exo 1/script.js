let commissions = document.getElementById("liste-commissions");
let textSaisie = document.getElementById("textSaisie").toString();

// creation de l'item de liste
function createNewItem(text) {
    let newItem = document.createElement("li");
    newItem.innerHTML = text;
    commissions.append(newItem);
    return newItem;
}

function submit (){
    createNewItem(textSaisie.toString());
}

console.log(submit());