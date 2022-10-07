function copyText() {
      
    /* Select text area by id*/
    var Text = document.getElementById("textbox");

    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(Text.value);

    /* Set the copied text as text for 
    div with id clipboard */
    document.getElementById("clipboard")
        .innerHTML = Text.value;
}

function rightanswer() {
    alert("Your Right")
}

function wronganswer() {
    alert("Your Wrong")
}


















function thanks() {
    alert("Thank you for your sumbimiton! We will respond as soon as we can.");
}