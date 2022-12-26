document.getElementById("submitBtn1").addEventListener("click", setList);
// Bad example that is overall slower and can cause XSS attacks (Cross site scripting attacks)
/*
function setList()
{
    var userInput = document.getElementById("textBox1").value;
    
    // Concatenates html code to end of "everydayList" element's html code. 
    // You could input html code from the text box and write html code that loads a malicious script
    document.getElementById("everydayList").innerHTML += (`<li> ${userInput} </li>`);
}
*/