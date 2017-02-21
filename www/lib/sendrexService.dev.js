// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://localhost:3000/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Shop
 * @header lbServices.Shop
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Shop` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Shop",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/shops/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Shop.shopStaffs.findById() instead.
            "prototype$__findById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopStaffs.destroyById() instead.
            "prototype$__destroyById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopStaffs.updateById() instead.
            "prototype$__updateById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.staffs.findById() instead.
            "prototype$__findById__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs.destroyById() instead.
            "prototype$__destroyById__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.updateById() instead.
            "prototype$__updateById__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.staffs.link() instead.
            "prototype$__link__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.staffs.unlink() instead.
            "prototype$__unlink__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.exists() instead.
            "prototype$__exists__staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Shop.businessCategory() instead.
            "prototype$__get__businessCategory": {
              url: urlBase + "/shops/:id/businessCategory",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags.findById() instead.
            "prototype$__findById__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags.destroyById() instead.
            "prototype$__destroyById__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.updateById() instead.
            "prototype$__updateById__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.hashTags.link() instead.
            "prototype$__link__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.hashTags.unlink() instead.
            "prototype$__unlink__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.exists() instead.
            "prototype$__exists__hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Shop.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.productOptions.findById() instead.
            "prototype$__findById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.productOptions.destroyById() instead.
            "prototype$__destroyById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productOptions.updateById() instead.
            "prototype$__updateById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.orders.findById() instead.
            "prototype$__findById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.orders.destroyById() instead.
            "prototype$__destroyById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.orders.updateById() instead.
            "prototype$__updateById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.productValuePacks.findById() instead.
            "prototype$__findById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.productValuePacks.destroyById() instead.
            "prototype$__destroyById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productValuePacks.updateById() instead.
            "prototype$__updateById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.promotions.findById() instead.
            "prototype$__findById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.promotions.destroyById() instead.
            "prototype$__destroyById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.promotions.updateById() instead.
            "prototype$__updateById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.shopProductCategories.findById() instead.
            "prototype$__findById__shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopProductCategories.destroyById() instead.
            "prototype$__destroyById__shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopProductCategories.updateById() instead.
            "prototype$__updateById__shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.shopStaffs() instead.
            "prototype$__get__shopStaffs": {
              isArray: true,
              url: urlBase + "/shops/:id/shopStaffs",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopStaffs.create() instead.
            "prototype$__create__shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopStaffs.destroyAll() instead.
            "prototype$__delete__shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopStaffs.count() instead.
            "prototype$__count__shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs() instead.
            "prototype$__get__staffs": {
              isArray: true,
              url: urlBase + "/shops/:id/staffs",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs.create() instead.
            "prototype$__create__staffs": {
              url: urlBase + "/shops/:id/staffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.staffs.destroyAll() instead.
            "prototype$__delete__staffs": {
              url: urlBase + "/shops/:id/staffs",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.count() instead.
            "prototype$__count__staffs": {
              url: urlBase + "/shops/:id/staffs/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags() instead.
            "prototype$__get__hashTags": {
              isArray: true,
              url: urlBase + "/shops/:id/hashTags",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags.create() instead.
            "prototype$__create__hashTags": {
              url: urlBase + "/shops/:id/hashTags",
              method: "POST",
            },

            // INTERNAL. Use Shop.hashTags.destroyAll() instead.
            "prototype$__delete__hashTags": {
              url: urlBase + "/shops/:id/hashTags",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.count() instead.
            "prototype$__count__hashTags": {
              url: urlBase + "/shops/:id/hashTags/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/shops/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Shop.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/shops/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Shop.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/shops/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/shops/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.productOptions() instead.
            "prototype$__get__productOptions": {
              isArray: true,
              url: urlBase + "/shops/:id/productOptions",
              method: "GET",
            },

            // INTERNAL. Use Shop.productOptions.create() instead.
            "prototype$__create__productOptions": {
              url: urlBase + "/shops/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Shop.productOptions.destroyAll() instead.
            "prototype$__delete__productOptions": {
              url: urlBase + "/shops/:id/productOptions",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productOptions.count() instead.
            "prototype$__count__productOptions": {
              url: urlBase + "/shops/:id/productOptions/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.orders() instead.
            "prototype$__get__orders": {
              isArray: true,
              url: urlBase + "/shops/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Shop.orders.create() instead.
            "prototype$__create__orders": {
              url: urlBase + "/shops/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Shop.orders.destroyAll() instead.
            "prototype$__delete__orders": {
              url: urlBase + "/shops/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.orders.count() instead.
            "prototype$__count__orders": {
              url: urlBase + "/shops/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.productValuePacks() instead.
            "prototype$__get__productValuePacks": {
              isArray: true,
              url: urlBase + "/shops/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Shop.productValuePacks.create() instead.
            "prototype$__create__productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Shop.productValuePacks.destroyAll() instead.
            "prototype$__delete__productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productValuePacks.count() instead.
            "prototype$__count__productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.promotions() instead.
            "prototype$__get__promotions": {
              isArray: true,
              url: urlBase + "/shops/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use Shop.promotions.create() instead.
            "prototype$__create__promotions": {
              url: urlBase + "/shops/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Shop.promotions.destroyAll() instead.
            "prototype$__delete__promotions": {
              url: urlBase + "/shops/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.promotions.count() instead.
            "prototype$__count__promotions": {
              url: urlBase + "/shops/:id/promotions/count",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopProductCategories() instead.
            "prototype$__get__shopProductCategories": {
              isArray: true,
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopProductCategories.create() instead.
            "prototype$__create__shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopProductCategories.destroyAll() instead.
            "prototype$__delete__shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopProductCategories.count() instead.
            "prototype$__count__shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#create
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/shops",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#createMany
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/shops",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#patchOrCreate
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/shops",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#replaceOrCreate
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/shops/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#upsertWithWhere
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/shops/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#exists
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/shops/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#findById
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/shops/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#replaceById
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/shops/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#find
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/shops",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#findOne
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/shops/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#updateAll
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/shops/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#deleteById
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/shops/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#count
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/shops/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#prototype$patchAttributes
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/shops/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Shop#createChangeStream
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/shops/change-stream",
              method: "POST",
            },

            // INTERNAL. Use ShopStaff.shop() instead.
            "::get::ShopStaff::shop": {
              url: urlBase + "/shopStaffs/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops.findById() instead.
            "::findById::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops.destroyById() instead.
            "::destroyById::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.updateById() instead.
            "::updateById::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shops.link() instead.
            "::link::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shops.unlink() instead.
            "::unlink::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.exists() instead.
            "::exists::Customer::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Customer.shops() instead.
            "::get::Customer::shops": {
              isArray: true,
              url: urlBase + "/customers/:id/shops",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops.create() instead.
            "::create::Customer::shops": {
              url: urlBase + "/customers/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use Customer.shops.createMany() instead.
            "::createMany::Customer::shops": {
              isArray: true,
              url: urlBase + "/customers/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use Customer.shops.destroyAll() instead.
            "::delete::Customer::shops": {
              url: urlBase + "/customers/:id/shops",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.count() instead.
            "::count::Customer::shops": {
              url: urlBase + "/customers/:id/shops/count",
              method: "GET",
            },

            // INTERNAL. Use HashTag.shops.findById() instead.
            "::findById::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "GET",
            },

            // INTERNAL. Use HashTag.shops.destroyById() instead.
            "::destroyById::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.updateById() instead.
            "::updateById::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "PUT",
            },

            // INTERNAL. Use HashTag.shops.link() instead.
            "::link::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use HashTag.shops.unlink() instead.
            "::unlink::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.exists() instead.
            "::exists::HashTag::shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use HashTag.shops() instead.
            "::get::HashTag::shops": {
              isArray: true,
              url: urlBase + "/hashTags/:id/shops",
              method: "GET",
            },

            // INTERNAL. Use HashTag.shops.create() instead.
            "::create::HashTag::shops": {
              url: urlBase + "/hashTags/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use HashTag.shops.createMany() instead.
            "::createMany::HashTag::shops": {
              isArray: true,
              url: urlBase + "/hashTags/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use HashTag.shops.destroyAll() instead.
            "::delete::HashTag::shops": {
              url: urlBase + "/hashTags/:id/shops",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.count() instead.
            "::count::HashTag::shops": {
              url: urlBase + "/hashTags/:id/shops/count",
              method: "GET",
            },

            // INTERNAL. Use Product.shop() instead.
            "::get::Product::shop": {
              url: urlBase + "/products/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.shop() instead.
            "::get::ProductOption::shop": {
              url: urlBase + "/productOptions/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use Order.shop() instead.
            "::get::Order::shop": {
              url: urlBase + "/orders/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.shop() instead.
            "::get::ProductValuePack::shop": {
              url: urlBase + "/productValuePacks/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use Promotion.shop() instead.
            "::get::Promotion::shop": {
              url: urlBase + "/promotions/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use ShopProductCategory.shop() instead.
            "::get::ShopProductCategory::shop": {
              url: urlBase + "/shopProductCategories/:id/shop",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Shop#upsert
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#updateOrCreate
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#patchOrCreateWithWhere
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#update
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#destroyById
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#removeById
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Shop#updateAttributes
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Shop#modelName
        * @propertyOf lbServices.Shop
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Shop`.
        */
        R.modelName = "Shop";

    /**
     * @ngdoc object
     * @name lbServices.Shop.shopStaffs
     * @header lbServices.Shop.shopStaffs
     * @object
     * @description
     *
     * The object `Shop.shopStaffs` groups methods
     * manipulating `ShopStaff` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#shopStaffs Shop.shopStaffs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#shopStaffs
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries shopStaffs of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::get::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#count
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Counts shopStaffs of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shopStaffs.count = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::count::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#create
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Creates a new instance in shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.create = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::create::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#createMany
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Creates a new instance in shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.createMany = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::createMany::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#destroyAll
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Deletes all shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopStaffs.destroyAll = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::delete::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#destroyById
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Delete a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopStaffs.destroyById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::destroyById::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#findById
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Find a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.findById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::findById::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopStaffs#updateById
             * @methodOf lbServices.Shop.shopStaffs
             *
             * @description
             *
             * Update a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.updateById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::updateById::Shop::shopStaffs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.staffs
     * @header lbServices.Shop.staffs
     * @object
     * @description
     *
     * The object `Shop.staffs` groups methods
     * manipulating `Customer` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#staffs Shop.staffs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#staffs
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries staffs of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#count
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Counts staffs of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.staffs.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#create
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Creates a new instance in staffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#createMany
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Creates a new instance in staffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#destroyAll
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Deletes all staffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.staffs.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#destroyById
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Delete a related item by id for staffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.staffs.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#exists
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Check the existence of staffs relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.exists = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::exists::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#findById
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Find a related item by id for staffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#link
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Add a related item by id for staffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.link = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::link::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#unlink
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Remove the staffs relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.staffs.unlink = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::unlink::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.staffs#updateById
             * @methodOf lbServices.Shop.staffs
             *
             * @description
             *
             * Update a related item by id for staffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for staffs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.staffs.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Shop::staffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop#businessCategory
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Fetches belongsTo relation businessCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R.businessCategory = function() {
          var TargetResource = $injector.get("BusinessCategory");
          var action = TargetResource["::get::Shop::businessCategory"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.hashTags
     * @header lbServices.Shop.hashTags
     * @object
     * @description
     *
     * The object `Shop.hashTags` groups methods
     * manipulating `HashTag` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#hashTags Shop.hashTags()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#hashTags
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries hashTags of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::get::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#count
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Counts hashTags of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.hashTags.count = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::count::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#create
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Creates a new instance in hashTags of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.create = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::create::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#createMany
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Creates a new instance in hashTags of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.createMany = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::createMany::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#destroyAll
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Deletes all hashTags of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.hashTags.destroyAll = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::delete::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#destroyById
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Delete a related item by id for hashTags.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.hashTags.destroyById = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::destroyById::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#exists
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Check the existence of hashTags relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.exists = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::exists::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#findById
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Find a related item by id for hashTags.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.findById = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::findById::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#link
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Add a related item by id for hashTags.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.link = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::link::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#unlink
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Remove the hashTags relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.hashTags.unlink = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::unlink::Shop::hashTags"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.hashTags#updateById
             * @methodOf lbServices.Shop.hashTags
             *
             * @description
             *
             * Update a related item by id for hashTags.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for hashTags
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R.hashTags.updateById = function() {
          var TargetResource = $injector.get("HashTag");
          var action = TargetResource["::updateById::Shop::hashTags"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.products
     * @header lbServices.Shop.products
     * @object
     * @description
     *
     * The object `Shop.products` groups methods
     * manipulating `Product` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#products Shop.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#products
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries products of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#count
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Counts products of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#create
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#createMany
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#destroyAll
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#destroyById
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#findById
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Shop::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.products#updateById
             * @methodOf lbServices.Shop.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Shop::products"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.productOptions
     * @header lbServices.Shop.productOptions
     * @object
     * @description
     *
     * The object `Shop.productOptions` groups methods
     * manipulating `ProductOption` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#productOptions Shop.productOptions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#productOptions
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries productOptions of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::get::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#count
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Counts productOptions of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.productOptions.count = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::count::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#create
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Creates a new instance in productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.create = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::create::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#createMany
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Creates a new instance in productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.createMany = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::createMany::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#destroyAll
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Deletes all productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productOptions.destroyAll = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::delete::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#destroyById
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Delete a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productOptions.destroyById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::destroyById::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#findById
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Find a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.findById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::findById::Shop::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productOptions#updateById
             * @methodOf lbServices.Shop.productOptions
             *
             * @description
             *
             * Update a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.updateById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::updateById::Shop::productOptions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.orders
     * @header lbServices.Shop.orders
     * @object
     * @description
     *
     * The object `Shop.orders` groups methods
     * manipulating `Order` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#orders Shop.orders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#orders
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries orders of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#count
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Counts orders of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#create
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#createMany
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#destroyAll
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Deletes all orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#destroyById
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Delete a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#findById
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Find a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Shop::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.orders#updateById
             * @methodOf lbServices.Shop.orders
             *
             * @description
             *
             * Update a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Shop::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.productValuePacks
     * @header lbServices.Shop.productValuePacks
     * @object
     * @description
     *
     * The object `Shop.productValuePacks` groups methods
     * manipulating `ProductValuePack` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#productValuePacks Shop.productValuePacks()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#productValuePacks
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries productValuePacks of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::get::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#count
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Counts productValuePacks of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.productValuePacks.count = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::count::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#create
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.create = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::create::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#createMany
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.createMany = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::createMany::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#destroyAll
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Deletes all productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyAll = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::delete::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#destroyById
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Delete a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::destroyById::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#findById
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Find a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.findById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::findById::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.productValuePacks#updateById
             * @methodOf lbServices.Shop.productValuePacks
             *
             * @description
             *
             * Update a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.updateById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::updateById::Shop::productValuePacks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.promotions
     * @header lbServices.Shop.promotions
     * @object
     * @description
     *
     * The object `Shop.promotions` groups methods
     * manipulating `Promotion` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#promotions Shop.promotions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#promotions
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries promotions of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::get::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#count
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Counts promotions of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.promotions.count = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::count::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#create
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.create = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::create::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#createMany
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.createMany = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::createMany::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#destroyAll
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Deletes all promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyAll = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::delete::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#destroyById
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Delete a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::destroyById::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#findById
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Find a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.findById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::findById::Shop::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.promotions#updateById
             * @methodOf lbServices.Shop.promotions
             *
             * @description
             *
             * Update a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.updateById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::updateById::Shop::promotions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Shop.shopProductCategories
     * @header lbServices.Shop.shopProductCategories
     * @object
     * @description
     *
     * The object `Shop.shopProductCategories` groups methods
     * manipulating `ShopProductCategory` instances related to `Shop`.
     *
     * Call {@link lbServices.Shop#shopProductCategories Shop.shopProductCategories()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Shop#shopProductCategories
             * @methodOf lbServices.Shop
             *
             * @description
             *
             * Queries shopProductCategories of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategories = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::get::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#count
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Counts shopProductCategories of shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shopProductCategories.count = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::count::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#create
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Creates a new instance in shopProductCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategories.create = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::create::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#createMany
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Creates a new instance in shopProductCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategories.createMany = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::createMany::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#destroyAll
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Deletes all shopProductCategories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopProductCategories.destroyAll = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::delete::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#destroyById
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Delete a related item by id for shopProductCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopProductCategories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopProductCategories.destroyById = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::destroyById::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#findById
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Find a related item by id for shopProductCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopProductCategories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategories.findById = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::findById::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Shop.shopProductCategories#updateById
             * @methodOf lbServices.Shop.shopProductCategories
             *
             * @description
             *
             * Update a related item by id for shopProductCategories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shopProductCategories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategories.updateById = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::updateById::Shop::shopProductCategories"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ShopRole
 * @header lbServices.ShopRole
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ShopRole` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ShopRole",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/shopRoles/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#create
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/shopRoles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#createMany
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/shopRoles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#patchOrCreate
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/shopRoles",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#replaceOrCreate
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/shopRoles/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#upsertWithWhere
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/shopRoles/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#exists
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/shopRoles/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#findById
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/shopRoles/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#replaceById
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/shopRoles/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#find
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/shopRoles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#findOne
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/shopRoles/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#updateAll
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/shopRoles/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#deleteById
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/shopRoles/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#count
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/shopRoles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#prototype$patchAttributes
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/shopRoles/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#createChangeStream
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/shopRoles/change-stream",
              method: "POST",
            },

            // INTERNAL. Use ShopStaff.shopRole() instead.
            "::get::ShopStaff::shopRole": {
              url: urlBase + "/shopStaffs/:id/shopRole",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ShopRole#upsert
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#updateOrCreate
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#patchOrCreateWithWhere
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#update
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#destroyById
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#removeById
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopRole#updateAttributes
             * @methodOf lbServices.ShopRole
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ShopRole#modelName
        * @propertyOf lbServices.ShopRole
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ShopRole`.
        */
        R.modelName = "ShopRole";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ShopStaff
 * @header lbServices.ShopStaff
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ShopStaff` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ShopStaff",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/shopStaffs/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ShopStaff.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/shopStaffs/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use ShopStaff.shopRole() instead.
            "prototype$__get__shopRole": {
              url: urlBase + "/shopStaffs/:id/shopRole",
              method: "GET",
            },

            // INTERNAL. Use ShopStaff.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/shopStaffs/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#create
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/shopStaffs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#createMany
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/shopStaffs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#patchOrCreate
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/shopStaffs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#replaceOrCreate
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/shopStaffs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#upsertWithWhere
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/shopStaffs/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#exists
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/shopStaffs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#findById
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/shopStaffs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#replaceById
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/shopStaffs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#find
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/shopStaffs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#findOne
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/shopStaffs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#updateAll
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/shopStaffs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#deleteById
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/shopStaffs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#count
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/shopStaffs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#prototype$patchAttributes
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/shopStaffs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#createChangeStream
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/shopStaffs/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopStaffs.findById() instead.
            "::findById::Shop::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopStaffs.destroyById() instead.
            "::destroyById::Shop::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopStaffs.updateById() instead.
            "::updateById::Shop::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopStaffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.shopStaffs() instead.
            "::get::Shop::shopStaffs": {
              isArray: true,
              url: urlBase + "/shops/:id/shopStaffs",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopStaffs.create() instead.
            "::create::Shop::shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopStaffs.createMany() instead.
            "::createMany::Shop::shopStaffs": {
              isArray: true,
              url: urlBase + "/shops/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopStaffs.destroyAll() instead.
            "::delete::Shop::shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopStaffs.count() instead.
            "::count::Shop::shopStaffs": {
              url: urlBase + "/shops/:id/shopStaffs/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs.findById() instead.
            "::findById::Customer::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs.destroyById() instead.
            "::destroyById::Customer::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shopStaffs.updateById() instead.
            "::updateById::Customer::shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shopStaffs() instead.
            "::get::Customer::shopStaffs": {
              isArray: true,
              url: urlBase + "/customers/:id/shopStaffs",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs.create() instead.
            "::create::Customer::shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Customer.shopStaffs.createMany() instead.
            "::createMany::Customer::shopStaffs": {
              isArray: true,
              url: urlBase + "/customers/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Customer.shopStaffs.destroyAll() instead.
            "::delete::Customer::shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shopStaffs.count() instead.
            "::count::Customer::shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#upsert
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#updateOrCreate
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#patchOrCreateWithWhere
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#update
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#destroyById
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#removeById
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#updateAttributes
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ShopStaff#modelName
        * @propertyOf lbServices.ShopStaff
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ShopStaff`.
        */
        R.modelName = "ShopStaff";


            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#shop
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::ShopStaff::shop"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#shopRole
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Fetches belongsTo relation shopRole.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopRole` object.)
             * </em>
             */
        R.shopRole = function() {
          var TargetResource = $injector.get("ShopRole");
          var action = TargetResource["::get::ShopStaff::shopRole"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ShopStaff#customer
             * @methodOf lbServices.ShopStaff
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::ShopStaff::customer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Customer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/customers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shops.findById() instead.
            "prototype$__findById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops.destroyById() instead.
            "prototype$__destroyById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.updateById() instead.
            "prototype$__updateById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shops.link() instead.
            "prototype$__link__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.shops.unlink() instead.
            "prototype$__unlink__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.exists() instead.
            "prototype$__exists__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shops/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Customer.shopStaffs.findById() instead.
            "prototype$__findById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs.destroyById() instead.
            "prototype$__destroyById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shopStaffs.updateById() instead.
            "prototype$__updateById__shopStaffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/shopStaffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.orders.findById() instead.
            "prototype$__findById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.destroyById() instead.
            "prototype$__destroyById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.updateById() instead.
            "prototype$__updateById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries accessTokens of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/customers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts accessTokens of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/customers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops() instead.
            "prototype$__get__shops": {
              isArray: true,
              url: urlBase + "/customers/:id/shops",
              method: "GET",
            },

            // INTERNAL. Use Customer.shops.create() instead.
            "prototype$__create__shops": {
              url: urlBase + "/customers/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use Customer.shops.destroyAll() instead.
            "prototype$__delete__shops": {
              url: urlBase + "/customers/:id/shops",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shops.count() instead.
            "prototype$__count__shops": {
              url: urlBase + "/customers/:id/shops/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs() instead.
            "prototype$__get__shopStaffs": {
              isArray: true,
              url: urlBase + "/customers/:id/shopStaffs",
              method: "GET",
            },

            // INTERNAL. Use Customer.shopStaffs.create() instead.
            "prototype$__create__shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs",
              method: "POST",
            },

            // INTERNAL. Use Customer.shopStaffs.destroyAll() instead.
            "prototype$__delete__shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.shopStaffs.count() instead.
            "prototype$__count__shopStaffs": {
              url: urlBase + "/customers/:id/shopStaffs/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders() instead.
            "prototype$__get__orders": {
              isArray: true,
              url: urlBase + "/customers/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.create() instead.
            "prototype$__create__orders": {
              url: urlBase + "/customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.destroyAll() instead.
            "prototype$__delete__orders": {
              url: urlBase + "/customers/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.count() instead.
            "prototype$__count__orders": {
              url: urlBase + "/customers/:id/orders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#create
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createMany
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/customers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/customers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#upsertWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/customers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#exists
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/customers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/customers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#replaceById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/customers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#find
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/customers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findOne
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/customers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAll
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/customers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#deleteById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/customers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#count
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/customers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$patchAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/customers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createChangeStream
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/customers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#login
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/customers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#logout
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/customers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#confirm
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/customers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#resetPassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/customers/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#updatePassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Allows a logged user to change his/her password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{object=}` -
             *
             *  - `oldPassword` – `{string}` - The user old password
             *
             *  - `newPassword` – `{string}` - The user NEW password
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `passwordChange` – `{boolean=}` -
             */
            "updatePassword": {
              url: urlBase + "/customers/updatePassword",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findByEmail
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * search user by email
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `email` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findByEmail": {
              url: urlBase + "/customers/findByEmail",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs.findById() instead.
            "::findById::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs.destroyById() instead.
            "::destroyById::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.updateById() instead.
            "::updateById::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.staffs.link() instead.
            "::link::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.staffs.unlink() instead.
            "::unlink::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.exists() instead.
            "::exists::Shop::staffs": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/staffs/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Shop.staffs() instead.
            "::get::Shop::staffs": {
              isArray: true,
              url: urlBase + "/shops/:id/staffs",
              method: "GET",
            },

            // INTERNAL. Use Shop.staffs.create() instead.
            "::create::Shop::staffs": {
              url: urlBase + "/shops/:id/staffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.staffs.createMany() instead.
            "::createMany::Shop::staffs": {
              isArray: true,
              url: urlBase + "/shops/:id/staffs",
              method: "POST",
            },

            // INTERNAL. Use Shop.staffs.destroyAll() instead.
            "::delete::Shop::staffs": {
              url: urlBase + "/shops/:id/staffs",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.staffs.count() instead.
            "::count::Shop::staffs": {
              url: urlBase + "/shops/:id/staffs/count",
              method: "GET",
            },

            // INTERNAL. Use ShopStaff.customer() instead.
            "::get::ShopStaff::customer": {
              url: urlBase + "/shopStaffs/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use Order.customer() instead.
            "::get::Order::customer": {
              url: urlBase + "/orders/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getCurrent
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/customers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Customer#upsert
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#patchOrCreateWithWhere
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#update
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#destroyById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#removeById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCachedCurrent
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Customer#login} or
         * {@link lbServices.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#isAuthenticated
         * @methodOf lbServices.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCurrentId
         * @methodOf lbServices.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Customer#modelName
        * @propertyOf lbServices.Customer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Customer`.
        */
        R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.shops
     * @header lbServices.Customer.shops
     * @object
     * @description
     *
     * The object `Customer.shops` groups methods
     * manipulating `Shop` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#shops Customer.shops()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#shops
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries shops of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#count
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Counts shops of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shops.count = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::count::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#create
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Creates a new instance in shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.create = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::create::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#createMany
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Creates a new instance in shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.createMany = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::createMany::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#destroyAll
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Deletes all shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.destroyAll = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::delete::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#destroyById
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Delete a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.destroyById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::destroyById::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#exists
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Check the existence of shops relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.exists = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::exists::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#findById
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Find a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.findById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::findById::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#link
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Add a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.link = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::link::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#unlink
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Remove the shops relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.unlink = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::unlink::Customer::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shops#updateById
             * @methodOf lbServices.Customer.shops
             *
             * @description
             *
             * Update a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.updateById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::updateById::Customer::shops"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.shopStaffs
     * @header lbServices.Customer.shopStaffs
     * @object
     * @description
     *
     * The object `Customer.shopStaffs` groups methods
     * manipulating `ShopStaff` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#shopStaffs Customer.shopStaffs()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#shopStaffs
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries shopStaffs of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::get::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#count
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Counts shopStaffs of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shopStaffs.count = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::count::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#create
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Creates a new instance in shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.create = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::create::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#createMany
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Creates a new instance in shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.createMany = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::createMany::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#destroyAll
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Deletes all shopStaffs of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopStaffs.destroyAll = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::delete::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#destroyById
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Delete a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shopStaffs.destroyById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::destroyById::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#findById
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Find a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.findById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::findById::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.shopStaffs#updateById
             * @methodOf lbServices.Customer.shopStaffs
             *
             * @description
             *
             * Update a related item by id for shopStaffs.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for shopStaffs
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopStaff` object.)
             * </em>
             */
        R.shopStaffs.updateById = function() {
          var TargetResource = $injector.get("ShopStaff");
          var action = TargetResource["::updateById::Customer::shopStaffs"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.orders
     * @header lbServices.Customer.orders
     * @object
     * @description
     *
     * The object `Customer.orders` groups methods
     * manipulating `Order` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orders Customer.orders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#orders
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries orders of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#count
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Counts orders of customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#create
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#createMany
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#destroyAll
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Deletes all orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#destroyById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Delete a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#findById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Find a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#updateById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Update a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Customer::orders"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.BusinessCategory
 * @header lbServices.BusinessCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BusinessCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "BusinessCategory",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/businessCategories/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#create
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/businessCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#createMany
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/businessCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#patchOrCreate
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/businessCategories",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#replaceOrCreate
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/businessCategories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#upsertWithWhere
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/businessCategories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#exists
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/businessCategories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#findById
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/businessCategories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#replaceById
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/businessCategories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#find
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/businessCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#findOne
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/businessCategories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#updateAll
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/businessCategories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#deleteById
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/businessCategories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#count
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/businessCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#prototype$patchAttributes
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/businessCategories/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#createChangeStream
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/businessCategories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.businessCategory() instead.
            "::get::Shop::businessCategory": {
              url: urlBase + "/shops/:id/businessCategory",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#upsert
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#updateOrCreate
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#patchOrCreateWithWhere
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#update
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#destroyById
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#removeById
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.BusinessCategory#updateAttributes
             * @methodOf lbServices.BusinessCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `BusinessCategory` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.BusinessCategory#modelName
        * @propertyOf lbServices.BusinessCategory
        * @description
        * The name of the model represented by this $resource,
        * i.e. `BusinessCategory`.
        */
        R.modelName = "BusinessCategory";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.HashTag
 * @header lbServices.HashTag
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `HashTag` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "HashTag",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/hashTags/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use HashTag.shops.findById() instead.
            "prototype$__findById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "GET",
            },

            // INTERNAL. Use HashTag.shops.destroyById() instead.
            "prototype$__destroyById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.updateById() instead.
            "prototype$__updateById__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/:fk",
              method: "PUT",
            },

            // INTERNAL. Use HashTag.shops.link() instead.
            "prototype$__link__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use HashTag.shops.unlink() instead.
            "prototype$__unlink__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.exists() instead.
            "prototype$__exists__shops": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/hashTags/:id/shops/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use HashTag.shops() instead.
            "prototype$__get__shops": {
              isArray: true,
              url: urlBase + "/hashTags/:id/shops",
              method: "GET",
            },

            // INTERNAL. Use HashTag.shops.create() instead.
            "prototype$__create__shops": {
              url: urlBase + "/hashTags/:id/shops",
              method: "POST",
            },

            // INTERNAL. Use HashTag.shops.destroyAll() instead.
            "prototype$__delete__shops": {
              url: urlBase + "/hashTags/:id/shops",
              method: "DELETE",
            },

            // INTERNAL. Use HashTag.shops.count() instead.
            "prototype$__count__shops": {
              url: urlBase + "/hashTags/:id/shops/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#create
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/hashTags",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#createMany
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/hashTags",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#patchOrCreate
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/hashTags",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#replaceOrCreate
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/hashTags/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#upsertWithWhere
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/hashTags/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#exists
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/hashTags/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#findById
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/hashTags/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#replaceById
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/hashTags/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#find
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/hashTags",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#findOne
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/hashTags/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#updateAll
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/hashTags/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#deleteById
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/hashTags/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#count
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/hashTags/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#prototype$patchAttributes
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/hashTags/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.HashTag#createChangeStream
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/hashTags/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.hashTags.findById() instead.
            "::findById::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags.destroyById() instead.
            "::destroyById::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.updateById() instead.
            "::updateById::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.hashTags.link() instead.
            "::link::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.hashTags.unlink() instead.
            "::unlink::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.exists() instead.
            "::exists::Shop::hashTags": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/hashTags/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Shop.hashTags() instead.
            "::get::Shop::hashTags": {
              isArray: true,
              url: urlBase + "/shops/:id/hashTags",
              method: "GET",
            },

            // INTERNAL. Use Shop.hashTags.create() instead.
            "::create::Shop::hashTags": {
              url: urlBase + "/shops/:id/hashTags",
              method: "POST",
            },

            // INTERNAL. Use Shop.hashTags.createMany() instead.
            "::createMany::Shop::hashTags": {
              isArray: true,
              url: urlBase + "/shops/:id/hashTags",
              method: "POST",
            },

            // INTERNAL. Use Shop.hashTags.destroyAll() instead.
            "::delete::Shop::hashTags": {
              url: urlBase + "/shops/:id/hashTags",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.hashTags.count() instead.
            "::count::Shop::hashTags": {
              url: urlBase + "/shops/:id/hashTags/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.HashTag#upsert
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#updateOrCreate
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#patchOrCreateWithWhere
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#update
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#destroyById
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#removeById
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.HashTag#updateAttributes
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `HashTag` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.HashTag#modelName
        * @propertyOf lbServices.HashTag
        * @description
        * The name of the model represented by this $resource,
        * i.e. `HashTag`.
        */
        R.modelName = "HashTag";

    /**
     * @ngdoc object
     * @name lbServices.HashTag.shops
     * @header lbServices.HashTag.shops
     * @object
     * @description
     *
     * The object `HashTag.shops` groups methods
     * manipulating `Shop` instances related to `HashTag`.
     *
     * Call {@link lbServices.HashTag#shops HashTag.shops()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.HashTag#shops
             * @methodOf lbServices.HashTag
             *
             * @description
             *
             * Queries shops of hashTag.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#count
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Counts shops of hashTag.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.shops.count = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::count::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#create
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Creates a new instance in shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.create = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::create::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#createMany
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Creates a new instance in shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.createMany = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::createMany::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#destroyAll
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Deletes all shops of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.destroyAll = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::delete::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#destroyById
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Delete a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.destroyById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::destroyById::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#exists
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Check the existence of shops relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.exists = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::exists::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#findById
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Find a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.findById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::findById::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#link
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Add a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.link = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::link::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#unlink
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Remove the shops relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.shops.unlink = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::unlink::HashTag::shops"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.HashTag.shops#updateById
             * @methodOf lbServices.HashTag.shops
             *
             * @description
             *
             * Update a related item by id for shops.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for shops
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shops.updateById = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::updateById::HashTag::shops"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Product",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/products/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Product.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/products/:id/shop",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__findById__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find a related item by id for productVariants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productVariants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$__findById__productVariants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productVariants/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__destroyById__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a related item by id for productVariants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productVariants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__productVariants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productVariants/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__updateById__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update a related item by id for productVariants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productVariants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$__updateById__productVariants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productVariants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productOptions.findById() instead.
            "prototype$__findById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions.destroyById() instead.
            "prototype$__destroyById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.updateById() instead.
            "prototype$__updateById__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productOptions.link() instead.
            "prototype$__link__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productOptions.unlink() instead.
            "prototype$__unlink__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.exists() instead.
            "prototype$__exists__productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.productCategory() instead.
            "prototype$__get__productCategory": {
              url: urlBase + "/products/:id/productCategory",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.findById() instead.
            "prototype$__findById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.destroyById() instead.
            "prototype$__destroyById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.updateById() instead.
            "prototype$__updateById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productValuePacks.link() instead.
            "prototype$__link__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productValuePacks.unlink() instead.
            "prototype$__unlink__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.exists() instead.
            "prototype$__exists__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.promotions.findById() instead.
            "prototype$__findById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions.destroyById() instead.
            "prototype$__destroyById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.updateById() instead.
            "prototype$__updateById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.promotions.link() instead.
            "prototype$__link__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.promotions.unlink() instead.
            "prototype$__unlink__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.exists() instead.
            "prototype$__exists__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.shopProductCategory() instead.
            "prototype$__get__shopProductCategory": {
              url: urlBase + "/products/:id/shopProductCategory",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__get__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries productVariants of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$__get__productVariants": {
              isArray: true,
              url: urlBase + "/products/:id/productVariants",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__create__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Creates a new instance in productVariants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$__create__productVariants": {
              url: urlBase + "/products/:id/productVariants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__delete__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Deletes all productVariants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__productVariants": {
              url: urlBase + "/products/:id/productVariants",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$__count__productVariants
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Counts productVariants of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__productVariants": {
              url: urlBase + "/products/:id/productVariants/count",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions() instead.
            "prototype$__get__productOptions": {
              isArray: true,
              url: urlBase + "/products/:id/productOptions",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions.create() instead.
            "prototype$__create__productOptions": {
              url: urlBase + "/products/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Product.productOptions.destroyAll() instead.
            "prototype$__delete__productOptions": {
              url: urlBase + "/products/:id/productOptions",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.count() instead.
            "prototype$__count__productOptions": {
              url: urlBase + "/products/:id/productOptions/count",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks() instead.
            "prototype$__get__productValuePacks": {
              isArray: true,
              url: urlBase + "/products/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.create() instead.
            "prototype$__create__productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Product.productValuePacks.destroyAll() instead.
            "prototype$__delete__productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.count() instead.
            "prototype$__count__productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks/count",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions() instead.
            "prototype$__get__promotions": {
              isArray: true,
              url: urlBase + "/products/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions.create() instead.
            "prototype$__create__promotions": {
              url: urlBase + "/products/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Product.promotions.destroyAll() instead.
            "prototype$__delete__promotions": {
              url: urlBase + "/products/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.count() instead.
            "prototype$__count__promotions": {
              url: urlBase + "/products/:id/promotions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#create
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createMany
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/products",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/products/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#upsertWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/products/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#exists
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/products/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/products/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#replaceById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/products/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#find
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/products",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findOne
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/products/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#updateAll
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/products/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#deleteById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/products/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#count
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$patchAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/products/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createChangeStream
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/products/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.products.findById() instead.
            "::findById::Shop::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.products.destroyById() instead.
            "::destroyById::Shop::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.products.updateById() instead.
            "::updateById::Shop::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.products() instead.
            "::get::Shop::products": {
              isArray: true,
              url: urlBase + "/shops/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Shop.products.create() instead.
            "::create::Shop::products": {
              url: urlBase + "/shops/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Shop.products.createMany() instead.
            "::createMany::Shop::products": {
              isArray: true,
              url: urlBase + "/shops/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Shop.products.destroyAll() instead.
            "::delete::Shop::products": {
              url: urlBase + "/shops/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.products.count() instead.
            "::count::Shop::products": {
              url: urlBase + "/shops/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.products.findById() instead.
            "::findById::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.products.destroyById() instead.
            "::destroyById::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.updateById() instead.
            "::updateById::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductOption.products.link() instead.
            "::link::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductOption.products.unlink() instead.
            "::unlink::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.exists() instead.
            "::exists::ProductOption::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductOption.products() instead.
            "::get::ProductOption::products": {
              isArray: true,
              url: urlBase + "/productOptions/:id/products",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.products.create() instead.
            "::create::ProductOption::products": {
              url: urlBase + "/productOptions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductOption.products.createMany() instead.
            "::createMany::ProductOption::products": {
              isArray: true,
              url: urlBase + "/productOptions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductOption.products.destroyAll() instead.
            "::delete::ProductOption::products": {
              url: urlBase + "/productOptions/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.count() instead.
            "::count::ProductOption::products": {
              url: urlBase + "/productOptions/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.products.findById() instead.
            "::findById::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.products.destroyById() instead.
            "::destroyById::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.updateById() instead.
            "::updateById::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.products.link() instead.
            "::link::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.products.unlink() instead.
            "::unlink::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.exists() instead.
            "::exists::ProductValuePack::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductValuePack.products() instead.
            "::get::ProductValuePack::products": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/products",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.products.create() instead.
            "::create::ProductValuePack::products": {
              url: urlBase + "/productValuePacks/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.products.createMany() instead.
            "::createMany::ProductValuePack::products": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.products.destroyAll() instead.
            "::delete::ProductValuePack::products": {
              url: urlBase + "/productValuePacks/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.count() instead.
            "::count::ProductValuePack::products": {
              url: urlBase + "/productValuePacks/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products.findById() instead.
            "::findById::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products.destroyById() instead.
            "::destroyById::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.updateById() instead.
            "::updateById::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.products.link() instead.
            "::link::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.products.unlink() instead.
            "::unlink::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.exists() instead.
            "::exists::Promotion::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Promotion.products() instead.
            "::get::Promotion::products": {
              isArray: true,
              url: urlBase + "/promotions/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products.create() instead.
            "::create::Promotion::products": {
              url: urlBase + "/promotions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Promotion.products.createMany() instead.
            "::createMany::Promotion::products": {
              isArray: true,
              url: urlBase + "/promotions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Promotion.products.destroyAll() instead.
            "::delete::Promotion::products": {
              url: urlBase + "/promotions/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.count() instead.
            "::count::Promotion::products": {
              url: urlBase + "/promotions/:id/products/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Product#upsert
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#updateOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Product#patchOrCreateWithWhere
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Product#update
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Product#destroyById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#removeById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#updateAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Product#modelName
        * @propertyOf lbServices.Product
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Product`.
        */
        R.modelName = "Product";


            /**
             * @ngdoc method
             * @name lbServices.Product#shop
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Product::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.productOptions
     * @header lbServices.Product.productOptions
     * @object
     * @description
     *
     * The object `Product.productOptions` groups methods
     * manipulating `ProductOption` instances related to `Product`.
     *
     * Call {@link lbServices.Product#productOptions Product.productOptions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#productOptions
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries productOptions of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::get::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#count
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Counts productOptions of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.productOptions.count = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::count::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#create
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Creates a new instance in productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.create = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::create::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#createMany
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Creates a new instance in productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.createMany = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::createMany::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#destroyAll
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Deletes all productOptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productOptions.destroyAll = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::delete::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#destroyById
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Delete a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productOptions.destroyById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::destroyById::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#exists
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Check the existence of productOptions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.exists = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::exists::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#findById
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Find a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.findById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::findById::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#link
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Add a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.link = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::link::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#unlink
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Remove the productOptions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productOptions.unlink = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::unlink::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productOptions#updateById
             * @methodOf lbServices.Product.productOptions
             *
             * @description
             *
             * Update a related item by id for productOptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R.productOptions.updateById = function() {
          var TargetResource = $injector.get("ProductOption");
          var action = TargetResource["::updateById::Product::productOptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product#productCategory
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation productCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R.productCategory = function() {
          var TargetResource = $injector.get("ProductCategory");
          var action = TargetResource["::get::Product::productCategory"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.productValuePacks
     * @header lbServices.Product.productValuePacks
     * @object
     * @description
     *
     * The object `Product.productValuePacks` groups methods
     * manipulating `ProductValuePack` instances related to `Product`.
     *
     * Call {@link lbServices.Product#productValuePacks Product.productValuePacks()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#productValuePacks
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries productValuePacks of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::get::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#count
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Counts productValuePacks of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.productValuePacks.count = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::count::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#create
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.create = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::create::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#createMany
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.createMany = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::createMany::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#destroyAll
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Deletes all productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyAll = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::delete::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#destroyById
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Delete a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::destroyById::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#exists
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Check the existence of productValuePacks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.exists = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::exists::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#findById
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Find a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.findById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::findById::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#link
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Add a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.link = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::link::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#unlink
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Remove the productValuePacks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.unlink = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::unlink::Product::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.productValuePacks#updateById
             * @methodOf lbServices.Product.productValuePacks
             *
             * @description
             *
             * Update a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.updateById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::updateById::Product::productValuePacks"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.promotions
     * @header lbServices.Product.promotions
     * @object
     * @description
     *
     * The object `Product.promotions` groups methods
     * manipulating `Promotion` instances related to `Product`.
     *
     * Call {@link lbServices.Product#promotions Product.promotions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#promotions
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries promotions of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::get::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#count
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Counts promotions of product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.promotions.count = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::count::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#create
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.create = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::create::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#createMany
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.createMany = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::createMany::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#destroyAll
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Deletes all promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyAll = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::delete::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#destroyById
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Delete a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::destroyById::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#exists
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Check the existence of promotions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.exists = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::exists::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#findById
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Find a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.findById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::findById::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#link
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Add a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.link = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::link::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#unlink
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Remove the promotions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.unlink = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::unlink::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.promotions#updateById
             * @methodOf lbServices.Product.promotions
             *
             * @description
             *
             * Update a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.updateById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::updateById::Product::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product#shopProductCategory
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation shopProductCategory.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R.shopProductCategory = function() {
          var TargetResource = $injector.get("ShopProductCategory");
          var action = TargetResource["::get::Product::shopProductCategory"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ProductOption
 * @header lbServices.ProductOption
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductOption` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ProductOption",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/productOptions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ProductOption.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductOption.products.link() instead.
            "prototype$__link__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductOption.products.unlink() instead.
            "prototype$__unlink__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.exists() instead.
            "prototype$__exists__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductOption.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/productOptions/:id/shop",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__findById__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Find a related item by id for productOptionValues.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptionValues
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "prototype$__findById__productOptionValues": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/productOptionValues/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__destroyById__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Delete a related item by id for productOptionValues.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptionValues
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__productOptionValues": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/productOptionValues/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__updateById__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Update a related item by id for productOptionValues.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productOptionValues
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "prototype$__updateById__productOptionValues": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productOptions/:id/productOptionValues/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductOption.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/productOptions/:id/products",
              method: "GET",
            },

            // INTERNAL. Use ProductOption.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/productOptions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductOption.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/productOptions/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use ProductOption.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/productOptions/:id/products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__get__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Queries productOptionValues of productOption.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "prototype$__get__productOptionValues": {
              isArray: true,
              url: urlBase + "/productOptions/:id/productOptionValues",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__create__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Creates a new instance in productOptionValues of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "prototype$__create__productOptionValues": {
              url: urlBase + "/productOptions/:id/productOptionValues",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__delete__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Deletes all productOptionValues of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__productOptionValues": {
              url: urlBase + "/productOptions/:id/productOptionValues",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$__count__productOptionValues
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Counts productOptionValues of productOption.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__productOptionValues": {
              url: urlBase + "/productOptions/:id/productOptionValues/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#create
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/productOptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#createMany
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/productOptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#patchOrCreate
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/productOptions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#replaceOrCreate
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/productOptions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#upsertWithWhere
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/productOptions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#exists
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/productOptions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#findById
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/productOptions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#replaceById
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/productOptions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#find
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/productOptions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#findOne
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/productOptions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#updateAll
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/productOptions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#deleteById
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/productOptions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#count
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/productOptions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#prototype$patchAttributes
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/productOptions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#createChangeStream
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/productOptions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.productOptions.findById() instead.
            "::findById::Shop::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.productOptions.destroyById() instead.
            "::destroyById::Shop::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productOptions.updateById() instead.
            "::updateById::Shop::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productOptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.productOptions() instead.
            "::get::Shop::productOptions": {
              isArray: true,
              url: urlBase + "/shops/:id/productOptions",
              method: "GET",
            },

            // INTERNAL. Use Shop.productOptions.create() instead.
            "::create::Shop::productOptions": {
              url: urlBase + "/shops/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Shop.productOptions.createMany() instead.
            "::createMany::Shop::productOptions": {
              isArray: true,
              url: urlBase + "/shops/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Shop.productOptions.destroyAll() instead.
            "::delete::Shop::productOptions": {
              url: urlBase + "/shops/:id/productOptions",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productOptions.count() instead.
            "::count::Shop::productOptions": {
              url: urlBase + "/shops/:id/productOptions/count",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions.findById() instead.
            "::findById::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions.destroyById() instead.
            "::destroyById::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.updateById() instead.
            "::updateById::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productOptions.link() instead.
            "::link::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productOptions.unlink() instead.
            "::unlink::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.exists() instead.
            "::exists::Product::productOptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productOptions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.productOptions() instead.
            "::get::Product::productOptions": {
              isArray: true,
              url: urlBase + "/products/:id/productOptions",
              method: "GET",
            },

            // INTERNAL. Use Product.productOptions.create() instead.
            "::create::Product::productOptions": {
              url: urlBase + "/products/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Product.productOptions.createMany() instead.
            "::createMany::Product::productOptions": {
              isArray: true,
              url: urlBase + "/products/:id/productOptions",
              method: "POST",
            },

            // INTERNAL. Use Product.productOptions.destroyAll() instead.
            "::delete::Product::productOptions": {
              url: urlBase + "/products/:id/productOptions",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productOptions.count() instead.
            "::count::Product::productOptions": {
              url: urlBase + "/products/:id/productOptions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ProductOption#upsert
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#updateOrCreate
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#patchOrCreateWithWhere
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#update
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#destroyById
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#removeById
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#updateAttributes
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOption` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ProductOption#modelName
        * @propertyOf lbServices.ProductOption
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ProductOption`.
        */
        R.modelName = "ProductOption";

    /**
     * @ngdoc object
     * @name lbServices.ProductOption.products
     * @header lbServices.ProductOption.products
     * @object
     * @description
     *
     * The object `ProductOption.products` groups methods
     * manipulating `Product` instances related to `ProductOption`.
     *
     * Call {@link lbServices.ProductOption#products ProductOption.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ProductOption#products
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Queries products of productOption.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#count
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Counts products of productOption.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#create
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#createMany
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#destroyAll
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#destroyById
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#exists
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Check the existence of products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#findById
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#link
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Add a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#unlink
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Remove the products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption.products#updateById
             * @methodOf lbServices.ProductOption.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::ProductOption::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOption#shop
             * @methodOf lbServices.ProductOption
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::ProductOption::shop"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Order",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/orders/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Order.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/orders/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use Order.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/orders/:id/shop",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__findById__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find a related item by id for orderItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orderItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$__findById__orderItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/orders/:id/orderItems/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__destroyById__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a related item by id for orderItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orderItems
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__orderItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/orders/:id/orderItems/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__updateById__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update a related item by id for orderItems.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orderItems
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$__updateById__orderItems": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/orders/:id/orderItems/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__get__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Queries orderItems of order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$__get__orderItems": {
              isArray: true,
              url: urlBase + "/orders/:id/orderItems",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__create__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Creates a new instance in orderItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$__create__orderItems": {
              url: urlBase + "/orders/:id/orderItems",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__delete__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Deletes all orderItems of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__orderItems": {
              url: urlBase + "/orders/:id/orderItems",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$__count__orderItems
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Counts orderItems of order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__orderItems": {
              url: urlBase + "/orders/:id/orderItems/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#create
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/orders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createMany
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/orders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#patchOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/orders",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#replaceOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/orders/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#upsertWithWhere
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/orders/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#exists
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/orders/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/orders/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#replaceById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/orders/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#find
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/orders",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findOne
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/orders/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#updateAll
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/orders/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#deleteById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/orders/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#count
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/orders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$patchAttributes
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/orders/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createChangeStream
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/orders/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$updateStatus
             * @methodOf lbServices.Order
             *
             * @description
             *
             * update order status
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             *  - `status` – `{string}` - status to update
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$updateStatus": {
              url: urlBase + "/orders/:id/updateStatus",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#calculatePrice
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Calculate price for cart
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `cart` – `{Object}` - Cart to calculate price
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "calculatePrice": {
              url: urlBase + "/orders/calculatePrice",
              method: "POST",
            },

            // INTERNAL. Use Shop.orders.findById() instead.
            "::findById::Shop::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.orders.destroyById() instead.
            "::destroyById::Shop::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.orders.updateById() instead.
            "::updateById::Shop::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.orders() instead.
            "::get::Shop::orders": {
              isArray: true,
              url: urlBase + "/shops/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Shop.orders.create() instead.
            "::create::Shop::orders": {
              url: urlBase + "/shops/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Shop.orders.createMany() instead.
            "::createMany::Shop::orders": {
              isArray: true,
              url: urlBase + "/shops/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Shop.orders.destroyAll() instead.
            "::delete::Shop::orders": {
              url: urlBase + "/shops/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.orders.count() instead.
            "::count::Shop::orders": {
              url: urlBase + "/shops/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.findById() instead.
            "::findById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.destroyById() instead.
            "::destroyById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.updateById() instead.
            "::updateById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/customers/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.orders() instead.
            "::get::Customer::orders": {
              isArray: true,
              url: urlBase + "/customers/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.create() instead.
            "::create::Customer::orders": {
              url: urlBase + "/customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.createMany() instead.
            "::createMany::Customer::orders": {
              isArray: true,
              url: urlBase + "/customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.destroyAll() instead.
            "::delete::Customer::orders": {
              url: urlBase + "/customers/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.count() instead.
            "::count::Customer::orders": {
              url: urlBase + "/customers/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Delivery.order() instead.
            "::get::Delivery::order": {
              url: urlBase + "/deliveries/:id/order",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Order#upsert
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Order#updateOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Order#patchOrCreateWithWhere
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Order#update
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Order#destroyById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Order#removeById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Order#updateAttributes
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Order#modelName
        * @propertyOf lbServices.Order
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Order`.
        */
        R.modelName = "Order";


            /**
             * @ngdoc method
             * @name lbServices.Order#customer
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Order::customer"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order#shop
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Order::shop"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ProductCategory
 * @header lbServices.ProductCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ProductCategory",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/productCategories/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#create
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/productCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#createMany
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/productCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#patchOrCreate
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/productCategories",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#replaceOrCreate
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/productCategories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#upsertWithWhere
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/productCategories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#exists
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/productCategories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#findById
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/productCategories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#replaceById
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/productCategories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#find
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/productCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#findOne
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/productCategories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#updateAll
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/productCategories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#deleteById
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/productCategories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#count
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/productCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#prototype$patchAttributes
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/productCategories/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#createChangeStream
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/productCategories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Product.productCategory() instead.
            "::get::Product::productCategory": {
              url: urlBase + "/products/:id/productCategory",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#upsert
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#updateOrCreate
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#patchOrCreateWithWhere
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#update
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#destroyById
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#removeById
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductCategory#updateAttributes
             * @methodOf lbServices.ProductCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductCategory` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ProductCategory#modelName
        * @propertyOf lbServices.ProductCategory
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ProductCategory`.
        */
        R.modelName = "ProductCategory";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ProductValuePack
 * @header lbServices.ProductValuePack
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductValuePack` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ProductValuePack",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/productValuePacks/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ProductValuePack.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.products.link() instead.
            "prototype$__link__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.products.unlink() instead.
            "prototype$__unlink__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.exists() instead.
            "prototype$__exists__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductValuePack.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/productValuePacks/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.findById() instead.
            "prototype$__findById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.destroyById() instead.
            "prototype$__destroyById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.updateById() instead.
            "prototype$__updateById__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.promotions.link() instead.
            "prototype$__link__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.promotions.unlink() instead.
            "prototype$__unlink__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.exists() instead.
            "prototype$__exists__promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductValuePack.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/products",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/productValuePacks/:id/products",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/productValuePacks/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/productValuePacks/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions() instead.
            "prototype$__get__promotions": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.create() instead.
            "prototype$__create__promotions": {
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.promotions.destroyAll() instead.
            "prototype$__delete__promotions": {
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.count() instead.
            "prototype$__count__promotions": {
              url: urlBase + "/productValuePacks/:id/promotions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#create
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/productValuePacks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#createMany
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/productValuePacks",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#patchOrCreate
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/productValuePacks",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#replaceOrCreate
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/productValuePacks/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#upsertWithWhere
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/productValuePacks/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#exists
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/productValuePacks/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#findById
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/productValuePacks/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#replaceById
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/productValuePacks/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#find
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/productValuePacks",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#findOne
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/productValuePacks/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#updateAll
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/productValuePacks/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#deleteById
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/productValuePacks/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#count
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/productValuePacks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#prototype$patchAttributes
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/productValuePacks/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#createChangeStream
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/productValuePacks/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.productValuePacks.findById() instead.
            "::findById::Shop::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.productValuePacks.destroyById() instead.
            "::destroyById::Shop::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productValuePacks.updateById() instead.
            "::updateById::Shop::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.productValuePacks() instead.
            "::get::Shop::productValuePacks": {
              isArray: true,
              url: urlBase + "/shops/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Shop.productValuePacks.create() instead.
            "::create::Shop::productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Shop.productValuePacks.createMany() instead.
            "::createMany::Shop::productValuePacks": {
              isArray: true,
              url: urlBase + "/shops/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Shop.productValuePacks.destroyAll() instead.
            "::delete::Shop::productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.productValuePacks.count() instead.
            "::count::Shop::productValuePacks": {
              url: urlBase + "/shops/:id/productValuePacks/count",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.findById() instead.
            "::findById::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.destroyById() instead.
            "::destroyById::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.updateById() instead.
            "::updateById::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productValuePacks.link() instead.
            "::link::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.productValuePacks.unlink() instead.
            "::unlink::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.exists() instead.
            "::exists::Product::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/productValuePacks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.productValuePacks() instead.
            "::get::Product::productValuePacks": {
              isArray: true,
              url: urlBase + "/products/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Product.productValuePacks.create() instead.
            "::create::Product::productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Product.productValuePacks.createMany() instead.
            "::createMany::Product::productValuePacks": {
              isArray: true,
              url: urlBase + "/products/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Product.productValuePacks.destroyAll() instead.
            "::delete::Product::productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Product.productValuePacks.count() instead.
            "::count::Product::productValuePacks": {
              url: urlBase + "/products/:id/productValuePacks/count",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks.findById() instead.
            "::findById::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks.destroyById() instead.
            "::destroyById::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.updateById() instead.
            "::updateById::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.productValuePacks.link() instead.
            "::link::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.productValuePacks.unlink() instead.
            "::unlink::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.exists() instead.
            "::exists::Promotion::productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Promotion.productValuePacks() instead.
            "::get::Promotion::productValuePacks": {
              isArray: true,
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks.create() instead.
            "::create::Promotion::productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Promotion.productValuePacks.createMany() instead.
            "::createMany::Promotion::productValuePacks": {
              isArray: true,
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Promotion.productValuePacks.destroyAll() instead.
            "::delete::Promotion::productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.count() instead.
            "::count::Promotion::productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#upsert
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#updateOrCreate
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#patchOrCreateWithWhere
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#update
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#destroyById
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#removeById
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#updateAttributes
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ProductValuePack#modelName
        * @propertyOf lbServices.ProductValuePack
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ProductValuePack`.
        */
        R.modelName = "ProductValuePack";

    /**
     * @ngdoc object
     * @name lbServices.ProductValuePack.products
     * @header lbServices.ProductValuePack.products
     * @object
     * @description
     *
     * The object `ProductValuePack.products` groups methods
     * manipulating `Product` instances related to `ProductValuePack`.
     *
     * Call {@link lbServices.ProductValuePack#products ProductValuePack.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#products
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Queries products of productValuePack.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#count
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Counts products of productValuePack.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#create
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#createMany
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#destroyAll
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#destroyById
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#exists
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Check the existence of products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#findById
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#link
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Add a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#unlink
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Remove the products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.products#updateById
             * @methodOf lbServices.ProductValuePack.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::ProductValuePack::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#shop
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::ProductValuePack::shop"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ProductValuePack.promotions
     * @header lbServices.ProductValuePack.promotions
     * @object
     * @description
     *
     * The object `ProductValuePack.promotions` groups methods
     * manipulating `Promotion` instances related to `ProductValuePack`.
     *
     * Call {@link lbServices.ProductValuePack#promotions ProductValuePack.promotions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack#promotions
             * @methodOf lbServices.ProductValuePack
             *
             * @description
             *
             * Queries promotions of productValuePack.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::get::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#count
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Counts promotions of productValuePack.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.promotions.count = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::count::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#create
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.create = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::create::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#createMany
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Creates a new instance in promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.createMany = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::createMany::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#destroyAll
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Deletes all promotions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyAll = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::delete::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#destroyById
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Delete a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.destroyById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::destroyById::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#exists
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Check the existence of promotions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.exists = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::exists::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#findById
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Find a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.findById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::findById::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#link
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Add a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.link = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::link::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#unlink
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Remove the promotions relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.promotions.unlink = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::unlink::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductValuePack.promotions#updateById
             * @methodOf lbServices.ProductValuePack.promotions
             *
             * @description
             *
             * Update a related item by id for promotions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for promotions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R.promotions.updateById = function() {
          var TargetResource = $injector.get("Promotion");
          var action = TargetResource["::updateById::ProductValuePack::promotions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Promotion
 * @header lbServices.Promotion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Promotion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Promotion",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/promotions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Promotion.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.products.link() instead.
            "prototype$__link__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.products.unlink() instead.
            "prototype$__unlink__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.exists() instead.
            "prototype$__exists__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Promotion.productValuePacks.findById() instead.
            "prototype$__findById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks.destroyById() instead.
            "prototype$__destroyById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.updateById() instead.
            "prototype$__updateById__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.productValuePacks.link() instead.
            "prototype$__link__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Promotion.productValuePacks.unlink() instead.
            "prototype$__unlink__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.exists() instead.
            "prototype$__exists__productValuePacks": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/promotions/:id/productValuePacks/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Promotion.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/promotions/:id/shop",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/promotions/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Promotion.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/promotions/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Promotion.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/promotions/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/promotions/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks() instead.
            "prototype$__get__productValuePacks": {
              isArray: true,
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "GET",
            },

            // INTERNAL. Use Promotion.productValuePacks.create() instead.
            "prototype$__create__productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "POST",
            },

            // INTERNAL. Use Promotion.productValuePacks.destroyAll() instead.
            "prototype$__delete__productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks",
              method: "DELETE",
            },

            // INTERNAL. Use Promotion.productValuePacks.count() instead.
            "prototype$__count__productValuePacks": {
              url: urlBase + "/promotions/:id/productValuePacks/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#create
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/promotions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#createMany
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/promotions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#patchOrCreate
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/promotions",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#replaceOrCreate
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/promotions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#upsertWithWhere
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/promotions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#exists
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/promotions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#findById
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/promotions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#replaceById
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/promotions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#find
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/promotions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#findOne
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/promotions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#updateAll
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/promotions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#deleteById
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/promotions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#count
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/promotions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#prototype$patchAttributes
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/promotions/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Promotion#createChangeStream
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/promotions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.promotions.findById() instead.
            "::findById::Shop::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.promotions.destroyById() instead.
            "::destroyById::Shop::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.promotions.updateById() instead.
            "::updateById::Shop::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.promotions() instead.
            "::get::Shop::promotions": {
              isArray: true,
              url: urlBase + "/shops/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use Shop.promotions.create() instead.
            "::create::Shop::promotions": {
              url: urlBase + "/shops/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Shop.promotions.createMany() instead.
            "::createMany::Shop::promotions": {
              isArray: true,
              url: urlBase + "/shops/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Shop.promotions.destroyAll() instead.
            "::delete::Shop::promotions": {
              url: urlBase + "/shops/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.promotions.count() instead.
            "::count::Shop::promotions": {
              url: urlBase + "/shops/:id/promotions/count",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions.findById() instead.
            "::findById::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions.destroyById() instead.
            "::destroyById::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.updateById() instead.
            "::updateById::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.promotions.link() instead.
            "::link::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.promotions.unlink() instead.
            "::unlink::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.exists() instead.
            "::exists::Product::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/products/:id/promotions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.promotions() instead.
            "::get::Product::promotions": {
              isArray: true,
              url: urlBase + "/products/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use Product.promotions.create() instead.
            "::create::Product::promotions": {
              url: urlBase + "/products/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Product.promotions.createMany() instead.
            "::createMany::Product::promotions": {
              isArray: true,
              url: urlBase + "/products/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use Product.promotions.destroyAll() instead.
            "::delete::Product::promotions": {
              url: urlBase + "/products/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use Product.promotions.count() instead.
            "::count::Product::promotions": {
              url: urlBase + "/products/:id/promotions/count",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.findById() instead.
            "::findById::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.destroyById() instead.
            "::destroyById::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.updateById() instead.
            "::updateById::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.promotions.link() instead.
            "::link::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ProductValuePack.promotions.unlink() instead.
            "::unlink::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.exists() instead.
            "::exists::ProductValuePack::promotions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/productValuePacks/:id/promotions/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use ProductValuePack.promotions() instead.
            "::get::ProductValuePack::promotions": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "GET",
            },

            // INTERNAL. Use ProductValuePack.promotions.create() instead.
            "::create::ProductValuePack::promotions": {
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.promotions.createMany() instead.
            "::createMany::ProductValuePack::promotions": {
              isArray: true,
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "POST",
            },

            // INTERNAL. Use ProductValuePack.promotions.destroyAll() instead.
            "::delete::ProductValuePack::promotions": {
              url: urlBase + "/productValuePacks/:id/promotions",
              method: "DELETE",
            },

            // INTERNAL. Use ProductValuePack.promotions.count() instead.
            "::count::ProductValuePack::promotions": {
              url: urlBase + "/productValuePacks/:id/promotions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Promotion#upsert
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#updateOrCreate
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#patchOrCreateWithWhere
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#update
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#destroyById
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#removeById
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Promotion#updateAttributes
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Promotion` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Promotion#modelName
        * @propertyOf lbServices.Promotion
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Promotion`.
        */
        R.modelName = "Promotion";

    /**
     * @ngdoc object
     * @name lbServices.Promotion.products
     * @header lbServices.Promotion.products
     * @object
     * @description
     *
     * The object `Promotion.products` groups methods
     * manipulating `Product` instances related to `Promotion`.
     *
     * Call {@link lbServices.Promotion#products Promotion.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Promotion#products
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Queries products of promotion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#count
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Counts products of promotion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#create
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#createMany
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#destroyAll
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#destroyById
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#exists
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Check the existence of products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#findById
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#link
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Add a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#unlink
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Remove the products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::Promotion::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.products#updateById
             * @methodOf lbServices.Promotion.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Promotion::products"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Promotion.productValuePacks
     * @header lbServices.Promotion.productValuePacks
     * @object
     * @description
     *
     * The object `Promotion.productValuePacks` groups methods
     * manipulating `ProductValuePack` instances related to `Promotion`.
     *
     * Call {@link lbServices.Promotion#productValuePacks Promotion.productValuePacks()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Promotion#productValuePacks
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Queries productValuePacks of promotion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::get::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#count
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Counts productValuePacks of promotion.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.productValuePacks.count = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::count::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#create
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.create = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::create::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#createMany
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Creates a new instance in productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.createMany = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::createMany::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#destroyAll
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Deletes all productValuePacks of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyAll = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::delete::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#destroyById
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Delete a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.destroyById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::destroyById::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#exists
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Check the existence of productValuePacks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.exists = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::exists::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#findById
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Find a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.findById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::findById::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#link
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Add a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.link = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::link::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#unlink
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Remove the productValuePacks relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.productValuePacks.unlink = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::unlink::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion.productValuePacks#updateById
             * @methodOf lbServices.Promotion.productValuePacks
             *
             * @description
             *
             * Update a related item by id for productValuePacks.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for productValuePacks
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductValuePack` object.)
             * </em>
             */
        R.productValuePacks.updateById = function() {
          var TargetResource = $injector.get("ProductValuePack");
          var action = TargetResource["::updateById::Promotion::productValuePacks"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Promotion#shop
             * @methodOf lbServices.Promotion
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::Promotion::shop"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ShopProductCategory
 * @header lbServices.ShopProductCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ShopProductCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ShopProductCategory",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/shopProductCategories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ShopProductCategory.shop() instead.
            "prototype$__get__shop": {
              url: urlBase + "/shopProductCategories/:id/shop",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#create
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/shopProductCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#createMany
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/shopProductCategories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#patchOrCreate
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/shopProductCategories",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#replaceOrCreate
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/shopProductCategories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#upsertWithWhere
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/shopProductCategories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#exists
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/shopProductCategories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#findById
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/shopProductCategories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#replaceById
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/shopProductCategories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#find
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/shopProductCategories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#findOne
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/shopProductCategories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#updateAll
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/shopProductCategories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#deleteById
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/shopProductCategories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#count
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/shopProductCategories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#prototype$patchAttributes
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/shopProductCategories/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#createChangeStream
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/shopProductCategories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopProductCategories.findById() instead.
            "::findById::Shop::shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopProductCategories.destroyById() instead.
            "::destroyById::Shop::shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopProductCategories.updateById() instead.
            "::updateById::Shop::shopProductCategories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/shops/:id/shopProductCategories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Shop.shopProductCategories() instead.
            "::get::Shop::shopProductCategories": {
              isArray: true,
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "GET",
            },

            // INTERNAL. Use Shop.shopProductCategories.create() instead.
            "::create::Shop::shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopProductCategories.createMany() instead.
            "::createMany::Shop::shopProductCategories": {
              isArray: true,
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "POST",
            },

            // INTERNAL. Use Shop.shopProductCategories.destroyAll() instead.
            "::delete::Shop::shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories",
              method: "DELETE",
            },

            // INTERNAL. Use Shop.shopProductCategories.count() instead.
            "::count::Shop::shopProductCategories": {
              url: urlBase + "/shops/:id/shopProductCategories/count",
              method: "GET",
            },

            // INTERNAL. Use Product.shopProductCategory() instead.
            "::get::Product::shopProductCategory": {
              url: urlBase + "/products/:id/shopProductCategory",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#upsert
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#updateOrCreate
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#patchOrCreateWithWhere
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#update
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#destroyById
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#removeById
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#updateAttributes
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ShopProductCategory` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ShopProductCategory#modelName
        * @propertyOf lbServices.ShopProductCategory
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ShopProductCategory`.
        */
        R.modelName = "ShopProductCategory";


            /**
             * @ngdoc method
             * @name lbServices.ShopProductCategory#shop
             * @methodOf lbServices.ShopProductCategory
             *
             * @description
             *
             * Fetches belongsTo relation shop.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Shop` object.)
             * </em>
             */
        R.shop = function() {
          var TargetResource = $injector.get("Shop");
          var action = TargetResource["::get::ShopProductCategory::shop"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.PaymentMethod
 * @header lbServices.PaymentMethod
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `PaymentMethod` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "PaymentMethod",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/paymentMethods/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#create
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/paymentMethods",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#createMany
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/paymentMethods",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#patchOrCreate
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/paymentMethods",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#replaceOrCreate
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/paymentMethods/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#upsertWithWhere
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/paymentMethods/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#exists
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/paymentMethods/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#findById
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/paymentMethods/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#replaceById
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/paymentMethods/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#find
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/paymentMethods",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#findOne
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/paymentMethods/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#updateAll
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/paymentMethods/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#deleteById
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/paymentMethods/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#count
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/paymentMethods/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#prototype$patchAttributes
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/paymentMethods/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#createChangeStream
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/paymentMethods/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#upsert
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#updateOrCreate
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#patchOrCreateWithWhere
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#update
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#destroyById
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#removeById
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.PaymentMethod#updateAttributes
             * @methodOf lbServices.PaymentMethod
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethod` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.PaymentMethod#modelName
        * @propertyOf lbServices.PaymentMethod
        * @description
        * The name of the model represented by this $resource,
        * i.e. `PaymentMethod`.
        */
        R.modelName = "PaymentMethod";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/containers/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Currency
 * @header lbServices.Currency
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Currency` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Currency",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/currencies/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Currency#create
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/currencies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#createMany
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/currencies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#patchOrCreate
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/currencies",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#replaceOrCreate
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/currencies/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#upsertWithWhere
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/currencies/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#exists
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/currencies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#findById
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/currencies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#replaceById
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/currencies/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#find
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/currencies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#findOne
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/currencies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#updateAll
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/currencies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#deleteById
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/currencies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#count
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/currencies/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#prototype$patchAttributes
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/currencies/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Currency#createChangeStream
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/currencies/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Currency#upsert
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#updateOrCreate
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#patchOrCreateWithWhere
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#update
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#destroyById
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#removeById
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Currency#updateAttributes
             * @methodOf lbServices.Currency
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Currency` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Currency#modelName
        * @propertyOf lbServices.Currency
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Currency`.
        */
        R.modelName = "Currency";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Delivery
 * @header lbServices.Delivery
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Delivery` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Delivery",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/deliveries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Delivery.order() instead.
            "prototype$__get__order": {
              url: urlBase + "/deliveries/:id/order",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#create
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/deliveries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#createMany
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/deliveries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#patchOrCreate
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/deliveries",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#replaceOrCreate
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/deliveries/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#upsertWithWhere
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/deliveries/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#exists
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/deliveries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#findById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/deliveries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#replaceById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/deliveries/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#find
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/deliveries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#findOne
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/deliveries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#updateAll
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/deliveries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#deleteById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/deliveries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#count
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/deliveries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#prototype$patchAttributes
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/deliveries/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#createChangeStream
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/deliveries/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#calculateDelivery
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Calculate delivery fee and time
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `from_address` – `{GeoPoint}` -
             *
             *  - `shop_id` – `{number}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "calculateDelivery": {
              url: urlBase + "/deliveries/calculateDelivery",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Delivery#upsert
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#updateOrCreate
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#patchOrCreateWithWhere
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#update
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#destroyById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#removeById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#updateAttributes
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Delivery#modelName
        * @propertyOf lbServices.Delivery
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Delivery`.
        */
        R.modelName = "Delivery";


            /**
             * @ngdoc method
             * @name lbServices.Delivery#order
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Fetches belongsTo relation order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Delivery::order"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
