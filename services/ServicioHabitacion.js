import { modeloHabitacion } from "../Models/ModeloHabitacion.js";

export class ServicioHabitacion{

    //aquiprogramo metodos para cada una de las
    //consultas que quiero hacer en la BD

    async buscarHabitaciones(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionesPorId(id){
        let habitacion= modeloHabitacion.findById(id)
        return habitacion

    }

    async agregarHabitacionEnBD(datos){
        let datosValidados= new modeloHabitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id, datosaEditar){
        return await modeloHabitacion.findByIdAndUpdate(id,datosaEditar)
    }

    async eliminarHabitacion(id, datos){
        return await modeloHabitacion.findByIdAndDelete(id, datos)
    }

}

