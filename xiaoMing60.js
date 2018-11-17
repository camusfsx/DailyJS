//function exam(){
//	var score = Math.floor(Math.random()*101)
//	if(score>=60){
//		console.log("winner")
//	}else{
//		console.log("loser")
//		setTimeout(exam,1000)
//	}
//}

function exam(){		
	var score = Math.floor(Math.random()*101)
	return  new Promise((resolve,reject)=>{
		if(score >= 60){
			resolve(score)
		}else{
			console.log('loser')
			setTimeout(()=>resolve(exam()),1000)
		}
	})
}
exam().then(result=>{
	console.log('winner',result)
})

