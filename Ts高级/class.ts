class Person{
    name='dell';
    getName(){
        console.log(this.name)
    }
}
const xu = new Person();
xu.getName();


//对父类的方法进行重写
class teacher extends Person{
    getName(){
        return 'xu'
    }

    getTeacher(){
        super.getName();//子类调用父类方法 用super
        //super 子类把父类方法覆盖之后 再去调用父类方法
        return 'teacher';
    }
}

const jiang = new teacher()
console.log(jiang.getName())
