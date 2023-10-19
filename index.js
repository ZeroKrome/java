// //initialisation variable
// let age = 25;
// //deboguage
// console.log("age :", age);
// //type booleen
// let boolean = false;
// //type chaine de caractère
// let string = "toto";
// //tableaux
// let tab = Array()
// //ou
// let tab2 = []
// // objet
// let obj = {}
// // null
// let nulll = null
// // undefined (indefini)
// let indefini = undefined

// let age = 25;
// let age2 = 12;
// let texte = "25";
// type de notre variable
// console.log("age :", typeof age, age)
// console.log("texte :", typeof texte, texte)
// console.log(age + age2)

// let age = 30;
// let age2 = 5;

// console.log(age)
// console.log(age2)
// console.log("les resultat est :", age + age2)

// correction du prof

// let age = 25;
// on reaffecte une valeur 
// age = age + 5;
// age += 5; es la meme façon d'écrire mais en plus court
// console.log(age)

// let texte = "mathieu";
// let texte2 = texte + " lemaire";
// console.log(texte2)

// let nombre = 50;
// let nombre2 = 62;
// console.log(nombre)
// console.log(nombre2)
// // verification des valeur avec le double egal
// // avec le triple on verifi aussi le type 
// let resultat = nombre === nombre2
// console.log(resultat)
// let resultat2 =nombre > nombre2
// console.log(resultat2)

// couleurs = ["rouge", "vert", "bleu"];
// console.log("Valeur du premier element : ", typeof couleurs[0], couleurs[0]);
// couleurs.push("jaune");
// console.log(typeof couleurs, couleurs);

// let tab = ["toto","tata","titi", "tutu"]

// let newTab = tab.join("-")
// console.log(newTab)

// let newTab2 = tab.toString()
// console.log(newTab2)

// // let newTab3 = tab.filter((toto) => toto = "toto")
// // console.log(newTab3)tab.map( (a, b) => console.log(b, a))

// let newTab4 = tab.shift
// console.log(newTab4)

// let tab2 = ["tutu", "titi"]

// let newTab5 = tab.concat(tab2)
// console.log(newTab5)

// let newTab6 = tab.splice(1,2,"5","6")
// //console.log(newTab6)
// console.log(tab)

// let newTab7 = tab.slice(1,3)
// console.log(newTab7)
// let newTab8 = tab.find ((el) => el === "toto")
// console.log(newTab8)


// if (x > 8) {
//     console.log("dommage");
// } else if (x == 6) {
//     console.log("ok");
// } else if ( x != 12) {
//     console.log("c'est bon");
// } else {
//     console.log("par defaut");
// }

// let y = 12
// // != veut dire different
// if( y != 7) { 
//     console.log("ok")
// }
// (y = 6) ? console.log("ok") : console.log("pas ok")

// attention a ne pas trop en mettre

// let tab = ["toto", 25, true,{nom: "nom"}, ["toto"]];
// let i = 3
//boucle fort
// for (let i = 0; i < 5; i = i + 1)
// for (let i = 0; i < 5; i++) { // version plus courte mais même resultat
//     console.log(tab[i])
// }
// (let i = 1; i < tab.lenght; i++)  ceci es version plus generique 
//pour avoir le meme resultat
// console.log(`la valeur n° ${i} est : ${tab[i]}`);

// while (i < 3) {
//     console.log("ok")
// } ATTENTION CECI ES UNE BOUCLE INFINI COMME LA VALEUR ES TOUJOURS VRAI 
// i++; POUR Y SORTIR
// do {
//     console.log("ok");
//     i++;
// } while (i < 3);

// let variable = 5;

// if ( variable == 1){
//     console.log("1")
// }else if ( variable == 2){
//         console.log("2")
// }else if ( variable == 3){
//         console.log("3")
// } else {
//     console.log("rien")}

//     switch (variable) {
//         case 1:
//             console.log("1")
//             break;
//         case 2:
//             console.log("2")
//             break;
//         case 5:
//             console.log("3")
//              break;
//         default:
//             console.log("pas compris !");
//             break;
// }

// let tab = ["test", 1, true];

// for(let val of tab) {
//     console.log(val)
// }
// console.log("votre age :", "30");
// let age = 30;
// if (age < 18) {
//     console.log("vous etent mineur");
// }else {( age > 18) 
//     console.log("vous etent majeur");
// }
// let couleurs = "rouge";
let couleurs = prompt("veuillez saisir une couleur :");

// switch (couleurs) {
//     case ("rouge"):
//         console.log("danger");
//         break;
//     case ("orange"):
//         console.log("attention");
//         break;
//     case ("vert"):
//         console.log("sécurité");
//         break;
//     default:
//         console.log("aucune valeur");
//         break;
// }
switch (couleurs) {
    case ("rouge"):
       alert("danger");
        break;
    case ("orange"):
        alert("attention");
        break;
    case ("vert"):
        alert("sécurité");
        break;
    default:
       alertr("aucune valeur");
        break;
}

