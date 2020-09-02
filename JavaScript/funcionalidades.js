$(document).ready(function () {

    // POR DEFECTO PONER QUE SE CARGUEN LOS PROYECTOS o info

    // it works!!!!
    let result = null;
    $.ajax({
        url: "https://api.github.com/users/inakicl/repos?type=owner",
        async: false,
    }).done(function (data) {
        result = data;
    });

    console.log(result[0]);
    /* Fin pruebas  */

    // variables
    let divInfos = null;
    let boton1 = $('#boton1');
    let boton2 = $('#boton2');
    let boton3 = $('#boton3');

    let imagen1 = $('#imagen1');
    let imagen1Texto1 = $('#texto1');
    let imagen2 = $('#imagen2');
    let imagen2Texto2 = $('#texto2');
    let imagen3 = $('#imagen3');
    let imagen3Texto3 = $('#texto3');

    //listeners botones
    $("#boton1").click(function () {
        unClick(0);
        clickInfoPersonal();
    });
    $("#boton2").click(function () {
        unClick(1);
        clickProyectos();
    });
    $("#boton3").click(function () {
        unClick(2);
        clickContacto();
    });


/* desc de dentro de la imagen */
    imagen1.hover( function(){
        imagen1Texto1.removeAttr('hidden');
        console.log('hoverr')
    })
    imagen2.hover( function(){
        imagen2Texto2.removeAttr('hidden');
        console.log('hoverr')
    })
    imagen3.hover( function(){
        imagen3Texto3.removeAttr('hidden');
        console.log('hoverr')
    })


 /*  document.getElementById('imagen1').addEventListener('load', function(){
    imagen1.removeAttr('hidden');
   })
*/

  
  imagen1.on('load',function() {
        imagen1.removeAttr('hidden');
    });
    imagen2.on('load',function() {
        imagen2.removeAttr('hidden');
    });
    imagen3.on('load',function() {
        imagen3.removeAttr('hidden');
    });

    imagen3Texto3.hover(function() {
        imagen3.hover();
    })

  
function cargar() {
    imagen1.removeAttr('hidden');
    imagen1Texto1.removeAttr('hidden');
    imagen2.removeAttr('hidden');
    imagen2Texto2.removeAttr('hidden');
    imagen3.removeAttr('hidden');
    imagen3Texto3.removeAttr('hidden');
}

    //funciones botones
    function clickInfoPersonal() {
        divInfos.empty();

        divInfos.append('' +
            '<div class="col-12 bg-especial w-100 p-0 "> auxilio</div>');


        /*divInfos.empty();

        divInfos.append('<div class="bg-warning"> f</div>')
*/


        /*   $.ajax({
               url: "infor.html",
               async: false,
           }).done(function (data) {
               divInfos.html(data);
           })
   */

    }

    function unClick(tab) {
        switch (tab) {
            case 0:
                boton1.addClass('seleccionado');
                boton2.removeClass('seleccionado');
                boton3.removeClass('seleccionado');
                break;
            case 1:
                boton1.removeClass('seleccionado');
                boton2.addClass('seleccionado');
                boton3.removeClass('seleccionado');
                break;
            case 2:
                boton1.removeClass('seleccionado');
                boton2.removeClass('seleccionado');
                boton3.addClass('seleccionado');
                break;
        }
    }

    function clickProyectos() {
        divInfos.empty();

        divInfos.append('<div class="col-12 bg-especial w-100 p-0 "> me</div>')
    }
    function clickContacto() {
        divInfos.empty();

        divInfos.append('<div class="col-12 bg-especial w-100 p-0 "> desmayo</div>')
    }

    /** Empieza el codigo */

    // si existe el div pa porsi. y poner por defecti seleccionado un TAB de info personal o proyectos
    if ($('#infos').length > 0) {
        divInfos = $('#infos');
        boton1.click();
    }


    // Cuando carguen las imagenes hacer que aparezcan metiendoles una clase
   setTimeout(cargar, 1500)
  /*  let src = false
    do{
        if(imagen1.src != null){
            imagen1.removeAttr('hidden');
src = true;

        }
    } 
    while(!src)
        
        //console.log('fsdf');
    */
})
