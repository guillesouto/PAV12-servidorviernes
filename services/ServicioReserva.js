import { modeloReservas } from "../Models/ModeloReserva.js";

export class ServicioReserva{
    
    //aquiprogramo metodos para cada una de las
    //consultas que quiero hacer en la BD

    async buscarReservas(){
        let reservas=await modeloReservas.find()
        return reservas
    }

    async buscarReservacionesPorId(id){
        let reserva= modeloReservas.findById(id)
        return reserva

    }

    async agregarReservaEnBD(datos){
        let datosValidados= new modeloReservas(datos)
        return await datosValidados.save()
    }

    async editarReservacion(id, datosaEditar){
        return await modeloReservas.findByIdAndUpdate(id,datosaEditar)
    }

    async eliminarReservacion(id, datos){
        return await modeloReservas.findByIdAndDelete(id , datos)
    }
}