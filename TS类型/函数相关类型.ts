function hello(first:number,second:number):number{//约束返回类型是number
  return first+second;
}

function sayHello(num:number):void{
  console.log(num);
}

function errorEmit():never{
  throw new Error();
  console.log('never 类型表示这个函数永远执行不完')
}

function fn():never{
  while(true){

  }
}

//方法的解构 =写法 （{first}:{first:number}）
 function add({first,second}:{first:number,second:number}){

 }
 const total = add({first:1,second:2})