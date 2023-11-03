let text=document.querySelector('h4');
text.addEventListener('click',(e)=>{
    e=window.event;
    if(e.target.tagName==='H4'){
        e.target.style.color='red';
    }
    text.textContent='You clicked the text!'
})