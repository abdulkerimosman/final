const button = document.querySelector('#button')
const table = document.querySelector('#table')
const man = document.querySelector('#man')
const x = document.querySelector('#x')
const body = document.querySelector('#body')
const blur1 = document.querySelector('#blur1')
const blur2 = document.querySelector('#blur2')
const blur3 = document.querySelector('#blur3')

button.addEventListener('click',()=>{
    if (!button.classList.contains('hidden')){
        button.classList.add('hidden');
        table.classList.remove('hidden');
        blur1.classList.add('blur');
        blur2.classList.add('blur');
        blur3.classList.add('blur');
        body.classList.add('overflow-hidden');


    } 

})


x.addEventListener('click',()=>{
    if (!table.classList.contains('hidden')){
        table.classList.add('hidden');
        button.classList.remove('hidden');
        blur1.classList.remove('blur');
        blur2.classList.remove('blur');
        blur3.classList.remove('blur');
        body.classList.remove('overflow-hidden');
    }
    
})