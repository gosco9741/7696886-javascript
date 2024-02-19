// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

For (let i=0; i<3; i++){
let motUtilisateur = prompt("Entrer le mot " + listeMots[i])
if (entrer === listeMots[i]){
    score+=1;
}
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")
