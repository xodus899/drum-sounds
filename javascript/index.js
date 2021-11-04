function buttonClick() {

  let drumButtons = document.querySelectorAll('.drum').length;

  for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
      let buttonInnerHTML = this.innerHTML;
      switch (buttonInnerHTML) {
        case "w":
          let tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
        case "s":
          let tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;
        case "a":
          let tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
        case "d":
          let tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
        case "j":
          let snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
        case "k":
          let crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
        case "l":
          let kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
        default:
          console.log(buttonInnerHTML, + " Invalid key pressed");
      }
    });
  }
};
buttonClick();


function keyPress() {
  document.addEventListener('keydown', (keyPressed) => {
    switch (keyPressed.key) {
      case 'w':
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 's':
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 'a':
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'k':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'l':
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default: console.log('You have pressed an invalid key. Key pressed was ' + keyPressed.key);
    }
  });
};
keyPress();







// let tom1 = new Audio('sounds/tom-1.mp3')
// tom1.play();

//
// function buttonClick() {
//
//   let button = document.querySelectorAll('.drum');
//   button.forEach((button) => {
//     button.addEventListener('click', () => {
//       console.log(this.innerHTML);
// does not reference this as the button key due to arrow function showing the global scope of the window, does not bind to the current scope
//
//     })
//   });
// }
//
// buttonClick();
