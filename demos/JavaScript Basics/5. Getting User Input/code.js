
function clickEvent(){
    var text = document.getElementById("textInputBox1").value;
    document.write(`<h2>${text}</h2>`);
}



document.getElementById("submitBtn1").addEventListener("click", clickEvent);