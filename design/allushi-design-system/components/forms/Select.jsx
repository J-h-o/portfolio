import React from 'react';

const css = `
.al-select-wrap { position: relative; display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
.al-select-wrap__label { font-size: 13px; font-weight: 500; color: var(--text-strong); }
.al-select-box { position: relative; }
.al-select { appearance: none; -webkit-appearance: none; font-family: var(--font-body); font-size: 14px; color: var(--text-strong); background: var(--paper-0); border: 1px solid var(--border-strong); border-radius: var(--radius-sm); padding: 9px 34px 9px 12px; width: 100%; box-sizing: border-box; cursor: pointer; transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out); }
.al-select:hover:not(:disabled) { border-color: var(--ink-300); }
.al-select:focus { outline: none; border-color: var(--border-accent); box-shadow: var(--shadow-accent-glow); }
.al-select:disabled { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
.al-select-box::after { content: ''; position: absolute; right: 13px; top: 50%; width: 7px; height: 7px; border-right: 1.5px solid var(--text-muted); border-bottom: 1.5px solid var(--text-muted); transform: translateY(-70%) rotate(45deg); pointer-events: none; }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-select-css')) {
    const s = document.createElement('style');
    s.id = 'al-select-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Select({ label, options = [], value, onChange, placeholder, disabled = false, style }) {
  ensureCss();
  return (
    <label className="al-select-wrap" style={style}>
      {label ? <span className="al-select-wrap__label">{label}</span> : null}
      <span className="al-select-box">
        <select className="al-select" value={value} onChange={onChange} disabled={disabled}>
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </span>
    </label>
  );
}
