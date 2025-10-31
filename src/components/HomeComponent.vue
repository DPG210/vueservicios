<template>
    <div>
        <h1>Home</h1>
        <h2>{{ mensaje }}</h2>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'
//PARA PODER UTILIZAR EL SERVICIO  NECESITAMOS UNA INSTANCIA (VARIABLE/OBJETO)
//DE LA CLASE SERVICIO
const service= new ServiceEjemplo();
    export default{
        name:"HomeComponent",
        data(){
            return{
                mensaje:""
            }
        },
        mounted(){
            this.mensaje= service.getSaludo("Diego");
        }
    }
</script>