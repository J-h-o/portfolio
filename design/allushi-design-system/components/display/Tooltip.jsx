import React from 'react';

const css = `
.al-tooltip { position: relative; display: inline-flex; }
.al-tooltip__bubble { position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%) translateY(2px); background: var(--ink-950); color: var(--paper-0); font-family: var(--font-body); font-size: 12px; line-height: 1.4; padding: 6px 10px; border-radius: var(--radius-sm); white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out); z-index: 50; }
.al-tooltip__bubble::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 4px solid transparent; border-top-color: var(--ink-950); }
.al-tooltip:hover .al-tooltip__bubble, .al-tooltip:focus-within .al-tooltip__bubble { opacity: 1; transform: translateX(-50%) translateY(0); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-tooltip-css')) {
    const s = document.createElement('style');
    s.id = 'al-tooltip-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Tooltip({ label, children, style }) {
  ensureCss();
  return (
    <span className="al-tooltip" style={style}>
      {children}
      <span className="al-tooltip__bubble" role="tooltip">{label}</span>
    </span>
  );
}
