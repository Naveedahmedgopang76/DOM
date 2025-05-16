// Select all buttons inside the .animal div
var buttons = document.querySelectorAll(".animal button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var animal = this.innerText.trim(); // e.g. "Cat"
    playSound(animal);
  });
});

// Function to play sound based on animal name
function playSound(animal) {
  var soundPath;

  switch (animal.toLowerCase()) {
    case "cat":
      soundPath = "sounds/cute-cat-meow-sound-333770.mp3";
      break;
    case "dog":
      soundPath = "sounds/dog-334099.mp3";
      break;
    case "lion":
      soundPath = "sounds/lion-roar-sound-effect-324751.mp3";
      break;
    case "horse":
      soundPath = "sounds/horse-whinnies-339730.mp3";
      break;
    case "bear":
      soundPath = "sounds/bear-191995.mp3";
      break;
    case "camel":
      soundPath = "sounds/camel-sound-123309.mp3";
      break;
    case "donkey":
      soundPath = "sounds/donkey-bray-36757.mp3";
      break;
    case "cow":
      soundPath = "sounds/cow-moo-339729.mp3";
      break;
    default:
      console.log("No sound available for: " + animal);
      return;
  }

  var audio = new Audio(soundPath);
  audio.play();
}
