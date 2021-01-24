//ts 只是在开发的时候给你语法提示 真正的js代码中没有interface
interface Person{
    name:string;
    say():string;
    age?:number;
}
//定义通用的集合类型 
//type 是代表一个基础类型
// 

//比如person是必须要有name属性的，没有的话报错
const setPersonName =(person:Person)=>{
    console.log(person.name);
}


//interface 是表示对象
interface Person1{
    readonly say:string; //只读
    name:string,
    age?:number; //可有可无 如果有那么是number'
    [propName:string]:any;// 如果有其他属性也可以 其他属性：类型string  值为any
}

//用字面量 就是直接传递对象的时候，是强校验 就是name是必须的 age 可选 sex不能有
//用对象的形式 可以传入其他的值


//一个类implements 一个接口 就要有接口里的所有的属性和方法
class User implements Person{
    name:'dell' | undefined;
    say(){
        return 'hello'
    }
}

interface xu extends Person{
    cha:string
}


//接口 接受一个函数类型 的形式
interface SayHi{
    (word:string):string;//接受string 返回string
}