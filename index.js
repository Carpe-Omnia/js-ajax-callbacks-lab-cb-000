$(document).ready(function (){
  document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var term = document.getElementById('searchTerms').value ;
    console.log(term) ;
    var base = `https://api.github.com/search/repositories?q=${term}` ;
    $.get(base, function(data){
      var mapData = data.items.map(function(item){
        return htmlify(item)
      })
      document.getElementById('results').innerHTML += mapData ;
      alert("repos loaded")
    })
  })
});

function htmlify(item){
  var show = `<span onclick="showCommits(${item.commits_url})" > Show Commits </span>`
  var thing = `<p>name: ${item.name} <br/> Description: ${item.description} <br/> <a href='${item.html_url}'> link </a> <br/> ${show} </p>` ;
  return thing ;
}
function showCommits(url){
  //$.get(url, function(data){
    //console.log(data)
  //})
  console.log("showing commits") ;
  console.log(url);
}
//${item.commits_url}
