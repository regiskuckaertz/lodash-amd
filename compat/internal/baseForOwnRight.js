/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseForRight', '../object/keys'], function(baseForRight, keys) {

  /**
   * The base implementation of `_.forOwnRight` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iterator The function called per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwnRight(object, iterator) {
    return baseForRight(object, iterator, keys);
  }

  return baseForOwnRight;
});