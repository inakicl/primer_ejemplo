﻿<!DOCTYPE html>

<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />


<link rel="stylesheet" type="text/css" href="Librerias/bootstrap-4.5.2-dist/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="Css/estilos.css" />

<head>
    <meta charset="utf-8" />
    <title>PortFolio personal de Iñaki</title>
    <link rel="icon" href="https://drive.google.com/thumbnail?id=1K6cGrtmbDGXZYLxO1fVy4gsHJohKczw-"
        type="image/icon type">

</head>

<body class="el-cuerpo-mi-rey">
    <!-- Cuerpo/contenedor principal de la pagina-->
    <div class="container-fluid m-auto">

        <!-- Lo que se ve en grande-->
        <div class="row">
            <div class="col-12 align-self-center p-5">
                <h2 class="">Hola, soy <span class="font-weight-bold text-danger">Iñaki Caballero</span></h2>
                <h2 class=""> programador web y multiplataforma</h2>
            </div>
        </div>

        <!-- Tira con imagenes de mis proyectos-->
        <div class="col-12">
            <span class="retos-destacados h1">Retos destacados</span>
        </div>
        <div id="row-proyectos" class="row pl-5 pr-5">
            <div class="col-12 col-lg-4  imagen-contenedor" >
                <!-- contenedor de la descripcion de la imagen-->
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto1" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-6 d-flex align-items-center ">
                            <div class="h3 pl-3 pt-3 titulo">FNEXUS</div>
                        </div>
                        <div class="col-6 d-flex justify-content-center">
                            <div class="enlace mt-1"></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3">
                        <span class="col-12 pt-3 m-auto">Aplicación web mediante la cuál un empresario podrá publicitar sus productos de
                            tal manera que el usuario común pueda interactuar con el.</span>
                    </div>
                </div>
                
                <img src="https://drive.google.com/uc?id=1mhOH5KE8vrj29CFjqUuHqOMCVrMeIY65" alt="Proyecto imagen 1" id="imagen1" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto2" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-6 d-flex align-items-center ">
                            <div class="h3 pl-3 pt-3 titulo">JetCat</div>
                        </div>
                        <div class="col-6 d-flex justify-content-center">
                            <div class="enlace mt-1"></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3">
                        <span class="col-12 pt-3 m-auto">Juego móvil con la misma idea que el FlappyBird .</span>
                    </div>
                </div>
                <img src="https://drive.google.com/uc?id=1YSPISCZ-7xW6WX8cfn_V2eo3mNUtwHqZ" alt="Proyecto imagen 2" id="imagen2" hidden
                    class="imagen" />
            </div>
            <div class="col-12 col-lg-4 imagen-contenedor" >
                <div class="text-white desc w-75 h-75 overflow-hidden" id="texto3" hidden>
                    <!-- cabecera que contiene titulo y enlace a github-->
                    <div class="row">
                        <div class="col-6 d-flex align-items-center ">
                            <div class="h3 pl-3 pt-3 titulo">CloudRoad</div>
                        </div>
                        <div class="col-6 d-flex justify-content-center">
                            <div class="enlace mt-1"></div>
                        </div>
                    </div>
                    <!-- cuerpo que contiene descripción chikita-->
                    <div class="row pl-3 pr-3 ">
                        <span class="col-12 pt-3 m-auto">Aplicación web interna de empresa ficticia para la asistencia en carretera.</span>
                    </div>
                </div>
                <img src="https://drive.google.com/uc?id=1md-EcqcHOAeDff5w5WSSYtAisNJyEwtx" alt="Proyecto imagen 3" id="imagen3" hidden
                    class="imagen" />
            </div>
        </div>

        <!-- Caja de navegacion simple-->
        <div class="row tab-padre pt-5 ">
            <div class="tab  offset-lg-3 offset-0 col-lg-2 col-12 p-0">
                <input id="boton1" type="button" class="w-100 h-100 " value="Info.Personal">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton2" type="button" class="w-100 h-100" value="Más proyectos">
            </div>
            <div class="tab col-lg-2 col-12 p-0">
                <input id="boton3" type="button" class="w-100 h-100" value="Contacto">
            </div>

            <!-- Caja para cargar la info mas contacto (cv, github, egibide, email, etc.)-->
            <div class="offset-lg-3 offset-0 col-md-6 col-12 ">
                <div class="row" id="infos">

                </div>





            </div>
        </div>
    </div>


</body>

<script src="Librerias/jQuery/jquery-3.5.1.min.js"></script>
<!--octokit de github para ver mis repositorios?-->
<script type="module">
    import { Octokit } from "https://cdn.pika.dev/@octokit/core";
</script>
<script src="JavaScript/funcionalidades.js" ></script>
<script src="Librerias/bootstrap-4.5.2-dist/js/bootstrap.min.js"></script>

</html>