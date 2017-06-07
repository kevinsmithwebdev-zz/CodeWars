function howMuchILoveYou(nbPetals) {
    var answers = [ "I love you",
                    "a little",
                    "a lot",
                    "passionately",
                    "madly",
                    "not at all"
                  ];
    return answers[(nbPetals%answers.length)];
}