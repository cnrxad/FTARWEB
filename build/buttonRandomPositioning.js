const imageButton = document.querySelectorAll('.imageButton');

imageButton.forEach(btn =>{
  console.log(btn);
  btn.style.top = Math.floor(Math.random()*100) + '%';
    btn.style.left = Math.floor(Math.random()*100) + '%';
})
