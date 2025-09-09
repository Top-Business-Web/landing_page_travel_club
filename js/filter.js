// filter price in product page

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
progress = document.querySelector(".slider .progress");

    let priceGap = 50;

rangeInput.forEach(input => {
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if(maxVal - minVal < priceGap){

                if(e.target.className === "range-min"){

                    rangeInput[0].value = maxVal - priceGap;
                }else{

                    rangeInput[1].value = minVal + priceGap;
                }

            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
    });
});

// increment & decrement number in cart page

var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

// increment
for(var i = 0; i < incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click', function(e){

        var buttonClicked = e.target;
        var inputField = buttonClicked.parentElement.children[1];
        var inputValue = inputField.value;
        var newValue = parseInt(inputValue) + 1;
        inputField.value = newValue;
        // console.log(newValue);
    });
}

// decrement
for(var i = 0; i < decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click', function(e){

        var buttonClicked = e.target;
        var inputField = buttonClicked.parentElement.children[1];
        var inputValue = inputField.value;
        var newValue = parseInt(inputValue) - 1;
        // condition not negative number
        if(newValue > 0){
            inputField.value = newValue;
        }else{
            inputField.value = 1;
        }
        });
}


// progress line check out page

const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector(".next-btn");
const prevBtn1 = document.querySelector(".prev-1");
const secNextBtn = document.querySelector(".next-1");
const prevBtn2 = document.querySelector(".prev-2");
const submitBtn = document.querySelector(".submit-pay");

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 2;
let current = 1;

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});
// secNextBtn.addEventListener("click", function(){
//     slidePage.style.marginLeft = "-50%";
//     bullet[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     current +=1;
// });

submitBtn.addEventListener("click", function(){
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
    // setTimeout(function(){
    //     alert("you completed order");
    //     location.reload();
    // }, 800);
});

prevBtn1.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});
// prevBtn2.addEventListener("click", function(){
//     slidePage.style.marginLeft = "-25%";
//     bullet[current - 2].classList.remove("active");
//     progressText[current - 2].classList.remove("active");
//     progressCheck[current - 2].classList.remove("active");
//     current -=1;
// });

// payment check out page

function text(x) {
    if( x == 0 ) document.getElementById("form-pay").style.display = "block";
    else document.getElementById("form-pay").style.display = "none";
    return;
}

