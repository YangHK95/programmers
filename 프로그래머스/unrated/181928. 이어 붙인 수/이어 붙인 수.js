function solution(num_list) {
    let str = num_list.toString()
    let sum = ""
    let sum2 = ""
    for( i = 0; i < str.length ; i++){
       if(str[i] % 2 == 1){
         sum += str[i] 
       }
       if(str[i] % 2 == 0) {
          sum2 += str[i]
       }
    }
    return Number(sum) + Number(sum2)
}