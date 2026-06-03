interface car{
    model: string
    brand: string
}

class newCar implements car{
    model = "X5"
    brand = "BMW"
}

// Intersection - Both type values are must to declare

type greetHindi = {hindi : string}
type greetEng = {english : string }

type greet = greetHindi & greetEng

const meetGreet : greet = {
    hindi: "namaste",
    english: "hello"
}

// optional value

type user = {name: string, email?: string}

const userx: user = {
    name: 'x'
}

// readonly value

type editUser = {
    name: string,
    age: number
    readonly email: string
}

let userA: editUser = {
    name: 'A',
    age: 27,
    email: "userA@gmail.com"
}

// userA.email = "userA@outlook.com"  // cannot modify readonly after first declaration



