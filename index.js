$(document).ready(function (){
  document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var term = document.getElementById('searchTerms').value ;
    console.log(term) ;
    var base = `https://api.github.com/search/repositories?q=${term}` ;
    $.get(base, function(data){
      console.log(data.items[0]) ;
      alert("repos loaded")
    })
  })
});
