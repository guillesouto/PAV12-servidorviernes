import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaReservas = new Schema({

    //idHabitacion
    idHabitacion: {
        required:true,
        type:String
    },

    //fechaEntrada
        fechaEntrada: {
        required:true,
        type:Date
    },

    //fechaSalida
    fechaSalida: {
        required:true,
        type:Date
    },

    //numeroAdultos
    numeroAdultos: {
        required: true,
        type:Number
    },

    //numeroNinos
    numeroNinos: {
        required: true,
        type:Number
    },

    //costoReserva ((salida-entrada)*valornoche)
    costoReserva: {
        required: false,
        //(fechaSalida-fechaEntrada)*
        type:Number
    }

});

export const modeloReservas= mongoose.model('reservas', EsquemaReservas)





