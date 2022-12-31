var generatebtn = document.querySelector('.generate_btn'); 
var qr_code = document.querySelector('.qr-code'); 
var input = document.querySelector('.input');
generatebtn.addEventListener('click',()=>{

 if(input.value != ''){

document.querySelector('.div_one').style.height = '430px';
document.querySelector('.div_two').style.height ='400px'; 
document.querySelector('.qr-code').style.display = 'block';

var url = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;

qr_code.src=url; 

 };
});