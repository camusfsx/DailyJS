function Obj(){
	this.obj= this
}
let obj = new Obj()
console.log(obj,obj.obj,obj.obj.obj,obj.obj.obj.obj,obj.obj.obj.obj.obj.obj.obj)

let object = {
	get object(){
		return object
	}
}
