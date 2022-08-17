

function solution (A){
    let len = A.length
    let numOfAppearance = 0;
    let myObj = {};
    let mostAppearance = 0;
    let tmp;
    for(let i = 0; i <len ; i++){
        if(A[i] in myObj){
            numOfAppearance = myObj[A[i]] + 1
            myObj[A[i]]= numOfAppearance;
        }else{
            myObj[A[i]] = 1
        }
    }

    for (const [key, value] of Object.entries(myObj)) {
        if(value>mostAppearance){
            mostAppearance = value
            tmp = key
        }
            
      }
      if(mostAppearance > len/2){
        return A[tmp]
      }else{
        return -1
      }
    
}
console.log(solution([1, 1, 2, 1, 3 ]))







