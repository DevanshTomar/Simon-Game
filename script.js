//handling the title change
let level = 1;
let title = $("#level-title");
$("*").keypress(() => {
    title.text("level " + level);
})

//assiging the listeners to the buttons.
$(".btn").click((event) => {
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

