document.addEventListener('DOMContentLoaded', function(e){
  const searchButton = document.getElementById('searchButton');
  if(searchButton){
    searchButton.addEventListener('mouseenter', function(e){
      alert('hi');
    });
  }
});