function fn(){
	fn.fn=fn
	return fn
}
console.log(fn()===fn)
console.log(fn.fn===fn)
