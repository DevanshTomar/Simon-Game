let level = 1;
const buttonColors = ["green", "red", "yellow", "blue"];
let computerGeneratedPattern = "";
//handling the title change
let title = $("#level-title");
$("*").keypress(() => {
    title.text("level " + level);
})

//assiging the listeners to the buttons.
$(".btn").click((event) => {
    animateButton(event)
    let buttonClicked = $(event.target).attr('id');
    playSound(buttonClicked);
})

function playSound(buttonClicked){
    let sound = new Audio("./sounds/" + buttonClicked + ".mp3");
    switch (buttonClicked) {
        case "green":
            sound.play()
            break;
        case "red":
            sound.play()
            break;
        case "yellow":
            sound.play()
            break;
        case "blue":
            sound.play()
            break;
        default:
            break;
    }
}

function generatePattern(){
    const randomIndex = Math.round(Math.random() * 3)
    computerGeneratedPattern += buttonColors[randomIndex];
}

// function checkPattern(){
//     reuturn ge
// }


function animateButton(event){
    $(event.target).addClass("pressed");
    setTimeout(() => {
        $(event.target).removeClass("pressed");
    }, 100);
}
