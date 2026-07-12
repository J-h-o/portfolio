import React from 'react';

const css = `
.al-badge { font-family: var(--font-mono); font-weight: 500; font-size: 11px; letter-spacing: 0.03em; display: inline-flex; align-items: center; gap: 6px; padding: 3px 9px; border-radius: var(--radius-full); }
.al-badge__dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; }
.al-badge--success { color: var(--status-success); background: var(--status-success-tint); }
.al-badge--warning { color: var(--status-warning); background: var(--status-warning-tint); }
.al-badge--danger { color: var(--status-danger); background: var(--status-danger-tint); }
.al-badge--info { color: var(--status-info); background: var(--status-info-tint); }
.al-badge--neutral { color: var(--text-muted); background: var(--surface-sunken); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-badge-css')) {
    const s = document.createElement('style');
    s.id = 'al-badge-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Badge({ tone = 'neutral', dot = true, children, style }) {
  ensureCss();
  return (
    <span className={`al-badge al-badge--${tone}`} style={style}>
      {dot ? <span className="al-badge__dot"></span> : null}
      {children}
    </span>
  );
}
