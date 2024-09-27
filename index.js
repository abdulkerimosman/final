const button = document.querySelector('#button')
const table = document.querySelector('#table')
const man = document.querySelector('#man')
const x = document.querySelector('#x')
const body = document.querySelector('#body')
const blur1 = document.querySelector('#blur1')
const blur2 = document.querySelector('#blur2')
const blur3 = document.querySelector('#blur3')
const blur4 = document.querySelector('#blur4')
const blur5 = document.querySelector('#blur5')
const blur6 = document.querySelector('#blur6')
const blur7 = document.querySelector('#blur7')
const blur8 = document.querySelector('#blur8')

button.addEventListener('click',()=>{
    if (!button.classList.contains('hidden')){
        button.classList.add('hidden');
        table.classList.remove('hidden');
        blur1.classList.add('blur');
        blur2.classList.add('blur');
        blur3.classList.add('blur');
        blur4.classList.add('blur');
        blur5.classList.add('blur');
        blur6.classList.add('blur');
        blur7.classList.add('blur');
        blur8.classList.add('blur');
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
        blur4.classList.remove('blur');
        blur5.classList.remove('blur');
        blur6.classList.remove('blur');
        blur7.classList.remove('blur');
        blur8.classList.remove('blur');
        body.classList.remove('overflow-hidden');
    }
    
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { // Check if the ESC key is pressed
        if (!table.classList.contains('hidden')) {
            table.classList.add('hidden');
            button.classList.remove('hidden');
            blur1.classList.remove('blur');
            blur2.classList.remove('blur');
            blur3.classList.remove('blur');
            body.classList.remove('overflow-hidden');
        }
    }
});