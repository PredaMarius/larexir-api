'use strict';

/**
 * Optional.js controller
 *
 * @description: A set of functions called "actions" for managing `Optional`.
 */

module.exports = {

  /**
   * Retrieve optional records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.optional.search(ctx.query);
    } else {
      return strapi.services.optional.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a optional record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.optional.fetch(ctx.params);
  },

  /**
   * Count optional records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.optional.count(ctx.query);
  },

  /**
   * Create a/an optional record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.optional.add(ctx.request.body);
  },

  /**
   * Update a/an optional record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.optional.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an optional record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.optional.remove(ctx.params);
  }
};
