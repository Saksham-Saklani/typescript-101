// Web request

const getData = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    
        if(!response.ok){
            throw new Error(`Error Status:${response.status}`)
        }

        const data = response.json()
        console.log(data)
    
}