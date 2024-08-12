const main = document.querySelector('#main')
const menu = document.querySelector('#menu')
const nav2 = document.querySelector('#nav2')
const x = document.querySelector('#x')
const justify = document.querySelector('#justify')
const absolute = document.querySelector('#absolute')


menu.addEventListener('click',()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');


    } else{
        menu.classList.add('hidden');
        x.classList.remove('hidden');
        nav2.classList.remove('hidden');
        main.classList.add('hidden');  
        absolute.classList.remove('sticky');
        absolute.classList.add('absolute');    


    }
})

x.addEventListener('click',()=>{
    if (!x.classList.contains('hidden')){
        x.classList.add('hidden');
        nav2.classList.add('hidden');
        main.classList.remove('hidden');
        menu.classList.remove('hidden');
        absolute.classList.add('sticky');
        absolute.classList.remove('absolute');
    }
})