'use strict';

/**
 * Comandareper.js controller
 *
 * @description: A set of functions called "actions" for managing `Comandareper`.
 */

module.exports = {

  /**
   * Retrieve comandareper records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.comandareper.search(ctx.query);
    } else {
      return strapi.services.comandareper.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a comandareper record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.comandareper.fetch(ctx.params);
  },

  /**
   * Count comandareper records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.comandareper.count(ctx.query);
  },

  /**
   * Create a/an comandareper record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.comandareper.add(ctx.request.body);
  },

  /**
   * Update a/an comandareper record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.comandareper.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an comandareper record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.comandareper.remove(ctx.params);
  }
};
