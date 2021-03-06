// * http://vuilaptrinh.com/2017-01-10-nam-vung-5-khai-niem-sau-xem-nhu-master-react/
// * https://www.codehub.vn/Lam-Quen-Voi-JSX-React#:~:text=JSX%20(vi%E1%BA%BFt%20t%E1%BA%AFt%20c%E1%BB%A7a%20c%E1%BB%A5m,createElement()%20trong%20React.
// * https://viblo.asia/p/props-va-state-trong-reactjs-naQZRYvqKvx
// * https://viblo.asia/p/arrow-function-trong-reactcomponent-co-van-de-gi-L4x5xdBB5BM
// * https://completejavascript.com/tim-hieu-react-component-lifecycle
// * https://viblo.asia/p/stateful-va-stateless-functional-components-trong-react-3P0lPkymZox
//* 1. JSX
/**
 * *JSX (viết tắt của cụm từ JavaScript XML) là một loại cú pháp mở rộng dành cho ngôn ngữ JavaScript viết theo kiểu XML.
 * *JSX cung cấp cú pháp ngọt (syntactic sugar) để thay cho câu lệnh React.createElement() trong React.
 */
// * 2. Ý nghĩa của props và state
/**
 * * Thành phần cơ bản của ReactJS là component. Component cho phép chúng ta chia nhỏ các thành phần UI độc lập mục đích để dễ quản lý
 * * và tái sử dụng nó. ReactJS kiểm soát luồng dữ liệu thông qua props và state. Dữ liệu trong states và props được sử dụng để render
 * * ra các component với dữ liệu động (dynamic dữ liệu).
 * * Component của React là Virtual DOM
 */
// * Props
/**
 * *props để gửi dữ liệu đến component
 * *Mọi component được coi là một hàm javascript thuần khiết (Pure Function)
 * *props tương đương với các tham số của hàm javascript thuần khiết
 * *Props là bất biến (không thể thay đổi được)
 * *
 */
// * State
/**
 * *State giống như một kho lưu trữ dữ liệu cho các component trong ReactJS.
 * *Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút
 * *, nhập một số văn bản, nhấn một số phím, v.v.
 */
/**
 * * Bất cứ khi nào một lớp kế thừa lớp React.Component, hàm tạo (Constructor) của nó sẽ tự động gán thuộc tính state
 * * cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè hàm tạo (Constructor)
 */
/**
 * * Tại sao gán key khi render một list lại quan tọng:(liên quan đến hiệu suất)
 * * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
 */

// let arr =[10,25,5,150,50,1]

// arr.forEach(item=>{
//     setTimeout(()=>{
//         console.log(item)
//     },item)
// })

const { sum } = require('./mathmax');

console.log(sum(5, 6));

// Date.prototype.vnFormat=function(){
//     const dd=this.getDate();
//     const mm=this.getMonth();
//     const yyyy=this.getFullYear();
//     return dd+'/'+mm+'/'+yyyy;
// }

// const date = new Date(2020,06,12);
// console.log(date.vnFormat());

// const Person=()=>{
//     console.log(this);
// }

// Person();

// Person.prototype.info=function(){
//     console.log(`${this.name} is ${this.age}`);
// }

// Person.prototype.say=function(){
//     console.log('I am a person');
// }

// function User(name, age){
//     this.name=name;
//     this.age=age;
// }

// User.prototype = new Person('Duc',21);

// const newUser = new User('Kien',22);
// const person = new Person('Ok',96);

// newUser.say();
// newUser.info();
// person.say();
// function kFormatter(num) {
//     return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
// }
// function nFormatter(num, digits) {
//     var si = [
//       { value: 1, symbol: "" },
//       { value: 1E3, symbol: "k" },
//       { value: 1E6, symbol: "M" },
//       { value: 1E9, symbol: "G" },
//       { value: 1E12, symbol: "T" },
//       { value: 1E15, symbol: "P" },
//       { value: 1E18, symbol: "E" }
//     ];
//     var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
//     var i;
//     for (i = si.length - 1; i > 0; i--) {
//       if (num >= si[i].value) {
//         break;
//       }
//     }
//     return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
//   }
// console.log(kFormatter(4793000));
// console.log(nFormatter(4793000,2));

const action = [1, 2, 3, 4];

console.log(typeof action);

const obj = {
  0: 1,
  1: 5,
};
function test() {
  console.log(arguments);
  console.log(Array.from(arguments));
}
console.log(Array.from(obj));
test(1, 2, 3, 4, 5, 6);
