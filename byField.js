const users = [
	{name:'John',age:20,company:'Jirengu'},
	{name:'peter',age:18,company:'Alibaba'},
	{name:'Ann',age:19,company:'Tencent'}
]
let byField =(key)=>(a,b)=>a[key]>b[key]? 1:-1
console.log('company',users.sort(byField('company')))
console.log('name',users.sort(byField('name')))
console.log('age',users.sort(byField('age')))
