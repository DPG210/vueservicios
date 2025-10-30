<template>
    <div>
        <h1>Detalles Empleados</h1>
        <form v-on:submit.prevent="mostrarDetalles()">
        <select v-model="idEmpleado">
            <option v-for="emp in empleados" :value="emp.idEmpleado" :key="emp" >{{ emp.apellido }}</option>
        </select>
        <button >Detalles</button>
        </form>
        <div v-if="empleado">
            <h1>{{ empleado.apellido }}</h1>
            <h2>{{ empleado.oficio }}</h2>
            <h2>{{ empleado.salario }}</h2>
            <h4>{{ empleado.departamento }}</h4>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
let urlApi=Global.urlApiEmpleados
    export default{
        name:"EmpleadosDetails",
        data(){
            return{
                empleados:[],
                idEmpleado:"",
                empleado:[]
            }
        },
        methods:{
            mostrarDetalles(){
                var id=this.idEmpleado

                var request="api/empleados/"+id;

                axios.get(urlApi+request).then(response=>{
                    console.log("Detalles del empleado");
                    this.empleado=response.data
                })
            }
        },
        mounted(){
            var request="api/empleados"

            axios.get(urlApi+request).then(response=>{
                console.log("Dentro de empleados")
                this.empleados=response.data
            })
        }
    }
</script>

<style>
 
</style>