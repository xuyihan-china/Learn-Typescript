//getter 代码

class Person{
    constructor(private _name:string){
       //constructor 中是做一些初始化
    }
    get getName(){
        return this._name+"xu" //从外界取道的值就是 get其实就是给外接一个接口 
        //拿到真实返回的值
    }
    set name(name:string){
        this._name= name
    }
}

const person = new Person('dell')
console.log(person.getName); //getter 中获取值不需要加上括号

//设计模式 单例模式
 class Demo{
    private static instance :Demo;
    private constructor(public name:string){
        //不允许创建实例，因为用了private关键字只能内部使用constructor
    }
    static getInstance(){ //static 把方法挂载在类上面 而不是类的实例上面
        if(!this.instance){
            this.instance = new Demo('xuyihan');//constructor 为private 所以要在内部创建 并且判断有没有这个对象
            //没有才创建
        }
        return this.instance;
    }
 }
//  const demo1 = new Demo();
//  const demo2 = new Demo();

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
//两个实例都指向一个对象

// 都输出 xuyihan

 //只允许创建一个实例















