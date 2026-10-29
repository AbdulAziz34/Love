const navbar = document.getElementById("man");
navbar.style.backgroundColor = "gold";



function mynavbar(){
    navbar.style.right = "0";

}

function money(){
    navbar.style.right = "-300px"
    
}

let num1 = 0;
function solve(){
document.querySelector(".a1");
num1 = 1
document.querySelector(".res").innerHTML = num1;

}

let num2 = 0;

function solve2(){
    document.querySelector(".a2");
    num2 = 2;
    document.querySelector(".res").innerHTML = num11;
}




let num3 = 0;

function solve3(){
    document.querySelector(".a3");
    num3 = 3;
    document.querySelector(".res").innerHTML = num3;
}


let num4 = 0;

function solve4(){
    document.querySelector(".a4");
    num4 = 4;
    document.querySelector(".res").innerHTML = num4;
}


let num5 = 0;

function solve5(){
    document.querySelector(".a5");
    num5 = 5;
    document.querySelector(".res").innerHTML = num5;
}



let num6 = 0;

function solve6(){
    document.querySelector(".a6");
    num6 = 6;
    document.querySelector(".res").innerHTML = num6;
}


let num7 = 0;

function solve7(){
    document.querySelector(".a7");
    num7 = 7;
    document.querySelector(".res").innerHTML = num7;
}

let num8 = 0;

function solve8(){
    document.querySelector(".a8");
    num8 = 8;
    document.querySelector(".res").innerHTML = num8;
}


let num9 = 0;

function solve9(){
    document.querySelector(".a9");
    num9 = 9;
    document.querySelector(".res").innerHTML = num9;
}



let num10 = 

function solve2(){
    document.querySelector(".a10");
    num10 = 
    document.querySelector(".res").innerHTML = num10;
}



let num11 = 0;

function solve11(){
    document.querySelector(".a11");
    num11 = 2;
    document.querySelector(".res").innerHTML = num11;
}


function Arsenal(){
    let dice1 = Math.floor(Math.random()*6);
    let dice2 = Math.floor(Math.random()*6);
    let dice3 = Math.floor(Math.random()*6);
    document.querySelector(".fourr");
    document.querySelector(".onee").innerHTML = dice1;
    document.querySelector(".twooo").innerHTML = dice2;
    document.querySelector(".threee").innerHTML = dice3;
    
    if(dice1 != dice2 && dice2 != dice3){
        document.querySelector(".over").innerHTML = "Keep on trying";
    } else if(dice1 === dice2 && dice2 === dice3){
        document.querySelector(".over").innerHTML = "Congratulation you won";
    }else if(dice1 === dice2 && dice2 != dice3){
        document.querySelector(".over").innerHTML = "Oh my God you were so close";
    }else if(dice1 != dice2 && dice2 === dice3){
        document.querySelector(".over").innerHTML = "Wow you are very close to winning";
    }else if(dice3 === dice1 && dice1 != dice2){
        document.querySelector(".over").innerHTML = "Do not give up";
    }
}


function streetLight(){
    let green = document.getElementById("green");
    let yellow = document.getElementById("yellow");
    let red = document.getElementById("red");
    
    green.style.opacity = 1;
    setTimeout(function(){
        green.style.opacity = .3;
        red.style.opacity = .3;
        yellow.style.opacity = 1;
    },5000);


    setTimeout(function(){
        green.style.opacity = .3;
        red.style.opacity = 1;
        yellow.style.opacity = .3;
    },7000);

    setTimeout(function(){
        green.style.opacity = 1;
        red.style.opacity = .3;
        yellow.style.opacity = .3;
    },12000);
}

let timer = setInterval(function(){
    streetLight()
},12000);

streetLight();