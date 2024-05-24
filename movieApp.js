const movies = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    movie_year: 2014,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "John Lithgow",
      "Ellen Burstyn",
      "Matt Damon",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    price: "120.00",
  },
  {
    id: 2,
    title: "The Matrix",
    description:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    movie_year: 1999,
    director: "Lilly Wachowski",
    actors: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
      "Gloria Foster",
      "Joe Pantoliano",
      "Marcus Chong",
      "Julian Arahanga",
      "Matt Doran",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w1280/fDzMXdYgNlumZB1bDvvVwmGiZ1J.jpg",
    price: "100.00",
  },
  {
    id: 3,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    movie_year: 2010,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Dileep Rao",
      "Cillian Murphy",
      "Tom Berenger",
      "Marion Cotillard",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    price: "110.00",
  },
  {
    id: 4,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    movie_year: 2008,
    director: "Christopher Nolan",
    actors: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    price: "150.00",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    movie_year: 1994,
    director: "Frank Darabont",
    actors: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Gil Bellows",
      "Mark Rolston",
      "James Whitmore",
      "Jeffrey DeMunn",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    price: "90.00",
  },
  {
    id: 6,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    movie_year: 1999,
    director: "David Fincher",
    actors: [
      "Brad Pitt",
      "Edward Norton",
      "Meat Loaf",
      "Zach Grenier",
      "Helena Bonham Carter",
      "Richmond Arquette",
      "David Andrews",
      "George Maguire",
      "Eugenie Bondurant",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    price: "80.00",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    movie_year: 1994,
    director: "Quentin Tarantino",
    actors: [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Bruce Willis",
      "Ving Rhames",
      "Harvey Keitel",
      "Tim Roth",
      "Amanda Plummer",
      "Maria de Medeiros",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w1280/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    price: "85.00",
  },
  {
    id: 8,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    movie_year: 1994,
    director: "Robert Zemeckis",
    actors: [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Mykelti Williamson",
      "Sally Field",
      "Rebecca Williams",
      "Michael Conner Humphreys",
      "Harold G. Herthum",
      "George Kelly",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    price: "95.00",
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    movie_year: 2001,
    director: "Peter Jackson",
    actors: [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom",
      "Sean Astin",
      "Viggo Mortensen",
      "Billy Boyd",
      "Dominic Monaghan",
      "John Rhys-Davies",
      "Liv Tyler",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    price: "105.00",
  },
  {
    id: 10,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    movie_year: 1972,
    director: "Francis Ford Coppola",
    actors: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano",
      "Robert Duvall",
      "Sterling Hayden",
      "John Marley",
      "Richard Conte",
      "Diane Keaton",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    price: "130.00",
  },
  {
    id: 11,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    movie_year: 2000,
    director: "Ridley Scott",
    actors: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
      "Derek Jacobi",
      "Djimon Hounsou",
      "Richard Harris",
      "Ralf Moeller",
      "Spencer Treat Clark",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    price: "115.00",
  },
  {
    id: 12,
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    movie_year: 1991,
    director: "Jonathan Demme",
    actors: [
      "Jodie Foster",
      "Anthony Hopkins",
      "Lawrence A. Bonney",
      "Kasi Lemmons",
      "Lawrence T. Wrentz",
      "Scott Glenn",
      "Anthony Heald",
      "Frankie Faison",
      "Don Brockett",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    price: "85.00",
  },
  {
    id: 13,
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    movie_year: 1993,
    director: "Steven Spielberg",
    actors: [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall",
      "Jonathan Sagall",
      "Embeth Davidtz",
      "Malgorzata Gebel",
      "Shmuel Levy",
      "Mark Ivanir",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg",
    price: "120.00",
  },
  {
    id: 14,
    title: "Se7en",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    movie_year: 1995,
    director: "David Fincher",
    actors: [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "Kevin Spacey",
      "R. Lee Ermey",
      "John C. McGinley",
      "Julie Araskog",
      "Mark Boone Junior",
      "John Cassini",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    price: "95.00",
  },
];

const nowStreaming = document.querySelector(".now-streaming");

// const img = document.createElement("img");
// const readMoreBtn = document.createElement("button");

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
  readMoreBtn.style.backgroundColor = "teal";
  readMoreBtn.style.marginTop = "10px";

  // starRating
  const starRating = document.createElement("div");
  starRating.className = "star-rating";
  const starOne = document.createElement("i");
  starOne.className = "rating__star far fa-star";

  const starTwo = document.createElement("i");
  starTwo.className = "rating__star far fa-star";

  const starThree = document.createElement("i");
  starThree.className = "rating__star far fa-star";

  const starFour = document.createElement("i");
  starFour.className = "rating__star far fa-star";
  const starFive = document.createElement("i");
  starFive.className = "rating__star far fa-star";

  // Append the img and button to the Movie container
  starRating.appendChild(starOne);
  starRating.appendChild(starTwo);
  starRating.appendChild(starThree);
  starRating.appendChild(starFour);
  starRating.appendChild(starFive);

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
  const commentSection = document.createElement("div");
  commentSection.innerHTML = "Comments: ";
  commentSection.style.fontWeight = "bold";
  commentSection.className = "comment-section";
  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Add a Comment";
  commentInput.style.color = "white";
  const commentButton = document.createElement("button");
  commentButton.className = "comment-button";
  commentButton.innerHTML = "Submit";
  const comments = document.createElement("div");
  comments.className = "comments";

  commentButton.addEventListener("click", function () {
    const commentUl = document.createElement("ul");
    if (commentInput.value) {
      const comment = document.createElement("li");
      comment.textContent = commentInput.value;
      commentUl.appendChild(comment);
    }
    comments.appendChild(commentUl);
  });

  // append
  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentButton);
  commentSection.appendChild(comments);
  movieDetails.appendChild(commentSection);

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
