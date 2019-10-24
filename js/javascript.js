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

//obtención de datos


let peticion = new XMLHttpRequest();
document.querySelector("#frmContact").addEventListener("submit",function(evt){
    evt.preventDefault();
    let name=document.querySelector("#name").value; 
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let message=document.querySelector("#message").value;
    let data = new FormData();
    data.append("name", name );
    data.append("email", email);
    data.append("phone", phone);
    data.append("message", message);
    peticion.open("POST","envio.php");
    peticion.send(data);
    
    peticion.addEventListener("load",function(){
        console.log(peticion.response);
        if(peticion.response == 1){
            document.querySelector("#ok").style.display="block";
            document.querySelector("#frmContact").reset();
        }
        else{
            document.querySelector("#err").style.display="block";
        }
    })
})

