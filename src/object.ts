// structural typing - TS checks if object suffice whats needed during compile time;
// duck typing - JS checks if object suffice whats needed during run time

type auth = {
    username: string;
    password: string;
}

const user = {
    username: "sxkshm",
    password: "123",
    email: "user@gmail.com"
}

const newUser: auth = user // lets you add extra properties than defined in type. e.g. - email



// Splitting - clean code practice


type order = {
    price: number;
    item: string[];
}

type menu = {
    veg: string[];
    nonVeg: string[];
    drinks: string[]
}

type customer = {
    name: string;
    address: string;
    contact: number;
}

type restaurant = {
    orders: order[];
    menu: menu;
    customers: customer[];
}

// Partial : make all fields optional 

type form = {
    name: string;
    address: string;
    mobile: number;
    avatar: string;
}

const updateProfile = (userForm: Partial<form>) => {
    console.log("profile updated", userForm)
}

updateProfile({name: "john"})
updateProfile({mobile: 983497835})

// Required : make all fields required

type register = {
    email: string;
    password: string;
    recoveryEmail?: string;
}


const setRecoveryEmail = (details: Required<register>) => {
    console.log("recovery mail added")
}

setRecoveryEmail({
    email: "john@gmail.com",
    password: "qwerty123",
    recoveryEmail: "john@outlook.com"
})

// Pick: lets you choose only required fields

type signUp = {
    email: string;
    password: string;
    username: string;
    mobile: number;
}

type signIn = Pick<signUp, "email" | "password">

// Omit: lets you left fields out

type adminPanel = {
    homePage: string;
    aboutPage: string;
    adminPage: string;
}

type userPanel = Omit<adminPanel, "adminPage">

