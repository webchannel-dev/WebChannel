#!/usr/bin/env node

/* eslint-disable no-console */

const pkg = require('../package.json');

const STEM = 'dependencies';
let dirty = 0;

console.info('CHECK: package.json, only exact versions.');
// load package.json
Object.keys(pkg)
    // find dependencies, devDeve... etc
    .filter(key => key.toLowerCase().includes(STEM))
    .forEach(key => {
        // checks each dependency
        Object.entries(pkg[key]).forEach(([dependency, version]) => {
            if (version[0] === '^' || version[0] === '~') {
                console.error(`Found ${dependency} with ${version}`);
                dirty += 1;
            }
        });
    });

console.info(dirty > 0 ? `FAILED with ${dirty} invalid versions` : 'SUCCESS');
process.exit(dirty);
