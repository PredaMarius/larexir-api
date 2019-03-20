'use strict';

/**
 * Compatibilitate.js controller
 *
 * @description: A set of functions called "actions" for managing `Compatibilitate`.
 */

module.exports = {

  /**
   * Retrieve compatibilitate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.compatibilitate.search(ctx.query);
    } else {
      return strapi.services.compatibilitate.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a compatibilitate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.compatibilitate.fetch(ctx.params);
  },

  /**
   * Count compatibilitate records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.compatibilitate.count(ctx.query);
  },

  /**
   * Create a/an compatibilitate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.compatibilitate.add(ctx.request.body);
  },

  /**
   * Update a/an compatibilitate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.compatibilitate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an compatibilitate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.compatibilitate.remove(ctx.params);
  }
};
