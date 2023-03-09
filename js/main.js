$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    });
});

function getMovies(name) {
    axios.get('http://www.omdbapi.com/?s='+name+'&apikey=168a0f12')
      .then((response) => {
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $(movies).each((index, movie) => {
            output += `
              <div class="col-md-3">
                <div class="well text-center card p-2">
                  <img src="${movie.Poster}">
                  <h5 class="mt-2 mb-2">${movie.Title}</h5>
                  <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-info" href="#">Movie Details</a>
                </div>
              </div>
            `;
        });
        $('#movies').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
}