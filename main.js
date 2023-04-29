// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const btnHearts = document.querySelectorAll(".like-glyph");

for (const glyph of btnHearts) {
  glyph.addEventListener("click", like);
}

function like(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.remove("like-glyph");
        heart.classList.add("activated-heart");
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
        heart.classList.add("like-glyph");
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      modal.classList.remove("hidden");
      const h2 = modal.querySelector("h2");
      h2.innerText = error;
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 180000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
