#!/usr/bin/env python3
import csv
from pathlib import Path

base = Path(__file__).resolve().parents[1] / 'data'
required = {
    'seed_sources.csv': ['source_id','name','url'],
    'skills_registry.csv': ['item_id','source_type','source_url','recommended_action','evidence_ids'],
    'evidence_notes.csv': ['evidence_id','item_id','source_url','claim_supported'],
    'gap_map.csv': ['procurement_stage','internal_skill_needed','priority']
}

ok = True
for f, cols in required.items():
    p = base / f
    with p.open(newline='', encoding='utf-8') as fh:
        r = csv.DictReader(fh)
        miss = [c for c in cols if c not in r.fieldnames]
        if miss:
            ok = False
            print(f'[FAIL] {f} missing columns: {miss}')
        else:
            rows = list(r)
            print(f'[OK] {f}: {len(rows)} rows')

raise SystemExit(0 if ok else 1)
