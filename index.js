//undefined vs null
//let arr=[1,2,3,4]
//let new1=arr.map((a,b,c)=>{
  //  console.log(a)
 //   return a
//})
//console.log(new1)
//let user=true
//user?console.log('hello'):console.log('hiiiii')
//let arr=[1,2,3,4]
 //let new1=arr.map((1,2,3)=>
 //{
   // console.log(a)
 //})
                                  //topic filter function
 //let arr=[1,2,3,4]
 //let new2=arr.find((a)=>{
    //return a>2
 //})
// console.log(new2)t'
 //let new1= arr.filter((a,b,c)=>{
  //  console.log(a)
// })
                                 //topic reduce function
// let arr=[1,2,3,4,5,6]
//  let new1= arr.reduce((a,b,c,d)=>{
//     return a+b
//  })
//  console.log(new1)[]
                                          //date-----           6-1-2024

// object
// let obj = {
//   id:1,
//   user:"hello"
  
// }
// overighd:
// obj.user="hi"
// obj.id

//                                             date     ------    9-1-24
// function outer()
// {
  
//   inner()
//   var num= 5
              
//   function inner()
//   {
//     console.log(num)
//   }
// }
//                                         //hoisting-topic 

// // var a
// // log(a) // or isme value nhi rhta h 
// // a=5


// // let b/// isme value  like b=5 ya  condition di jati h

// // log(b)
// // let b=5
// a=7
// {
// let a=5
// console.log(a)
// }
// console.log(a)
// // higher order function


// function outer(j){
//   console.log('outer')
//   j()
// }
// function inner(){
//   console.log('inner')
// }
// outer(inner)


// function outer(){
//    console.log('outer')
//    function inner(){
//     console.log('inner')
//    }
//    return inner
// }
// outer(inner)
// let inner=outer()
// inner()
 //outer()() //both accesss function


// let arr=[1,2,3,4,5,6,'hi','hello','true','false']                      //h.w.
// // alg alg value nikalna h string alg or int alg or char alg or boolean alg


// date 10-1-24////

//  let arr=[3,4,5,6,7,true,false,'hello','hiii'] 
// function get(arr)
// {
//   let res=[]
//   for(let item of arr)
//   {
//     if(typeof item==='string')
//     {
//       res.push(item)
//     }
//   }
//   return res
// }
// console.log(get(arr));

// function getString(item)
// {
//   return typeof item==='string'
// }
// function getNumber(item)
// {
//   return typeof item==='number'
// }
// function getBool(item){
//   return typeof item==='boolean'
// }
// function get(arr,fn)
// {
//   let res=[]
//   for(let item of arr)
//   {
//     if(fn(item))
//     {
//       res.push(item)
//     }
//   }return res
// }
// console.log(get(arr,getString))
// console.log(get(arr,getNumber))
// console.log(get(arr,getBool))

// function callback(num,fn)
// {
//   return fn(num)
// }
// function boolean(num)
// {
//   return typeof item==='boolean'
// }

// console.log(callback(true,boolean))

//                  date      -------          13-1-24
             // cluser ---- main topic ////


            //  function outer(){
            //     let user='hiiii'
            //     function inner()
            //     {
            //       console.log(user)
            //     }
            //     inner()
            //     //return inner
            //   }
            //   let a=outer()
            //   a()
              
              /// . property object ke ander lgta h 
              //Array.map
              // proto type ya clone  -------- topic study material
              
              
              
              //                     date 16-1-24
              
              
              // let obj=
              // todo.__proto__ === object prototype
            //   cunstructer function -- topic
            // function outer(){

            // }
            // // let user=new outer()
            //  let user= outer()
            // console.log(user)

            function outer(user,LastName){
                this.userName=user
                this.userLastName=LastName
            }
             let user = new outer('hello','hii')
             
            console.log(user)

