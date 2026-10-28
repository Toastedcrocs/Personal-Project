let count = 0;

const counterDisplay=document.getElementById('countervalue');
const button=document.getElementById('incrementbutton');


button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent=count;
})