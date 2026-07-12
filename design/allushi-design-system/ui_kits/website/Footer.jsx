function Footer() {
  const link = { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-inverse-muted)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--surface-dark)', borderTop: '1px solid var(--border-dark)', padding: '56px 0 40px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <img src="../../assets/logo/allushi-wordmark-white.png" alt="Allushi" style={{ height: 30, display: 'block' }} />
            <p style={{
              fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)', color: 'var(--ink-500)', margin: '16px 0 0',
            }}>Thessaloniki<span style={{ padding: '0 8px', color: 'var(--ink-600)' }}>•</span>allushi.io</p>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            <a href="#services" style={link}>Services</a>
            <a href="#work" style={link}>Work</a>
            <a href="#process" style={link}>Process</a>
            <a href="#contact" style={link}>Contact</a>
          </div>
        </div>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-600)',
          borderTop: '1px solid var(--border-dark)', paddingTop: 20, margin: '40px 0 0',
        }}>© 2026 Allushi — Software • AI • Systems</p>
      </div>
    </footer>
  );
}

window.AllushiKitFooter = Footer;
