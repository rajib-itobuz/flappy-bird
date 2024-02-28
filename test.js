// function clogged(a) {
//     return (b) => a * b

// }

// const res = clogged(5);


// console.log(res(10));
// console.log(res(2));
// console.log(res(3));
// console.log(res(8));

// console.log(clogged(3)(5));

// var a = 10;
// let b = 50;
// const c = 30;
// {
// let a = 30;correct var->let
// var b = 60; incorrect let->var
// const a = 100; correct var->const
// incorrect const->var
// const b = 20; correct let->const vice-versa



// }
const screen = document.querySelector(".screen");
const bars = document.querySelectorAll(".bars");
const bird = document.querySelector(".bird");
// let heightOfBird = Math.floor(window.innerHeight / 2);

// const middleBar = bars[bars.length / 2].getBoundingClientRect();
// const allowedRange = [middleBar.height * 0.32, middleBar.height * 0.72, middleBar.left];

// bird.style.top = `${heightOfBird}px`;

// bars[bars.length / 2].style.backgroundColor = "white";
// bars[1].style.backgroundColor = "white";

// console.log(bars[1].getBoundingClientRect());

setInterval(() => {
    bars.forEach(e => {

    })
}, 500);

// const checkIfBirdAlive = (barTop, barBottom, barLeft) => {
//     const birdRect = bird.getBoundingClientRect();
//     console.log(birdRect.top, barTop)
//     if (birdRect.right < barLeft && birdRect.top > barTop && birdRect.bottom < barBottom) {
//         return true;
//     }

//     return false;
// }

// console.log(checkIfBirdAlive(...allowedRange));

// const birdDecreaseHeight = setInterval(() => {
//     // console.log("hello");
//     if (heightOfBird < window.innerHeight) {
//         heightOfBird += 5;
//         bird.style.top = `${heightOfBird}px`;
//     } else {
//         alert("Game Over");
//         clearTimeout(birdDecreaseHeight);
//     }
// }, 100);

// document.addEventListener("keypress", (e) => {

//     // console.log(e.clientX, e.clientY);
//     if (e.code === 'Space') {
//         heightOfBird -= 15;
//         bird.style.top = `${e.clientY}px`;
//     }

// })

