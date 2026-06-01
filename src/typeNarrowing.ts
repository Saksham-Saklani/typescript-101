// Type narrowing
function checkApiResponse(apiResponse: string | object){
    if(typeof(apiResponse) === 'string') return `Api Response message: ${apiResponse}`

    return apiResponse
}

function checkApiStatus(apiStatus: 'success' | 'error'| 'pending'){
    if(apiStatus === 'success'){
        return {message: "API call success"}
    }

    if(apiStatus === 'error'){
        return {message: "API call failed"}
    }

    return {message: 'No API response'}
}


// Type Guarding

type userApi = {method : "get" | "post", role: "user" }
type adminApi = {method : "get" | "post", role: "admin" }

type API = userApi | adminApi

function checkRole(randomApi: API):string{
    switch(randomApi.role){
        case "admin":
            return 'role is admin'
            break;
        case "user":
            return 'role is user'
            break;
        
    }
}