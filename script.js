/*Drag imagenes en movil */
$('.carousel').carousel({
  touch: true // default
  })

  /*Footer año */
  document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

/*Ecfecto smoth en click */
var TopOffset = 85;    

$('a[data-smooth]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - TopOffset
          }, 1000);
          return false;
        }
      }
    });

    /*Popup */
    $(window).on('load', function(){
      setTimeout(function(){
        $('#myModal').modal('show')
      }, 10000);  // 3000 = 3 second // 500 = 0.5 second
    });


    /* Alerta de pago*/

    $(document).ready(function(){
        $('#btnPay').click(function(){
            alert("Gracias por tu pago");
        });
    });

    /* Modal inicar sesion*/
    document.getElementById('signin').addEventListener("click", function() {
      const newLocal = '.bg-modal';
      document.querySelector(newLocal).style.display = "flex";
    });
    
    document.querySelector('.close').addEventListener("click", function() {
      document.querySelector('.bg-modal').style.display = "none";
    });