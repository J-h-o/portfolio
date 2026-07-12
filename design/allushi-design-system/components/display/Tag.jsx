import React from 'react';

const css = `
.al-tag { font-family: var(--font-mono); font-weight: 500; font-size: 11px; letter-spacing: 0.03em; display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: var(--radius-full); border: 1px solid var(--border-strong); color: var(--text-body); background: var(--paper-0); }
.al-tag--accent { border-color: var(--green-500); color: var(--green-600); }
.al-tag--dark { border-color: var(--border-dark-strong); color: var(--text-inverse-muted); background: transparent; }
.al-tag__x { border: none; background: none; padding: 0; margin-left: 2px; cursor: pointer; color: inherit; font-size: 12px; line-height: 1; opacity: 0.6; }
.al-tag__x:hover { opacity: 1; }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-tag-css')) {
    const s = document.createElement('style');
    s.id = 'al-tag-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Tag({ tone = 'neutral', onRemove, children, style }) {
  ensureCss();
  const cls = tone === 'accent' ? ' al-tag--accent' : tone === 'dark' ? ' al-tag--dark' : '';
  return (
    <span className={`al-tag${cls}`} style={style}>
      {children}
      {onRemove ? <button type="button" className="al-tag__x" aria-label="Remove" onClick={onRemove}>×</button> : null}
    </span>
  );
}
