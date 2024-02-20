


//basic currying
/* function sum1(a){
return (b)=>{return (c)=> a+b+c}
}

console.log(sum1(1)(2)(3)); */


/* //infinite currying
function sum2(a){
  let ans = a;
  return function inner(b){
    if(!b){
      return ans;
    }
    ans = ans+b;
    return inner;
  }
}

console.log(sum2(1)(2)(3)(4)()) */



//infinite currings with infinite args 

function sum3(...args){
//if(args.length === 0 ) return 0;
let total = args.reduce((acc,a) => acc+a,0);

return function inner(...args1){
  if(args1.length === 0 ) return total;
  total = total + args1.reduce((acc,a) => acc+a,0);
  return inner;
};

}

console.log(sum3(1,2,6)(2,5)(1,2,1)())

