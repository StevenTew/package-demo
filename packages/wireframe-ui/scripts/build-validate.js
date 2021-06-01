const assert = require('assert').strict;
const fs = require('fs');

// Validation to assert the output of the build.
validateStandardBuild();
validateSassPublicApi();

function validateStandardBuild() {
  // Standard build
  assert.ok(fs.existsSync('./dist/index.js'));
  // assert.ok(fs.existsSync('./dist/styles.css'));
}

function validateSassPublicApi() {
  // assert.ok(fs.existsSync('./dist/styles/_public-api.scss'));
}