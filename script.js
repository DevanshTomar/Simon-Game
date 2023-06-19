//handling the title change
let level = 1;
let title = $("#level-title");
$("*").keypress(() => {
    title.text("level " + level);
})

//assiging the listeners to the buttons.
//green
$("#green").click(()=>{
    let sound = new Audio("./sounds/green.mp3");
    sound.play();
})

//red 
$("#red").click(()=>{
    let sound = new Audio("./sounds/red.mp3");
    sound.play();
})

//yellow
$("#yellow").click(()=>{
    let sound = new Audio("./sounds/yellow.mp3");
    sound.play();
})

//blue
$("#blue").click(()=>{
    let sound = new Audio("./sounds/blue.mp3");
    sound.play();
})