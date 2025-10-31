<template>
    <div>
        <h1>{{ oficio }}</h1>
        <table style="margin:auto;width: 60%;" class="table table-dark">
            <thead class="table table-info">
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.departamento }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';
let url=Global.urlApiEmpleados
    export default{
        name:"EmpleadosOficios",
        data(){
            return{
                oficio:"",
                empleados:[]
            }
        },
        methods:{
            generarEmpleados(){
                var ofici=this.$route.params.oficio;
                var request="api/Empleados/EmpleadosOficio/"+ofici;
                axios.get(url+request).then(response=>{
                    console.log("Cargando empleados oficios")
                    this.empleados=response.data;
                })
            }
        },
        mounted(){
            this.oficio=this.$route.params.oficio
            this.generarEmpleados();
        },
        watch:{
            '$route.params.oficio'(nextVal,oldVal){
                if(nextVal!=oldVal){
                    this.oficio=this.$route.params.oficio
                    this.generarEmpleados();
                }
            }
        }
    }
</script>