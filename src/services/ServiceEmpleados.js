import Global from "@/Global"
import axios from "axios"
export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function (resolve) {
            var request = "api/empleados"

            var empleados = []

            axios.get(Global.urlApiEmpleados + request).then(response => {
                empleados = response.data;
                console.log("Cargando empleados")
                resolve(empleados)
            })

        })
    }
    getDetallesEmpleado(id) {
        return new Promise(function (resolve) {
            var request = "api/empleados/" + id;

            var empleado = [];

            axios.get(Global.urlApiEmpleados + request).then(response => {
                console.log("Detalles empleado")
                empleado = response.data;
                resolve(empleado);
            })
        })
    }
}