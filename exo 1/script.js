let commissions = document.getElementById("liste-commissions");

document.getElementById('boutonEnvois').addEventListener('click', function ajoutItem () {
    let textSaisie = document.getElementById("textSaisie").value;
    let newItem = document.createElement("li");
    commissions.append(newItem);
    newItem.innerHTML = textSaisie;
})

document.getElementById('boutonSup').addEventListener('click', function supItem (){

    if (commissions.childElementCount !== 0) {
        commissions.removeChild(commissions.lastElementChild);
    }

})
