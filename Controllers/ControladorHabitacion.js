import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion = new ServicioHabitacion()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarHabitacionPorId(request,response){
        let id=request.params.idHabitacion//recivo el id de la peticion
        let objetoServicioHabitacion=new ServicioHabitacion()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta " + id,
                "datos":await objetoServicioHabitacion.buscarHabitacionesPorId(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarHabitacion(request,response){
        
        let datoHabitacion = request.body
        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            if(datoHabitacion.numeroMaximoPersonas<8){
                
                await objetoServicioHabitacion.agregarHabitacionEnBD(datoHabitacion)
                response.status(200).json({
                    "mensaje":"exito registrando habitacion",
                    "datos":null
                })

            }else{
                response.status(400).json({
                    "mensaje":"no es campo de concentracion mijo - se tiene un maximo de 8 personas",
                    "datos":null
                })
            }
            


        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async editarHabitacion(request,response){

        let id = request.params.idCuarto
        let datosHabitacion = request.body

        let objetoServicioHabitacion=new ServicioHabitacion()

        try{

            await objetoServicioHabitacion.editarHabitacion(id, datosHabitacion)
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

    async eliminarHabitacion(request,response){

        let id = request.params.idHabitacionE
        let objetoServicioHabitacion = new ServicioHabitacion()

        try{

            response.status(200).json({
                "mensaje":"exito eliminando la Habitacion "+ id,
                "datos":await objetoServicioHabitacion.eliminarHabitacion(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    
}