function getFee(isMember){
    const tru = isMember ?'2.00$' : '10$';
    return tru
}

console.log(getFee(false))
console.log(getFee(true))