<?php 
    require_once 'variables.php';
?>

<head>
    <html lang="es" xmlns="http://www.w3.org/1999/xhtml">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />
    <!-- FONT AWESOME PARA ICONOS-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
            integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous"/>
    <!-- BOOTSTRAP + ESTILOS PERSONALIZADOS-->
    <link rel="stylesheet" type="text/css" href="Librerias/bootstrap-4.5.2-dist/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="Css/estilos.css" />
    <meta charset="utf-8" />
    <title><?= $title ?></title>
    <!-- ICONO (cambiar TODO)-->
    <link rel="icon" href="https://drive.google.com/thumbnail?id=1K6cGrtmbDGXZYLxO1fVy4gsHJohKczw-"
        type="image/icon type">

</head>

<body class="el-cuerpo-mi-rey">

    <!-- Cuerpo/contenedor principal de la pagina-->
    <div class="container-fluid m-auto">

        <!-- Lo que se ve en grande-->
        <div class="row p-5 sombra-borde-top">
            <div class="col-12 col-lg-9 order-lg-1">
                <span class="h2 font-weight-bold texto-rojo">    <?= $nombre_apellidos ?>   </span>
            </div>
            <div class="col-12 col-lg-3 order-lg-2 order-3 mt-3 mt-lg-0">
                <div class="row">
                    <div class="col-6" id="icono-in">
                         <a href="<?= $linkdin_perfil_link ?>" target="blank_">
                            <img src="<?= $linkdin_logo_link ?>" alt="linkedin"
                            class="img-fluid img iconos" />
                        </a>
                    </div>
                    <div class="col-6" id="icono-git">
                        <a href="<?= $github_perfil_link ?>" target="blank_">
                            <img src="<?= $github_logo_link ?>" alt="github"
                            class="img-fluid img iconos" />
                        </a>
                    </div>
            </div>
            </div>
            <div class="col-12 col-lg-9 order-lg-3">
                <span class="h2 "><?= $titulo_resumen ?></span>
            </div>
        </div>

        <!-- Tira con imagenes de mis proyectos-->        
        <div id="row-proyectos" class="row pl-5 pr-5">

            <div class="col-12 d-flex justify-content-center text-white mt-2">
                <span class="h1"><?= $retos_titulo ?></span>
            </div>
            <div class="col-12 mb-3 border-bottom borde"></div>

            <div class="col-12 col-lg-4  imagen-contenedor text-center" >
                <!-- contenedor de la descripcion de la imagen-->
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto1" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo"><?= $reto1_titulo?></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3 descripcion">
                        <span class="col-12 pt-3 m-auto"><?= $reto1_cuerpo?></span>
                    </div>
                </div>
                
                <img src="<?= $reto1_imagen_link?>" alt="Proyecto imagen 1" id="imagen1" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor text-center" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto2" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo"><?= $reto2_titulo?></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3">
                        <span class="col-12 pt-3 m-auto descripcion"><?= $reto2_cuerpo?></span>
                    </div>
                </div>
                <img src="<?= $reto2_imagen_link?>" alt="Proyecto imagen 2" id="imagen2" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor text-center" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto3" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo"><?= $reto3_titulo?></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3 ">
                        <span class="col-12 pt-3 m-auto descripcion"><?= $reto3_cuerpo?></span>
                    </div>
                </div>
                <img src="<?= $reto3_imagen_link?>" alt="Proyecto imagen 3" id="imagen3" hidden
                    class="imagen" />
            </div>
        </div>

        <!-- Botones tab de mostrar informacion sobre mí-->
        <div class="row tab-padre pt-5 ">
            <div class="tab  offset-lg-3 offset-0 col-lg-2 col-12 p-0">
                <input id="boton1" type="button" class="w-100 h-100 " value="<?= $tab_boton_1_value?>">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton2" type="button" class="w-100 h-100" value="<?= $tab_boton_2_value?>">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton3" type="button" class="w-100 h-100" value="<?= $tab_boton_3_value?>">
            </div>

            <!-- Caja para cargar la info mas contacto (cv, github, egibide, email, etc.)-->
            <div class="offset-lg-3 offset-0 col-lg-6 col-12 mb-5">
                <div class="row" id="infos">
                    <?php
                        require_once 'Paginas_extra/tab-1.php';
                        require_once 'Paginas_extra/tab-2.php';
                        require_once 'Paginas_extra/tab-3.php';
                    ?>
                </div>
            </div>
    </div>

    <footer class="row bg-dark text-light">
        <p class="col-12 d-flex justify-content-center align-items-center pt-3 ">
            <?= $footer?>
        </p>    
    </footer>
    
    <button id="goTop" title="Go to top"><i class="fas fa-arrow-up"></i></button>

</body>

    <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    <script src="Librerias/jQuery/jquery-3.5.1.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-firestore.js"></script>
    <script src="JavaScript/funcionalidades.js" ></script>
    <script src="Librerias/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>

</html>