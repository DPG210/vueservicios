<template>
    <div>
        <h1>Customers</h1>
        <label for="">ID</label>
        <input type="text" v-model="id">
        <button @click="buscarCustomer()">Buscar</button>
        <div v-if="cliente">
            <h1>{{ cliente.CustomerID }}</h1>
            <h2>{{ cliente.ContactName }}</h2>
            <h2>{{ cliente.City}}</h2>
        </div>
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Compañia</th>
                </tr>
            </thead>
            <tbody v-for="cliente in customers" :key="cliente">
                <tr>
                    <td>{{ cliente.CustomerID }}</td>
                    <td>{{ cliente.ContactName }}</td>
                    <td>{{ cliente.CompanyName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import Global from '@/Global';

    let url=Global.urlApiCustomer
    export default{
        name:"CustomersComponent",
        data(){
            return{
                customers:[],
                id:"",
                cliente:[]
            }
        },
        methods:{
            generarCustomers(){
                var request="customers"

                axios.get(url+request).then(response=>{
                    console.log("Dentro de customers");
                    console.log(response.data)
                    this.customers=response.data.value
                })
            },
            buscarCustomer(){
                var idCliente=this.id

                let index= this.customers.find(cliente=>cliente.CustomerID===idCliente)

                if(index){
                    console.log("Cliente encontrado");
                    console.log(index)
                    this.cliente=index
                }else{
                    console.log("Cliente no encontrado")
                }

                
            }
        },
        mounted(){
            this.generarCustomers();
        }
    }
</script>
    
<style>
   
</style>