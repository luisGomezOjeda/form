const buttons1 = document.querySelector(".a");
const buttons2 = document.querySelector(".b");
const buttons3 = document.querySelector(".c");
const buttons4 = document.querySelector(".d");
const buttons5 = document.querySelector(".e");
let score;

buttons1.addEventListener("click",()=>{
 if(buttons1.checked){
  buttons2.checked = false;
  buttons3.checked = false;
  buttons4.checked = false;
  buttons5.checked = false;
  score = 1;
  console.log(score);
 }
});
buttons2.addEventListener("click",()=>{
if(buttons2.checked){
 buttons1.checked = false;
 buttons3.checked = false;
 buttons4.checked = false;
 buttons5.checked = false;
 score = 2;
 console.log(score);
 }
});
buttons3.addEventListener("click",()=>{
 if(buttons3.checked){
  buttons1.checked = false;
  buttons2.checked = false;
  buttons4.checked = false;
  buttons5.checked = false;
  score = 3;
  console.log(score);
 }
});
buttons4.addEventListener("click",()=>{
 if(buttons4.checked){
  buttons1.checked = false;
  buttons2.checked = false;
  buttons3.checked = false;
  buttons5.checked = false;
  score = 4;
  console.log(score);
 }
});
buttons5.addEventListener("click",()=>{
 if(buttons5.checked){
  buttons1.checked = false;
  buttons2.checked = false;
  buttons3.checked = false;
  buttons4.checked = false;
  score = 5;
  console.log(score);
 }
});

const submit = document.querySelector("#submit");
const form = document.getElementById("form");

submit.addEventListener("click",()=>{
if(score){
 form.innerHTML = `<img class="img-2" src ="./icons8-enviado-50.png">
  <h3 class="p1">You selcted ${score} out 5</h3>
  <h1 class="h1">Thank you!</h1>
  <p class="p2">We appreciate you taking the time to give  a rating if you even need more support,don,t hesitante to get in touch!</p>`;
 }
});

