function solution(num_list) {
    let str = num_list.toString()
    let odd = ""
    let even = ""
    for( i = 0; i < str.length ; i++){
       if(str[i] % 2 == 1){
         odd += str[i] 
       }
       if(str[i] % 2 == 0) {
          even += str[i]
       }
    }
    return Number(odd) + Number(even)
}