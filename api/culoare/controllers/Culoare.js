'use strict';

/**
 * Culoare.js controller
 *
 * @description: A set of functions called "actions" for managing `Culoare`.
 */

module.exports = {

  /**
   * Retrieve culoare records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.culoare.search(ctx.query);
    } else {
      return strapi.services.culoare.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a culoare record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.culoare.fetch(ctx.params);
  },

  /**
   * Count culoare records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.culoare.count(ctx.query);
  },

  /**
   * Create a/an culoare record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.culoare.add(ctx.request.body);
  },

  /**
   * Update a/an culoare record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.culoare.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an culoare record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.culoare.remove(ctx.params);
  }
};
