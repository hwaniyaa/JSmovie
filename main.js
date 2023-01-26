
const searchTxt = document.querySelector(".search-txt");
const ulArea = document.querySelector(".ul-area");
const btnMore = document.querySelector(".btn-more");
let pageNum = 1;

btnMore.addEventListener("click", function(){
  pageNum++;
  loadMovie(pageNum);
});

loadMovie(pageNum);
function loadMovie(pageNum = 1){
  const myFetch = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cbe5331fb762952b00b95c46156a35c9&language=ko-KR&page=${pageNum}`,{
  headers: {
    Authorization: "Bearer cbe5331fb762952b00b95c46156a35c9",
  },
  })

  myFetch
  .then(function(response){
    return response.json();
  })
  .then(function(result){
    console.log(result);
    result.results.forEach(function(item,idx){
      ulArea.innerHTML += 
      `<li>
      <a href=""><img src="https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}"></a>
        <div class="movie-txt">
          <h2>${item.title}</h2>
          <p>${item.original_title}</p>
          <p>${item.release_date}</p>
          <p>${item.overview}</p>
        </div>
      </li>`;
    })
  })
  .catch(function(){
  })
}


  
  console.log(myFetch);



  // https://image.tmdb.org/t/p/original