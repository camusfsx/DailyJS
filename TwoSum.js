let twoSum =(nums,target)=>{
    let result =[]
    for(let i=0;i<nums.length;i++){
        let j = nums.indexOf(getOtherIndex(nums[i],target))
        if(nums.includes(getOtherIndex(nums[i],target))&& j > i){
            result = [i,j]
            return result
        }
    }
}
function getOtherIndex(x,y){
    return x-y >= 0 ? x-y : -1
}
