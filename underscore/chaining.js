/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./chaining/chain', './chaining/tap', './chaining/wrapperChain', './chaining/wrapperValueOf'], function(chain, tap, wrapperChain, wrapperValueOf) {

  return {
    'chain': chain,
    'tap': tap,
    'wrapperChain': wrapperChain,
    'wrapperValueOf': wrapperValueOf
  };
});