'use strict';

// Globals for all test_*.js files.
global.path = require('path');
global.should = require('chai').should();
global.sassyTest = require('sassy-test');

// This before() is run before any test_*.js file.
before(function(done) {
  sassyTest.configurePaths({
    includePaths: [
      // Path to Sass library.
      path.join(__dirname, '../sass'),
      // Path to normalize-scss' dependencies.
      path.join(__dirname, '../node_modules/support-for/sass')
    ]
  });
  done();
});
