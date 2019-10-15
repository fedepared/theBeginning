$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            


            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
        $('.contenedorAbout').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'0.5'},1500);
                    
            }
            
        }); 
        
        $('.contenedorAbout2').each( function(i){
                
            var bottom_of_object2 = $(this).position().top + $(this).outerHeight();
            var bottom_of_window2 = $(window).scrollTop() + $(window).height();
                                
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window2 > bottom_of_object2 ){
            
                $(this).animate({'opacity':'1'},1500);
                            
                }
                    
            });
        
    });
    
});


var contenedor = document.querySelector("#contenedorA");
var main = document.querySelector("#about");

function mostrar(){
    contenedor.style.display = 'block';    
}

let x = window.matchMedia("(max-width: 320px)")

if (x.matches){
    let arrayBot=document.getElementsByClassName("btn");
    for(let i=0;i<arrayBot.length;i++){
        arrayBot[i].className="btn btn-outline-secondary btn-sm";
    }
}