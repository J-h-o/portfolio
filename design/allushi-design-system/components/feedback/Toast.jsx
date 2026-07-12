import React from 'react';

const css = `
.al-toast { font-family: var(--font-body); display: flex; align-items: flex-start; gap: 12px; background: var(--ink-950); color: var(--paper-0); border-radius: var(--radius-md); padding: 14px 16px; box-shadow: var(--shadow-overlay); max-width: 380px; animation: al-toast-in var(--duration-base) var(--ease-out); }
.al-toast__dot { width: 8px; height: 8px; border-radius: 999px; flex: none; margin-top: 5px; }
.al-toast__dot--success { background: var(--green-400); }
.al-toast__dot--warning { background: #E3A63A; }
.al-toast__dot--danger { background: #F0705F; }
.al-toast__dot--info { background: #6D9EF5; }
.al-toast__title { font-size: 14px; font-weight: 600; margin: 0; }
.al-toast__desc { font-size: 13px; line-height: 1.45; color: var(--ink-300); margin: 2px 0 0; }
.al-toast__x { border: none; background: none; cursor: pointer; color: var(--ink-400); font-size: 16px; line-height: 1; padding: 2px; margin-left: auto; }
.al-toast__x:hover { color: var(--paper-0); }
@keyframes al-toast-in { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: translateY(0) } }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-toast-css')) {
    const s = document.createElement('style');
    s.id = 'al-toast-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Toast({ tone = 'info', title, description, onDismiss, style }) {
  ensureCss();
  return (
    <div className="al-toast" role="status" style={style}>
      <span className={`al-toast__dot al-toast__dot--${tone}`}></span>
      <div>
        <p className="al-toast__title">{title}</p>
        {description ? <p className="al-toast__desc">{description}</p> : null}
      </div>
      {onDismiss ? <button type="button" className="al-toast__x" aria-label="Dismiss" onClick={onDismiss}>×</button> : null}
    </div>
  );
}
