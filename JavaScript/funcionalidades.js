$(document).ready(function () {

    firebase.initializeApp({
        apiKey: "AIzaSyBCQ6SVsHkPfSMBPPWtCK8oCtp5E3-nXu8",
        authDomain: "portfolio-personal-13fcd.firebaseapp.com",
        databaseURL: "https://portfolio-personal-13fcd.firebaseio.com",
        projectId: "portfolio-personal-13fcd",
        storageBucket: "portfolio-personal-13fcd.appspot.com",
        messagingSenderId: "805782339737",
        appId: "1:805782339737:web:6f179796697d113a417808",
        measurementId: "G-QQ4BX97RDS"
    });

    var db = firebase.firestore();
    var visitas_totales = db.collection("visitas").doc("jqPwB03vzpbWxe9DIeNC");

    /**
     * Llevar la cuenta de las visital totales
     */
    function sumarVisita() {
        return visitas_totales.update({
            visitas_totales: firebase.firestore.FieldValue.increment(1)
        })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }

    // variables
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
    boton1.click(function () {
        clicATab(0);
        clickTab_1();
    });
    boton2.click(function () {
        clicATab(1);
        clickTab_2();
    });
    boton3.click(function () {
        clicATab(2);
        clickTab_3();
    });

    $("#goTop").click(function () {
        goToTop();
    });
    //listener de cuando se scrollea y hay que subir rapido
    window.onscroll = function () {
        scrollShowButton()
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
    function forzarCargarImagen() {
        imagen1.removeAttr('hidden');
        imagen2.removeAttr('hidden');
        imagen3.removeAttr('hidden');
    }

    //funciones botones

    /**
     * El click que se le hace a la barra de tab de info personal proyectos y contacto
     * @param int tab 
     */
    function clicATab(tab) {
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
     * Funcion de cuando se le hace click al boton 1 de los tabs (ver info personal)
     */
    function clickTab_1() {
        $('#tab-2').hide();
        $('#tab-3').hide();
        $('#tab-1').show();
    }

    /**
     * Funcion de cuando se le hace click al boton 2 de los tabs (ver repositorios/proyectos)
     */

    function clickTab_2() {
        $('#tab-1').hide();
        $('#tab-3').hide();
        $('#tab-2').show();

        // poner los repositorios en Estrella de los que he trabajado con los compas
        anyadir(estarred);

        // añadir el resto de repositorios
        anyadir(repositorios);


    }

    /**
     * Funcion para evitar repetir codigo de añadir un div
     * @param {*} element 
     * @param {*} lenguajes 
     */
    function anyadir(array) {
        array.forEach(element => {
            // a veces aparece en null el lenguaje porque no tiene nada en el repositorio, para evitar eso poner frase por defecto
            let lenguajes = element.language;
            if (lenguajes == null) {
                lenguajes = "Lenguaje no detectado";
            }

            $('#tab-2').append('<div class="card bg-especial col-12 rounded-0" >' +
                '<a class="card-body border rounded m-2" href="' + element.html_url + '">' +
                '<h5 class="card-title">Repositorio: <span class="repositorio">' + element.full_name + '</span> </h5>' +
                '<h6 class="card-subtitle mb-2">Lenguaje principal: <span class="lenguaje">' + lenguajes + '</span></h6>' +
                '</a>' +
                '</div>' +
                '</div>');
        });

    }

    /**
     * Funcion de cuando se le hace click al boton 3 de los tabs
     */
    function clickTab_3() {
        $('#tab-2').hide();
        $('#tab-1').hide();
        $('#tab-3').show();
    }


    /**
     * Funcion para que aparezca el boton de ir al principio de la página
     */
    function scrollShowButton() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            botonGoTop.show();
        } else {
            botonGoTop.hide();
        }
    }

    /**
     * Funcion para ir al principio del documento
     */
    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /** Empieza el codigo */
    boton1.click();

    // Cuando carguen las imagenes hacer que aparezcan metiendoles una clase
    setTimeout(forzarCargarImagen, 2000)

    sumarVisita(); // contabilizar visitas totales de la pagina web

})
