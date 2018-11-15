function execTime(t) {
    let getUpTime =new Date().getTime()+t
    let IteratorTime = new Date().getTime()
    while(IteratorTime<getUpTime){
        IteratorTime = new Date().getTime()
    }
}
console.log(1)
execTime(3000)
console.log(2)




