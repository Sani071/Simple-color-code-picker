let colorInputField = document.querySelector('#cp')
let codebtn = document.querySelector('.gc')
let getCode = document.querySelector('.code')

codebtn.addEventListener('click',function() {
   getCode.innerHTML = colorInputField.value;
   getCode.style.color = colorInputField.value

   if (colorInputField.value=== '#ffffff'){
    getCode.style.color = 'black';
   }
})
