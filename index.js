$(document).ready(function (){
  document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var term = document.getElementById('searchTerms').value ;
    console.log(term) ;
    var base = `https://api.github.com/search/repositories?q=${term}` ;
    $.get(base, function(data){
      $('#results').innerHTML += htmlify(data.items[0]) ;
      alert("repos loaded")
    })
  })
});

function htmlify(item){
  var thing = `<p> ${item.name} </p>` ;
  return thing ;
}
