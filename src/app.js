const lightsOff = {
    numberZero: [0,[1,1,0,1,1,1,1]],
    numberOne: [1,[0,0,0,0,0,1,1]],//to display number one these lights should be off(hidden)
    numberTwo: [2,[1,0,1,1,1,1,0]],
    numberThree: [3,[1,0,1,0,1,1,1]],
    numberFour: [4,[0,1,1,0,0,1,1]],
    numberFive: [5,[1,1,1,0,1,0,1]],
    numberSix: [6,[1,1,1,1,1,0,1]],
    numberSeven: [7,[1,0,0,0,0,1,1]],
    numberEight: [8,[1,1,1,1,1,1,1]],
    numberNine: [9,[1,1,1,0,1,1,1]]
}

function turnLightsOff(position, n){//ex.=> n='numberOne', position='.decimal_hours'
    for(let i=0; i<7; i++){
        if(lightsOff[n][1][i] == 0){
            document.querySelector(position).children[i].classList.add('hidden');
        }else{
            document.querySelector(position).children[i].classList.remove('hidden');
        }
    }
}


setInterval(()=>{
    const now = new Date();
    const hours_hundreds = Math.floor(now.getHours()/10);
    const hours_decimal = now.getHours()%10;
    const minutes_hundreds = Math.floor(now.getMinutes()/10);
    const minutes_decimal = now.getMinutes()%10;
    const seconds_hundreds = Math.floor(now.getSeconds()/10);
    const seconds_decimal = now.getSeconds()%10;

    document.getElementById('secHand').style.rotate = now.getSeconds()*6 -1 +'deg';
    document.getElementById('minHand').style.rotate = now.getMinutes()*6 -1 +'deg';
    now.getMinutes()/6
    document.getElementById('hourHand').style.rotate =Math.floor(now.getHours()*360/12)+ (now.getMinutes()/2) +'deg';

    turnLightsOff('.hundreds_hours',Object.entries(lightsOff)[hours_hundreds][0]);
    turnLightsOff('.decimal_hours',Object.entries(lightsOff)[hours_decimal][0]);
    turnLightsOff('.hundreds_minutes',Object.entries(lightsOff)[minutes_hundreds][0]);
    turnLightsOff('.decimal_minutes',Object.entries(lightsOff)[minutes_decimal][0]);
    turnLightsOff('.hundreds_seconds',Object.entries(lightsOff)[seconds_hundreds][0]);
    turnLightsOff('.decimal_seconds',Object.entries(lightsOff)[seconds_decimal][0]);
},1000)


function startRotating(){
    //document.getElementById('secHand').classList.add('sec-rotation');
    document.getElementById('secHand').style.rotate = '30deg'
}