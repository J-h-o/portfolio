import React from 'react';

const css = `
.al-check { font-family: var(--font-body); display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; user-select: none; }
.al-check--disabled { opacity: 0.45; cursor: not-allowed; }
.al-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.al-check__box { width: 16px; height: 16px; flex: none; margin-top: 1px; border: 1px solid var(--border-strong); border-radius: var(--radius-xs); background: var(--paper-0); display: flex; align-items: center; justify-content: center; transition: background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out); }
.al-check input:checked + .al-check__box { background: var(--ink-950); border-color: var(--ink-950); }
.al-check input:focus-visible + .al-check__box { box-shadow: var(--shadow-accent-glow); }
.al-check__tick { width: 9px; height: 5px; border-left: 1.6px solid #fff; border-bottom: 1.6px solid #fff; transform: rotate(-45deg) translateY(-1px); opacity: 0; }
.al-check input:checked + .al-check__box .al-check__tick { opacity: 1; }
.al-check__label { font-size: 14px; color: var(--text-strong); line-height: 1.35; }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-check-css')) {
    const s = document.createElement('style');
    s.id = 'al-check-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Checkbox({ label, checked, onChange, disabled = false, style }) {
  ensureCss();
  return (
    <label className={`al-check${disabled ? ' al-check--disabled' : ''}`} style={style}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <span className="al-check__box"><span className="al-check__tick"></span></span>
      {label ? <span className="al-check__label">{label}</span> : null}
    </label>
  );
}
