#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Forbidden files (absolute or relative to workspace root)
const forbidden = [
  'components/main/hero.tsx',
  'components/main/star-background.tsx',
  'components/main/skills.tsx',
  'public/hero-bg.svg',
];

// Forbidden folders/assets (prefix match)
const forbiddenPrefixes = [
  'public/hero-bg',
  'public/star',
  'public/skills',
];

const exts = ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'];
const quoteMap = {
  '‘': "'",
  '’': "'",
  '“': '"',
  '”': '"',
};

const root = process.cwd();
const scanDirs = ['app', 'components', 'data', 'content'];
let changedFiles = [];

function isForbidden(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (forbidden.includes(rel)) return true;
  return forbiddenPrefixes.some((prefix) => rel.startsWith(prefix));
}

function fixQuotesInText(text, ext) {
  let changed = false;
  let newText = text.replace(/[‘’“”]/g, (m) => {
    changed = true;
    return quoteMap[m] || m;
  });
  // Only for .tsx, .ts, .md, .mdx: replace unescaped apostrophes in text (not in code)
  if (['.tsx', '.ts', '.md', '.mdx'].includes(ext)) {
    // Replace ' in text nodes (not in code/props/JS)
    // Simple heuristic: replace ' between letters (not in variable names)
    newText = newText.replace(/([a-zA-Z])'([a-zA-Z])/g, (m, a, b) => {
      changed = true;
      return a + "&apos;" + b;
    });
  }
  return changed ? newText : null;
}

function walk(dir, cb) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') return;
      walk(full, cb);
    } else if (exts.includes(path.extname(entry.name))) {
      cb(full);
    }
  });
}

function main() {
  let summary = [];
  for (const dir of scanDirs) {
    const absDir = path.join(root, dir);
    if (!fs.existsSync(absDir)) continue;
    walk(absDir, (file) => {
      if (isForbidden(file)) return;
      const ext = path.extname(file);
      const orig = fs.readFileSync(file, 'utf8');
      const lines = orig.split(/\r?\n/);
      let changedLines = [];
      let changed = false;
      for (let i = 0; i < lines.length; ++i) {
        const fixed = fixQuotesInText(lines[i], ext);
        if (fixed !== null && fixed !== lines[i]) {
          lines[i] = fixed;
          changedLines.push(i + 1);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(file, lines.join('\n'));
        changedFiles.push({ file, lines: changedLines });
        summary.push(`✔ ${path.relative(root, file)} [lines: ${changedLines.join(', ')}]`);
      }
    });
  }
  if (summary.length === 0) {
    console.log('No smart quotes or unescaped apostrophes found.');
  } else {
    console.log('Sanitized smart quotes/apostrophes in:');
    summary.forEach((s) => console.log('  ' + s));
  }
}

main();
