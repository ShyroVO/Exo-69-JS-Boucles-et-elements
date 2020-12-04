let commissions = document.getElementById("liste-commissions");
let submitBouton = document.getElementById("submitBouton");
let textSaisie = document.getElementById("textSaisie");
let textSaisieValue = textSaisie.value;

function createNewItem (){
    let newItem = document.createElement("li");
    newItem.innerHTML = textSaisieValue;
    commissions.append(newItem);

}

submitBouton.addEventListener("click",createNewItem());