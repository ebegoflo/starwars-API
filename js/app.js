$('.modal').modal();

$.ajax({
  dataType : "json",
  url: "https://swapi.co/api/films/"
}).done(getData).fail(function (status) {
  console.log("error");
});


function getData(data) {
  const arr = data.results;
  // console.log(arr);
  let  templeteCharacter = ``;
  $.each(arr, function(i,value){
      let imagesArray = ["./assets/images/a-new-hope.jpg", "./assets/images/attack-of-the-clones.jpg", "./assets/images/the-phantom-menace.jpg", "./assets/images/revenge-of-the-sith.jpg", "./assets/images/return-of-the-jedi.jpg", "./assets/images/the-empire-strikes-back.jpg", "./assets/images/the-force-awakens.jpg"]
      let imgMovie = imagesArray[i];
      let infoMovie = value;
      // console.log(infoMovie);
      let titleMovie= infoMovie.title;
      // console.log(titleMovie);
     let idEpisode = infoMovie.episode_id;
      // console.log(idEpisode);
      let charactersMovie = infoMovie.characters
      $.each(charactersMovie, function (key,value) {
        templeteCharacter += `<a href="#modal1"><li class="characters" data-url="${value}"> ${value} </li></a> `

      });
      paintMovie(imgMovie, titleMovie, idEpisode, templeteCharacter);
    })
};

function charactersMovie () {
    $.ajax({
      dataType : "json",
      url: "https://swapi.co/api/people/"
    }).done(function(json){
        const characters = json;
        const nameCharacter = characters.name;

      console.log(characters);
    })
}

function paintMovie(imgMovie,titleMovie, idEpisode,templeteCharacter){
  const movieContainer = document.getElementById('movi_Container');

  let templete = `<div class="col s12 m4">
        <div class="card"
          <div class="card-image">
            <img class= "responsive-img movie-img" src="${imgMovie}">
            <span class="card-title grey lighten-4">${titleMovie} Episode ${idEpisode}</span>
          </div>
          <div class="card-content">
            <ul>${templeteCharacter}<ul>
          </div>
        </div>
      </div>`

//       <div class="row">
//   <div class="col s12 m7">
//     <div class="card">
//       <div class="card-image">
//         <img src="images/sample-1.jpg">
//         <span class="card-title">Card Title</span>
//       </div>
//       <div class="card-content">
//         <p>I am a very simple card. I am good at containing small bits of information.
//         I am convenient because I require little markup to use effectively.</p>
//       </div>
//       <div class="card-action">
//         <a href="#">This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>

      movieContainer.innerHTML += templete;
      let collectionHTML = document.getElementsByClassName('characters');
      givenEventLis(collectionHTML);

};

function givenEventLis(collectionHTML) {
  let listCharc= Array.from(collectionHTML);
  // console.log(listCharc);
  $.each(listCharc, function (li) {
  })
  $('.characters').click(getDetailsCharacter);
};

function getDetailsCharacter(e) {
  e.preventDefault;
  let theUrl = e.target.getAttribute('data-url');
  $.ajax({
    url: theUrl
  }).done(paintInfoCharacters);
};



function paintInfoCharacters(json) {
  console.log(json);
  const namePersons = json.name ;

  $('#character-name').html(json.name);
  $('#birth-year').html(json.birth_year);
  $('#hair-color').html(json.hair_color);
  $('#height').html(json.height);
  $('#mass').html(json.mass)
  $('#skin-color').html(json.skin_color);
  $('#eye-color').html(json.eye_color);

};

function loadpage() {
  paintMovie(titleMovie, idEpisode);
  paintInfoCharacters(json)
};

$(document).ready(loadpage);
