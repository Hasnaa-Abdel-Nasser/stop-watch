let mseconds = 0, seconds = 0 , minutes=0 , hours = 0 ;
let fullTime=0;
let clock = document.getElementById('clock');
let start = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let reset = document.getElementById('reset');

start.addEventListener('click', ()=>{
    if(fullTime != 0){
        clearInterval(fullTime);
    }
    fullTime = setInterval(Timer,1);
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(fullTime);
})

reset.addEventListener('click', ()=>{
    mseconds = 0, seconds = 0 , minutes=0 , hours = 0 ;
    clearInterval(fullTime);
    timerText()
})

function Timer(){
    mseconds++;
    if(mseconds === 999){
        seconds++;
        mseconds = 0;
        if(seconds === 59){
            minutes++;
            seconds = 0;
            if(minutes === 59){
                hours++;
                minutes = 0;
            }
        }
    }
    timerText()
}
function timerText(){
    clock.innerHTML=`${(hours<10)?'0'+hours:hours} :
                     ${(minutes<10)?'0'+minutes:minutes} : 
                     ${(seconds<10)?'0'+seconds:seconds} :
                     <span>${(mseconds<10)?'00'+mseconds:(mseconds<100)?'0'+mseconds:mseconds}</span>`;
}