import React from 'react';

const css = `
.al-btn { font-family: var(--font-body); font-weight: 600; border: 1px solid transparent; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: var(--radius-sm); transition: background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out); white-space: nowrap; }
.al-btn:active:not(:disabled) { transform: translateY(1px); }
.al-btn:focus-visible { outline: none; box-shadow: var(--shadow-accent-glow); }
.al-btn:disabled { opacity: 0.45; cursor: not-allowed; }
.al-btn--sm { font-size: 12px; padding: 6px 12px; }
.al-btn--md { font-size: 13px; padding: 9px 18px; }
.al-btn--lg { font-size: 15px; padding: 12px 24px; }
.al-btn--primary { background: var(--action-primary); color: var(--text-inverse); }
.al-btn--primary:hover:not(:disabled) { background: var(--action-primary-hover); }
.al-btn--accent { background: var(--action-accent); color: var(--action-on-accent); }
.al-btn--accent:hover:not(:disabled) { background: var(--action-accent-hover); }
.al-btn--secondary { background: transparent; color: var(--text-strong); border-color: var(--border-strong); }
.al-btn--secondary:hover:not(:disabled) { background: var(--surface-sunken); }
.al-btn--ghost { background: transparent; color: var(--text-strong); }
.al-btn--ghost:hover:not(:disabled) { background: var(--surface-sunken); }
.al-btn--inverse { background: var(--paper-0); color: var(--ink-950); }
.al-btn--inverse:hover:not(:disabled) { background: var(--ink-100); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-btn-css')) {
    const s = document.createElement('style');
    s.id = 'al-btn-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Button({ variant = 'primary', size = 'md', disabled = false, type = 'button', icon, children, onClick, style }) {
  ensureCss();
  return (
    <button
      type={type}
      className={`al-btn al-btn--${variant} al-btn--${size}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {icon}
      {children}
    </button>
  );
}
