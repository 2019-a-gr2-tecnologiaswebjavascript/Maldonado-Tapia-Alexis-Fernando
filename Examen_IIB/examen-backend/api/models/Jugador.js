/**
 * Jugador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numeroCamiseta: {
      type: "number",
      required : true
    },
    nombreCamiseta: {
      type: "string",
      required: true,
      maxLength: 15
    },
    nombreCompletoJugador: {
      type: "string",
      required: true
    },
    fechaIngresoEquipo: {
      type: "string",
      required: true
    },
    goles:{
      type: "number",
      min: 0,
      defaultsTo: 0
    },
    precio:{
      type: "number",
      min: 0,
      defaultsTo: 0

    },
    fkEquipoFutbol:{
      model: 'equipoFutbol',
      required: true
    }

  },

};

