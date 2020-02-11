/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreUsuario: {
      type: 'string',
      required: true
    },
    correoUsuario:{
      type: "string",
      required: true
    },
    passwordUsuario:{
      type: "string",
      required: true
    },
    facturas:{
      collection: 'factura',
      via: 'fkUsuario'
    }
  },

};

