let baliseGoogle = document.getElementById("google");
console.log(baliseGoogle);
//console.log("Hello world :)");
console.log(baliseGoogle.href);
// console.log(baliseGoogle.href) 
// permet d'accedé au chemin href de la balise html
// 
// console.log(baliseGoogle.id);
// permet d'accedé au flag ID et d'optenire ca valeur pour le cas :
console.log(baliseGoogle.id);
// cmd> 'google'

console.log(baliseGoogle.innerHTML);
// permet lire le contenue de la balise HTML <a>
// cmd> 'Lien vers Google'
// ce texte 
let balisesLI = document.querySelectorAll('li');
for (let i=0; i<balisesLI.length; i++) {
	console.log(balisesLI[i]);
}
// document.querySelectorAll() permet de prendre tout les élément d'une balise HTML

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }


let baliseTexte = document.getElementById("texte"); 
baliseTexte.style.backgroundColor = "#9ACD32";


let monBouton = document.getElementById("monbtn"); 
monBouton.addEventListener("click", function () { 
 console.log("Bonjour !"); 
}
)

let baliseNom = document.getElementById("name"); 
let nom = baliseNom.value; 
console.log(nom);


let baliseAccepter = document.getElementById("accepter"); 
let accepter = baliseAccepter.checked; 
console.log(accepter);

let baliseCoul = document.querySelectorAll('input[name="couleur"]');
let couleur = ""; 
for (let i=0; i<baliseCoul.length; i++) { 
 if (baliseCoul[i].checked){ 
  couleur = baliseCoul[i].value; 
  break; 
 } 
} 
console.log(couleur); 

//let userNameVar = prompt("comment vous applez vous? prénom:");
//let userSurNameVar = prompt("nom:");
let userNameDisplay = document.getElementById('userName');

userNameDisplay.innerHTML = "bonjour " + userNameVar + " " + userSurNameVar + ".";

let randomNumber = getRandomInt(101);
console.log(randomNumber);

let tryRemain = 5;
//let nombre = prompt("devinez le nombre mystère: il reste "+ tryRemain + "essais");

while(parseInt(nombre) != randomNumber){
   tryRemain--;
   if (tryRemain <=0){break;}else{
      if (parseInt(nombre) > randomNumber){
         nombre = prompt("trop grand: "+ tryRemain + "essais");
      }else{
         nombre = prompt("trop petit: "+ tryRemain + "essais");
      }}
}
if (tryRemain <=0){
   nombre = prompt("bravo vous avez raté bande de merdouillette griés!");
}else{
   nombre = prompt("bravo vous avez réussi!");
}

let bodyCount = 0;
function changeBackground(){
   console.log(bodyCount);

   bodyy = document.getElementById("bodyID");
   console.log(bodyy.alt);
   if (bodyCount == 0){
      bodyy.style = "background-color: cyan;";

   }
   if (bodyCount == 1){
      bodyy.style = "background-color: black;";

   }
   
   if (bodyCount > 2){
      bodyy.style = "background-color: white;";
      bodyCount = -1;
   }
   bodyCount++;
}

function table(){
   nb = document.getElementById("myText");
   
   console.log(nb.value);
   let string = "";
   for(let i=0;i<=10;i++){

         string += "<br>"+ i + "&nbsp; x &nbsp;" + + nb.value +" = "+ i*nb.value;


   }
   console.log(string);
   stp = document.getElementById("enfin");
   stp.innerHTML=string;
}