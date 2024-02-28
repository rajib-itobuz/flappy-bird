const barsArr = [];
const screen = document.querySelector(".screen");
const background = document.getElementsByTagName("section")[0];
const bars = document.querySelectorAll(".bars");
const bird = document.querySelector(".bird");
const score = document.querySelector("#score");
const midPoint = { height: window.innerHeight / 2, width: Math.floor(window.innerWidth / 2+50) };
let heightOfBird = Math.floor(midPoint.height);

const speed = 50;
let currentBar = 0;
let currentScore=0;

bird.style.top = `${heightOfBird}px`;

const checkIfBirdAlive = (barTop, barBottom, barLeft) => {
    const birdRect = bird.getBoundingClientRect();
    if (birdRect.top > barTop && birdRect.bottom < barBottom && birdRect.right > barLeft) {
        return true;
    }

    return false;
}

const callnextBar = () => {
    const middleBar = barsArr[currentBar].item.getBoundingClientRect();
    const allowedRange = [middleBar.height * barsArr[currentBar].top / 100, middleBar.height * barsArr[currentBar].bottom / 100, middleBar.left];
    if(!checkIfBirdAlive(...allowedRange)){
        clearInterval(updater);
        clearTimeout(birdDecreaseHeight);
    }
}

const createNewBar = (bar) => {
    const random = Math.floor(Math.random() * 40 + 20);
    const randomBottom = random + Math.floor(Math.random() * 20 + 20);

    const newObj = { top: random, bottom: randomBottom, item: bar };
    bar.style.background = `linear-gradient(#2a9d8f ${random}%, transparent ${random}%, transparent ${randomBottom}%, #2a9d8f ${randomBottom}%)`;
    barsArr.push(newObj);
}


bars.forEach(e => {
    createNewBar(e);
})

let upcomingBarisAt = midPoint.width;
const updater = setInterval(() => {
    const backgroundRectValue = background.getBoundingClientRect();
    const currentBackgroundX = backgroundRectValue.x;
    background.style.transform = `translateX(${currentBackgroundX - speed}px)`;

    const newBar = document.createElement("div");
    newBar.classList.add("bars");
    createNewBar(newBar);
    background.append(newBar);

    const birdRect = bird.getClientRects();
    if (currentBackgroundX < upcomingBarisAt) { 
        callnextBar();
        upcomingBarisAt-=270;
        currentBar+=1;
    }



}, 500);


const birdDecreaseHeight = setInterval(() => {
    currentScore+=1;
    console.log(score);
    score.innerText=currentScore;
    if (heightOfBird < window.innerHeight) {
        heightOfBird += 5;
        bird.style.top = `${heightOfBird}px`;
    } else {
        // alert("Game Over");
        clearTimeout(birdDecreaseHeight);
    }
}, 100);

document.addEventListener("keypress", (e) => {

    if (e.code === 'Space') {
        heightOfBird -= 15;
        bird.style.top = `${e.clientY}px`;
    }

})

