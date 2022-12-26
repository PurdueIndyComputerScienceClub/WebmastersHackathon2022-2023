document.getElementById("submitBtn1").addEventListener("click", setListAdvance);

function setList()
{
    // Gets the text inputted into text box
    var text = document.getElementById("textBox1").value;

    // Grabs list element
    var list = document.getElementById("everydayList");
    
    // Creates a new element with the <li> or list item tag
    var itemAdd = document.createElement("li");

    //Appends the inputted text to the itemAdd element
    itemAdd.appendChild(document.createTextNode(text));

    //Appends the itemAdd element to main list in html document
    list.appendChild(itemAdd);
}

// Condensed version

function setListAdvance()
{
        // Grabs list element
        var list = document.getElementById("everydayList");

        // Creates <li> element appends user inputted text to it, then appends <li> element to main list in html document
        list.appendChild(document.createElement("li").appendChild(document.createTextNode(document.getElementById("textBox1").value)));

}

function thing(variable1)
{
    //Alerts user with text from variable
    alert(variable1);
}