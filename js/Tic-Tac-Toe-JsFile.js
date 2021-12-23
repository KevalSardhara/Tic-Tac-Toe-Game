console.log("India");


let music = new Audio("../Img-Music/music.mp3");
let audioturn = new Audio("../Img-Music/ting.mp3");
let gaeover = new Audio("../Img-Music/gameover.mp3");
let turnx = "X";
let won = true;
let count = 0;

let win = false;
// Function to Chake The Turn
const changeTurn = ()=>{
    return (turnx === "X") ? "0" : "X";
}

// Function To chake Win
let chakeWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let a1 = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,3,6],
        [0,4,8],
        [2,4,6],
    ];

    a1.forEach(
            function(e){
            if(((boxtext[e[0]].innerText) ===(boxtext[e[1]].innerText)) && ((boxtext[e[0]].innerText) ===(boxtext[e[2]].innerText)) &&
            ((boxtext[e[0]].innerText) !== ""))
            {
                let win = document.querySelector(".imgBox");
                let creatImg = document.createElement("img");
                creatImg.src = "./Img-Music/excited.gif";
                creatImg.alt = "excited.gif";
                creatImg.style.width = "25vw";
                creatImg.style.transition = "1s ease-in-out";
                win.appendChild(creatImg);


                let win1 = document.querySelector("#winmassage");
                let creath1 = document.createElement("h1");
                
                turnx = changeTurn();
                creath1.innerText = turnx  + " is Won! Click The Reset and Start Now new";
                

                win1.appendChild(creath1);

                win = true;
                if(win == true){
                    let a1 = document.getElementById("turnInfo");
                    a1.innerText = "Game Over ";
                    a1.style.color = "red";
                }
                a1.length = 0;
            }
        }      
        
    );

    if(a1.length == 0){
        return true;
    }
    return false;

}


function massage(){
    console.log("Data");
    let box_text = document.querySelectorAll(".boxtext");
        box_text.forEach((e)=>{
        e.innerText = "";
        console.log(e);
    });
        won = true;
        win = false;
        count = 0;
        turnx = "X";
        let a1 = document.getElementById("turnInfo");
        a1.innerText = "Turn For " + turnx;
        a1.style.color = "black";



        if(document.getElementById("imgAdd").children.length !== 0){
            let win = document.getElementById("imgAdd");
            win.children[0].remove();
        }


        if(document.getElementById("winmassage").children.length !== 0){
            let win1 = document.getElementById("winmassage");
            win1.children[0].remove();
        }
};

// Game Logic
let boxes = document.getElementsByClassName("box");
let arr = Array.from(boxes);
arr.forEach(
    function(element){
        let boxtext = element.querySelector(".boxtext");
        element.addEventListener("click",
        function(e){

                if(boxtext.innerHTML === "" && won === true){
                    boxtext.innerHTML = turnx;
                    
                    
                    count = count + 1;
                    turnx = changeTurn();
                    audioturn.play();
                    let winwin = chakeWin();
                    if(winwin !== true){
                        let a1 = document.getElementById("turnInfo");
                        a1.innerText = "Turn For " + turnx;
                        a1.style.color = "black";
                    }
                    else{
                        won = false;
                    }
                }

                if(count === 9){
                    let a1 = document.getElementById("turnInfo");
                    a1.innerText = "Game Over ";
                    a1.style.color = "red";
                }
        });
    }
)


