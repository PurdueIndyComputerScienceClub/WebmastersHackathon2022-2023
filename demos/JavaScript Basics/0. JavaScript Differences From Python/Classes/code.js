class BreadBox
{
    //Instantiates variables on class initialization
    constructor(breadType, breadQuantity, needBread = false)
    {
        this.breadType = breadType;
        this.breadQuantity = breadQuantity;
        this.needBread = needBread;
    }

    //Sets needBread to opposite of what it currently is
    //Improvement can be made with a ternary operator
    toggleNeedBread()
    {
        if (this.needBread == false)
        {
            this.needBread = true;

        }
        else
        {
            this.needBread = false;
        }
    }

}

// Create a new BreadBox object and set it to bread variable
let bread = new BreadBox("pumpernickel", 28, false);


alert(bread.needBread);
bread.toggleNeedBread();
alert(bread.needBread);