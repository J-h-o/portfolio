import React from 'react';

const css = `
.al-dialog-backdrop { position: fixed; inset: 0; background: rgba(10, 12, 14, 0.55); display: flex; align-items: center; justify-content: center; padding: 24px; z-index: 100; animation: al-dialog-fade var(--duration-base) var(--ease-out); }
.al-dialog { font-family: var(--font-body); background: var(--surface-card); border-radius: var(--radius-lg); box-shadow: var(--shadow-overlay); max-width: 480px; width: 100%; animation: al-dialog-rise var(--duration-base) var(--ease-out); }
.al-dialog__head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 20px 24px 0; }
.al-dialog__title { font-family: var(--font-display); font-weight: 600; font-size: 20px; color: var(--text-strong); margin: 0; }
.al-dialog__close { border: none; background: none; cursor: pointer; color: var(--text-muted); font-size: 18px; line-height: 1; padding: 4px; border-radius: var(--radius-xs); }
.al-dialog__close:hover { color: var(--text-strong); background: var(--surface-sunken); }
.al-dialog__body { padding: 12px 24px 20px; font-size: 14px; line-height: 1.55; color: var(--text-body); }
.al-dialog__foot { display: flex; justify-content: flex-end; gap: 10px; padding: 0 24px 20px; }
@keyframes al-dialog-fade { from { opacity: 0 } to { opacity: 1 } }
@keyframes al-dialog-rise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-dialog-css')) {
    const s = document.createElement('style');
    s.id = 'al-dialog-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Dialog({ open = false, onClose, title, footer, children, style }) {
  ensureCss();
  if (!open) return null;
  return (
    <div className="al-dialog-backdrop" onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="al-dialog" role="dialog" aria-modal="true" style={style}>
        <div className="al-dialog__head">
          <h2 className="al-dialog__title">{title}</h2>
          <button type="button" className="al-dialog__close" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className="al-dialog__body">{children}</div>
        {footer ? <div className="al-dialog__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
