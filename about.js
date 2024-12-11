const facts = [
    "The only game I'm competitively good at is 'Bloons TD Battles 2'.",
    "I have participated in 10 game jams.",
    "I was part of each season of 'Smash NL Ultimate League (aka SNUL)'.",
    "My most played game is 'Animal Crossing: New Horizons' with a playtime of over 320 hours.",
    "On Discord calls, I'm almost always eating.",
    "I have done research with someone else that Delphi cannot count.",
    "Discussions about code are very fun, especially exploring how deep the topic goes.",
    "People call me a database of knowing people.",
    "Bas mimics your hand movements when you talk to him.",
    "I was always the go-to person for spontaneous Burger King runs or helping out with coding, two things I absolutely loved doing with the school year under me!",
    "Bas is a man with a love for if statements.",
    "Bas likes to spontaneously start demon rituals while listening to K-Pop",
    "I've always had an obsession with bread, but it's different bread every time.",
    "Bas had white hair 4 years ago, he looked like Kaneki from Tokyo Ghoul.",
    "Bassie is dol op chocomelk.",
    "That for some reason everyone knows you.",
    "Big K-pop fan, because of the sound and not the lyrics.",
    "Bas begint al de punten die hij wil maken met: KEIJK LAISTER",
    "For someone who types a lot, bas makes a lot of typos.",
    "Coffee or tea?",
    // "",
];


let lastFactIndex = -1; // Variable to remember the last fact shown

// Function to display a random fact
document.getElementById("fact-button").addEventListener("click", () => {
    let randomIndex;

    // Ensure a different fact is selected
    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === lastFactIndex);

    // Update the display and store the new index
    document.getElementById("fact-display").textContent = facts[randomIndex];
    lastFactIndex = randomIndex;
});
