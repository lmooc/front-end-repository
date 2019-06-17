'use strict';

var multiply = require('lodash/multiply');

module.exports = {
  area_rectangle: function(width, height) {
    return multiply(height, width);
  }
}