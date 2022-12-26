
//grab element
var text = document.getElementById("text");

//output the current text in element
document.write(`<h1> ${text.innerText}  </h1>`);

//modify text inside of element
text.innerHTML = "Javascript is taking over now";