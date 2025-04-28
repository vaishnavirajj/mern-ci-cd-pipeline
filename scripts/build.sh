#!/usr/bin/env bash

# Simple build script
#
# This helper script automates the process of building the front‑end
# production bundle and installing back‑end dependencies.  Running a
# centralised build script ensures that anyone on the team can build the
# project consistently with a single command.

set -euo pipefail
ROOT_DIR="$(dirname "$0")/.."

echo "Building front‑end..."
pushd "$ROOT_DIR/front-end" > /dev/null
npm install
npm run build
popd > /dev/null

echo "Installing back‑end dependencies..."
pushd "$ROOT_DIR/back-end" > /dev/null
npm install
popd > /dev/null

echo "Build complete.  The front‑end production files are located in front-end/dist."