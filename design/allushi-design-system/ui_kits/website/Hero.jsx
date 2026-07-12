const { Button } = window.AllushiDesignSystem_386bb0;

function TerminalCard() {
  const line = { margin: 0, whiteSpace: 'pre' };
  return (
    <div style={{
      background: 'var(--surface-dark-card)', border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 14px', borderBottom: '1px solid var(--border-dark)',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-inverse-muted)' }}>allushi — deploy</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="al-pulse" style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--green-400)' }}></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--green-400)' }}>live</span>
        </span>
      </div>
      <div style={{ padding: '16px 14px', fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.75, color: 'var(--ink-200)' }}>
        <p style={line}><span style={{ color: 'var(--green-400)' }}>$</span> allushi deploy --env production</p>
        <p style={line}><span style={{ color: 'var(--ink-500)' }}>»</span> building 34 services…</p>
        <p style={line}><span style={{ color: 'var(--ink-500)' }}>»</span> running 1,204 checks…</p>
        <p style={line}><span style={{ color: 'var(--green-400)' }}>✓</span> shipped in 41s · 0 failures</p>
        <p style={{ ...line, color: 'var(--ink-500)' }}>v2.4.1 • 2026-07-12 • prod</p>
      </div>
    </div>
  );
}

function Hero({ onCta }) {
  return (
    <header id="top" style={{ background: 'var(--surface-dark)', color: 'var(--text-inverse)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px var(--container-pad) 0',
        display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 64, alignItems: 'center',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'var(--text-xs)', textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-wide)', color: 'var(--green-400)', margin: 0,
          }}>Software<span style={{ color: 'var(--ink-500)', padding: '0 8px' }}>•</span>AI<span style={{ color: 'var(--ink-500)', padding: '0 8px' }}>•</span>Systems</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-4xl)',
            lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', margin: '20px 0 0',
          }}>Tailor-made software, delivered fast.</h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-normal)',
            color: 'var(--text-inverse-muted)', margin: '20px 0 0', maxWidth: 480,
          }}>We're a small team that ships big systems — frontend, backend, AI, and the automations
          in between — for organizations that can't afford to get it wrong.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Button variant="accent" onClick={onCta}>Start a project</Button>
            <Button variant="inverse" onClick={() => window.scrollTo({ top: document.getElementById('work').offsetTop - 64, behavior: 'smooth' })}>See the work</Button>
          </div>
        </div>
        <TerminalCard />
      </div>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--container-pad) 40px',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'var(--text-xs)', textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wide)', color: 'var(--ink-500)', margin: 0, borderTop: '1px solid var(--border-dark)', paddingTop: 24,
        }}>Trusted by<span style={{ padding: '0 10px' }}>—</span>
          Government<span style={{ color: 'var(--ink-600)', padding: '0 10px' }}>•</span>
          Banking<span style={{ color: 'var(--ink-600)', padding: '0 10px' }}>•</span>
          Healthtech<span style={{ color: 'var(--ink-600)', padding: '0 10px' }}>•</span>
          Startups</p>
      </div>
    </header>
  );
}

window.AllushiKitHero = Hero;
