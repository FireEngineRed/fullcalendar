/*!
 * <%= title %> v<%= version %>
 * Docs & License: <%= homepage %>
 * (c) <%= copyright %>
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment' ], factory);
	}
	/**
	 * Adding the check typeof jQuery !== 'function' so that the factory uses
	 * the global jQuery and moment instead of its own dependencies.
	 * Browserify will not resolve the require('jquery') to use the global
	 * jQuery if you are using an older version of jQuery on the global scope
	 * which happens when you do things like use jQuery 2.2.4 to run jQuery UI.
	 * Whew.
	 */
	else if (typeof jQuery !== 'function' && typeof exports === 'object') { // Node/CommonJS
		module.exports = factory(require('jquery'), require('moment'));
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {
