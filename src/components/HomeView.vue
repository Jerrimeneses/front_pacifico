<template>

    <!-- <header>
        <div class="icon__menu">
            <i class="fas fa-bars" id="btn_open"></i>
        </div>
    </header> -->

    <div class="menu__side" id="menu_side">

        <div class="name__page">
            <i class="fab fa-youtube"></i>
            <h4>MagtimusPro</h4>
        </div>

        <div class="options__menu">	

            <a href="#" class="selected">
                <div class="option">
                    <i class="fas fa-home" title="Inicio"></i>
                    <h4>Inicio</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="far fa-file" title="Portafolio"></i>
                    <h4>Portafolio</h4>
                </div>
            </a>
            
            <a href="#">
                <div class="option">
                    <i class="fas fa-video" title="Cursos"></i>
                    <h4>Cursos</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="far fa-sticky-note" title="Blog"></i>
                    <h4>Blog</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="far fa-id-badge" title="Contacto"></i>
                    <h4>Contacto</h4>
                </div>
            </a>

            <a href="#">
                <div class="option">
                    <i class="far fa-address-card" title="Nosotros"></i>
                    <h4>Nosotros</h4>
                </div>
            </a>

        </div>

    </div>
   

</template>



<script> 
    //Ejecutar función en el evento click
    // document.getElementById("btn_open").addEventListener("click", open_close_menu);

    // //Declaramos variables
    // var side_menu = document.getElementById("menu_side");
    // //var btn_open = document.getElementById("btn_open");
    // var body = document.getElementById("body");

    // //Evento para mostrar y ocultar menú
    //     function open_close_menu(){
    //         body.classList.toggle("body_move");
    //         side_menu.classList.toggle("menu__side_move");
    //     }

    // //Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

    // if (window.innerWidth < 760){

    //     body.classList.add("body_move");
    //     side_menu.classList.add("menu__side_move");
    // }

    // //Haciendo el menú responsive(adaptable)

    // window.addEventListener("resize", function(){

    //     if (window.innerWidth > 760){

    //         body.classList.remove("body_move");
    //         side_menu.classList.remove("menu__side_move");
    //     }

    //     if (window.innerWidth < 760){

    //         body.classList.add("body_move");
    //         side_menu.classList.add("menu__side_move");
    //     }

    // });
</script>





<style>
/*@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
}

body{
    margin-left: 80px;
    margin-top: 80px;
    transition: margin-left 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

main{
    padding: 20px;
}

header{
    width: 100%;
    height: 80px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 200;
}

.icon__menu{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(10px);
}

.icon__menu i{
    font-size: 20px;
    cursor: pointer;
    position: absolute;
}

.menu__side{
    width: 80px;
    height: 100%;
    background: #1783db;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-size: 18px;
    z-index: 300;
    overflow: hidden;
    overflow-y: scroll;
    border-right: 20px solid #1783db;
    transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

/*Ocultar scroll para chrome, safari y opera*/
.menu__side::-webkit-scrollbar{
    display: none;
}

/*Ocultar scroll para IE, Edge y Firefox*/
.menu__side{
    -ms-overflow-style: none;
    scrollbar-width: none;
}


.name__page{
    padding: 20px 30px;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.name__page i{
    width: 20px;
    margin-right: 20px;
}

.options__menu{
    padding: 20px 30px;
    position: absolute;
    top: 80px;
}

.options__menu a{
    color: #ffffffb2;
    cursor: default;
    display: block;
    position: relative;
    transition: color 300ms;
}

.options__menu a:hover{
    color: white;
}

.options__menu .option{
    padding: 20px 0px;
    display: flex;
    align-items: center;
    position: relative;
}

.options__menu .option i{
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
}

.options__menu .option h4{
    font-weight: 300;
    cursor: pointer;
}

a.selected{
    color: #fff;
}

.selected:before{
    content: '';
    width: 3px;
    height: 80%;
    background: white;
    position: absolute;
    top: 10%;
    left: -30px;
}

/*Clases para usar en JavaScript*/

.body_move{
    margin-left: 250px;
}

.menu__side_move{
    width: 250px;
}


@media screen and (max-width: 760px){
    .body_move{
        margin-left: 0px;
    }

    .menu__side_move{
        width: 80px;
        left: -80px;
    }
}
</style>
 