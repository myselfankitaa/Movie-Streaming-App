import { movies } from "./movieArr.js";

const nowStreaming = document.querySelector(".now-streaming");

for (let movie of movies) {
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
  for (let x = 0; x < numberOfStars; x++) {
    if (x < 6) {
      const star = document.createElement("i");
      star.className = "rating__star far fa-star";
      starRating.appendChild(star);
    }
  }

  // const starTwo = document.createElement("i");
  // starTwo.className = "rating__star far fa-star";

  // const starThree = document.createElement("i");
  // starThree.className = "rating__star far fa-star";

  // const starFour = document.createElement("i");
  // starFour.className = "rating__star far fa-star";
  // const starFive = document.createElement("i");
  // starFive.className = "rating__star far fa-star";

  // // Append the img and button to the Movie container
  // starRating.appendChild(starOne);
  // starRating.appendChild(starTwo);
  // starRating.appendChild(starThree);
  // starRating.appendChild(starFour);
  // starRating.appendChild(starFive);

  movieContainer.appendChild(img);
  movieContainer.appendChild(readMoreBtn);
  movieContainer.appendChild(starRating);
  // movie container to now streaming
  nowStreaming.appendChild(movieContainer);

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
  nowStreaming.appendChild(movieDetails);

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

    commentButton.addEventListener("click", function () {
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

  readMoreBtn.addEventListener("click", function onclick() {
    // location.href = "_blank";
    // Create element to show details about the movie

    /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    if (movieDetails.style.display === "block") {
      movieDetails.style.display = "none";
    } else {
      movieDetails.style.display = "block";
    }
  });
}
