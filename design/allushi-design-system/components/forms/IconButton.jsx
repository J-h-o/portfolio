import React from 'react';

const css = `
.al-iconbtn { font-family: var(--font-body); border: 1px solid transparent; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); transition: background var(--duration-fast) var(--ease-out); color: var(--text-strong); background: transparent; }
.al-iconbtn:hover:not(:disabled) { background: var(--surface-sunken); }
.al-iconbtn:active:not(:disabled) { transform: translateY(1px); }
.al-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-accent-glow); }
.al-iconbtn:disabled { opacity: 0.45; cursor: not-allowed; }
.al-iconbtn--outline { border-color: var(--border-strong); }
.al-iconbtn--sm { width: 28px; height: 28px; }
.al-iconbtn--md { width: 36px; height: 36px; }
.al-iconbtn--lg { width: 44px; height: 44px; }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-iconbtn-css')) {
    const s = document.createElement('style');
    s.id = 'al-iconbtn-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function IconButton({ label, size = 'md', outline = false, disabled = false, children, onClick, style }) {
  ensureCss();
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`al-iconbtn al-iconbtn--${size}${outline ? ' al-iconbtn--outline' : ''}`}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
