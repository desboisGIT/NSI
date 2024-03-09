function estValide(btn) {
    return btn.innerHTML === ""; 
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole; 
}

function rechercherVainqueur(l_boutons, joueurs, tour) {
    const lignes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    for (let i = 0; i < lignes.length; i++) {
        const [a, b, c] = lignes[i];

        if (l_boutons[a].innerHTML === showTEXT && 
            l_boutons[b].innerHTML === showTEXT && 
            l_boutons[c].innerHTML === showTEXT) {
            l_boutons[a].style.backgroundColor = "#9ACD32";
            l_boutons[b].style.backgroundColor = "#9ACD32";
            l_boutons[c].style.backgroundColor = "#9ACD32";
            return true; 
        }
    }
    return false; // les deux joueur sont nul
}
function restart(){
	document.getElementById("hautPage").scrollIntoView({block: "start" });
	
	setTimeout(function() {
        location.reload(); 
    }, 1000);
}

function matchNul(l_boutons) {
    for (let i = 0; i < l_boutons.length; i++) {
        if (l_boutons[i].innerHTML === "") {
            return false; 
        }
    }
    return true; 
}

var Afficheur = function(element) {
    var affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return { sendMessage: setText };
}; 

function main() {
    var l_boutons = document.querySelectorAll("#Jeu button");
    var joueurs = [];
    var tour = 0;
    var jeuFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    

    document.getElementById("formJoueurs").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var joueur1 = document.getElementById("joueur1").value;
        var joueur2 = document.getElementById("joueur2").value;
        
        // Vérification que les noms des joueurs sont renseignés
        if (joueur1 !== "" && joueur2 !== "") {
			document.getElementById("basPage").scrollIntoView({ behavior: "smooth", block: "end" });
            joueurs.push(joueur1, joueur2);
            

            afficheur.sendMessage("Le jeu peut commencer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour.");
        } else {

            alert("Veuillez renseigner les noms des deux joueurs.");
        }
    });

    l_boutons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            if (!jeuFini && estValide(btn)) {
                if (tour === 0){
                    showTEXT = 'X';
                } else {
                    showTEXT = 'O';
                }
                setSymbol(btn, showTEXT);
                if (rechercherVainqueur(l_boutons, joueurs, tour)) {
                    afficheur.sendMessage("Joueur " + joueurs[tour] + " a gagné !");
                    jeuFini = true;
                } else if (matchNul(l_boutons)) {
                    afficheur.sendMessage("Partie nulle !");
                    jeuFini = true;
                } else {
                    tour = (tour + 1) % 2;
                    afficheur.sendMessage("Le jeu peut continuer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour.");
                }
            }
        });
    });
}

main();
