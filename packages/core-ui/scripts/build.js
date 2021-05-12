import { execSync } from "child_process";
import path, { resolve } from 'path';

import packageConfig from "./package.config";

console.log(packageConfig);
console.log(path.resolve(__dirname))

const root = resolve(__dirname, '..');
const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: root });

run(`npm run dist:clean`)
// Run a Webpack build to generate JS and styles
run(`webpack`);

// Use Babel to make a CJS version of component js files available
run(`babel components --out-dir dist/cjs/components`);
run(`copyfiles -e ./**/*.js ./components/**/*.* ./dist/cjs`);

// Copy sass files that make up our public API into the styles folder
run(`copyfiles ./styles/**/*.scss ./dist`);

// Copy sass files that make up our components into the comp-styles folder
// run(`copyfiles ./components/**/*.scss ./dist/comp-styles --up=1`);

// Copy documentation into the docs folder
// run(`node run copyfiles ./components/**/*.md ./dist/docs --up=1`);

// Run build validation tests to ensure build content is as we expect
run(`node scripts/build-validate.js`);
