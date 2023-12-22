function solution(numLog) {
    let str = []
    for(i = 0 ; i< numLog.length ; i ++){
        if(numLog[i]<numLog[i+1]){
                str.push("w")
            }
        }if else(numLog[i]>numLog[i+1]){         
                str.push("s")}
        }
    return str
}