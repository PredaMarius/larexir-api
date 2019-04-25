'use strict';

/**
 * Compatibilitateoptionalero.js controller
 *
 * @description: A set of functions called "actions" for managing `Compatibilitateoptionalero`.
 */

module.exports = {

  /**
   * Retrieve compatibilitateoptionalero records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.compatibilitateoptionalero.search(ctx.query);
    } else {
      return strapi.services.compatibilitateoptionalero.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a compatibilitateoptionalero record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.compatibilitateoptionalero.fetch(ctx.params);
  },

  /**
   * Count compatibilitateoptionalero records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.compatibilitateoptionalero.count(ctx.query);
  },

  /**
   * Create a/an compatibilitateoptionalero record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.compatibilitateoptionalero.add(ctx.request.body);
  },

  /**
   * Update a/an compatibilitateoptionalero record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.compatibilitateoptionalero.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an compatibilitateoptionalero record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.compatibilitateoptionalero.remove(ctx.params);
  }
};
