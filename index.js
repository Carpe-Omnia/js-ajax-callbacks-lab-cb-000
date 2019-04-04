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
  var commits = item.commits_url.replace("{/sha}", "")
  var show = `<span onclick="showCommits('${commits}')" > Show Commits </span>`
  var thing = `<p>name: ${item.name} <br/> Description: ${item.description} <br/> <a href='${item.html_url}'> link </a> <br/> ${show} </p>` ;
  return thing ;
}
function showCommits(url){
  $.get(url, function(data){
    console.log(data) ;
    var commits = data.map(function(data){
      return doCommits(data) ;
    })
    document.getElementById("details").innerHTML += commits ;
  })
  console.log("showing commits") ;
  console.log(url);
}

function doCommits(commit){
  var sha = commit.sha ;
  var login = commit.author.login ;
  var name = commit.author.name ;
  var imglink = commit.author.avatar_url ;
  var img = `<img src="${imglink}" />`
  var thing = `<p> sha: ${sha} . name: ${name} . login: ${login} . ${img} </p>` ;
  return thing ;
}
