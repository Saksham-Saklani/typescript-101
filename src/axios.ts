import axios, { isAxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { Axios } from 'axios'

interface Todo{
    userId: number,
    id: number,
    title: "string",
    completed: boolean
}

    // Web Request 

const getTodo = async()  => {
    try {
        const response: AxiosResponse<Todo>  = await axios
            .get("https://jsonplaceholder.typicode.com/todos/1")

        console.log('data:', response.data)

    } catch (error: any) {
        if(isAxiosError(error)){
            console.log('error:', error.response?.status)
        }
    }
}

