// FRTF Gap Report — the scored result screen with tailored next steps.

function GapReport({ store, onRestart }) {
  const { Card, Badge, Eyebrow, Button, ScoreBar, ResultPanel } = window.InternshipInsightsCoDesignSystem_cd6ca8;
  const { name, ratings } = store;
  const CLUSTERS = window.FRTF_CLUSTERS;
  const ALL = window.FRTF_ALL || window.ALL_FRTF;
  const MAX = window.FRTF_MAX;

  const total = Object.values(ratings).reduce((a, b) => a + b, 0);
  const strengths = ALL.filter((c) => ratings[c[0]] >= 4);
  const emerging = ALL.filter((c) => ratings[c[0]] === 3);
  const gaps = ALL.filter((c) => ratings[c[0]] <= 2);

  // Overall band
  const band = total >= 48
    ? { label: 'Future Ready', tone: 'You are demonstrating strong, evidenced capability across the framework. Your job now is to capture the proof.' }
    : total >= 36
    ? { label: 'Building Momentum', tone: 'A solid foundation with clear room to stretch. Target a few competencies and convert effort into evidence.' }
    : { label: 'Early Foundation', tone: 'You have real starting points to build on. Focus your energy on a small number of priority gaps* first.' };

  const Stat = ({ value, label, color }) => (
    <div style={{ flex: 1, minWidth: 90, background: 'rgba(255,255,255,.10)', borderRadius: 'var(--radius-lg)', padding: '14px 16px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30, lineHeight: 1, color }}>{value}</div>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,.75)', marginTop: 6 }}>{label}</div>
    </div>
  );

  // A reusable category block
  const Category = ({ accent, badgeTone, badge, title, range, meaning, items, action, empty }) => (
    <Card accent={accent} style={{ marginBottom: 18 }} padding={26}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 }}>
        <Badge tone={badgeTone}>{badge}</Badge>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>Scores of {range}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em', margin: '8px 7px', color: 'var(--ink)' }}>{title}</h3>
      <p style={{ fontSize: 14.5, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 16px' }}>{meaning}</p>

      {items.length === 0 ? (
        <p style={{ fontSize: 13.5, fontStyle: 'italic', color: 'var(--text-muted)', margin: 0 }}>{empty}</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px' }}>
          {items.map((c) => (
            <li key={c[0]} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: '1px solid var(--slate)' }}>
              <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)' }}>{c[1]}</span>
              <span style={{ flex: '0 0 auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: accent === 'orange' ? 'var(--orange-700)' : accent === 'blue' ? 'var(--blue-700)' : 'var(--burnt)' }}>{ratings[c[0]]} / 5</span>
            </li>
          ))}
        </ul>
       )}

      {items.length > 0 && action}
    </Card>
  );

  const ActionNote = ({ children }) => (
    <div style={{ background: 'var(--slate-50)', borderRadius: 'var(--radius-lg)', padding: '14px 16px', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{children}</div>
  );

  const term = (t) => <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>{t}</strong>;

  return (
    <div style={{ width: '100%', maxWidth: 780, padding: '44px 20px 80px', margin: '0 auto' }} id="report-root">
      <Badge tone="orange" style={{ marginBottom: 14 }}>Your Gap Report</Badge>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 42px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 8px', color: 'var(--ink)' }}>
        {name ? `${name}'s` : 'Your'} FRTF Gap Report
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.55, margin: '0 0 24px' }}>
        Based on your self-ratings across all 12 competencies. Use it to focus your next internship or first professional role.
      </p>

      {/* Headline score */}
      <ResultPanel label="Total Score" value={total} suffix={`/ ${MAX}`} style={{ marginBottom: 14 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{band.label}</div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.9)', margin: '0 0 16px' }}>{band.tone}</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Stat value={strengths.length} label="Strengths" color="#FBA856" />
          <Stat value={emerging.length} label="Emerging" color="#fff" />
          <Stat value={gaps.length} label="Priority gaps" color="#FFD9C2" />
        </div>
      </ResultPanel>

      {/* Cluster breakdown */}
      <Card style={{ marginBottom: 26 }} padding={26}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: 16 }}>How you scored by cluster</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CLUSTERS.map((cl) => {
            const sub = cl.items.reduce((s, c) => s + (ratings[c[0]] || 0), 0);
            const subMax = cl.items.length * 5;
            const p = Math.round((sub / subMax) * 100);
            const tone = p >= 80 ? 'orange' : p >= 55 ? 'blue' : 'ink';
            return (
              <div key={cl.title}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 7 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>
                    <span style={{ color: 'var(--text-muted)', marginRight: 8 }}>{cl.n}</span>{cl.title}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13.5, color: 'var(--text-secondary)' }}>{sub} / {subMax}</span>
                </div>
                <ScoreBar percent={p} tone={tone} height={9} />
              </div>
            );
          })}
        </div>
      </Card>

      <Eyebrow tone="ink" style={{ marginBottom: 14 }}>What to do next</Eyebrow>

      <Category
        accent="orange" badgeTone="orange" badge="Strengths" range="4–5"
        title="Your Strengths" items={strengths}
        meaning='These are your innate "superpowers" or well-developed skills.'
        empty="No competencies hit 4–5 yet — that's your signal to build evidence in the areas closest to a 4."
        action={
          <ActionNote>
            Record specific {term('Evidence of Growth')} for each — a concrete story of when you demonstrated it.
            Use these stories in your {term('Signature Showcase')} to prove your value to employers.
          </ActionNote>
        }
      />

      <Category
        accent="blue" badgeTone="blue" badge="Emerging" range="3"
        title="Emerging Skills" items={emerging}
        meaning='You have a foundation here but need more concrete experience to make it consistent.'
        empty="No competencies sit at exactly 3 right now."
        action={
          <ActionNote>
            Seek out {term('Goldilocks Tasks')} — projects challenging enough to stretch you, but not so difficult they cause anxiety. The right level of difficulty is where growth happens fastest.
          </ActionNote>
        }
      />

      <Category
        accent="ink" badgeTone="wicked" badge="Priority Gaps" range="1–2"
        title="Your Priority Gaps" items={gaps}
        meaning='These are areas where your "80% brain" needs more Cognitive Scaffolding — supportive structure that carries the load while you build the skill.'
        empty="No priority gaps — a strong foundation across the board."
        action={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ActionNote>
              <strong style={{ color: 'var(--ink)' }}>For planning gaps —</strong> use a {term('Micro-Milestone Checklist')} to break work into small, trackable steps and stay organized.
            </ActionNote>
            <ActionNote>
              <strong style={{ color: 'var(--ink)' }}>For learning gaps —</strong> run the {term('Kolb Reflection Cycle')} (Experience → Reflection → Conceptualization → Experimentation) every Friday to convert tasks into transferable principles.
            </ActionNote>
            <ActionNote>
              <strong style={{ color: 'var(--ink)' }}>For confidence gaps —</strong> use {term('Generation Tasks')}: attempt to solve a problem <em>before</em> asking for the answer, to trigger the {term('Hypercorrection Effect')} and lock in the learning.
            </ActionNote>
          </div>
        }
      />

      {/* CTA + actions */}
      <Card style={{ marginTop: 8, background: 'var(--blue-50)', border: '1px solid var(--blue-100)' }} padding={24}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, margin: '0 0 6px', color: 'var(--ink)' }}>Want help closing your gaps?</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '0 0 16px' }}>
          Internship Insights Co. turns this report into a plan — structured preparation, real evidence, and a Signature Showcase that proves your value.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://www.internshipinsightsco.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <Button variant="secondary">Book a 20-minute consult →</Button>
          </a>
          <Button variant="outline" onClick={() => window.print()}>Save / print my report</Button>
        </div>
      </Card>

      <div style={{ marginTop: 22, textAlign: 'center' }}>
        <button type="button" onClick={onRestart} style={{ background: 'none', border: 'none', color: 'var(--blue-700)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
          Start over and retake the assessment
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { GapReport });
