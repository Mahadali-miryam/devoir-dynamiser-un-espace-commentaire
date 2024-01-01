//Récupérer liste des commentaires depuis le DOM
let commentList = document.getElementById("comment-list");

//Ajouter un nouveau commentaire à la liste
function addComment(firstName, lastName, message) {

//Créer un mouveau commentaire à la liste
let newComment = document.createElement("div");
    newComment.className = "flex space-x-4 text-sm text-gray-500";
    newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
                  <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                        <p>${message}</p>
                    </div>                
                </div>
             </div>
             `;

//Ajouter le nouveau commentaire à la liste déja existants           
commentList.appendChild(newComment);
}

let form = document.querySelector("form");
//Fonction pour afficher le message d'erreur
function displayErrorMessage() {
    let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
}   

//Masquer le message d'erreur
function hideErrorMessage() {
    let errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "none";
}

//Ecouter l'évenement de la soumission du formulaire
form.addEventListener("submit", (event) => {
// Empeche le comportement par défaut
    event.preventDefault();

//Récupérer les élement du champ du formulaire
let firstNameTag = document.getElementById("first-name");
let lastNameTag = document.getElementById("last-name");
let messageTag = document.getElementById("message");


let firstName = firstNameTag.value;
let lastName = lastNameTag.value;
let message = messageTag.value;

//Appel de la fonction pour ajouter le commentaire
    addComment(firstName, lastName, message);
    console.log(firstName,lastName, message);
});