class listItems 
{
    constructor(name, email)
    {
       this.name = name;
       this.email = email;
       this.dateAdded = this.currentTime();
    }

    currentTime()
    {
        let date = new Date();
        return date.getDate;
    }

}

function buildTable()
{
    // Grab table element
    let table = document.getElementById("databaseTable");
    let dataArray = 
    [
        //Create object of listItems class
        new listItems("Bobby Tables", "bobbytable@mysql.com"),
        new listItems("Jeremy Tables", "jeremytable@mysql.com"),
        new listItems("Johnathan Frakes", "johnnyfraks@sturtark.com"),
        new listItems("Alan Turing", "aturing@arpnet.com"),
        new listItems("I Ran Out Of Names", "madeupemail@domain.com")
    
    
    ]

    for (i of dataArray)
    {
        //Create row
        let tdElement = document.createElement("tr");

        //Create new table data entry
        let tableData = document.createElement("td");

        //Set contents to persons name
        tableData.innerHTML = i.name;

        //Append this data to main table row
        tdElement.appendChild(tableData);


        //Create new table data entry
        tableData = document.createElement("td");

        //Set contents to persons email address
        tableData.innerHTML = i.email;

        //Append data to main table row
        tdElement.appendChild(tableData);


        //Append table row to table in html document
        table.appendChild(tdElement);


    }

    
    

    
}

//On html page load, run buildTable function
window.onload = buildTable;