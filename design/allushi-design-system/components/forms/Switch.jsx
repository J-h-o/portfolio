import React from 'react';

const css = `
.al-switch { font-family: var(--font-body); display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
.al-switch--disabled { opacity: 0.45; cursor: not-allowed; }
.al-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.al-switch__track { width: 34px; height: 20px; flex: none; border-radius: 999px; background: var(--ink-200); position: relative; transition: background var(--duration-base) var(--ease-out); }
.al-switch input:checked + .al-switch__track { background: var(--green-500); }
.al-switch input:focus-visible + .al-switch__track { box-shadow: var(--shadow-accent-glow); }
.al-switch__thumb { position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 999px; background: var(--paper-0); box-shadow: 0 1px 2px rgba(10,12,14,0.2); transition: transform var(--duration-base) var(--ease-out); }
.al-switch input:checked + .al-switch__track .al-switch__thumb { transform: translateX(14px); }
.al-switch__label { font-size: 14px; color: var(--text-strong); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-switch-css')) {
    const s = document.createElement('style');
    s.id = 'al-switch-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Switch({ label, checked, onChange, disabled = false, style }) {
  ensureCss();
  return (
    <label className={`al-switch${disabled ? ' al-switch--disabled' : ''}`} style={style}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} />
      <span className="al-switch__track"><span className="al-switch__thumb"></span></span>
      {label ? <span className="al-switch__label">{label}</span> : null}
    </label>
  );
}
