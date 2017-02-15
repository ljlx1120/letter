$(function(){
  $("#letter").submit(function(event){
      var nameInput = $("input#name").val();
      nameInput = nameInput.toUpperCase();

      output = $(".name").text(nameInput);
    
      $("#story").show();

      event.preventDefault();
  });
});
