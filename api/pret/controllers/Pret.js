'use strict';

/**
 * Pret.js controller
 *
 * @description: A set of functions called "actions" for managing `Pret`.
 */

module.exports = {

  /**
   * Retrieve pret records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pret.search(ctx.query);
    } else {
      return strapi.services.pret.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pret record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pret.fetch(ctx.params);
  },

  /**
   * Count pret records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pret.count(ctx.query);
  },

  /**
   * Create a/an pret record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pret.add(ctx.request.body);
  },

  /**
   * Update a/an pret record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pret.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pret record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pret.remove(ctx.params);
  }
};
