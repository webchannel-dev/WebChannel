#!/bin/bash

npx lint-staged
yarn run test:flow
npx react-scripts test \
    --env=jsdom \
    --setupFiles=./src/common/utils/setupTests.js \
    --coverage --collectCoverageFrom=src/**/*.{js,jsx} \
    --collectCoverageFrom=!src/**/*.{data,story,style}.js \
    --collectCoverageFrom=!src/index.js \
    --collectCoverageFrom=!src/style/CSSReset.js \
    --collectCoverageFrom=!src/common/utils/serviceWorker.js
