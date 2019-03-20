'use strict';

/**
 * Prettabelar.js controller
 *
 * @description: A set of functions called "actions" for managing `Prettabelar`.
 */

module.exports = {

  /**
   * Retrieve prettabelar records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.prettabelar.search(ctx.query);
    } else {
      return strapi.services.prettabelar.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a prettabelar record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.prettabelar.fetch(ctx.params);
  },

  /**
   * Count prettabelar records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.prettabelar.count(ctx.query);
  },

  /**
   * Create a/an prettabelar record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.prettabelar.add(ctx.request.body);
  },

  /**
   * Update a/an prettabelar record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.prettabelar.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an prettabelar record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.prettabelar.remove(ctx.params);
  }
};
