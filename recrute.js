
function submitForm(){
let firstName = document.getElementById('name').value ;
let surname = document.getElementById('surname').value ;
let email = document.getElementById('email').value ;
let occupation = document.getElementById('occupation').value ;
let ville = document.getElementById('ville').value ;



if (firstName === "" || surname === "" || email === "" || occupation === "" || ville === "") {
    document.getElementById('error-message').style.display = "block"; // Affiche le message d'erreur
    return false; // Empêcher la soumission du formulaire
} else {
    return true; // Autoriser la soumission du formulaire
}
}

document.getElementById('submit-btn').addEventListener('click', function() {
if (submitForm()) {
    // Rediriger vers une nouvelle page
    window.location.href = "confirmation.html";
}
});

