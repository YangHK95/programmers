function solution(num_list) {
   let int = num_list
    return int[int.length-1] > int[int.length-2] ? [...int,int[int.length-1]-int[int.length-2]]  : [...int, 2*int[int.length-1]]
}