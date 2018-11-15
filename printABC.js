let i = 'a'
function fn(){
    	console.log(i)
	i = 'b'
    	return function(){
        	i = 'c'
        	return function(){
        	}
    	}
}
fn()
fn()()
fn()()()
