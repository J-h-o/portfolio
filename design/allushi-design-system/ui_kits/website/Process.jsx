const SectionHeadP = window.AllushiKitSectionHead;

const steps = [
  { n: '01', title: 'Scope', desc: 'A short call, then a written plan: what we build, what it costs, when it lands. Days, not weeks.' },
  { n: '02', title: 'Build', desc: 'Weekly demos of working software. You talk directly to the people writing the code.' },
  { n: '03', title: 'Ship', desc: 'Fast delivery is the point — production from week one, launch without ceremony.' },
  { n: '04', title: 'Support', desc: 'We stay close after launch. Monitoring, iteration, and a person who answers.' },
];

function Process() {
  return (
    <section id="process" style={{ background: 'var(--surface-dark)', padding: '96px 0' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' }}>
        <SectionHeadP dark kicker="Process" title="Personal collaboration, engineered."
          sub="No account managers between you and the work. Four steps, every project." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 48 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              borderTop: i === 0 ? '2px solid var(--green-500)' : '1px solid var(--border-dark-strong)',
              paddingTop: 20,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13, color: i === 0 ? 'var(--green-400)' : 'var(--ink-500)' }}>{s.n}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--text-inverse)', margin: '10px 0 0' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 'var(--leading-normal)', color: 'var(--text-inverse-muted)', margin: '10px 0 0' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.AllushiKitProcess = Process;
