function solution(my_string, overwrite_string, s) {
 const first = my_string.slice(0,s)
 const second = my_string.slice(s+overwrite_string.length)
 const resoult = first.concat(overwrite_string) + second
 return resoult
    
    
    


}