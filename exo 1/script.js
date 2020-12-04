let commissions = document.getElementById("liste-commissions");
let submitBouton = document.getElementById("submitBouton");
let textSaisie = document.getElementById("textSaisie");
let textSaisieValue = textSaisie;

function createNewItem (){
    let newItem = document.createElement("li");
    newItem.innerHTML = textSaisieValue.value;
    commissions.append(newItem);

}

submitBouton.addEventListener("click",createNewItem());