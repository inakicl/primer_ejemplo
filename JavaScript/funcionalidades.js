$(document).ready(function () {

    // POR DEFECTO PONER QUE SE CARGUEN LOS PROYECTOS o info

    // variables
    let divInfos = null;
    let boton1 = $('#boton1');
    let boton2 = $('#boton2');
    let boton3 = $('#boton3');

    let botonGoTop = $('#goTop');

    let imagen1 = $('#imagen1');
    let imagen1Texto1 = $('#texto1');
    let imagen2 = $('#imagen2');
    let imagen2Texto2 = $('#texto2');
    let imagen3 = $('#imagen3');
    let imagen3Texto3 = $('#texto3');

    //variables ajax
    let repositorios = null;
    let estarred = null;
    //llamadas ajax
    let result = null;
    $.ajax({
        url: "https://api.github.com/users/inakicl/repos?type=owner",
        async: false,
    }).done(function (data) {
        repositorios = data;
    });
    $.ajax({
        url: "https://api.github.com/users/inakicl/starred",
        async: false,
    }).done(function (data) {
        estarred = data;
    });


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

    $("#goTop").click(function () {
        goToTop();
    });
    //listener de cuando se scrollea y hay que subir rapido
    window.onscroll = function () {
        scrollFunction()
    };


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

    /**
     * 
     */
    function clickInfoPersonal() {
        divInfos.empty();

        divInfos.append('' +
            '<div class="col-12 bg-especial"> ' +
            '<div class="row m-4 ">' +

            '<div class="col-12 col-lg-4 ">' +
            '<div class="row text-center">' +
            '<div class="col-12">' +
            '<i class="fas fa-briefcase fa-2x text-danger "></i>' +
            '</div>' +
            '<div class="col-12">' +
            'No trabajando' +
            '</div>' +
            '<div class="col-12">' +
            'Lugar: <span> ninguno</span>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="col-12 col-lg-4 mt-3 mt-lg-0">' +
            '<div class="row text-center">' +
            '<div class="col-12">' +
            '<i class="fas fa-user fa-2x"></i>' +
            '</div>' +
            '<div class="col-12">' +
            'Nombre: Iñaki Caballero' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="col-12 col-lg-4 mt-3 mt-lg-0">' +
            '<div class="row text-center">' +
            '<div class="col-12">' +
            '<i class="fas fa-city fa-2x text-secondary"></i>' +
            '</div>' +
            '<div class="col-12">' +
            'Ciudad: Vitoria-Gasteiz' +
            '</div>' +
            '</div>' +
            '</div>' +


            '<div class="col-12 mt-5 d-flex">' +
            '<div class="row">' +
            '<div class="col-12 d-flex justify-content-center mb-3">' +
            '<i class="fas fa-info fa-2x text-info "></i>' +
            '</div>' +
            '<div class="col-12 ml-lg-3">' +
            '<p id="info-parte-1">Estudiando desarrollo de aplicaciones desde finales de 2016 en' +
            'Egibide-arriaga.' +
            '</p>' +
            '<p id="info-parte-2">Puedo abarcar muchos tipos de proyectos de aplicaciones y a ayudar a' +
            'equipos de' +
            'trabajo que' +
            'necesiten personal' +
            'de trabajo.' +
            '</p>' +
            '<p id="info-parte-3">También tengo cursado un grado de sistemas microinformáticos y redes.</p>' +

            '</div>' +
            '</div>' +
            '</div>' +


            '<div class="col-12 mt-5 d-flex bg-rojo rounded pl-0">' +
            '<div class="bg-azul-oscuro p-4 rounded-left d-flex align-items-center">' +
            '<i class="fas fa-laptop-code fa-3x "></i>' +
            '</div>' +
            '<div class="p-4 d-flex justify-content-around flex-wrap ml-lg-3 w-100">' +
            '<i class="fab fa-java fa-2x m-2"></i>' +
            '<i class="fab fa-swift fa-2x m-2"></i>' +
            '<i class="fab fa-js-square fa-2x m-2"></i>' +
            '<i class="fab fa-php fa-2x m-2"></i>' +
            '<i class="fab fa-laravel fa-2x m-2"></i>' +
            '<img src="https://uda-ejie.github.io/images/uda-big-250.png" class="imagen-uda ">' +
            '<i class="fab fa-html5 fa-2x m-2"></i>' +
            '<i class="fab fa-css3-alt fa-2x m-2"></i>' +
            '</div>' +
            '</div>' +

            '</div>' +
            '</div>');

    }

    /**
     * Funcion de boton click ver proyectos/repositorios
     */
    function clickProyectos() {
        //vaciar el div contenedor
        divInfos.empty();

        // poner los repositorios en Estrella de los que he trabajado con los compas
        estarred.forEach(element => {
            // a veces aparece en null el lenguaje porque no tiene nada en el repositorio, para evitar eso poner frase por defecto
            let lenguajes = element.language;
            if (lenguajes == "null") {
                lenguajes = "Lenguaje no detectado";
            }
            divInfos.append('<div class="card bg-especial col-12 rounded-0" >' +
                '<a class="card-body border rounded m-2" href="' + element.html_url + '">' +
                '<h5 class="card-title">Repositorio: <span class="repositorio">' + element.full_name + '</span></h5>' +
                '<h6 class="card-subtitle mb-2">Lenguaje principal: <span class="lenguaje">' + lenguajes + '</span></h6>' +
                '</a>' +
                '</div>' +
                '</div>');
        });
        // añadir el resto de repositorios
        repositorios.forEach(element => {
            let lenguajes = element.language;
            if (lenguajes == null) {
                lenguajes = "Lenguaje no detectado";
            }
            divInfos.append('<div class="card bg-especial col-12 rounded-0" >' +
                '<a class="card-body border rounded m-2" href="' + element.html_url + '">' +
                '<h5 class="card-title">Repositorio: <span class="repositorio">' + element.full_name + '</span> </h5>' +
                '<h6 class="card-subtitle mb-2">Lenguaje principal: <span class="lenguaje">' + lenguajes + '</span></h6>' +
                '</a>' +
                '</div>' +
                '</div>');
        });

    }

    function clickContacto() {
        divInfos.empty();

        divInfos.append('' +
            '<div class="col-12 bg-especial">' +
            '<div class="row m-4 d-flex ">' +
            '<div class="m-3">Curriculum vitae <i class="fas fa-arrow-right"></i></div>' +
            '<div class="ml-2">' +
            '<a href="https://drive.google.com/uc?id=1VB6D5cERRJ5ikZNJWUVFv60qkzIr_ozd" target="_blank">' +
            '<i class="far fa-file-pdf fa-3x fab texto-rojo w-"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="row m-4 d-flex ">' +
            '<div class="m-3">E-mail / correo electr&oacute;nico : i_caballero_lopez@hotmail.com </div>' +
            '</div>' +
            '<div class="row m-4 d-flex ">' +
            '<div class="m-3">Tele&eacute;fono : 697 666 467 </div>' +
            '</div>' +
            '</div>');
    }



    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            botonGoTop.show();
        } else {
            botonGoTop.hide();
        }
    }

    // ir al principio del documento
    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
