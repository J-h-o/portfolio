import React from 'react';

const css = `
.al-radio { font-family: var(--font-body); display: inline-flex; align-items: flex-start; gap: 10px; cursor: pointer; user-select: none; }
.al-radio--disabled { opacity: 0.45; cursor: not-allowed; }
.al-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.al-radio__dot { width: 16px; height: 16px; flex: none; margin-top: 1px; border: 1px solid var(--border-strong); border-radius: 999px; background: var(--paper-0); display: flex; align-items: center; justify-content: center; transition: border-color var(--duration-fast) var(--ease-out); }
.al-radio input:checked + .al-radio__dot { border-color: var(--ink-950); border-width: 1.5px; }
.al-radio input:focus-visible + .al-radio__dot { box-shadow: var(--shadow-accent-glow); }
.al-radio__inner { width: 8px; height: 8px; border-radius: 999px; background: var(--ink-950); transform: scale(0); transition: transform var(--duration-fast) var(--ease-out); }
.al-radio input:checked + .al-radio__dot .al-radio__inner { transform: scale(1); }
.al-radio__label { font-size: 14px; color: var(--text-strong); line-height: 1.35; }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-radio-css')) {
    const s = document.createElement('style');
    s.id = 'al-radio-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Radio({ name, label, checked, onChange, value, disabled = false, style }) {
  ensureCss();
  return (
    <label className={`al-radio${disabled ? ' al-radio--disabled' : ''}`} style={style}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} />
      <span className="al-radio__dot"><span className="al-radio__inner"></span></span>
      {label ? <span className="al-radio__label">{label}</span> : null}
    </label>
  );
}
