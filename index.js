const btn = document.getElementById("toggle");  

btn.addEventListener("click", e => {
  
  $(".monthly").toggle();
  $(".annually").toggle();

});


