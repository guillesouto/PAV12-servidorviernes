import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorReserva{

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReserva = new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioReserva.buscarReservas(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarReservasPorId(request,response){

        let id=request.params.idReserva//recivo el id de la peticion
        let objetoServicioReserva = new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta " + id,
                "datos":await objetoServicioReserva.buscarReservacionesPorId(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarReservacion(request,response){
        
        let datosReserva = request.body
        let objetoServicioReserva = new ServicioReserva()
        
        let sumapersonas = datosReserva.numeroAdultos + datosReserva.numeroNinos

        let idHabitacion = datosReserva.idHabitacion
        let buscarHabitacion=new ServicioHabitacion()

        let fechaEntrada = new Date(datosReserva.fechaEntrada).getTime()
        let fechaSalida = new Date(datosReserva.fechaSalida).getTime()
     
        
        try{
            let habitacion = await buscarHabitacion.buscarHabitacionesPorId(idHabitacion)
            
            if (sumapersonas <= habitacion.numeroMaximoPersonas){
                    let restaDias = fechaSalida - fechaEntrada
                    let numDias = restaDias/(1000*60*60*24)
    
                    let costo = numDias * habitacion.valorNoche
                    datosReserva.costoReserva = costo
                    console.log(costo)
                    
                    response.status(200).json({
                        "mensaje":"exito registrando la nueva reservacion",
                        "datos":null
                    })

                }else{
                    response.status(400).json({
                        "mensaje":"el numero de personas supera la capacidad de la habitacion",
                        "datos":null
                    })
                }

            await objetoServicioReserva.agregarReservaEnBD(datosReserva)

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+ error,
                "datos":null,
            })
        }
    }

    async editarReserva(request,response){

        let id = request.params.idReservacion
        let datosReserva = request.body

        let objetoServicioReserva = new ServicioReserva()

        try{
            await objetoServicioReserva.editarReservacion(id,datosReserva)
            response.status(200).json({
                "mensaje":"exito editando "+id,
                "datos":null,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


    async eliminarReserva(request,response){

        let id = request.params.idReservacionE
        let objetoServicioReserva = new ServicioReserva()

        try{

            response.status(200).json({
                "mensaje":"exito eliminando la reservacion "+ id,
                "datos":await objetoServicioReserva.eliminarReservacion(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    
}