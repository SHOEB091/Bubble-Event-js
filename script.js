//making bubbles

function makebubble() {
    var clutter = "";

for (var i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random() * 10);
    //backtics are  used to store dynamic value of string
    clutter += ` <div class="bubble">
                    ${rn}
                </div> `;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makebubble();

//to generate random number
//single digit random number
/*function random() {
    return Math.floor(Math.random() * 10);
}
*/

//making timer 

var timer = 60;
function runTimer()
{
    var timer2 = setInterval(function(){
        if(timer>0)
            {
                timer--;
                document.querySelector("#timerval").textContent = timer;    
            }
        else{
            clearInterval(timer2);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
        }    
        
     
    },1000)
}
runTimer();



//Hit the bubble
var hitrn=0;
function getnewhit()
{
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
getnewhit();


//score counting 

var score =0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
increaseScore();


//EVENT BUBBLING 
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if(hitrn == clickedNumber)
    {
        increaseScore();
        makebubble();
        getnewhit();
    }
    else{
        score-=10;
        document.querySelector("#scoreval").textContent = score;
    }
})


