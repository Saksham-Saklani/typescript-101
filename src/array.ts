const arr: number[] = [1, 2, 3, 4, 5]

arr.push(6)
arr.pop()

const cars: Array<string> = ["BMW", "Audi", "Volvo", "Ferrari" ]


type car = {
    model: string,
    brand: string,
    color: string
}

const availableCars: car[] = [
    {
        model: "verna",
        brand: "hyundai",
        color: "red"
    },
    {
        model: "creta",
        brand: "hyundai",
        color: "white"
    },
    {
        model: "safari",
        brand: "tata",
        color: "black"
    }
]

// Multi Dimensional Array

const twoDArray: number[][] = [
    [1,2,3],
    [4,5,6]
]

