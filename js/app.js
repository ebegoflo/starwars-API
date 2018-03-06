
$.ajax({
  dataType : "json",
  url: "https://swapi.co/api/films/"
}).done(getData).fail(function (status) {
  console.log("error");
});


function getData(data) {
  // console.log(data);
  var arr = data.results;
  console.log(arr);
  $.each(arr, function(i,value){
      var infoMovie = value;
      // console.log(infoMovie);
      var titleMovie= infoMovie.title;
      // console.log(titleMovie);
      var idEpisode = infoMovie.episode_id;
      // console.log(idEpisode);
      var previewMovie = infoMovie.characters

      // console.log(previewMovie)


      paintMovie(titleMovie, idEpisode, previewMovie);

    })
};

function charactersMovie (data) {
    $.ajax({
      dataType : "json",
      url: "https://swapi.co/api/people/"
    }).done()
}

function paintMovie(titleMovie, idEpisode, previewMovie){
  let templete = `<div class="row">
      <div class="col s12 m3">
        <div class="card ">
          <div class="card-image">
            <img class= "responsive-img" src="https://dummyimage.com/100x100">
            <span class="card-title black">${titleMovie} ${idEpisode}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" id="scale-demo"><i class="material-icons">add</i></a>
          </div>
          <div class="card-content">
            <p></p>
          </div>
        </div>
      </div>
    </div>`

    const movieContainer = document.getElementById('movi_Container')
      movieContainer.innerHTML += templete;
};

function loadpage() {
  paintMovie(titleMovie, idEpisode);
}

$(document).ready(loadpage);
