'use strict';

/**
 * Curs.js controller
 *
 * @description: A set of functions called "actions" for managing `Curs`.
 */

module.exports = {

  /**
   * Retrieve curs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.curs.search(ctx.query);
    } else {
      return strapi.services.curs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a curs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.curs.fetch(ctx.params);
  },

  /**
   * Count curs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.curs.count(ctx.query);
  },

  /**
   * Create a/an curs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.curs.add(ctx.request.body);
  },

  /**
   * Update a/an curs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.curs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an curs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.curs.remove(ctx.params);
  }
};
