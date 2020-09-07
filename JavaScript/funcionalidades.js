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
    //lon hover y on load listeners para las imagenes y texto descriptivo
    imagen1.hover(function () {
        imagen1Texto1.removeAttr('hidden');
    })
    imagen2.hover(function () {
        imagen2Texto2.removeAttr('hidden');
    })
    imagen3.hover(function () {
        imagen3Texto3.removeAttr('hidden');
    })

    imagen1.on('load', function () {
        imagen1.removeAttr('hidden');
        setTimeout(function () { imagen1Texto1.removeAttr('hidden') }, 2000)
    });
    imagen2.on('load', function () {
        imagen2.removeAttr('hidden');
        setTimeout(function () { imagen2Texto2.removeAttr('hidden') }, 2000)
    });
    imagen3.on('load', function () {
        imagen3.removeAttr('hidden');
        setTimeout(function () { imagen3Texto3.removeAttr('hidden') }, 2000)
    });

    /* Funciones */

    /**
     * Funcion de Forzar cargar la imagen que a veces no se ve la imagen sin esto
     */
    function cargar() {
        imagen1.removeAttr('hidden');
        imagen2.removeAttr('hidden');
        imagen3.removeAttr('hidden');
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

    /**
     * El click que se le hace a la barra de tab de info personal proyectos y contacto
     * @param int tab 
     */
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

        divInfos.append('<div class="col-12 bg-especial w-100 p-0 "> ' +
            '<div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="es_ES" data-type="horizontal" data-theme="light" data-vanity="iñaki-caballero-lópez-0757361b2"><a class="LI-simple-link" href="https://es.linkedin.com/in/i%C3%B1aki-caballero-l%C3%B3pez-0757361b2?trk=profile-badge">Iñaki Caballero López</a></div> ' +
            '</div> d')
    }

    /** Empieza el codigo */

    // si existe el div pa porsi. y poner por defecto seleccionado un TAB de info personal o proyectos
    if ($('#infos').length > 0) {
        divInfos = $('#infos');
        boton1.click();
    }

    // Cuando carguen las imagenes hacer que aparezcan metiendoles una clase
    setTimeout(cargar, 2000)

})
