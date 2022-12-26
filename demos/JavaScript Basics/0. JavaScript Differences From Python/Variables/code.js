// Globally define all variables

var breadName_var = "Mike";
let breadName_let = "Wheat";
const breadName_const = "Gluten-Free";


{
    //Still global
    var breadName_var = "John";
    //let now local only
    let breadName_let = "Taco";
}

function test()
{   
    var breadInFunction = "breadFunc";

}

//Outputs John
alert(breadName_var);
//Outputs Wheat
alert(breadName_let);
//Outputs Gluten-Free
alert(breadName_const);
//Outputs exception, breadInFunction undefined
alert(breadInFunction);
