function solution(code) {
    let mode = 0
    let ret =""
    for(i=0;i<code.length;i++){
        if(code[i]==="1") {mode ===0 ? mode=1 : mode=0
      } else {
       if (mode === 0){
         (i%2===0)&&(ret += code[i])
       }else { (i%2!==0)&&(ret += code[i]) }
         };
        
    }
    return ret === ""? "EMPTY" :ret
}