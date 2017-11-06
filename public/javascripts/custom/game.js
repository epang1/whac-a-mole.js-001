$( document ).ready(function() {
  
  play();
  var visibleMole = $(".mole:visible")
  visibleMole.on("click", function(){
    $("#counter").text(Number($("#counter").text()) + 1)
    visibleMole.hide()
  })

});