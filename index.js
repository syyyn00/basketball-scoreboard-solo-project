let scoreA = 0
let homeScore = document.getElementById("home-score")
let scoreB = 0
let guestScore = document.getElementById("guest-score")

    function plusOne(){
        scoreA += 1;
        homeScore.textContent = scoreA;
 }

    function plusTwo(){
        scoreA += 2;
        homeScore.textContent = scoreA;
 }
    function plusThree(){
        scoreA += 3;
        homeScore.textContent = scoreA;
 }

    function plusOneB(){
        scoreB += 1;
        guestScore.textContent = scoreB;
}

    function plusTwoB(){
        scoreB += 2;
        guestScore.textContent = scoreB;
}

    function plusThreeB(){
        scoreB += 3;
        guestScore.textContent = scoreB;
}

    function newGame(){
        scoreA = 0;
        homeScore.textContent = 0;
        scoreB = 0;
        guestScore.textContent = 0;
    }