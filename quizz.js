
const ec = document.getElementById("ecran");

// Création du bouton de démarrage
const start = document.createElement("button"); 
start.id = "start";
start.textContent = "Commencer le Quizz";
start.addEventListener("click", lancerJeu);
ec.appendChild(start);

let score = 0;
const scoreElement = document.createElement("p");
scoreElement.id = "score";
scoreElement.textContent = `Score : ${score}`;

// Fonction pour démarrer le jeu
function lancerJeu() {
    ec.innerHTML = ""; // Efface le contenu actuel
    afficherQuestion(0);
}

// Questions et réponses
const questions = [
    {
        question: "Quel est la capitale du Canada ?",
        options: ["Toronto", "Ottawa", "Montréal", "Vancouver"],
        correct: 1
    },
    {
        question: "Quel est la capitale de l'Australie ?",
        options: ["Melbourne", "Brisbane", "Sydney", "Canberra"],
        correct: 3
    },
    {
        question: "Quel est la capitale de France ?",
        options: ["Paris", "Strasbourg", "Marseille", "Rennes"],
        correct: 1
    }
];

// Afficher une question
function afficherQuestion(index) {
    if (index >= questions.length) {
        afficherResultats();
        return;
    }

    const question = questions[index];

    const questionElement = document.createElement("h2");
    questionElement.textContent = question.question;
    ec.appendChild(questionElement);

    question.options.forEach((option, i) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => verifierReponse(index, i));
        ec.appendChild(button);
    });

    ec.appendChild(scoreElement);
}

// Vérifier la réponse
function verifierReponse(index, selected) {
    const correct = questions[index].correct;

    if (selected === correct) {
        alert("Bonne réponse !");
        score++;
    } else {
        alert(`Mauvaise réponse. La bonne réponse était : ${questions[index].options[correct]}`);
    }

    scoreElement.textContent = `Score : ${score}`;
    ec.innerHTML = ""; // Efface le contenu actuel
    afficherQuestion(index + 1);
}

// Afficher les résultats
function afficherResultats() {
    ec.innerHTML = "";

    const resultatsElement = document.createElement("h2");
    resultatsElement.textContent = `Votre score final est : ${score}/${questions.length}`;
    ec.appendChild(resultatsElement);

    const restartButton = document.createElement("button");
    restartButton.textContent = "Recommencer";
    restartButton.addEventListener("click", () => location.reload());
    ec.appendChild(restartButton);
}
