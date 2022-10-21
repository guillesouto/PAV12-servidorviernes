//este archivoestablece las rutas o endpoints de cada servicio ofrecido por mi Api
import express from 'express'
import { ControladorReserva } from '../Controllers/ControladorReserva.js'
let controladorReserva = new ControladorReserva()//usamos el controlador reserva

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idCuarto',controladorHabitacion.editarHabitacion)
rutasPersonalizadas.delete('/hotelesnick/habitacion/:idHabitacionE',controladorHabitacion.eliminarHabitacion)

//rutas para reservas
rutasPersonalizadas.get('/hotelesnick/reserva',controladorReserva.buscarReservas)
rutasPersonalizadas.get('/hotelesnick/reserva/:idReserva',controladorReserva.buscarReservasPorId)
rutasPersonalizadas.post('/hotelesnick/reserva',controladorReserva.registrarReservacion)
rutasPersonalizadas.put('/hotelesnick/reserva/:idReservacion',controladorReserva.editarReserva)
rutasPersonalizadas.delete('/hotelesnick/reserva/:idReservacionE',controladorReserva.eliminarReserva) 