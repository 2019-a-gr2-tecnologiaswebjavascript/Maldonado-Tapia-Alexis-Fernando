/**
 * DetalleFactura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad: {
      type: "number",
      required: true
    },
    fkFacturaId:{
      model: 'factura',
      required: true
    },
    fkJugador:{
      model: 'jugador',
      required: true
    }
    
  
  },

};

