#!/bin/bash
if ! command -v convert >/dev/null 2>&1; then
    sudo apt install imagemagick 
fi
cd "$(dirname "$0")" || exit
cd ../assets/ || exit
convert *.png -resize x25