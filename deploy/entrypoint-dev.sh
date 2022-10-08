#!/usr/bin/env bash

deno run \
  --allow-net="api.telegram.org" \
  --allow-env \
  app/main.ts