/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../objects/isFunction', '../internals/keyPrefix'], function(isFunction, keyPrefix) {

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided it will be used to determine the cache key for storing the result
   * based on the arguments provided to the memoized function. By default, the
   * first argument provided to the memoized function is used as the cache key.
   * The `func` is executed with the `this` binding of the memoized function.
   * The result cache is exposed as the `cache` property on the memoized function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] A function used to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var fibonacci = _.memoize(function(n) {
   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   * });
   *
   * var data = {
   *   'moe': { 'name': 'moe', 'age': 40 },
   *   'curly': { 'name': 'curly', 'age': 60 }
   * };
   *
   * // modifying the result cache
   * var stooge = _.memoize(function(name) { return data[name]; }, _.identity);
   * stooge('curly');
   * // => { 'name': 'curly', 'age': 60 }
   *
   * stooge.cache.curly.name = 'jerome';
   * stooge('curly');
   * // => { 'name': 'jerome', 'age': 60 }
   */
  function memoize(func, resolver) {
    var cache = {};
    return function() {
      var key = keyPrefix + (resolver ? resolver.apply(this, arguments) : arguments[0]);
      return hasOwnProperty.call(cache, key)
        ? cache[key]
        : (cache[key] = func.apply(this, arguments));
    };
  }

  return memoize;
});