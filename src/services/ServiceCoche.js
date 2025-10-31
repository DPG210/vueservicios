import axios from "axios";
import Global from "@/Global";
export default class ServiceCoche {

    getCoches() {
        return new Promise(function (resolve) {
            let coches = [];
            var request = "webresources/coches";
            let url = Global.urlApiCoches + request;

            axios.get(url).then(response => {
                console.log("Cargando coches");
                coches = response.data;
                resolve(coches);
            })
        })
    }

}