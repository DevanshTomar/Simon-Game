let level = 1;
const buttonColors = ["green", "red", "yellow", "blue"];
const computerGeneratedPattern = [];
const userPattern = [];
let count = 0;
$("#level-title");
$(document).keypress(() => {
    updateTitle("level " + level);
    generatePattern(); 
})

//assiging the listeners to the buttons.
$(".btn").click((event) => {
    let buttonClicked = $(event.target).attr('id');
    animateButton(buttonClicked);
    playSound(buttonClicked);
    checkPattern();
})

//play sound function to play the sound based on the button clicked
function playSound(buttonClicked){
    userPattern.push(buttonClicked);
    switch (buttonClicked) {
        case "green":
            sound(buttonClicked)
            break;
        case "red":
            sound(buttonClicked)
            break;
        case "yellow":
            sound(buttonClicked)
            break;
        case "blue":
            sound(buttonClicked)
            break;
        case "wrong":
            sound(buttonClicked)
            break;
        default: 
            break; 
    }
}

//this function generates a random pattern for the computer and stores it in the 
//computerGeneratedArray
function generatePattern(){
    const randomIndex = Math.round(Math.random() * 3)
    computerGeneratedPattern.push(buttonColors[randomIndex]);
    animateButton(buttonColors[randomIndex]);
    sound(buttonColors[randomIndex])
}

//This function checks the gnereated pattern to that of the user pattern stored in the
//user pattern array
function checkPattern(){
    if (userPattern[count] !== computerGeneratedPattern[count]){
        gameOver();
        userPattern.splice(0, userPattern.length);
        computerGeneratedPattern.splice(0, computerGeneratedPattern.length);
        level = 1;
    }
    else if(userPattern[count] === computerGeneratedPattern[count] && userPattern.length !== computerGeneratedPattern.length){
        count += 1;
    }
    else if(userPattern[count] === computerGeneratedPattern[count] && userPattern.length === computerGeneratedPattern.length){
        userPattern.splice(0, userPattern.length);
        level += 1;
        updateTitle("level " + level);
        count = 0;
        setTimeout(() => {generatePattern()}, 1000);
    }
}

//function to provide animation to the buttons
function animateButton(id){
    $("#" + id).addClass("pressed");
    setTimeout(() => {
        $("#" + id).removeClass("pressed");
    }, 100);
}

//function to play sound
function sound(buttonClicked){
    let sound = new Audio("./sounds/" + buttonClicked + ".mp3");
    sound.play();
}

//function to update title with the text provided
function updateTitle(updatedTitle){
    $("#level-title").text(updatedTitle);
}

//function to provide funtionalities then the user looses
function gameOver(){
    updateTitle("Game Over, Press any Key to Restart")
    playSound("wrong")
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    },100);
}