'use strict';

/**
 * Pretcomponenta.js controller
 *
 * @description: A set of functions called "actions" for managing `Pretcomponenta`.
 */

module.exports = {

  /**
   * Retrieve pretcomponenta records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pretcomponenta.search(ctx.query);
    } else {
      return strapi.services.pretcomponenta.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pretcomponenta record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pretcomponenta.fetch(ctx.params);
  },

  /**
   * Count pretcomponenta records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pretcomponenta.count(ctx.query);
  },

  /**
   * Create a/an pretcomponenta record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pretcomponenta.add(ctx.request.body);
  },

  /**
   * Update a/an pretcomponenta record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pretcomponenta.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pretcomponenta record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pretcomponenta.remove(ctx.params);
  }
};
