'use strict';

/**
 * Comanda.js controller
 *
 * @description: A set of functions called "actions" for managing `Comanda`.
 */

module.exports = {

  /**
   * Retrieve comanda records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.comanda.search(ctx.query);
    } else {
      return strapi.services.comanda.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a comanda record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.comanda.fetch(ctx.params);
  },

  /**
   * Count comanda records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.comanda.count(ctx.query);
  },

  /**
   * Create a/an comanda record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.comanda.add(ctx.request.body);
  },

  /**
   * Update a/an comanda record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.comanda.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an comanda record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.comanda.remove(ctx.params);
  }
};
