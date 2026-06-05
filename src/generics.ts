function print<T>(value: T): T{
    return value
}

print("hello world")
print(10)
print({
    name: "tom",
    age: "18"
})

function pair<one,two>(firstInput: one, secondInput: two): [one, two]{
    return [firstInput, secondInput]
}

pair("test", 99.9)
pair({}, [])

// generic interface

interface data<T>{
    response: T
}

const getData: data<{}> = {
    response: {
        user: 'john'
    }
}


// Partial generic

function update<T>(existing: T, updates: Partial<T>): T{
    return {...existing, ...updates}
}




