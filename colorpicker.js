const color=document.getElementById('color');
color.addEventListener('input',()=>{
    const selector=color.value;
    document.body.style.background=selector;
});