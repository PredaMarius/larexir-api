'use strict';

/**
 * Actionare.js controller
 *
 * @description: A set of functions called "actions" for managing `Actionare`.
 */

module.exports = {

  /**
   * Retrieve actionare records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.actionare.search(ctx.query);
    } else {
      return strapi.services.actionare.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a actionare record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.actionare.fetch(ctx.params);
  },

  /**
   * Count actionare records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.actionare.count(ctx.query);
  },

  /**
   * Create a/an actionare record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.actionare.add(ctx.request.body);
  },

  /**
   * Update a/an actionare record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.actionare.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an actionare record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.actionare.remove(ctx.params);
  }
};
