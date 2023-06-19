//handling the title change
let level = 1;
let title = $("#level-title");
$("*").keypress(() => {
    title.text("level " + level);
})

 