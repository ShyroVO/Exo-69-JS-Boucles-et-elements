let commissions = document.getElementById("liste-commissions");
let textSaisie = document.getElementById("textSaisie").toString();

// creation de l'item de liste

function createNewItem(texte) {
    let newItem = document.createElement("li");
    texte = textSaisie;
    newItem.innerHTML = texte;
    commissions.append(newItem);
    return newItem;
}

function submit (){
    createNewItem();
}