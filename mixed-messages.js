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
