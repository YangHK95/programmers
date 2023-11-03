function solution(a, b) {
   // const answer = Number(`${a}${b}`)
   // const result = Number(`${b}${a}`)
   // if(answer>= result){
   //     return answer
   // }else{
   //     return result
   // }
    return Math.max((Number(`${a}${b}`)),(Number(`${b}${a}`)))
}