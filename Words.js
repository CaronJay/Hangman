//added all the words im going to use for the game on a seperate file, So that it's easier to change anything
//if needed

let lang  = [
    "dementor",
    "voldemort",
    "dumbledore",
    "mudblood",
    "pheonix",
    "slytherin",
    "ravenclaw",
    "hufflepuff",
    "gryfindor",
    "hogwarts",
    "seeker",
    "muggle"
]
//created a function that generates a random string, included the predefined words, 
//so it generates a random word. 
function randomWord() {
    return lang[Math.floor(Math.random() * lang.length )]
}

export { randomWord }