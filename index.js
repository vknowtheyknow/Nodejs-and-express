// Import stylesheets
import './style.css';

// Write Javascript code!
const mymodule = require('mymodule')
console.log(mymodule.getCurrentFime())

// function calculate(x,y){
//   return x*y
// }

// function calculate(x,y){
//   setTimeout(()=>{
//     return x*y
//   },3000) 
//   // มันต้องรอ เลยโดดไปทำอันอื่นก่อน sum ไม่ทันมา display ทำเฉย
// }
function calculate(x,y,callback){
  console.log('calculating')
  setTimeout(()=>{
    const sum = x+y
    callback(sum)
    // เมื่อผ่านไป 3 วิให้เรียกใช้งาน callback function ที่ส่งเข้ามา
  },3000) 
  // มันต้องรอ เลยโดดไปทำอันอื่นก่อน sum ไม่ทันมา display ทำเฉย
}
function display(result){
  console.log(`result of calculation is = ${result}`)
}
const sum = calculate(3,2,display)
// or you can write
// calculate(3,2,(result)=>{
//   console.log(`result of calculation is = ${result}`)
// })


const url1 = "kong.dev/file1.json"
const url2 = "kong.dev/file2.json"
const url3 = "kong.dev/file3.json"
function downloading(url,callback){
  setTimeout(()=>{
    console.log(`downloading ${url}`)
    callback(url)
  },3000)
}

function complete(result){
  console.log(`already ${result} download`)
}

downloading(url1,function (result){
  console.log(`already ${result} download`)
  downloading(url2,function (result){
    console.log(`already ${result} download`)
    downloading(url3,function (result){
      console.log(`already ${result} download`)
    })
  })
})

// async await
async function start(){
  console.log(await downloading(url1))
  console.log(await downloading(url2))
  console.log(await downloading(url3))
}

start()


