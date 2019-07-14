// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
if(Array.isArray(a) == true){
  alert("a 是数组");
}
else{
  alert("a 不是数组");
}

if(Array.isArray(b) == true){
  alert("b 是数组");
}
else{
  alert("b 不是数组");
}
//TODO


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0;i<a.length;i++){
  a[i] = a[i]*2;
}


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var str = colors[0];
for(var i = 1;i<colors.length;i++){
   str += " "+colors[i];
}
alert(str);
// case 2 output: 'Red+Green+White+Black'
var str = colors[0];
for(var i = 1;i<colors.length;i++){
   str += "+"+colors[i];
 }
alert(str);
// case 3 output: 'Red,Green,White,Black'
var str = colors[0];
 for(var i = 1;i<colors.length;i++){
   str += ","+colors[i];
 }
alert(str);


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNumber(a,b)
{
return a - b
}
a.sort(sortNumber);
a.reverse();
alert(a);


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(a) {
    if (!a.length) return
    if (a.length === 1) return 1
    let res = {}
    let maxName, maxNum = 0
    // 遍历数组
    arr.forEach((item) => {
      res[item] ? res[item] += 1 : res[item] = 1
    })
    // 遍历 res
    for (let r in res) {
      if (res[r] > maxNum) {
        maxNum = res[r]
        maxName = r
      }
    }
    return '出现次数最多的元素为:' + maxName;
}
