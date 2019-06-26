# Contributing

Guide how to contribute to webchannel

## Technical overview

This project uses following libraries for development:

-   [react](https://github.com/facebook/react) as base library

## Project structure

-   `src/` - source root

## Components Requirements

Each component should have:

-   Main `MyComponent.jsx` file
-   Test in `MyComponent.test.js` file
-   Style in separate `MyComponent.style.js` file
-   Test data in `MyComponent.data.js` file if needed

## Development process

## Tests

Test are written and run via Jest

```sh
# run whole test suite once
yarn test
```

## Style guides

Style guides are enforced by prettier and eslint. Lint and format codebase via npm-script:

```sh
# format and fix lint errors
yarn lint
```
