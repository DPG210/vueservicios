<template>
    <div>
        <h1>Api Coches</h1>
        <div v-for="coche in coches" :key="coche">
            <h3 style="color:blue">
                {{ coche.marca }} {{ coche.modelo }}
            </h3>
            <p>Driver: {{ coche.conductor }}</p>
            <img :src="coche.imagen" style="width: 150px; height: 150px;"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//SI NECESITAMOS VARIABLE PARA TODO EL COMPONENT Y SUS METODOS
//SE DECLARAN AQUI (mounted,methods,create)
let urlApi="https://apicochespaco.azurewebsites.net/"
    export default{
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        mounted(){
            var request="webresources/coches";
            let url= urlApi+request;
            //LAS VARIABLES DECLARADAS FUERA DEL EXPORT NO UTILIZAN this
            axios.get(url).then(response=>{
                console.log("Dentro del servicio");
                this.coches=response.data
            })
        }
    }
</script>

<style>

</style>