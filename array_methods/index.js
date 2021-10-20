let array1 = ["Javascript", "PHP", "Python", "Java", ".net"];
let array2 = ["Solidity", "Ruby"];
let bigArray = [...array1, ...array2];
let text1 = "The quick brown fox jumps over the lazy dog.";

// Slice(X, Y) : 
// X -> Supprime les X premiers items (peut commencer par la fin avec "-")
// Y -> Supprime ce qui dépasse les Y premiers
const arr_slice1 = array1.slice(2); // ["Python", "Java", ".net"]
const arr_slice2 = array1.slice(2, 4); // ['Python', 'Java']

// Splice(X, Y, Z) :
// X -> L'indice qui sera modifié
// Y -> Le nombre d'éléments après X (0 signifie qu'on va ajouter sans remplacer)
// Z remplacera Y
const arr_splice1 = array1.splice(1, 3, ...array2); // ["PHP", "Python", "Java"]
// array1 = ["Javascript", "Solidity", "Ruby", ".net"]

// Split : Contraire de .join, transforme une string en array
const split1 = text1.split(' '); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// Join Contraire de .split, transforme un array en string
const join1 = split1.join(' T '); // The T quick T brown T fox T jumps T over T the T lazy T dog.

// Shift : supprime le 1er
// Pop : supprime le dernier
// Unshift : ajoute un élément au début du tableau
// Push : ajoute un élément à la fin du tableau

// Cherche l'existence d'un item dans un array
const check_arr1 = array1.indexOf('PHP'); // 1
const check_arr2 = array1.indexOf('MSN'); // -1
// OU :
const check_arr3 = array1.some(language => language === "PHP"); // true


/**
 * Map VS ForEach, pourquoi l'un et pas l'autre ? Ma théorie.
 * 
 * Map va servir seulement à modifier chaque item du array ou object
 * 
 * ForEach est plus utilisé pour afficher les données ou créer/mettre à jour d'autres données
 */
