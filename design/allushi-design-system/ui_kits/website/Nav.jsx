const { Button } = window.AllushiDesignSystem_386bb0;

function Nav({ onCta }) {
  const link = {
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--text-body)',
    textDecoration: 'none', padding: '6px 2px',
  };
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-default)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo/allushi-wordmark-black-transparent.png" alt="Allushi" style={{ height: 26, display: 'block' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#services" style={link}>Services</a>
          <a href="#work" style={link}>Work</a>
          <a href="#process" style={link}>Process</a>
          <a href="#contact" style={link}>Contact</a>
          <Button variant="accent" size="sm" onClick={onCta}>Start a project</Button>
        </div>
      </div>
    </nav>
  );
}

window.AllushiKitNav = Nav;
