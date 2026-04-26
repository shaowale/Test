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

echo '== GitHub auth status =='
if command -v gh >/dev/null 2>&1; then
  gh auth status >/dev/null 2>&1 && echo '[OK] gh auth: logged in' || echo '[MISSING] gh auth: not logged in'
else
  echo '[SKIP] gh is not installed'
fi

echo '== Suggested next commands =='
echo '1) git remote add origin <repo-url>  # if not configured'
echo '2) git push -u origin work:main      # first push from current branch'
echo '3) gh auth login --web               # recommended auth flow'
echo '4) npm ci && npm run lint && npm run typecheck && npm run test && npm run build'

echo '== Optional: install gh CLI =='
echo 'macOS (brew):        brew install gh'
echo 'Ubuntu/Debian (apt): sudo apt install gh'
echo 'Windows (winget):    winget install GitHub.cli'
