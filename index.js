// new Promise(res=>{
//   const response = fetch('https://jsonplaceholder.typicode.com/todos/12').then(data => res(data))
  
// }).then(data=> data.json())
// .then(data => console.log(data))

// Promise((resolve)=>resolve('sucsess')).then(data=> console.log(data))

// setTimeout(()=>console.log('3'),3)
// setTimeout(()=>console.log('1'),1000)

// setTimeout(()=>console.log('setTimeout'),0)

// alert('hallo')

// const result = 0 && false && null && NaN;
// const result1 = 0 || false || null || NaN;

// const result2 = 0 || false || null || NaN || 1;

// const result3 = 0 && false && null && NaN && 1;

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)

// new Promise((res)=>{
//   console.log('inner promise')
//   setTimeout(()=>res('value resolved'),100)
//   console.log('after setTimeout')
// }).then(data=>console.log(data))

// fetch('https://jsonplaceholder.typicode.com/todos/12').then(data => console.log(data))

// for (let index = 0; index < 10; index++) {
//   setTimeout(()=>console.log(index),1000);
  
// }

// function factorial(n){
//     console.log(this)
//     if(n === 0 ){
//         return 1;
//     }else{
//         console.log(n * factorial(n - 1) ,' iteration result')
//         return n * factorial(n - 1)
//     }
// }

// в альтернативной ветке текуший парамерт множиться на результат этой-же функции с параметром на идиницу ниже;


// const result = factorial(3);

// console.log(result);

//fibonaci way 

// function fibonaci(n){
//     console.log(n)
//     if(n <= 1 ){
//         // console.log('last one', n)
//         return n 
//     }
//     if(n){
//         return  fibonaci(n - 1) + n
//     }
// }

// const a = fibonaci(7)

// console.log(a)
// на каждой рекурсивной итерации мы к n плюсуем результат вызова этой же функции с n - 1;


// function flatten(arr){

//     let result = [];

//    for(let i = 0; i < arr.length; i++){

//     if(Array.isArray(arr[i])){
//         const a = flatten(arr[i])
//          result = result.concat(flatten(arr[i]))
//     }else{
//         result.push(arr[i]);

//     }

//    }
//    return result

// }

// const flattArr = flatten([1,2,[88,88,0],3,[4,5]])

// console.log(flattArr);



// function User(name,surname) {
//     this.name = name;
//     this.surname = surname;

    
// }
// const a  = new User('vova','hrabovskyi');

// User.prototype.address = '1234';

// const b = new User('misha','muzichenko');

// console.log(a);
// console.log(b);

// const mapExample = new Map([[1,2],[2,3]])


// console.log(mapExample);

// const setExample = new Set()
// setExample.add(1).add('hallo').add(1)

// console.log(setExample);


// console.log('works')
// const first = ['v','o'];
// const second = ['v','a']

// const myname = [...first,...second];
// console.log(myname);

// const meedle = myname.slice(1,3);
// console.log([1,2,3,4,5].slice(1,-1));

//splise

// const initialArr = [1,2,3,4,5];
// initialArr.splice(0,0,1,[,2,2,3,3,]);

// console.log(initialArr)



// function sum(a,b,c) {

//     return a + b + c 
    
// }

// function mult(a,b,c) {
//     return a * b * c;
    
// } 

// function carry(callback) {
//     return function curried(...args) {
//         console.log(args)

//         if(callback.length <= args.length){
//         return callback.apply(this,args)

          
//         }

//         return curried.bind(this, ...args );
   
//     }

    
// }

// const carrySum =  carry(sum);

// console.log(
//     carrySum(36)(0)(8)
 
// )








//кариррование - патерн разработки
//создания - функция принимает функцыю и возвращает туже функцию с расширинным функцыоналом 

const str = 'hvljvjlhvjlvjlhvhjvjhvjvjlhvjlhvjvfcfcxdxdszfjjlmm,bnbvfxresiuyljkbjhv';

const initArr = str.split('') 

const arrr = initArr.reduce((acc,el)=>{

    // console.log(arrr);
    if(!acc[el]){
        acc[el] = initArr.filter((e)=> el === e)     
    }
    return acc; 
},{})


console.log(Object.values(arrr).sort((a,b)=>  b.length - a.length)[0][0])