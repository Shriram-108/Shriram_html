let board = document.querySelector(".board");
let boxes = document.querySelectorAll(".box");
let winningPoss = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let newGame = document.querySelector(".newGame");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
console.log(msg);

let player = 'X';
boxes.forEach((element) => {
    element.addEventListener("click",() => {
        if(player === 'X'){
            element.innerText = "X";
            checkWinner(player);
            player = 'O';
        }else{
            element.innerText = "O";
            checkWinner(player);
            player = 'X';
        }
        element.disabled = true;
    });
});

startOver =() =>{
    boxes.forEach((element)=>{
        element.disabled = false;
    })
    boxes.forEach(box => {
        box.innerText = '';
    });
    msg.classList.add("hidden");
}

newGame.addEventListener("click",startOver);
reset.addEventListener("click" , startOver);


let afterWin = () =>{
    boxes.forEach((element)=>{
        element.disabled = true;
    })
    msg.innerText = "CONGRATULATIONS !!! PLAYER "+player+" WON";
    msg.classList.remove("hidden");
};

function checkWinner(player){
    for(row of winningPoss){
        let posVal0 = boxes[row[0]].innerText;
        let posVal1 = boxes[row[1]].innerText;
        let posVal2 = boxes[row[2]].innerText;
        
        if(posVal0 !== '' && posVal1 !== '' &&posVal2 !== ''){
            if(posVal0 === posVal1 && posVal1 === posVal2){
                afterWin();
            }
        }
    }
};

