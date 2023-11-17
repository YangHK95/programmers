function solution(a, b, c) {
    if(a == b && a == c){
       answer = (3*a)*(3*Math.pow(a,2))*(3*Math.pow(a,3))
       }else if(a == b || b == c || c == a ){
         answer =  (a+b+c) *(a**2 + b**2 + c**2)
       }else{
         answer =  a+b+c
       }
    return answer;
}