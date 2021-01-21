//typescript 优点 
type Point ={x:number,y:number};
function demo(Point){//data 是一个对象
    //js是动态类型 一个变量赋值为什么就是什么 
    //ts是静态类型 只记住最开始的值
    console.log('123xu');
    return Math.sqrt(Point.x + Point.y);
}
demo({x:123,y:123})
//传入对象  在编写代码的时候就发现错误
// 代码语义简洁明了
//tsc 01.js 进行编译 生成 js文件
//安装 npm  install -g ts-node  ts-node 可以