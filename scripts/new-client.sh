#!/usr/bin/env bash
# Bootstrap a new client by copying clients/_template/.
# Usage: bash scripts/new-client.sh <slug>

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "usage: bash scripts/new-client.sh <slug>" >&2
  exit 2
fi

SLUG="$1"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/clients/_template"
DST="$ROOT/clients/$SLUG"

if [ -e "$DST" ]; then
  echo "error: $DST already exists" >&2
  exit 1
fi

cp -r "$SRC" "$DST"
echo "created $DST"
echo "next steps:"
echo "  1. edit clients/$SLUG/brand.config.json"
echo "  2. edit clients/$SLUG/content.config.json"
echo "  3. drop client images into clients/$SLUG/assets/"
echo "  4. (optional) override the page template at clients/$SLUG/template.html"
echo "  5. node scripts/build.mjs --client $SLUG"
