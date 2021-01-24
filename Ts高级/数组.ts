 //可变类型 类型就是在 【】前面加上类型
 const arr: (string|number)[] =[1,'2',3];
 const arr2:string[]=['1','2','3'];
 //如果类型太长那么就用 type alias 类型别名来记录
 type admin ={name:string,password:string|number}
 //admin中包含的对象数组中都要有 （有且仅仅有）不然会报错
 const mysql:admin[]=[
     {
        name:'xu',
        password:'123'
     }
     ,
     {
        name:'yu',
        password:'234'
     }
 ]

 //元组对所有的元素进行约束 对每个元素类型进行限制 如果匹配不上那么会报错
 //处理csv
 const teacherInfo2:[string,string,number]=['Dell','male',18]
 //元组 Ts有 tuple
 const teacherInfo=['Dell','male',18];