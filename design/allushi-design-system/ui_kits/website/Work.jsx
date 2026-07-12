const { Card, Tabs, Badge, Tag } = window.AllushiDesignSystem_386bb0;
const SectionHead = window.AllushiKitSectionHead;

const cases = [
  { id: 1, cat: 'web', sector: 'Government', title: 'Citizen services portal', desc: 'Self-service portal replacing paper workflows for a public-sector agency.', status: 'live', tags: ['React', 'Node', 'Postgres'] },
  { id: 2, cat: 'ai', sector: 'Banking', title: 'Reconciliation automation', desc: 'Automated payments reconciliation — hours of manual review down to minutes.', status: 'live', tags: ['Pipelines', 'Python'] },
  { id: 3, cat: 'web', sector: 'Healthtech', title: 'Patient intake platform', desc: 'Clinical intake flows with strict data-protection requirements.', status: 'in review', tags: ['Flutter', 'APIs'] },
  { id: 4, cat: 'ai', sector: 'Startup', title: 'LLM support copilot', desc: 'Retrieval-backed assistant embedded in an existing support product.', status: 'live', tags: ['LLMs', 'RAG'] },
  { id: 5, cat: 'plugins', sector: 'Startup', title: 'Billing integrations suite', desc: 'A family of connectors between a SaaS product and three PSPs.', status: 'live', tags: ['Webhooks', 'SDKs'] },
  { id: 6, cat: 'plugins', sector: 'Banking', title: 'Core-banking adapter', desc: 'Plugin layer exposing legacy core-banking data to modern services.', status: 'live', tags: ['APIs', 'Java'] },
];

function Work() {
  const [tab, setTab] = React.useState('all');
  const shown = cases.filter((c) => tab === 'all' || c.cat === tab);
  return (
    <section id="work" style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border-default)', borderBottom: '1px solid var(--border-default)', padding: '96px 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
          <SectionHead kicker="Work" title="Systems in production."
            sub="A sample of what we've shipped. Names withheld where contracts require it." />
          <Tabs
            items={[{ id: 'all', label: 'All' }, { id: 'web', label: 'Web' }, { id: 'ai', label: 'AI & automation' }, { id: 'plugins', label: 'Plugins' }]}
            activeId={tab} onChange={setTab} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 40 }}>
          {shown.map((c) => (
            <Card key={c.id} padded={false} hoverable>
              <div style={{
                height: 130, background: 'var(--ink-100)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border-default)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', color: 'var(--text-faint)', textTransform: 'uppercase' }}>Case image — TBD</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-accent)' }}>{c.sector}</span>
                  <Badge tone={c.status === 'live' ? 'success' : 'warning'}>{c.status}</Badge>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-strong)', margin: '10px 0 0' }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', margin: '8px 0 0' }}>{c.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
                  {c.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AllushiKitWork = Work;
