// mixed messager program; random message printout with each run

// message array
const messages = [
    'Coding is another way of saying programming', 
    'There is a unique use for each and every programming language', 
    'Front-end programming is the user side, back-end programming is server side', 
    'Programming has become easier than ever to learn', 
    'Programming opens up your creativity in limitless ways', 
    'Anybody can learn how to code'
];

// function to randomize index to choose a message from the array
function randomMessage() {
    return Math.floor(Math.random() * messages.length - 1);
}

// start program with a welcome message
console.log('Welcome to Mixed Messager - Computer Programming Edition');

// save the random index to a variable for reference
const randomMsg = randomMessage();

// display message
console.log(messages[randomMsg]);

// combine all messages
messages.forEach(function (element) {
    if (element !== messages[randomMsg]) {
        console.log(element);
    }
});

// print out most important message for the current moment
console.log(messages[randomMessage()].toUpperCase());