// Color changer

const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

let colorArr = ["hsl(208, 83%, 53%)","hsl(184, 72%, 40%)",
"#7fc529","#c5295d","rgb(179, 192, 119)","rgb(43, 8, 243)"];

let i;

btn.addEventListener("click",(e) => {
    i = Math.floor(Math.random() * colorArr.length);
    body.style.backgroundColor = colorArr[i];
    color.textContent = colorArr[i];    
});