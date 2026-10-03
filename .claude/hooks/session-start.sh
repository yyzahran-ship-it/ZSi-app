#!/bin/bash
# Installs project dependencies and the global Claude skills used in cloud sessions.
set -uo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

SKILLS_DIR="$HOME/.claude/skills"

cd "$CLAUDE_PROJECT_DIR"
npm install --no-audit --no-fund

# Each step is skipped if already present, and a failure doesn't block the others.
cd "$HOME"

[ -d "$SKILLS_DIR/design-taste-frontend" ] || \
  npx -y skills add Leonxlnx/taste-skill --skill design-taste-frontend -g -a claude-code -y \
  || echo "warn: design-taste-frontend skill install failed" >&2

[ -d "$SKILLS_DIR/impeccable" ] || \
  npx -y skills add pbakaus/impeccable --skill impeccable -g -a claude-code -y \
  || echo "warn: impeccable skill install failed" >&2

command -v playwright-cli >/dev/null || \
  npm install -g @playwright/cli@latest \
  || echo "warn: @playwright/cli install failed" >&2

[ -d "$SKILLS_DIR/playwright-cli" ] || \
  npx -y skills add microsoft/playwright-cli --skill playwright-cli -g -a claude-code -y \
  || echo "warn: playwright-cli skill install failed" >&2

[ -d "$SKILLS_DIR/img2threejs" ] || \
  git clone --depth 1 https://github.com/img2threejs/img2threejs.git "$SKILLS_DIR/img2threejs" \
  || echo "warn: img2threejs clone failed" >&2

exit 0
