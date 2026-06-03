enum role{
    SUPER_ADMIN,
    ADMIN,
    USER,
}

function grantAccess(r: role){
    console.log(`${r} permissions granted`)
}

grantAccess(role.USER)

// mix data enum - avoid 

enum cookies{
    YES = 1,
    NO = "Decline"
}
// create enum specific to value type - string enum, number enum, boolean enum, etc.


// Number values in enums auto-increments

enum menu{
    PIZZA=101,
    BURGER, //102
    PASTA //103
}
// only use string values



// no modifications allowed

const enum permissions{
    ADMIN="all",
    SUPER_ADMIN="all",
    USER="limited"
}
// permissions.ADMIN = "limited" // throws error
