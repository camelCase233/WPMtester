let counter = 0;
let button = document.querySelector("button");
let para = document.querySelector("#timer");
let submit =document.getElementById("submit");
let timer;
let alert = document.getElementById("alert");
let input = document.querySelector("input");
let answer = [];
let errors = 0;
let passable = true;
let message = document.getElementById("text");
let array = message.textContent.split(" ");
let checkCorrectness = [];

function startTimer(){timer = setInterval(() => {
    counter++;
    para.textContent = `timer: ${counter}`;
    if(counter >= 60 )
        {clearInterval(timer); input.disabled = true; alert.textContent = "Uh Oh! Time over";
        }
}, 1000)}

input.addEventListener('input', () => {
    const currentLength = input.value.length;
      const newWidth = Math.max(100, currentLength * 10) + 'px';
      input.style.width = newWidth;
      answer = input.value.split(" ");
      console.log(answer.length);
      checkCorrectness = array.slice(0, answer.length);
      console.log(checkCorrectness.length);
    console.log("checkCorrectness: "+ checkCorrectness);
})
button.addEventListener('click', startTimer);


function correctness(array_1, array_2)
{
    let i;
    for(i=0; i<array_1.length; i++)
    {
        if(array_1[i] !== array_2[i])
        {
            errors++;
        }
        if(errors >= 0.25 * array_1.length) {passable = false; break;}
    }
}

submit.addEventListener("click", () => {
    clearInterval(timer);
    let wpm = answer.length/counter;
    correctness(checkCorrectness, answer);
    if(answer.length < array.length && passable)
    {
        alert.textContent = `Missed a few words there, chief, also you have ${errors} errors, your speed is ${wpm} wpm`;
    }
    else if(!passable)
    {
        alert.textContent = "Woah you got a lot of words wrong there!"
    }
    else if(answer.length === array.length && passable)
    {
        alert.textContent = `Damn! You did some awesome work, your speed is ${wpm} wpm`;
    }
});