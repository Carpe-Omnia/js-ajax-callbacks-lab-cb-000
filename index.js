$(document).ready(function (){
  document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event) ;
    var term = document.getElementById('searchTerms').value ;
    console.log(term) ;
  })
});
