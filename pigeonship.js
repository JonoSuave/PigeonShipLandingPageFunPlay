$(document).ready(function() {
   $('.section-description').on('mouseenter', function(event){
       event.preventDefault();
      $(this).closest('.section-description').find('.description').slideToggle(); 
   }); 
    $('.section-description').on('mouseleave'), function(event){
        $(this).closest('.section-desctription').find('.description').slideDown();
    }
});
