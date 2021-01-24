//private protected public
//private 允许在类内被使用
//public 允许在类内外被使用
//protected 允许在类内及其继承的子类中使用
class PersonMan{
    public name2!: string;
    constructor(name:string){
        this.name = name;
    }
}//constructor 接受 new Person中的参数  constructor new 对象的瞬间 执行
const person2 = new Person('dell')



//就是说要从外面传递过来一个参数 并且保存在类内 最简单的方法就是

class IronMan {
    constructor(public iron:string){

    }
}
 
const stf = new IronMan('steel')

//这样类内的iron就赋值成功了 这是最简洁的方式