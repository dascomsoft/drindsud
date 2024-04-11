let open = document.getElementById('openBtn');

let close = document.getElementById('closeBtn');

let links = document.getElementById('nav-links');

let menuBar = document.getElementById('header-container');

open.onclick = ()=>{
    links.style.top = '0'
}

close.onclick = () =>{
 links.style.top = '-100vh'
}






function contactForm(){
    let firstName = document.getElementById('name').value ;
    let surname = document.getElementById('surname').value ;
    let email = document.getElementById('email').value ;
    
    
    if (firstName === "" || surname === "" || email === "") {
        document.getElementById('error-message').style.display = "block"; // Affiche le message d'erreur
        return false; // Empêcher la soumission du formulaire
    } else {
        return true; // Autoriser la soumission du formulaire
    }
    }
    
    document.getElementById('submit-btn').addEventListener('click', function() {
    if (contactForm()) {
        // Rediriger vers une nouvelle page
        window.location.href = "answer.html";
    }
    });