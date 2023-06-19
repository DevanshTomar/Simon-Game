let level = 1;
const buttonColors = ["green", "red", "yellow", "blue"];
const computerGeneratedPattern = [];
const userPattern = [];
let count = 0;
$("#level-title");
$(document).keypress(() => {
    updateTitle();
    generatePattern(); 
})

//assiging the listeners to the buttons.
$(".btn").click((event) => {
    let buttonClicked = $(event.target).attr('id');
    animateButton(buttonClicked);
    playSound(buttonClicked);
    checkPattern();
})

function playSound(buttonClicked){
    userPattern.push(buttonClicked);
    console.log(userPattern);
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
        default:
            break; 
    }
}

function generatePattern(){
    const randomIndex = Math.round(Math.random() * 3)
    computerGeneratedPattern.push(buttonColors[randomIndex]);
    console.log(computerGeneratedPattern);
    animateButton(buttonColors[randomIndex]);
    sound(buttonColors[randomIndex])
}

function checkPattern(){
    console.log(count);
    if (userPattern[count] !== computerGeneratedPattern[count]){
        alert("Not Equal");
    }
    else if(userPattern[count] === computerGeneratedPattern[count] && userPattern.length !== computerGeneratedPattern.length){
        count += 1;
    }
    else if(userPattern[count] === computerGeneratedPattern[count] && userPattern.length === computerGeneratedPattern.length){
        userPattern.splice(0, userPattern.length);
        level += 1;
        count = 0;
        console.log("in 3");
        setTimeout(() => {generatePattern()}, 1000);
    }
}


function animateButton(id){
    $("#" + id).addClass("pressed");
    setTimeout(() => {
        $("#" + id).removeClass("pressed");
    }, 100);
}


function sound(buttonClicked){
    let sound = new Audio("./sounds/" + buttonClicked + ".mp3");
    sound.play();
}

function updateTitle(){
    $("#level-title").text("level " + level);;
}