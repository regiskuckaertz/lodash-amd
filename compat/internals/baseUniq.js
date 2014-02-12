/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseIndexOf', './cacheIndexOf', './createCache', './getArray', './releaseArray'], function(baseIndexOf, cacheIndexOf, createCache, getArray, releaseArray) {

  /** Used as the size when optimizations are enabled for arrays */
  var LARGE_ARRAY_SIZE = 40;

  /**
   * The base implementation of `_.uniq` without support for callback shorthands
   * or `thisArg` binding.
   *
   * @private
   * @param {Array} array The array to process.
   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
   * @param {Function} [callback] The function called per iteration.
   * @returns {Array} Returns a duplicate-value-free array.
   */
  function baseUniq(array, isSorted, callback) {
    var index = -1,
        indexOf = baseIndexOf,
        length = array ? array.length : 0,
        isLarge = createCache && !isSorted && length >= LARGE_ARRAY_SIZE,
        result = [];

    if (isLarge) {
      var seen = createCache();
      indexOf = cacheIndexOf;
    } else {
      seen = callback ? getArray() : result;
    }
    while (++index < length) {
      var value = array[index],
          computed = callback ? callback(value, index, array) : value;

      if (isSorted
            ? !index || seen[seen.length - 1] !== computed
            : indexOf(seen, computed) < 0
          ) {
        if (callback || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    if (!isLarge && callback) {
      releaseArray(seen);
    }
    return result;
  }

  return baseUniq;
});
