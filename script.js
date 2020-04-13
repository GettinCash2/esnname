

function clicked(id){
  var onoff = document.getElementById(id);

  if (onoff.classList.contains('on')){
    onoff.classList.toggle('on');
    $(".innerbtns").on("click", function() {
      $(this).css("background", "balck");
    })
  }
  else{
    onoff.classList.toggle('on');
    $(".innerbtns").on("click", function() {
      $(this).css("background", "#dbdbdb");
    })
  }
}
