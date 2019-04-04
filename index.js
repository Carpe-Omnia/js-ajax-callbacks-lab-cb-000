$(document).ready(function (){
  $('#searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var term = $('#searchTerms').value ;
    console.log(term) ;
  })
});
