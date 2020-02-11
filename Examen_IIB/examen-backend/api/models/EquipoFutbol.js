/**
 * EquipoFutbol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: "string",
      required: true
    },
    liga: {
      type: "string",
      required: true
    },
    fechaCreacion: {
      type: "string",
      required: true
    },
    numeroCopasInternacionales: {
      type: "number",
      required: true
    },
    campeonActual: {
      type: "boolean",
      defaultsTo: false
    },
    jugadores:{
      collection: 'jugador',
      via: 'fkEquipoFutbol'
    }
  },

};

