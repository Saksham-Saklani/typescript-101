function setDetails(username: string, status: string): void{
    console.log("Profile updated")
}


// optional & default parameters

function checkOut(items: string[], totalPrice: number, tip?: number, user: string = "guest" ):{user: string; orderId : number}{
      console.log("checkout done")  
    
    const orderId = 3424

    return {
        user,
        orderId
    }
}
