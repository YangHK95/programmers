function solution(num_list) {
    let multip = 1
     let multip2 =  0
 for(i = 0; i < num_list.length ; i++){
      multip *= num_list[i]
      multip2 += num_list[i] 
 }
    
      return multip < Math.pow(multip2,2) ? 1 :0
 
 
        
}