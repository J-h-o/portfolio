const { Input, Select, Checkbox, Button, Toast } = window.AllushiDesignSystem_386bb0;
const SectionHeadC = window.AllushiKitSectionHead;

function Contact() {
  const [email, setEmail] = React.useState('');
  const [type, setType] = React.useState('');
  const [brief, setBrief] = React.useState('');
  const [nda, setNda] = React.useState(false);
  const [error, setError] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    if (!email.includes('@')) { setError('Enter a valid email so we can reply.'); return; }
    setError('');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)',
        display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'start',
      }}>
        <SectionHeadC kicker="Contact" title="Tell us what you're building."
          sub="Send a short brief — we read it the same day and reply within one business day. If it's a fit, we scope it in the first call." />
        <div style={{
          background: 'var(--surface-card)', border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)', padding: 28,
          display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          <Input label="Work email" placeholder="you@company.com" value={email}
            onChange={(e) => setEmail(e.target.value)} error={error} />
          <Select label="Project type" placeholder="Choose…" value={type} onChange={(e) => setType(e.target.value)}
            options={[
              { value: 'web', label: 'Web application' },
              { value: 'backend', label: 'Backend / infrastructure' },
              { value: 'ai', label: 'AI / automation' },
              { value: 'plugin', label: 'Plugin / integration' },
            ]} />
          <Input label="Brief" multiline rows={4} placeholder="What are you building, and by when?"
            value={brief} onChange={(e) => setBrief(e.target.value)} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <Checkbox label="Send an NDA first" checked={nda} onChange={(e) => setNda(e.target.checked)} />
            <Button variant="accent" onClick={submit}>Send brief</Button>
          </div>
        </div>
      </div>
      {sent ? (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 60 }}>
          <Toast tone="success" title="Brief sent" description="We'll reply within one business day." onDismiss={() => setSent(false)} />
        </div>
      ) : null}
    </section>
  );
}

window.AllushiKitContact = Contact;
