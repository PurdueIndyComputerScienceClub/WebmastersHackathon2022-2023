

//  Note: .addEventListener expects a function reference and not a function. 
//      The event listener will run the function at page load and this will execute function code unless you "bind" the function, 
//      I.E "This is where you can find it computer and the parameters you should pass it, but don't run unless an event has actually happened"

// Listens for user to click on blue/green button and then call function "setColor" and passes what color it should change to
document.getElementById("blue1").addEventListener("click", setColor.bind(this, "blue"));
document.getElementById("green1").addEventListener("click", setColor.bind(this, "green"));


function setColor(color)
{
    document.body.style.backgroundColor = color;

}


//Another way that has some advantages using anonymous functions but .bind is more common.
/*
document.getElementById("blue1").addEventListener("click", () => {document.body.style.backgroundColor = "blue"});
document.getElementById("green1").addEventListener("click", () => {document.body.style.backgroundColor = "green"});
*/


