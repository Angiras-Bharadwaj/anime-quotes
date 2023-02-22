console.log('hello');
let quotebox=document.querySelector('.quotebox');
let charbox=document.querySelector('.charbox');
let animebox=document.querySelector('.animebox');
let btn=document.querySelector('.btn');
// btn.classList.add('animebox');
btn.addEventListener('click',function(){
    console.log('clicked');

fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(function(quote){
        quotebox.innerText=quote.quote;
        charbox.innerText=quote.character;
        animebox.innerText=quote.anime;
    })
})
