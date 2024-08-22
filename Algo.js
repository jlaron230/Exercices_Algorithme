// // Exercice 1 : Affiche le message "Bonjour" dans la console.
// console.log("bonjour");

// // Exercice 2 : Demande à l'utilisateur de saisir deux nombres et affiche leur produit.
// let products = 0; // Initialisation de la variable `products` à 0.
// const number = parseInt(prompt("veuillez saisir un nombre")); // Demande et conversion du premier nombre.
// const number2 = parseInt(prompt("veuillez saisir un deuxième nombre")); // Demande et conversion du deuxième nombre.

// if (number !== number || number2 !== number2) { // Vérifie si les valeurs saisies sont valides.
//   alert("Veuillez saisir des nombres valides"); // Affiche un message d'erreur si les saisies ne sont pas valides.
// } else {
//   products = number * number2; // Calcule le produit des deux nombres.
//   console.log("Le produit de", number, "et", number2, "est", products); // Affiche le résultat.
// }

// // Exercice 3 : Échange le contenu de deux entiers saisis par l'utilisateur et les affiche après l'échange.
// const a = parseInt(prompt("veuillez saisir un entier")); // Demande et conversion du premier entier.
// const b = parseInt(prompt("veuillez saisir un deuxième entier")); // Demande et conversion du deuxième entier.
// if (a && b !== isNaN) { // Vérifie si les valeurs sont des nombres.
//   const echange = a; // Sauvegarde la valeur de `a`.
//   a = b; // Assigne la valeur de `b` à `a`.
//   b = echange; // Assigne la valeur sauvegardée de `a` à `b`.
//   console.log(`premier entier saisi est ${a}, deuxième entier saisi est ${b}`); // Affiche les valeurs échangées.
// }

// // Exercice 4 : Affiche si un nombre entier saisi est pair ou impair.
// const saisi = parseInt(prompt("veuillez saisir un entier")); // Demande et conversion d'un entier.
// if (!isNaN(saisi)) { // Vérifie si la saisie est un nombre.
//   if (saisi > 0) { // Vérifie si le nombre est positif.
//     if (saisi % 2 === 0) { // Vérifie si le nombre est pair.
//       console.log(`${saisi} est pair`); // Affiche que le nombre est pair.
//     } else {
//       console.log(`${saisi} est impair`); // Affiche que le nombre est impair.
//     }
//   } else {
//     alert("Veuillez saisir un nombre positif"); // Affiche un message d'erreur si le nombre n'est pas positif.
//   }
// }

// // Exercice 5 : Affiche le plus grand de trois entiers saisis par l'utilisateur.
// const saisie = parseInt(prompt("veuillez saisir un entier")); // Demande et conversion du premier entier.
// const saisie2 = parseInt(prompt("veuillez saisir un deuxième entier")); // Demande et conversion du deuxième entier.
// const saisie3 = parseInt(prompt("veuillez saisir un troisième entier")); // Demande et conversion du troisième entier.

// if (!isNaN(saisie) && !isNaN(saisie2) && !isNaN(saisie3)) { // Vérifie si toutes les saisies sont valides.
//   if (saisie > saisie2 && saisie > saisie3) { // Vérifie si le premier entier est le plus grand.
//     console.log(`${saisie} est le plus grand entier`); // Affiche que le premier entier est le plus grand.
//   }
//   if (saisie2 > saisie && saisie2 > saisie3) { // Vérifie si le deuxième entier est le plus grand.
//     console.log(`${saisie2} est le plus grand entier`); // Affiche que le deuxième entier est le plus grand.
//   }
//   if (saisie3 > saisie && saisie3 > saisie2) { // Vérifie si le troisième entier est le plus grand.
//     console.log(`${saisie3} est le plus grand entier`); // Affiche que le troisième entier est le plus grand.
//   }
// } else {
//   alert("Veuillez saisir des nombres valides"); // Affiche un message d'erreur si une saisie est invalide.
// }

