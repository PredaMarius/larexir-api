'use strict';

/**
 * Firma.js controller
 *
 * @description: A set of functions called "actions" for managing `Firma`.
 */

module.exports = {

  /**
   * Retrieve firma records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.firma.search(ctx.query);
    } else {
      return strapi.services.firma.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a firma record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.firma.fetch(ctx.params);
  },

  /**
   * Count firma records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.firma.count(ctx.query);
  },

  /**
   * Create a/an firma record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.firma.add(ctx.request.body);
  },

  /**
   * Update a/an firma record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.firma.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an firma record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.firma.remove(ctx.params);
  }
};
