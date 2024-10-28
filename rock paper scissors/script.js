const btns = document.querySelectorAll('.btn');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const output = document.querySelector('#output');
const info = document.querySelector('#info');
const rps = ["R", "P", "S"];




function play (userChoice) {
    randomChoece = rps[Math.floor(Math.random() * 3)]
    userChoice = userChoice.toUpperCase()
    
    if (userChoice === randomChoece) {
        output.innerHTML = "DRAW";
        output.style.color = "black"
        info.innerHTML = "DRAW MATCH"
    }
    else {
        if (userChoice === "R" && randomChoece === "S") {
            output.innerHTML = "YOU WON"
            output.style.color = "green"
            info.innerHTML = "You chose ROCK and the computer chose SCISSOR";
        }
        else if (userChoice === "R" && randomChoece === "P") {
            output.innerHTML = "YOU LOST"
            output.style.color = "red"
            info.innerHTML = "You chose ROCK and the computer chose PAPER";
        }
        else if (userChoice === "P" && randomChoece === "R") {
            output.innerHTML = "YOU WON"
            output.style.color = "green"
            info.innerHTML = "You chose PAPER and the computer chose ROCK";
        }
        else {
            output.innerHTML = "YOU LOST"
            output.style.color = "red"
            info.innerHTML = "COMMPUTER WON"
            
        }
    }
}

rock.addEventListener('click', function() {
    play("R")
})

paper.addEventListener('click', function() {
    play("P")
})

scissor.addEventListener('click', function() {
    play("S")
})
