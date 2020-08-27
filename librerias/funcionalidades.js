$(document).ready(function () {

    // POR DEFECTO PONER QUE SE CARGUEN LOS PROYECTOS

         // it works!!!!
        let result= null;
        $.ajax({
            url: "https://api.github.com/users/inakicl/repos?type=owner",
            async: false,
        }).done(function (data) {
            result = data;
        });
    
    
    
        console.log(result[0]); 

    // si existe el div pa porsi.
    let divInfos = null;
    if ($('#infos').length > 0) {
        divInfos = $('#infos');
       // divInfos.append('<div class="bg-warning"> f</div>')
        clickInfoPersonal();
    }

    //listeners botones
    $("#boton1").click(function () {
        clickInfoPersonal();
    });
    $("#boton2").click(function () {
        clickProyectos();
    });
    $("#boton3").click(function () {
        clickContacto();
    });

    //funciones botones
    function clickInfoPersonal() {
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

    function clickProyectos() {
        divInfos.empty();

        divInfos.append('<div class="bg-warning"> d</div>')
    }
    function clickContacto() {
        divInfos.empty();

        divInfos.append('<div class="bg-warning"> ws</div>')
    }
})
