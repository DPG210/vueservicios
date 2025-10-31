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
import ServiceCoche from '@/services/ServiceCoche';
const service = new ServiceCoche();
    export default{
        name:"CochesComponent",
        data(){
            return{
                coches:[]
            }
        },
        mounted(){
            //UNA PROMESA NO ES UN METODO, ES UN OBJETO
            service.getCoches().then(result=>{
                this.coches=result;
            })
        }
    }
</script>

<style>

</style>