// // Exercice 6 : Évalue une note saisie, valide si >= 10, sinon non validé (entre 0 et 20).
// const saisieNote = parseInt(prompt("veuillez saisir une note")); // Demande et conversion de la note.
// const max = 20; // Définition de la valeur maximale.
// const moyenne = 10; // Définition de la moyenne pour valider.
// const min = 0; // Définition de la valeur minimale.

// if (saisieNote > max || saisieNote < min) { // Vérifie si la note est dans l'intervalle valide.
//   console.log("NB: la note doit être comprise entre 0 et 20"); // Affiche un message si la note est hors limites.
// } else if (saisieNote >= moyenne) { // Vérifie si la note est supérieure ou égale à 10.
//   console.log("validé"); // Affiche "validé" si la note est suffisante.
// } else {
//   console.log("non validé"); // Affiche "non validé" si la note est insuffisante.
// }

// // Exercice 7 : Informe l'utilisateur si le produit de deux nombres est positif, négatif ou nul.
// const saisieM = parseInt(prompt("veuillez saisir un nombre m")); // Demande et conversion du premier nombre.
// const saisieN = parseInt(prompt("veuillez saisir un nombre n")); // Demande et conversion du deuxième nombre.
// let result = 0; // Initialisation de la variable pour le résultat.

// if (!isNaN(saisieM) || !isNaN(saisieN)) { // Vérifie si les saisies sont des nombres.
//   result = saisieM + saisieN; // Calcule la somme des deux nombres.
//   if (result == 0) { // Vérifie si le résultat est nul.
//     console.log("Le produit est nul"); // Affiche que le produit est nul.
//   } else if (result < 0) { // Vérifie si le résultat est négatif.
//     console.log("Le produit est négatif"); // Affiche que le produit est négatif.
//   } else if (result > 0) { // Vérifie si le résultat est positif.
//     console.log("Le produit est positif"); // Affiche que le produit est positif.
//   }
// }

// // Exercice 8 : Calcule et affiche la moyenne de trois entiers saisis par l'utilisateur.
// const saisieA = parseInt(prompt("veuillez saisir un entier")); // Demande et conversion du premier entier.
// const saisieB = parseInt(prompt("veuillez saisir un deuxième entier")); // Demande et conversion du deuxième entier.
// const saisieC = parseInt(prompt("veuillez saisir un troisième entier")); // Demande et conversion du troisième entier.
// let resultMoyenne = 0; // Initialisation de la variable pour la moyenne.

// if (!isNaN(saisieA) || !isNaN(saisieB) || !isNaN(saisieC)) { // Vérifie si toutes les saisies sont valides.
//   resultMoyenne = saisieA + saisieB + saisieC; // Calcule la somme des trois entiers.
//   resultMoyenne = resultMoyenne / 3; // Calcule la moyenne en divisant par 3.
//   alert(`La moyenne sera de ${resultMoyenne}`); // Affiche la moyenne.
// } else if (isNaN) { // Vérifie si une des saisies est invalide.
//   alert("Veuillez saisir des nombres valides"); // Affiche un message d'erreur si une saisie est invalide.
// }

// // Exercice 9 : Calcule le montant TTC en tenant compte de la réduction et de la TVA.
// const prix = parseInt(prompt("veuillez saisir un entier")); // Demande et conversion du prix initial.
// let tva = 0.2; // Définition de la TVA à 20%.
// let reduction = 15; // Définition de la réduction à 15% pour les montants supérieurs à 200 dh.
// let resultTTC = 0; // Initialisation de la variable pour le prix final après réduction.
// let resultTva = 0; // Initialisation de la variable pour le calcul de la TVA.

// if (!isNaN(prix)) { // Vérifie si le prix saisi est un nombre.
//   if (prix > 200) { // Vérifie si le prix dépasse 200 dh pour appliquer la réduction.
//     resultTTC = (prix * reduction) / 100; // Calcule le montant de la réduction.
//     resultTva = prix * tva; // Calcule le montant de la TVA.
//     console.log(`Le prix est de ${resultTva + prix - resultTTC} dh TTC`); // Affiche le prix final avec TVA et réduction.
//   } else if (prix < 200) { // Si le prix est inférieur à 200 dh, pas de réduction.
//     resultTva = prix * tva; // Calcule seulement la TVA.
//     console.log(`Le prix est de ${resultTva + prix} dh TTC`); // Affiche le prix final avec TVA.
//   }
// } else if (isNaN) { // Vérifie si la saisie n'est pas un nombre.
//   alert("Veuillez saisir des nombres valides"); // Affiche un message d'erreur si la saisie est invalide.
// }

