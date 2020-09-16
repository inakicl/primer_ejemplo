

<!DOCTYPE html>

<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous"/>

<link rel="stylesheet" type="text/css" href="Librerias/bootstrap-4.5.2-dist/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="Css/estilos.css" />

<head>
    <meta charset="utf-8" />
    <title>d</title>
    <link rel="icon" href="https://drive.google.com/thumbnail?id=1K6cGrtmbDGXZYLxO1fVy4gsHJohKczw-"
        type="image/icon type">

</head>

<body class="el-cuerpo-mi-rey">
    <!-- Cuerpo/contenedor principal de la pagina-->
    <div class="container-fluid m-auto">

        <!-- Lo que se ve en grande-->
        <div class="row p-5 sombra-borde-top">
            <div class="col-12 col-lg-9 order-lg-1">
                <span class="h2 font-weight-bold texto-rojo">Iñaki Caballero</span>
            </div>
            <div class="col-12 col-lg-3 order-lg-2 order-3 mt-3 mt-lg-0">
                <div class="row">
                    <div class="col-6" id="icono-in">
                         <a href="http://www.linkedin.com/in/iñaki-caballero-lópez-0757361b2" target="blank_">
                            <img src="https://drive.google.com/thumbnail?id=10NLpuOBpcjECdrl03-5L3BCR3_RW6mgU" alt="linkedin"
                            class="img-fluid img iconos" />
                        </a>
                    </div>
                    <div class="col-6" id="icono-git">
                        <a href="https://github.com/inakicl" target="blank_">
                            <img src="https://drive.google.com/thumbnail?id=18nhGpUsh-GNbuWCSr-G8VFo_eKmj0gK_" alt="github"
                            class="img-fluid img iconos" />
                        </a>
                    </div>
            </div>
            </div>
            <div class="col-12 col-lg-9 order-lg-3">
                <span class="h2 "> Programador web, m&oacute;vil y escritorio.</span>
            </div>
        </div>

        <!-- Tira con imagenes de mis proyectos-->
        
        <div id="row-proyectos" class="row pl-5 pr-5">

            <div class="col-12 d-flex justify-content-center text-white mt-2">
                <span class="h1">Retos destacados realizados</span>
            </div>
            <div class="col-12 mb-3 border-bottom borde"></div>

            <div class="col-12 col-lg-4  imagen-contenedor text-center" >
                <!-- contenedor de la descripcion de la imagen-->
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto1" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo">FNEXUS</div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3 descripcion">
                        <span class="col-12 pt-3 m-auto">Aplicación web mediante la cuál un empresario podrá publicitar sus productos de
                            tal manera que el usuario común pueda interactuar con el.</span>
                    </div>
                </div>
                
                <img src="https://drive.google.com/uc?id=1mhOH5KE8vrj29CFjqUuHqOMCVrMeIY65" alt="Proyecto imagen 1" id="imagen1" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor text-center" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto2" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo">JetCat</div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3">
                        <span class="col-12 pt-3 m-auto descripcion">Juego móvil con la misma idea que el FlappyBird.</span>
                    </div>
                </div>
                <img src="https://drive.google.com/uc?id=1YSPISCZ-7xW6WX8cfn_V2eo3mNUtwHqZ" alt="Proyecto imagen 2" id="imagen2" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor text-center" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto3" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="h3 pt-3 titulo">CloudRoad</div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3 ">
                        <span class="col-12 pt-3 m-auto descripcion">Aplicación web interna de empresa ficticia para la asistencia en carretera.</span>
                    </div>
                </div>
                <img src="https://drive.google.com/uc?id=1md-EcqcHOAeDff5w5WSSYtAisNJyEwtx" alt="Proyecto imagen 3" id="imagen3" hidden
                    class="imagen" />
            </div>
        </div>

        <!-- Botones tab de mostrar informacion sobre mí-->
        <div class="row tab-padre pt-5 ">
            <div class="tab  offset-lg-3 offset-0 col-lg-2 col-12 p-0">
                <input id="boton1" type="button" class="w-100 h-100 " value="Sobre mí">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton2" type="button" class="w-100 h-100" value="Repositorios git">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton3" type="button" class="w-100 h-100" value="Contacto">
            </div>

            <!-- Caja para cargar la info mas contacto (cv, github, egibide, email, etc.)-->
            <div class="offset-lg-3 offset-0 col-lg-6 col-12 mb-5">
                <div class="row" id="infos">
                
                </div>
            </div>
    </div>

    <footer class="row bg-dark text-light">
        <p class="col-12 d-flex justify-content-center align-items-center pt-3 ">
            Powered by WikitesEngine 1.0 2020 Iñaki Caballero
        </p>    
    </footer>
    
    <button id="goTop" title="Go to top"><i class="fas fa-arrow-up"></i></button>

</body>
<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
<script src="Librerias/jQuery/jquery-3.5.1.min.js"></script>
<script src="JavaScript/funcionalidades.js" ></script>
<script src="Librerias/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>

</html>
