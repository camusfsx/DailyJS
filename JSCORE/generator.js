function* Fibonacci(){
    let x = 0 ,y = 1
    while(true){
        yield y 
        ;[x,y] = [y,x+y]
    }
} 
let f = Fibonacci()
for(let i=0;i<10;i++){
    console.log(f.next())
}