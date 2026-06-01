const name:string = "sxkshm" // Type Annotation

let age = 21  // Type Inference


// Type Assertion

const userAddress: any = "delhi"

const address: string = (userAddress as string).toLowerCase()

type user = {
    name: string,
    age: number,
    address: string
}

const userDetails = '{"name": "sxkshm","age": "21","address": "delhi"}'
const userObject = JSON.parse(userDetails) as user 

// any vs unknown

let test: any = "testing"
test = 401
test = [1,2,3]
console.log(test.length)

    // if type is unknown in above case, ts shows error

    // how to perform the same with unknown

    let newTest:unknown = 'testing new';
    newTest = 401
    newTest = [5, 10, 50]

    if(typeof newTest === "string"){
        console.log(`Name: ${newTest.toUpperCase()}`)
    }

    if(typeof newTest === "number"){
        console.log(`age: ${newTest}`)
    }


// try & catch

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
}
