//定义通用的集合类型 
//type 是代表一个基础类型
// 
//比如person是必须要有name属性的，没有的话报错
var setPersonName = function (person) {
    console.log(person.name);
};
//用字面量 就是直接传递对象的时候，是强校验 就是name是必须的 age 可选 sex不能有
//用对象的形式 可以传入其他的值
//一个类implements 一个接口 就要有接口里的所有的属性和方法
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
