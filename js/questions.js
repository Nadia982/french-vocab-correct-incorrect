const questions = [
  {
    id: 1,
    q: "allumer",
    translation: "to turn on",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 2,
    q: "le bain",
    translation: "the bath",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 3,
    q: "la boîte (en carton)",
    translation: "the (cardboard) box",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 4,
  //   q: "le centre de recyclage",
  //   translation: "the recycling centre",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 5,
    q: "le chômage",
    translation: "unemployment",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 6,
    q: "le chauffage central",
    translation: "the central heating",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 7,
    q: "cultiver",
    translation: "to grow",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 8,
    q: "en danger",
    translation: "in danger",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 9,
    q: "les déchets (masculin)",
    translation: "the rubbish",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 10,
    q: "détruire",
    translation: "to destroy",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 11,
  //   q: "disparaître",
  //   translation: "to disappear",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 12,
    q: "le sans-abri",
    translation: "the homeless person",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 13,
    q: "sauver",
    translation: "to save",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 14,
  //   q: "utiliser",
  //   translation: "to use",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 15,
    q: "la douche",
    translation: "the shower",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 16,
    q: "l'environnement",
    translation: "the environment",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 17,
    q: "éteindre",
    translation: "to turn off",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 18,
    q: "faire du recyclage",
    translation: "to recycle",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 19,
    q: "gaspiller",
    translation: "to waste",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 20,
  //   q: "l'inondation (féminin)",
  //   translation: "the flood",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 21,
    q: "jeter",
    translation: "to throw away",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 22,
    q: "les ordures (féminin)",
    translation: "rubbish",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 23,
    q: "la pauvreté",
    translation: "poverty",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 24,
    q: "le pétrole",
    translation: "oil",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 25,
    q: "la piste cyclable",
    translation: "the cycle route",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 26,
    q: "pollué",
    translation: "polluted",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 27,
    q: "la poubelle",
    translation: "the dustbin",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 28,
  //   q: "protéger",
  //   translation: "to protect",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 29,
    q: "le réchauffement de la Terre",
    translation: "global warming",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 30,
    q: "le robinet",
    translation: "the tap",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 31,
    q: "le sac en plastique",
    translation: "the plastic bag",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 32,
    q: "Vous pouvez utiliser la même lettre plus d'une fois.",
    translation: "You can use the same letter more than once.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 33,
    q: "C’est quelle personne ?",
    translation: "Which person is it? ",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 34,
    q: "Ecrivez le nom de la bonne personne.",
    translation: "Write the name of the correct person.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 35,
    q: "C'est qui ?",
    translation: "Who is it?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 36,
    q: "Choisissez deux phrases qui sont vraies.",
    translation: "Choose two correct sentences",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 37,
  //   q: "Choisissez la réponse correcte",
  //   translation: "Choose the correct answer",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 38,
    q: "Choisissez la bonne réponse",
    translation: "Choose the correct answer",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 39,
    q: "Complétez … en français.",
    translation: "Complete ... in French",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 40,
    q: "Complétez la grille.",
    translation: "Complete the grid",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 41,
    q: "Complétez le texte suivant avec les mots de la liste ci-dessous.",
    translation: "Complete the following text with words from the list below.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 42,
    q: "Complétez les phrases avec les mots de la liste.",
    translation: "Complete the sentences with words from the list.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 43,
    q: "Décidez si c’est Vrai (V), Faux (F) ou Pas Mentionné (PM). Ecrivez V, F ou PM.",
    translation:
      "Decide if it is True (V), False (F) or Not Mentioned (PM). Write V, F or PM.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 44,
    q: "Donnez deux détails.",
    translation: "Give two details",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 45,
    q: "Ecoutez ce passage",
    translation: "Listen to this passage",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 46,
    q: "Ecoutez cette conversation",
    translation: "Listen to this conversation",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 47,
  //   q: "Ecoutez cette interview",
  //   translation: "Listen to this interview",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 48,
    q: "Ecoutez ce reportage…",
    translation: "Listen to this report",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 49,
    q: "Ecrivez la bonne lettre dans chaque case.",
    translation: "Write the correct letter in each box",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 50,
    q: "Ecrivez la bonne lettre dans la case.",
    translation: "Write the correct letter in the box",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 51,
    q: "Ecrivez les bonnes lettres dans les cases.",
    translation: "Write the correct letters in the boxes",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 52,
    q: "Identifiez la bonne personne.",
    translation: "Identify the correct person",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 53,
    q: "Il n’est pas nécessaire d’écrire en phrases complètes.",
    translation: "It is not necessary to write in full sentences",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 54,
    q: "Lisez ...",
    translation: "Read ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 55,
    q: "Mentionnez un aspect positif/négatif",
    translation: "Mention a positive/negative aspect",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 56,
    q: "Mentionnez un avantage/inconvénient.",
    translation: "Mention an advantage/disadvantage",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 57,
    q: "Pour une opinion négative, écrivez N",
    translation: "For a negative opinion, write N",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 58,
    q: "Pour une opinion positive, écrivez P",
    translation: "For a positive opinion, write P",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 59,
    q: "Pour une opinion positive et négative, écrivez P+N",
    translation: "For a positive and negative opinion, write P+N",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 60,
  //   q: "Quelle est la réponse correcte ?",
  //   translation: "Which is the correct answer?",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 61,
    q: "Qui...?",
    translation: "Who...?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 62,
    q: "Remplissez les blancs.",
    translation: "Fill in the blanks",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 63,
    q: "Répondez à ces questions.",
    translation: "Answer these questions",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 64,
  //   q: "Répondez (aux questions) en français.",
  //   translation: "Answer (the questions) in French",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 65,
    q: "Ce qui est important pour moi dans la vie, c'est d'abord...",
    translation: "The most important thing in life for me is firstly...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 66,
    q: "Les animaux (masculin)",
    translation: "animals",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 67,
    q: "Ensuite, c'est...",
    translation: "Then, it is...",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 68,
  //   q: "le sport",
  //   translation: "sport",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 69,
    q: "La musique",
    translation: "Music",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 70,
  //   q: "ma santé",
  //   translation: "my health",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  // {
  //   id: 71,
  //   q: "ma famille",
  //   translation: "my family",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 72,
    q: "l'argent (masculin)",
    translation: "money",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 73,
  //   q: "mes études",
  //   translation: "my studies",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 74,
    q: "mes amis",
    translation: "my friends",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 75,
    q: "Ce qui me préoccupe le plus c'est...",
    translation: "What worries me most is...",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 76,
  //   q: "Ce qui m'inquiète le plus, c'est ...",
  //   translation: "What worries me most is...",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 77,
    q: "l'état (masculin) de la Terre",
    translation: "the state of the planet",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 78,
    q: "le réchauffement climatique",
    translation: "global warming",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 79,
    q: "la pauvreté dans le monde",
    translation: "world poverty",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 80,
    q: "l'injustice (f)",
    translation: "injustice",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 81,
    q: "les sans-abris",
    translation: "homeless people",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 82,
    q: "à part tout cela",
    translation: "apart from all that",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 83,
    q: "bien que (+ subjunctive)",
    translation: "although",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 84,
    q: "ceci dit",
    translation: "that said,",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 85,
    q: "comme ça ...",
    translation: "in this way",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 86,
    q: "du coup, ...",
    translation: "as a result ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 87,
    q: "en ce qui concerne ...",
    translation: "as far as ... is concerned",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 88,
    q: "en même temps",
    translation: "at the same time",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 89,
    q: "en train de",
    translation: "in the process of (doing)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 90,
    q: "il s'agit de",
    translation: "it's about",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 91,
    q: "pas mal de",
    translation: "quite a lot of",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 92,
    q: "quotidiennement",
    translation: "daily",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 93,
    q: "tel que, telle que, tels que, telles que",
    translation: "such as",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 94,
    q: "tout le monde",
    translation: "everyone",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 95,
    q: "il y a du pour et du contre",
    translation: "There are pros and cons",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 96,
    q: "D'un côté, ça ...",
    translation: "On the one hand it...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 97,
    q: "les personnes qui sont emprisonnées à tort",
    translation: "people who have been wrongly imprisoned",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 98,
    q: "les enfants qui n'ont pas assez à manger",
    translation: "children who don't have enough to eat",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 99,
    q: "On peut..",
    translation: "you can...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 100,
    q: "Il est possible de ...",
    translation: "It is possible to...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 101,
    q: "parrainer un enfant en Afrique",
    translation: "sponsor a child in Africa",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 102,
    q: "faire un don à une association caritative",
    translation: "donate to a charity",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 103,
    q: "faire du bénévolat",
    translation: "do voluntary work",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 104,
    q: "Il faut ...",
    translation: "We must/you have to ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 105,
    q: "lutter contre la faim",
    translation: "fight against hunger/famine",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 106,
    q: "lancer des pétitions",
    translation: "launch petitions",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 107,
    q: "le manque d'eau douce",
    translation: "the lack of fresh water",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 108,
    q: "écrire à son/sa député(e)",
    translation: "write to your MP",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 109,
    q: "participer à des manifestations",
    translation: "take part in demonstrations",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 110,
    q: "agir maintenant",
    translation: "act now",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 111,
    q: "faire des campagnes de sensibilisation",
    translation: "carry out campaigns to raise awareness",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 112,
    q: "Il ne faut pas ignorer ces gens.",
    translation: "We must not ignore these people",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 113,
  //   q: "Notre planète",
  //   translation: "Our planet",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 114,
    q: "Le plus grand problème pour la planète, c'est...",
    translation: "The biggest problem for our planet is...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 115,
    q: "le changement climatique",
    translation: "climate change",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 116,
    q: "le déboisement",
    translation: "deforestation",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 117,
    q: "la destruction de la couche d'ozone",
    translation: "the destruction of the ozone layer",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 118,
    q: "la destruction des forêts tropicales",
    translation: "the destruction of tropical rainforests",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 119,
    q: "la disparition des espèces",
    translation: "species dying out",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 120,
    q: "la guerre",
    translation: "war",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 121,
    q: "la pollution de l'air",
    translation: "air pollution",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 122,
    q: "la sécheresse",
    translation: "drought",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 123,
    q: "la surpopulation",
    translation: "overpopulation",
    options: ["yes", "no"],
    answer: 0,
  },

  {
    id: 124,
    q: "un incendie",
    translation: "a fire",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 125,
    q: "une fuite de pétrole",
    translation: "an oil spill",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 126,
    q: "des inondations (féminin)",
    translation: "floods",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 127,
    q: "un tremblement de terre",
    translation: "an earthquake",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 128,
    q: "un typhon",
    translation: "a typhoon",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 129,
    q: "Protéger l'environnement",
    translation: "To protect the environment",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 130,
    q: "Que devrait-on faire pour sauver notre planète?",
    translation: "What should we do to save our planet?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 131,
    q: "Actuellement, je ne fais pas grand-chose pour protéger l'environnement.",
    translation: "Currently, I don't do much to protect the environment.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 132,
    q: "Je fais déjà pas mal de choses.",
    translation: "I already do quite a lot",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 133,
    q: "Je pourrais",
    translation: "I could",
    options: ["yes", "no"],
    answer: 0,
  },
  // {
  //   id: 134,
  //   q: "On devrait",
  //   translation: "We ought to",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  {
    id: 135,
    q: "trier les déchets",
    translation: "sort the rubbish (into recyclable and non-recyclable waste)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 136,
    q: "faire du compost à la maison",
    translation: "make compost at home",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 137,
    q: "éteindre les appareils électriques en quittant une pièce",
    translation: "turn off electrical appliances when leaving a room",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 138,
    q: "éteindre la lumière en quittant une pièce",
    translation: "turn off the light when leaving a room",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 139,
    q: "baisser le chauffage et mettre un pull",
    translation: "turn down the heating and put on a sweater",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 140,
    q: "exampleToCopy",
    translation: "",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 141,
    q: "utiliser du papier recyclé",
    translation: "use recycled paper",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 142,
    q: "éviter les produits jetables",
    translation: "avoid disposable products",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 143,
    q: "acheter des produits verts",
    translation: "buy green products",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 144,
    q: "privilégier les produits bio",
    translation: "where possible, choose organic products",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 145,
    q: "utiliser les transports en commun",
    translation: "use public transport",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 146,
    q: "favoriser le covoiturage",
    translation: "encourage car-sharing",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 147,
    q: "aller au collège à vélo",
    translation: "go to school by bike",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 148,
    q: "refuser les sacs en plastique",
    translation: "turn down plastic bags (when offered in a shop)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 149,
    q: "le papier recyclé",
    translation: "recycled paper",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 150,
    q: "les véhicules électriques",
    translation: "electric vehicles",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 151,
    q: "solar panels",
    translation: "solar panels",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 152,
    q: "les festivals sont une chose positive/négative pour un pays/une région",
    translation: "festivals are positive/negative for a country/region",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 153,
    q: "Je suis persuadé(e) que/qu' ...",
    translation: "I am convinced that ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 154,
    q: "Je trouve/que/qu' ...",
    translation: "I find that…",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 155,
    q: "J'estime que/qu' …",
    translation: "I reckon that…",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 156,
    q: "ça laisse une empreinte carbone très importante",
    translation: "it leaves a significant carbon footprint",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 157,
    q: "après l'événement",
    translation: "the event",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 158,
    q: "la ville hôte est souvent endettée",
    translation: "the host city is often in debt after",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 159,
    q: "les ouvriers qui construisent les stades sont souvent exploités",
    translation: "the workers who build the stadiums are often exploited",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 160,
    q: "les prix augmentent",
    translation: "the prices increase",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 161,
    q: "Par ailleurs, ...",
    translation: "What's more,...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 162,
    q: "D'un autre côté, ...",
    translation: "On the other hand, ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 163,
    q: "Un inconvénient, c'est que ...",
    translation: "A disadvantage is that ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 164,
    q: "Cependant, ...",
    translation: "However, ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 165,
    q: "attire des touristes",
    translation: "attracts tourists",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 166,
    q: "crée du travail",
    translation: "creates jobs",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 167,
    q: "donne des modèles aux jeunes",
    translation: "gives young people role models",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 168,
    q: "unit les gens",
    translation: "unites people",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 169,
    q: "encourage la pratique du sport",
    translation: "encourages participation in sport",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 170,
    q: "permet aux gens de passer un bon moment",
    translation: "allows people to have a good time",
    answer: 0,
    options: ["yes", "no"],
  },
  {
    id: 171,
    q: "crée un sentiment de fierté nationale",
    translation: "creates a sense of national pride",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 172,
    q: "met en avant la ville hôte",
    translation: "promotes the host city",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 173,
    q: "met en avant la culture",
    translation: "promotes the culture",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 174,
    q: "En plus, ça ...",
    translation: "What's more/Moreover, it ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 175,
    q: "D'un côté, ça ...",
    translation: "On the one hand, it ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 176,
    q: "Un avantage de cet événement, c'est que ...",
    translation: "An advantage of this event is that ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 177,
    q: "Les grands événements",
    translation: "Big events",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 178,
    q: "soutenir",
    translation: "to support",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 179,
    q: "affronter",
    translation: "to face, confront",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 180,
    q: "accueillir",
    translation: "to welcome",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 181,
    q: "soigner",
    translation: "to look after, treat",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 182,
    q: "prendre conscience de",
    translation: "to become aware of",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 183,
    q: "sensibiliser",
    translation: "to raise awareness",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 184,
    q: "On s'adresse aux ...",
    translation: "We appeal to...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 185,
    q: "Je soutiens les SDF.",
    translation: "I support homeless people",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 186,
    q: "Je soigne les animaux.",
    translation: "I look after/treat animals.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 187,
    q: "J'aide des enfants du primaire à faire leurs devoirs.",
    translation: "I help primary school children to do their homework.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 188,
    q: "Je participe à des projets de conservation.",
    translation: "I take part in conservation projects.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 189,
    q: "Je rends visite à une personne âgée.",
    translation: "I visit an elderly person.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 190,
    q: "Je fais partie de l'organisation...",
    translation: "I'm a member of ... organisation",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 191,
    q: "Je travaille dans un refuge pour les animaux",
    translation: "I work in an animal sanctuary",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 192,
    q: "Je travaille dans un magasin d'Oxfam",
    translation: "I work in an Oxfam shop",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 193,
    q: "Il y a beaucoup de personnes qui ont besoin d'un peu de gentillesse.",
    translation: "There are lots of people who need a little kindness.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 194,
    q: "On a la responsabilité d'aider les autres et de ne pas se focaliser sur soi-même.",
    translation:
      "We have a responsibility to help others and not focus on ourselves.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 195,
    q: "apporter une bouteille d'eau au lieu de prendre un gobelet jetable",
    translation: "carry a bottle of water instead of using disposable cups",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 196,
    q: "récupérer l'eau de pluie pour arroser le jardin",
    translation: "collect rainwater for watering the garden",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 197,
    q: "fermer le robinet pendant qu'on se lave les dents",
    translation: "turn off the tap while you brush your teeth",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 198,
    q: "boire l'eau du robinet",
    translation: "drink tap water",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 199,
    q: "prendre une douche au lieu de prendre un bain",
    translation: "have a shower instead of having a bath",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 200,
    q: "faire plus",
    translation: "do more",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 201,
    q: "D'où vient ton tee-shirt?",
    translation: "Where does your T-shirt come from?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 202,
    q: "Les produits pas chers sont souvent fabriqués dans des conditions de travail inacceptables.",
    translation:
      "Cheap products are often made in unacceptable working conditions.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 203,
    q: "Les ouvriers sont sous-payés.",
    translation: "The workers are underpaid.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 204,
    q: "Leur journée de travail est trop longue.",
    translation: "Their working day is too long.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 205,
    q: "Si un produit est bon marché, je ne l'achète pas.",
    translation: "If a product is cheap, I don't buy it.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 206,
    q: "Trop de travailleurs sont exploités/exposés à des risques.",
    translation: "Too many workers are exploited/exposed to risks.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 207,
    q: "À mon avis, on devrait ...",
    translation: "In my opinion, people should ...",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 208,
    q: "boycotter les grandes marques qui ne respectent pas leurs ouvriers",
    translation: "boycott big brands that don't respect their workers",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 209,
    q: "forcer les grandes marques à garantir un salaire minimum",
    translation: "force big brands to guarantee a minimum wage",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 210,
    q: "acheter des habits issus du commerce équitable",
    translation: "buy fairly traded clothes",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 211,
    q: "acheter des vêtements fabriqués en France",
    translation: "buy clothes made in France",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 212,
    q: "réfléchir à l'impact sur l'environnement",
    translation: "think about the impact on the environment",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 213,
    q: "essayer de respecter l'homme et l'environnement à la fois",
    translation: "try to respect mankind and the environment at the same time",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 214,
    q: "Faire du bénévolat",
    translation: "Do volunteering",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 215,
    q: "Ça me permet d'élargir mes compétences.",
    translation: "It allows me to expand my skills.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 216,
    q: "Ça me donne plus confiance en moi.",
    translation: "It gives me more confidence in myself/makes me feel more confident.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 217,
    q: "Ça me donne le sentiment d'être utile.",
    translation: "It makes me feel useful.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 218,
    q: "C'est important de participer à la vie en société.",
    translation: "It's important to participate in society.",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 219,
    q: "à quelle heure est…?",
    translation: "at what time is…?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 220,
    q: "à quelle heure commence …?",
    translation: "at what time does … start?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 221,
    q: "à quelle heure finit …?",
    translation: "at what time does … finish?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 222,
    q: "il y a un/une …?",
    translation: "is there a …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 223,
    q: "il y a des …?",
    translation: "are there any …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 224,
    q: "tu aimes …?",
    translation: "do you like …? (informal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 225,
    q: "vous aimez …?",
    translation: "do you like …? (formal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 226,
    q: "as-tu …?",
    translation: "do you have …? (informal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 227,
    q: "avez-vous …?",
    translation: "do you have …? (formal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 228,
    q: "utilises-tu …?",
    translation: "do you use …? (informal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 229,
    q: "utilisez-vous …?",
    translation: "do you use …? (formal)",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 230,
    q: "comment",
    translation: "how",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 231,
    q: "comment est  …?",
    translation: "what is … like?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 232,
    q: "comment sont  …?",
    translation: "what are … like?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 233,
    q: "quel est ton/ta …?",
    translation: "what is your …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 234,
    q: "quels sont tes …?",
    translation: "what are your …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 235,
    q: "quel est le/la …?",
    translation: "what is the …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 236,
    q: "quels sont les …?",
    translation: "what are the …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 237,
    q: "c'est combien?",
    translation: "how much is it?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 238,
    q: "où est …?",
    translation: "where is …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 239,
    q: "où sont …?",
    translation: "where are …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 240,
    q: "je peux …?",
    translation: "can I …?",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 241,
    q: "pour aller à … s’il vous plaît? ",
    translation: "how do I get to … please? ",
    options: ["yes", "no"],
    answer: 0,
  },
  {
    id: 242,
    q: "qui est …?",
    translation: "who is …?",
    options: ["yes", "no"],
    answer: 0,
  },

  // {
  //   id: 2,
  //   q: "exampleToCopy",
  //   translation: "",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  // {
  //   id: 2,
  //   q: "exampleToCopy",
  //   translation: "",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  // {
  //   id: 2,
  //   q: "exampleToCopy",
  //   translation: "",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },
  // {
  //   id: 2,
  //   q: "exampleToCopy",
  //   translation: "",
  //   options: ["yes", "no"],
  //   answer: 0,
  // },

  //example of an image-based question
  // {
  //   id: 11,
  //   q: "How many squares are showing in this pic?",
  //   options: ["3", "2", "1"],
  //   answer: 2,
  //   img: "img/square.jpg"
  //   }
];
