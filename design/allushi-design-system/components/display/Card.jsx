import React from 'react';

const css = `
.al-card { font-family: var(--font-body); border-radius: var(--radius-md); box-sizing: border-box; }
.al-card--light { background: var(--surface-card); border: 1px solid var(--border-default); box-shadow: var(--shadow-card); }
.al-card--light.al-card--hoverable { transition: box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out); }
.al-card--light.al-card--hoverable:hover { box-shadow: var(--shadow-raised); border-color: var(--border-strong); }
.al-card--dark { background: var(--surface-dark-card); border: 1px solid var(--border-dark); }
.al-card--dark.al-card--hoverable { transition: border-color var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out); }
.al-card--dark.al-card--hoverable:hover { border-color: var(--border-dark-strong); background: var(--surface-dark-raised); }
.al-card--padded { padding: var(--space-6); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-card-css')) {
    const s = document.createElement('style');
    s.id = 'al-card-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Card({ dark = false, padded = true, hoverable = false, children, onClick, style }) {
  ensureCss();
  return (
    <div
      className={`al-card ${dark ? 'al-card--dark' : 'al-card--light'}${padded ? ' al-card--padded' : ''}${hoverable ? ' al-card--hoverable' : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}
