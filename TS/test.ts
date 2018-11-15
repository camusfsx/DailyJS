Array.prototype.quickSort = function():number[]{
if( this.length < 2){
		return this
	}else{
		let left:number[]=[]
		let right:number[]=[]
		let anchor:number = this[0]
		for(let value:number of this){
			if(anchor > value){
				left.push(value)
			}else{
				right.push(value)
			}
		}
		return left.quickSort().connect(right.quickSort())
	
	}

}
let arr:number[] =[5,6,7,89,4234,24,645,6,47,56,7,5,73,54,6,3,673,52,6,2,72,47,34,55,3,721,7,2]
console.log(arr.quickSort())
