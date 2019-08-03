#!/bin/sh

function checkReturnCode {
    if [ $1 -ne 0 ]; then
        echo "Return code was not zero but $1"
        exit $1
    fi
}

# eslint
eslint --cache --fix ./src
checkReturnCode $?

# prettier
prettier ./src/**/*.{js,jsx,json,css} --write .
checkReturnCode $?

# stylelint
stylelint './src/**/*.js' --fix
checkReturnCode $?
