#!/usr/bin/env bash
# Fetch every reference repo used by the pipeline as a shallow clone.
# Idempotent: skips repos that already exist.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REF="$ROOT/references"

clone() {
  local url="$1"
  local dest="$2"
  if [ -d "$dest/.git" ]; then
    echo "skip   $dest"
  else
    echo "clone  $url -> $dest"
    git clone --depth 1 --single-branch "$url" "$dest"
  fi
}

mkdir -p "$REF/component-libraries" "$REF/starters" "$REF/inspiration"

# Component / section libraries
clone https://github.com/magicuidesign/magicui.git              "$REF/component-libraries/magicui"
clone https://github.com/PageAI-Pro/page-ui.git                 "$REF/component-libraries/page-ui"
clone https://github.com/launch-ui/launch-ui.git                "$REF/component-libraries/launch-ui"
clone https://github.com/moumen-soliman/uitripled.git           "$REF/component-libraries/uitripled"
clone https://github.com/arihantcodes/spectrum-ui.git           "$REF/component-libraries/spectrum-ui"

# Full landing-page starters
clone https://github.com/surjithctly/astroship.git              "$REF/starters/astroship"
clone https://github.com/cruip/open-react-template.git          "$REF/starters/cruip-open-react"
clone https://github.com/cruip/tailwind-landing-page-template.git "$REF/starters/cruip-tailwind"
clone https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git "$REF/starters/ixartz-landing"
clone https://github.com/ixartz/SaaS-Boilerplate.git            "$REF/starters/ixartz-saas"
clone https://github.com/ant-design/ant-design-landing.git      "$REF/starters/ant-design-landing"
clone https://github.com/wasp-lang/open-saas.git                "$REF/starters/open-saas"

# Inspiration catalog
clone https://github.com/nordicgiant2/awesome-landing-page.git  "$REF/inspiration/awesome-landing-page"

echo "Done. References live in $REF (gitignored)."
