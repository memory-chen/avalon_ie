/**
 * 基础补丁包
 * */
require('./patch/console');
require('es6-promise/auto');

/**
 * 功能扩展包
 * */
window.jQuery = window.$ = require('./tools/jquery.min');
require('bootstrap/dist/js/bootstrap.min');
require('avalon2');
avalon.config({
  debug: false
})