<template>
<form name="form" id="form" v-on:submit="login">

   <div class="box">
    <div class="container">
        <!-- <div class="top">
            
            <header>Pacifico</header>
        </div> -->
        <div class="input-field">
            <input type="text" v-model="user_nick" class="input" placeholder="Username" id="">
            <i class='bx bx-user' ></i>
        </div>
       
        <div class="input-field">
            <input type="Password" v-model="password" class="input" placeholder="Password" id="">
            <i class='bx bx-lock-alt'></i>
        </div>
     
        <div class="input-field">
            <input type="submit" class="submit efecto" value="Login" id="">
        </div>
        <div class="two-col">
            <div class="one">
               <input type="checkbox" name="" id="check">
               <label for="check"> Remember Me</label>
            </div>
            <div class="two">
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
    </div>
</div>  
</form>


</template>


<script>
    import { show_alerta, /*enviarSolicitud*/ } from '../../alerts';
    import axios from 'axios';

    export default{
        data(){
            return{
                user_nick:'',
                password:'',
                url: 'http://localhost/back_construyendo_pacifico/public/api/iniciar_sesion'
            }
        },
        methods:{
            login(){
                event.preventDefault();
                if (this.user_nick.trim() === '') {
                    show_alerta('escribe el usernick','warning','nombre');
                }else if(this.password.trim() === '') {
                    show_alerta('escribe la contraseña','warning','nombre');
                }else {
                    var parametros = {  user_nick:this.user_nick.trim(),
                                        password:this.password.trim()
                                    }
                                    console.log(parametros);
                    enviarSolicitud('POST', parametros, this.url, 'Usuario existe');

                }
            }
            
        }

        
    }



    function enviarSolicitud(metodo,parametros,url,mensaje){
        axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
        console.log(respuesta.data);
            var status = respuesta.data['status'];
            var result = respuesta.data['results'];
            console.log('status: '+status);
            console.log(result);

            if (status == 'success') {
                localStorage.setItem('usuario', JSON.stringify(result[0]));
                localStorage.setItem('access_token', JSON.stringify(result['access_token']));

                show_alerta(mensaje, status);
                // window.setTimeout(function() {
                //     window.location.href='/';
                // }, 1000);
            }else{
                var listado ='';
                var errores = respuesta.data['errores'];
                Object.keys(errores).forEach(
                    key =>  listado += errores[key][0]+'.'
                );
                show_alerta(listado, 'error')
            }
        }).catch(function(error){
            show_alerta('Usuario o contraseña incorecta', error);
        })
    }

</script>


<style>
    *{
    font-family: 'poppins' ,sans-serif;
}
body{
    background-image: url("https://images.pexels.com/photos/8824655/pexels-photo-8824655.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat; 
    
}
.box{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
}
.container{
    width: 350px;
    display: flex;
    flex-direction: column;
    padding: 0 15px 0 15px;
    
}
span{
    color: #fff;
    font-size: small;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;
}
header{
    color: #fff;
    font-size: 30px;
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;
}
.input-field .input{
    height: 45px;
    width: 87%;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 15px;
    padding: 0 0 0 45px;
    background: rgba(255,255,255,0.1);
    outline: none;
    margin-bottom: 15px;
}
i{
    position: relative;
    top: -33px;
    left: 17px;
    color: #fff;
}
::-webkit-input-placeholder{
    color: #fff;
}
.submit{
    border: none;
    border-radius: 30px;
    font-size: 15px;
    height: 45px;
    outline: none;
    width: 100%;
    color: black;
    background: rgba(255,255,255,0.7);
    cursor: pointer;
    transition: .3s ;
}
.submit:hover{
    box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}
.efecto:hover{
    background: red;
}
.two-col{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    font-size: small;
    margin-top: 10px;
}
.one{
    display: flex;
}
label a{
    text-decoration: none;
    color: #fff;
}
</style>


