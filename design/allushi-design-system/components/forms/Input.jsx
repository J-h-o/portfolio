import React from 'react';

const css = `
.al-field { font-family: var(--font-body); display: flex; flex-direction: column; gap: 6px; }
.al-field__label { font-size: 13px; font-weight: 500; color: var(--text-strong); }
.al-input { font-family: var(--font-body); font-size: 14px; color: var(--text-strong); background: var(--paper-0); border: 1px solid var(--border-strong); border-radius: var(--radius-sm); padding: 9px 12px; transition: border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out); width: 100%; box-sizing: border-box; }
.al-input::placeholder { color: var(--text-faint); }
.al-input:hover:not(:disabled) { border-color: var(--ink-300); }
.al-input:focus { outline: none; border-color: var(--border-accent); box-shadow: var(--shadow-accent-glow); }
.al-input:disabled { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
.al-input--error { border-color: var(--status-danger); }
.al-field__hint { font-size: 12px; color: var(--text-muted); }
.al-field__error { font-size: 12px; color: var(--status-danger); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-input-css')) {
    const s = document.createElement('style');
    s.id = 'al-input-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Input({ label, hint, error, type = 'text', placeholder, value, onChange, disabled = false, multiline = false, rows = 4, style }) {
  ensureCss();
  const cls = `al-input${error ? ' al-input--error' : ''}`;
  return (
    <label className="al-field" style={style}>
      {label ? <span className="al-field__label">{label}</span> : null}
      {multiline ? (
        <textarea className={cls} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} rows={rows}></textarea>
      ) : (
        <input className={cls} type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
      )}
      {error ? <span className="al-field__error">{error}</span> : hint ? <span className="al-field__hint">{hint}</span> : null}
    </label>
  );
}
