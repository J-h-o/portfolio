const { Card, Tag } = window.AllushiDesignSystem_386bb0;

function SectionHead({ kicker, title, sub, dark }) {
  return (
    <div style={{ maxWidth: 560 }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'var(--text-xs)', textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)', color: dark ? 'var(--green-400)' : 'var(--text-accent)', margin: 0,
      }}>{kicker}</p>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-2xl)',
        lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)',
        color: dark ? 'var(--text-inverse)' : 'var(--text-strong)', margin: '12px 0 0',
      }}>{title}</h2>
      {sub ? <p style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)',
        color: dark ? 'var(--text-inverse-muted)' : 'var(--text-body)', margin: '12px 0 0',
      }}>{sub}</p> : null}
    </div>
  );
}

const services = [
  { icon: 'layout', title: 'Frontend & product', desc: 'Interfaces your users trust — web apps, portals, dashboards.', tags: ['React', 'Flutter', 'TypeScript'] },
  { icon: 'server', title: 'Backend & infrastructure', desc: 'APIs and platforms built to hold up under real load.', tags: ['Node', 'Postgres', 'K8s'] },
  { icon: 'brain-circuit', title: 'AI & automation', desc: 'LLM pipelines and automation systems that run themselves.', tags: ['LLMs', 'Pipelines', 'RAG'] },
  { icon: 'plug', title: 'Plugins & integrations', desc: 'The connectors your stack is missing — built to fit exactly.', tags: ['APIs', 'Webhooks', 'SDKs'] },
];

function Services() {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <section id="services" style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <SectionHead kicker="Services" title="Big, complicated solutions. Small, senior team."
          sub="Every project is tailor-made. No templates, no hand-offs to juniors — the people you talk to are the people who build." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }}>
          {services.map((s) => (
            <Card key={s.title} hoverable>
              <i data-lucide={s.icon} style={{ width: 24, height: 24, color: 'var(--text-strong)' }}></i>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                color: 'var(--text-strong)', margin: '14px 0 0',
              }}>{s.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 'var(--leading-normal)',
                color: 'var(--text-body)', margin: '8px 0 0',
              }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 16 }}>
                {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AllushiKitSectionHead = SectionHead;
window.AllushiKitServices = Services;
