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
import ServiceEmpleados from '@/services/ServiceEmpleados';
const service= new ServiceEmpleados();
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
                service.getOficios(this.oficio).then(result=>{
                this.empleados=result
            })
            }
        },
        mounted(){
            this.oficio=this.$route.params.oficio
            
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