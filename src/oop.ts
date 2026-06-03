class Car{
    private _release_date: string  = "Dec-2027"
    #_price: number = 20000000

    public brand: string = "mercedes"

    protected model: string = "MX-09"

    reveal(){
        return {
            date: this._release_date,
            price: this.#_price
            }
    }

    change(date: string, price: number){
        this._release_date = date
        this.#_price = price
    }


}

const newCar = new Car()
newCar.reveal()
newCar.change("Oct-2027", 220000000)


class Marketing extends Car{
    getModel(){
        return this.model
    }
}

const PR = new Marketing()
PR.getModel()



// composition - same as inheritance


class Department {
    constructor(private car: Car){}

    compose(){
        this.car.change
    }
}

