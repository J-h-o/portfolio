import React from 'react';

const css = `
.al-tabs { font-family: var(--font-body); display: flex; gap: 4px; border-bottom: 1px solid var(--border-default); }
.al-tabs--dark { border-bottom-color: var(--border-dark); }
.al-tab { font-family: var(--font-body); font-size: 14px; font-weight: 500; color: var(--text-muted); background: none; border: none; border-bottom: 2px solid transparent; padding: 10px 14px; margin-bottom: -1px; cursor: pointer; transition: color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out); }
.al-tab:hover { color: var(--text-strong); }
.al-tab:focus-visible { outline: none; box-shadow: var(--shadow-accent-glow); border-radius: var(--radius-xs); }
.al-tab--active { color: var(--text-strong); border-bottom-color: var(--green-500); }
.al-tabs--dark .al-tab { color: var(--text-inverse-muted); }
.al-tabs--dark .al-tab:hover, .al-tabs--dark .al-tab--active { color: var(--text-inverse); }
`;

function ensureCss() {
  if (typeof document !== 'undefined' && !document.getElementById('al-tabs-css')) {
    const s = document.createElement('style');
    s.id = 'al-tabs-css';
    s.textContent = css;
    document.head.appendChild(s);
  }
}

export function Tabs({ items = [], activeId, onChange, dark = false, style }) {
  ensureCss();
  return (
    <div className={`al-tabs${dark ? ' al-tabs--dark' : ''}`} role="tablist" style={style}>
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          role="tab"
          aria-selected={it.id === activeId}
          className={`al-tab${it.id === activeId ? ' al-tab--active' : ''}`}
          onClick={() => onChange && onChange(it.id)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
