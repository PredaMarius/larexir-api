'use strict';

/**
 * Adresalivrare.js controller
 *
 * @description: A set of functions called "actions" for managing `Adresalivrare`.
 */

module.exports = {

  /**
   * Retrieve adresalivrare records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.adresalivrare.search(ctx.query);
    } else {
      return strapi.services.adresalivrare.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a adresalivrare record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.adresalivrare.fetch(ctx.params);
  },

  /**
   * Count adresalivrare records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.adresalivrare.count(ctx.query);
  },

  /**
   * Create a/an adresalivrare record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.adresalivrare.add(ctx.request.body);
  },

  /**
   * Update a/an adresalivrare record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.adresalivrare.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an adresalivrare record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.adresalivrare.remove(ctx.params);
  }
};
