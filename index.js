/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
}*/

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
//this forLoop cycles through the entire list of buttons with the class drum
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //each button is assigned an eventListener in the process
        // this.style.color = "white";
        // //this refers to the object, each dot notation allows us to delve further into the specificity of the object
        var buttonInnerHTML = this.innerHTML;

            switch (buttonInnerHTML) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                case "j":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;

                case "k":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                case "l":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

                default: console.log(buttonInnerHTML);
            }
    });
 
}

document.addEventListener("keypress", function(event) {
    console.log(event);
})

// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
    //     alert("I got clicked!");