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
        <table style="margin:auto;width:60%" class="table table-info">
            <tbody>
                <tr v-for="emp in empleados" :key="emp">
                    <td>{{ emp.apellido }}</td>
                    <td>{{ emp.oficio }}</td>
                    <td>{{ emp.salario }}</td>
                    <td>{{ emp.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ServiceEmpleados from '@/services/ServiceEmpleados';
const service= new ServiceEmpleados();

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
                service.getDetallesEmpleado(this.idEmpleado).then(result=>{
                    this.empleado=result;
                })
            }
        },
        mounted(){
            service.getEmpleados().then(result=>{
                this.empleados=result;
            })
        }
    }
</script>

<style>
 
</style>