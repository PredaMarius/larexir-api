'use strict';

/**
 * Produs.js controller
 *
 * @description: A set of functions called "actions" for managing `Produs`.
 */

module.exports = {

  /**
   * Retrieve produs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.produs.search(ctx.query);
    } else {
      return strapi.services.produs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a produs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.produs.fetch(ctx.params);
  },

  /**
   * Count produs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.produs.count(ctx.query);
  },

  /**
   * Create a/an produs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.produs.add(ctx.request.body);
  },

  /**
   * Update a/an produs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.produs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an produs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.produs.remove(ctx.params);
  }
};
