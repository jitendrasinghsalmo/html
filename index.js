// 

// i am writing a clear code it ok
// input element select
let firstinput=document.querySelector('#hye')

// list element select
let firstlis=document.querySelector('#list')
// button element select
let button=document.querySelector('#add-button')


// last step function write
button.addEventListener("click",function(){
  let inputElem=firstinput.value
  let creatli=document.createElement('li')
  creatli.innerText=inputElem
  creatli.style.color='red'
  creatli.style.fontSize='30px'
  firstlis.append(creatli)
  button.style.color='green'
  firstinput.value=""
})
