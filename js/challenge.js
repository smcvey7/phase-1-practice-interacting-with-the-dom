document.addEventListener('DOMContentLoaded',()=>{
  
  counter();
  handleMinus();
  handlePlus();
})

let counterValue = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('like');
const form = document.getElementById('comment-form');

// increase time counter by 1 every cycle
function incrementUp(){
  let sec = parseInt(counterValue.innerText);
  if (shutOff === false){
    counterValue.innerText = sec + 1;
  }
  
}

// set cycle to 1 sec
function counter(){
  setInterval(incrementUp, 1000);
}

// manual counter changer

function handleMinus() {
  minus.addEventListener('click', ()=>{
  let sec = parseInt(counterValue.innerText);
  counterValue.innerText = sec - 1;
  })
}

function handlePlus() {
  plus.addEventListener('click', ()=>{
  let sec = parseInt(counterValue.innerText);
  counterValue.innerText = sec + 1;
  })
}
// liker

let number = 0
heart.addEventListener('click', ()=>{
  let timer = counterValue.innerText;
  let id = timer.toString();
  const likes = document.querySelector('ul.likes');

  if (document.getElementById(id) === null){
    number = 1;
    createLi(timer, id);
  } else{
    number++;
    document.getElementById(id).innerText=`${timer} has been liked ${number} times`;
  }
})


function createLi(timer, id) {
  const li = document.createElement('li');
  li.id = id;
  li.innerText = `${timer} has been liked 1 time`;
  document.querySelector('ul.likes').appendChild(li);
}

// comments
let commentNumber  = 1;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let comment = e.target.children[0].value;
  const p = document.createElement('p');
  p.innerText = `${commentNumber}. ${comment}`;
  document.querySelector('div#list').appendChild(p);
  commentNumber++;
  form.reset();
}
)

// pause button
let shutOff = false
pause.addEventListener('click',()=>{
  if (shutOff === false){
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    shutOff = true;
  } else if (shutOff === true){
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    shutOff = false;
  }
})