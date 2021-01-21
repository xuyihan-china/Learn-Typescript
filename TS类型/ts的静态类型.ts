const count :number = 32;
const Arr:Array<number>=[1,34,5];
console.log(Arr.valueOf());
//woc 居然还有Array 类型 和points类型 自定义的类型
interface Points {
  x:number,
  y:number
}
const point :Point={ // 调用同一个文件夹下的point
  x:23,
  y:4
}

let namee; //这个是any类型 而不是字符串类型 因为声明和赋值不在一行
namee="abc";