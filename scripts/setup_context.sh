#!/usr/bin/env bash
set -euo pipefail

echo '== Git context =='
git rev-parse --show-toplevel || true
git branch --show-current || true
git remote -v || true

echo '== Tooling check =='
for cmd in git node npm python3 gh; do
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "[OK] $cmd: $("$cmd" --version 2>/dev/null | head -n 1)"
  else
    echo "[MISSING] $cmd"
  fi
done

echo '== Suggested next commands =='
echo '1) git remote add origin <repo-url>  # if not configured'
echo '2) git push -u origin work:main      # first push from current branch'
echo '3) gh auth login                      # bind GitHub CLI auth'
echo '4) npm ci && npm run lint && npm run typecheck && npm run test && npm run build'
