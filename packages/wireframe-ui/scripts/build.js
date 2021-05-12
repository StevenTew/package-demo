const { execSync } = require('child_process');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: root });

run(`npm run dist:clean`);
// Run a Webpack build to generate JS and styles
run(`webpack`);

// Use Babel to make a CJS version of component js files available
run(`babel src --out-dir dist/cjs/  --ignore src/**/*.test.js`);
// add the non js files to CJS folder too
run(`copyfiles -e ./**/*.js ./src/components/**/*.* ./dist/cjs --up=1`);

// Copy sass files that make up our public API into the styles folder
// run(`copyfiles ./src/styles/**/*.scss ./dist  --up=1`);

// Copy sass files that make up our components into the comp-styles folder
// run(`copyfiles ./components/**/*.scss ./dist/comp-styles --up=1`);

// Copy documentation into the docs folder
// run(`node run copyfiles ./components/**/*.md ./dist/docs --up=1`);

// Run build validation tests to ensure build content is as we expect
run(`node scripts/build-validate.js`);