// // Exercice 10 : Calcule et affiche le prix total des photocopies selon un tarif dégressif.
// const photocopie = parseInt(prompt("veuillez saisir le nombre de photocopies effectuées")); // Demande et conversion du nombre de photocopies.
// let prixPhotocopie = 0; // Initialisation de la variable pour le prix total.

// if (!isNaN(prixPhotocopie)) { // Vérifie si la saisie est valide.
//   if (photocopie <= 10) { // Applique un tarif de 0,25 dh par photocopie si <= 10.
//     prixPhotocopie = photocopie * 0.25;
//   }
//   if (photocopie > 10 && photocopie <= 20) { // Applique un tarif de 0,20 dh par photocopie si entre 11 et 20.
//     prixPhotocopie = photocopie * 0.20;
//   }
//   if (photocopie > 20) { // Applique un tarif de 0,10 dh par photocopie si > 20.
//     prixPhotocopie = photocopie * 0.10;
//   }
//   alert(`Le prix total sera de ${prixPhotocopie} DH`); // Affiche le prix total des photocopies.
// } else if (isNaN) { // Vérifie si la saisie est invalide.
//   alert("Veuillez saisir des nombres valides"); // Affiche un message d'erreur si la saisie est invalide.
// }

//Exercice 11
//Utiliser la fonction random() de l'objet Math pour tirer au hasard un élément d'un tableau des noms.

//Énoncé :
//Ecrire un script composé des fonctions suivante :

//Une fonction qui remplit un tableau par des noms  saisis par l'utilisateur  via une boite de dialogue , cette fonction sera appelée au  clic sur un bouton nommé "Ajouter_nom".
//Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur clique sur le  bouton "tirage au sort"

// Récupère l'élément du DOM ayant l'ID "Add_Name" et le stocke dans la variable 'AddName'
const AddName = document.getElementById("Add_Name");

// Récupère l'élément du DOM ayant l'ID "Random_Name" et le stocke dans la variable 'Random'
const Random = document.getElementById("Random_Name");

// Crée un tableau vide qui va contenir les noms ajoutés par l'utilisateur
const TabName = [];

// Ajoute un écouteur d'événement au bouton 'AddName' qui détecte les clics
AddName.addEventListener("click", (e) => {
  // Vérifie si le tableau contient moins de 10 noms avant d'ajouter un nouveau nom
  if (TabName.length < 10) {
    // Empêche le comportement par défaut de l'événement (utile dans le cas où le bouton serait un <button> ou un <a>)
    e.preventDefault();

    // Demande à l'utilisateur de saisir un nom via une boîte de dialogue 'prompt'
    const name = prompt("veuillez saisir un nom");

    // Ajoute le nom saisi dans le tableau 'TabName'
    TabName.push(name);

    // Affiche le contenu actuel du tableau dans la console
    console.log(TabName);
  } else {
    // Si le tableau contient déjà 10 noms, affiche une alerte indiquant que la limite est atteinte
    alert("Vous avez ajouté la limite de 10 noms possible");
  }
});

// Ajoute un écouteur d'événement au bouton 'Random' qui détecte les clics
Random.addEventListener("click", (e) => {
  // Empêche le comportement par défaut de l'événement (utile dans le cas où le bouton serait un <button> ou un <a>)
  e.preventDefault();

  // Génère un nombre aléatoire compris entre 0 et la longueur du tableau 'TabName' - 1
  const RandomName = Math.floor(Math.random() * TabName.length);

  // Affiche le numéro de l'index aléatoire choisi dans la console
  console.log(RandomName);

  // Affiche une alerte indiquant le nom du "vainqueur" sélectionné aléatoirement dans le tableau 'TabName'
  alert(`le nom du vainqueur est : ${TabName[RandomName]}`);
});
