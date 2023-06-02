const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const fundo = document.querySelector('body');

btn.onclick = function(){
    fundo.setAttribute('class','noturno');
}
btn2.onclick = function(){
    fundo.setAttribute('class','salesforce');
}
btn3.onclick = function(){
    fundo.setAttribute('class','branco');
}

