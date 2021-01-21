//type annotation
//type inference
function fn2(a:number,b:number){
  //参数a具有隐世类型any 而不是 number
  return a+b;
}
fn2(21,2);
//TS会根据后面的值进行推断,

const func1 :(str:string)=> number =(str)=>{
  return parseInt(str,10);
}
//输入一个函数 返回一个函数