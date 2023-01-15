// $( "img1" ).hover(
//     function() {
//       $( this ).addClass( "fading" );
//     }, function() {
//       $( this ).removeClass( "fading" );
//     }
//   );


function mouseOver(matchElement, cssClass){
$(matchElement).hover(function(){
    $(this).addClass(cssClass)
  });
$(matchElement).mouseout(function(){
    $(this).removeClass(cssClass)
 });}


 mouseOver('#slidebutton','#pushbutton')


$(document).ready(function(){
    $('#fadein').fadeTo(15000, 100)
});
 



// $(document).ready(function() {
//     var word = "Nicholas Green: 3D Artist";
//     var letters = word.split(''); // split the word into an array of letters
    
//     $.each(letters, function(index, letter) {
//       $('.title').append('<span class="letter">' + letter + '</span>'); // add a span element for each letter
//     });
    
//     $('.letter').each(function(index) {
//       $(this).delay(100*index).fadeIn(100); // fade in each letter with a delay
//     });
//   });
  

$(document).ready(function(){

        $('.aboutcontainer').animate({
            left: "50px",
        });
        

    
});