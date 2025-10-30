import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import EmpleadosDetails from "./components/EmpleadosDetails.vue";
import CustomersComponents from "./components/CustomersComponents.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/coches", component: CochesComponent },
    { path: "/empleados", component: EmpleadosDetails },
    { path: "/clientes", component: CustomersComponents }

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router