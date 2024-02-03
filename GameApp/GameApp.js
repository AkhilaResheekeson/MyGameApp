const adviceList=['Go for it','Never','Good','Bad','Not sure','Think twice','May be right','May not be right','Risky'];

function adviceFunction(){
    const pick=Math.floor(Math.random()*adviceList.length);
    return adviceList[pick];
}

const button1=document.getElementById('btn1');
const button2=document.getElementById('btn2');
const answer=document.getElementById('answer');

button1.addEventListener('click',function(){
    const advice=adviceFunction();
    answer.textContent=advice;
});

button2.addEventListener('click',function(){
    const reset="";
    answer.textContent=reset;
});