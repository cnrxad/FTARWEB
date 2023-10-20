const imageButton = document.querySelectorAll('.imageButton');

imageButton.forEach(btn =>{
  console.log(btn);
  btn.style.top = Math.floor(Math.random()*1920) + 'px';
    btn.style.left = Math.floor(Math.random()*2000) + 'px';
})
