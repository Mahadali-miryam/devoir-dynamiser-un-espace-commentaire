//Récupération des élements du DOM
let commentForm = document.querySelector("form");
let commentList = document.getElementById("comment-list");
let errorMessage = document.getElementById("error-message");
    
// ajout d'un écouteur d'événement de la soumission du formulaire
commentForm.addEventListener("submit", (event) => {
// Empecher le comportement par défaut du formulaire(rechargement)
    event.preventDefault();

//récupérer les valeurs du champs du formulaire
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let message = document.getElementById("message").value;
    
//valider les champs du formulaire
if (firstName.trim() === '' || lastName.trim() === '' || message.trim() === '') {
//affichage du message d'erreur 
        errorMessage.style.display = "block"
    
} else { 
// Création d'un nouvel élément de commentaire
let newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
    
            newComment.innerHTML = `
                <div class="flex-1 py-10 border-t border-gray-200">
                     <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                            <p>${message}</p>
                        </div>
                    </div>
                 `;
    
// Ajout du nouveau commentaire à la liste existante
commentList.appendChild(newComment);
    
// Réinitialisation des champs du formulaire
commentForm.reset();
    
// Cacher le message d'erreur 
errorMessage.style.display = "none";

console.log(firstName, lastName, message)
}
});