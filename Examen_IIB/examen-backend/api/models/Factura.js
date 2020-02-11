/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fechaFactura:{
      type: "string",
      required: true
    },
    nombreCliente:{
      type:"string",
      defaultsTo: "Consumidor Final",

    },
    ciCliente: {
      type: "string",
      defaultsTo: "999999999",
      maxLength: 10,
      minLength: 10,
    },
    direccion:{
      type: "string",
      required: true
    },
    telefono:{
      type: "string",
      required: true
    },
    correo:{
      type: "string",
      required: true
    },
    total:{
      type: "number",
      required: true
    },
    fkUsuario:{
      model: 'usuario',
      required: true
    },
    detallesFactura:{
      collection: 'detalleFactura',
      via: 'fkFacturaId'
    },

  },

};

