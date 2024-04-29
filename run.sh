#!/bin/bash

docker run --rm -i -t -v $(pwd):/app -p 3122:3000 nozich/bunode:latest zsh
