<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/empleados">Empleados</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/clientes">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/coches">Coches</router-link>
        </li>

        <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Oficios
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li v-for="oficio in oficios" :key="oficio">
            <router-link class="dropdown-item" :to="'/empleadosoficios/'+oficio">{{ oficio }}</router-link>
          </li>
          
        </ul>
      </li>
      </ul>
    </div>
  </nav>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';
let url=Global.urlApiEmpleados
    export default{
        name:"MenuComponents",
        data(){
          return{
            oficios:[]
          }
          
        },
        methods:{
          generarOficios(){
            var request="api/empleados/oficios"

            axios.get(url+request).then(response=>{
              console.log("Cargando oficios")
              this.oficios=response.data            
            })
          }
        },
        mounted(){
          
          this.generarOficios();

        }
    }
</script>