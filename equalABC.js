function fn(){
	return a
}
let a = function(){
	return b
}
let b = function(){
	return 'c'
}
a.toString = function(){
	return 'a'
}
b.toString = function(){
	return 'b'
}
console.log(fn() == 'a')
console.log(fn()() == 'b')
console.log(fn()()()== 'c')
