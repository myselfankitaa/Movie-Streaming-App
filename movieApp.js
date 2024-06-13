document.addEventListener("DOMContentLoaded", getMoviesData);

function getMoviesData() {
  fetch(
    "https://raw.githubusercontent.com/myselfankitaa/myselfankitaa.github.io/main/movies.json"
  )
    .then((moviesData) => {
      return moviesData.json();
    })
    .then(processMoviesData)
    .catch((error) => `ERROR !!!`)
    .finally(() => console.log(`Done`));

  function processMoviesData(movies) {
    const nowStreaming = document.querySelector(".now-streaming");

    function createMovieCard(movie) {
      //Creat a cotainer to store the Image and readMore Button

      const movieContainer = document.createElement("div");
      movieContainer.className = "movie-container";

      //
      //  Create an img element and set its src attribute
      const img = document.createElement("img");
      img.width = 200;
      img.src = movie.poster_url;

      // Create a button element
      const readMoreBtn = document.createElement("button");
      readMoreBtn.textContent = "Read More";
      readMoreBtn.className = "accordion";

      // starRating
      const starRating = document.createElement("div");
      starRating.className = "star-rating";
      const numberOfStars = 5;
      let stars = [];

      for (let x = 0; x < numberOfStars; x++) {
        const star = document.createElement("i");
        star.className = "rating__star far fa-star";
        starRating.appendChild(star);
        stars.push(star);
      }
      const starClassActive = "rating__star fas fa-star";
      const starClassInactive = "rating__star far fa-star";
      stars.forEach((star, clickedStarIndex) => {
        star.onclick = () => {
          stars.forEach((star, starIndex) => {
            if (starIndex <= clickedStarIndex) {
              star.className = starClassActive;
            } else {
              star.className = starClassInactive;
            }
          });
        };
      });

      movieContainer.appendChild(img);
      movieContainer.appendChild(readMoreBtn);
      movieContainer.appendChild(starRating);

      // Create element to show details about the movie
      const movieDetails = document.createElement("div");
      movieDetails.className = "movie-details";
      movieDetails.style.display = "none";
      movieDetails.style.color = "white";
      movieDetails.innerHTML = `
           <p><strong>Title:</strong> ${movie.title}</p>
           <p><strong>Description:</strong> ${movie.description}</p>
           <p><strong>Release Year:</strong> ${movie.movie_year}</p>
           <p><strong>Director:</strong> ${movie.director}</p>
           <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
       `;
      movieContainer.appendChild(movieDetails);

      // Adding the comment Section

      function createCommentSection() {
        const commentSection = document.createElement("div");
        commentSection.innerHTML = "Comments: ";
        commentSection.style.fontWeight = "bold";
        commentSection.className = "comment-section";
        const commentInput = document.createElement("input");
        commentInput.type = "text";
        commentInput.value = "";
        commentInput.placeholder = "Add a Comment";
        commentInput.style.color = "white";
        const commentButton = document.createElement("button");
        commentButton.className = "comment-button";
        commentButton.innerHTML = "Submit";
        const comments = document.createElement("div");
        comments.className = "comments";
        const commentUl = document.createElement("ul");

        commentButton.addEventListener("click", () => {
          const commentUl = document.createElement("ul");
          if (commentInput.value) {
            const comment = document.createElement("li");
            comment.textContent = commentInput.value;
            commentUl.appendChild(comment);
            commentInput.value = "";
          }
          comments.appendChild(commentUl);
        });

        // append
        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentButton);
        commentSection.appendChild(comments);
        movieDetails.appendChild(commentSection);
      }
      createCommentSection();

      function toggle() {
        {
          this.classList.toggle("active");
          /* Toggle between hiding and showing the active panel */
          if (movieDetails.style.display === "block") {
            movieDetails.style.display = "none";
          } else {
            movieDetails.style.display = "block";
          }
        }
      }

      readMoreBtn.addEventListener("click", toggle);
      return movieContainer;
    }

    function createMoviesPage() {
      nowStreaming.innerHTML = "";
      movies.forEach((movie) => {
        const movieElement = createMovieCard(movie);
        nowStreaming.appendChild(movieElement);
      });
    }
    createMoviesPage();
    // JS 2
    const searchBtn = document.getElementById("search-icon");

    // function to search
    const inputField = document.getElementById("keyword-search");
    searchBtn.addEventListener("click", () => {
      const inputStr = inputField.value.toLowerCase();
      nowStreaming.innerHTML = "";
      let found = false; // Flag to check if any movie is found

      movies.forEach((movie) => {
        if (
          movie.title.toLowerCase().includes(inputStr) ||
          movie.description.toLowerCase().includes(inputStr)
        ) {
          found = true;
          const searchMovieElement = createMovieCard(movie);
          nowStreaming.appendChild(searchMovieElement);
        }
        if (!found) {
          nowStreaming.innerHTML = `<p>Not Found</p>`;
        }
      });
    });

    //
    // creating toggling in filter/shorting option
    const shorting = document.getElementById("shorting");
    const filters = document.getElementById("filters");
    shorting.addEventListener("mouseover", function () {
      this.classList.toggle("active");
      if (filters.style.display === "block") {
        filters.style.display = "none";
      } else {
        filters.style.display = "block";
      }
    });
    const newRelease = document.getElementById("newRelease");
    newRelease.addEventListener("click", function () {
      nowStreaming.innerHTML = "";
      movies.forEach((movie) => {
        if (movie.movie_year >= 2023) {
          const movieElement = createMovieCard(movie);
          nowStreaming.appendChild(movieElement);
        }
      });
    });

    const login = document.getElementById("loginButton");
    const loginPage = document.getElementById("logIn");

    login.addEventListener("mouseover", function onclick() {
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      if (loginPage.style.display === "block") {
        loginPage.style.display = "none";
      } else {
        loginPage.style.display = "block";
      }
    });

    const signUp = document.getElementById("signUp");
    const signUpPage = document.getElementById("signUpPage");

    signUp.addEventListener("click", function onclick() {
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      if (signUpPage.style.display === "block") {
        signUpPage.style.display = "none";
      } else {
        signUpPage.style.display = "block";
      }
    });
  }
}
// Creating screan Timer
let timer;
const htmlTimer = document.getElementById("timer");

(function () {
  let second = 0;
  let minute = 0;
  let hour = 0;

  timer = setInterval(() => {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }

    htmlTimer.innerHTML = `
      ${hour < 10 ? "0" : ""}${hour} : 
      ${minute < 10 ? "0" : ""}${minute} : 
      ${second < 10 ? "0" : ""}${second}
    `;
  }, 1000);
})();
function pause() {
  clearInterval(timer);
}

// Creating countdown
const countdownEL = document.getElementById("countdown");
const setTimeInMinute = 10;
let time = setTimeInMinute * 60;

const xyz = setInterval(countdown, 1000);
function countdown() {
  time--;
  const minute = Math.floor(time / 60);
  let second = time % 60;
  countdownEL.innerHTML = `${minute < 10 ? "0" : ""}${minute} : ${
    second < 10 ? "0" : ""
  }${second}`;
  if (time < 0) {
    clearInterval(xyz);
    countdownEL.innerHTML = "00:00";
    alert(`Time Up`);
  }
}
