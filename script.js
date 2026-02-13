function buttons(){
  const button_1= document.getElementById('bt_1');
    const button_2=document.getElementById('bt_2');
    const ans=document.getElementById('ans');
        const broke=document.getElementById('broke');

button_1.addEventListener('click',()=>{

 kiss.classList.remove('hidden');
      ans.innerHTML='<i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i>';  
});



button_2.addEventListener('mouseover',()=>{
broke.classList.remove('hidden');
button_2.classList.add('hidden');

   ans.innerHTML='<i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i> <i class="fa-solid fa-face-grin-squint-tears" style="color: rgba(255, 212, 59, 1);"></i>';  

});


}
buttons();