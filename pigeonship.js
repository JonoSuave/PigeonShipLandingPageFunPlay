$(document).ready(function() {
   $('.section-description').on('click', function(event){
       event.preventDefault();
      $(this).closest('.section-description').find('.description').slideToggle(); 
   }); 
});
