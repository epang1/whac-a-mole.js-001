function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectMole() {
  var visibleMole = $(".mole:visible")

  var moleNumber = randomInt(1,9)
  var newMole = $('#mole-num-' + moleNumber)

  while (visibleMole.attr("id") == newMole.attr("id")){
    var moleNumber = randomInt(1,9)
    var newMole = $('#mole-num-' + moleNumber)
  }

  visibleMole.hide("slide", { direction: 'down' })
  newMole.show("slide", { direction: 'up' })
}


function play() {
  setInterval(function() {
    selectMole()
  }, 2000);
}
