#!/usr/bin/env bash

deno bundle --config deno.json app/main.ts -- dist/budget-korkor.js

deno compile \
  --reload \
  --allow-env \
  --allow-net="api.telegram.org" \
  --config deno.json \
  --output=dist/budget-korkor \
  dist/budget-korkor.js