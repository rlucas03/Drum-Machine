console.log('Server started');
// Detecting button press
let numOfDrumsButtons = document.querySelectorAll('.drum').length; ;

for (let i = 0; i < numOfDrumsButtons; i++) {
	let button = document.querySelectorAll('.drum')[i];
	button.addEventListener('click', function() {
	console.log('you clicked button ' + i);
	console.log(this);
	this.classList.add ='beep';
	

	let buttonInnerHTML = this.innerHTML;


	makeSound(buttonInnerHTML);

	buttonAnimation(buttonInnerHTML);

	});
}



// detecting keyboard press
// document. whole document is listening for key events
document.addEventListener('keydown', function (event) {
	let keyName = event.key;
	console.log(event.key);
	console.log(event);
	// console.log(event.keyCode);
	makeSound(keyName);

	buttonAnimation(event.key);
} );

function makeSound(key) {
	switch(key) {
			case 'w':
					let tom1 = new Audio('sounds/tom-1.mp3');
					// new Audio object created
					tom1.play();
					break;

			case 'a':
					let tom2 = new Audio('sounds/tom-2.mp3');
					tom2.play();
					break;

			case 's':
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
					let kickBass = new Audio('sounds/kick-bass.mp3');
					kickBass.play();
					break;

			default:
			console.log('??');
	}
}

function buttonAnimation(currentKey) {
	let activeButton = document.querySelector('.'+ currentKey);
	activeButton.classList.toggle('pressed');

  setTimeout(function () {
  	activeButton.classList.remove('pressed');

  }, 100);
  // 100 - 0.1 second
}



