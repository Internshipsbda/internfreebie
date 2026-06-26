// FRTF Competency Self-Assessment — student lead-magnet tool.
// 12 competencies across 4 clusters, rated 1–5, producing a Gap Report.

const FRTF_CLUSTERS = [
  {
    n: '01',
    title: 'Expand & Transfer Expertise',
    blurb: 'Turning what you know into workplace results.',
    items: [
      ['discipline', 'Discipline Proficiency', 'I can apply my academic knowledge to solve real-world workplace tasks.'],
      ['tech', 'Technological Agility', 'I am comfortable learning new software, handling IT systems, and maintaining data security.'],
      ['info', 'Information Literacy', 'I can find, verify, and organize data to support professional projects.'],
    ],
  },
  {
    n: '02',
    title: 'Develop Self',
    blurb: 'Managing yourself and your own growth.',
    items: [
      ['mgmt', 'Self-Management', 'I manage my time, energy, and emotions effectively, even under pressure.'],
      ['assess', 'Self-Assessment', 'I regularly reflect on my performance and proactively seek feedback to improve.'],
      ['account', 'Professional Accountability', 'I take full ownership of my tasks, meet deadlines, and act as an ambassador for my institution.'],
    ],
  },
  {
    n: '03',
    title: 'Build Relationships',
    blurb: 'Working well with the people around you.',
    items: [
      ['comm', 'Professional Communication', 'My verbal and written messages (emails, reports) are clear, respectful, and effective.'],
      ['collab', 'Collaboration', 'I work effectively in teams, share credit, and contribute to a positive squad atmosphere.'],
      ['inter', 'Intercultural Effectiveness', 'I can adapt my behavior to work successfully with colleagues from diverse backgrounds.'],
    ],
  },
  {
    n: '04',
    title: 'Design & Deliver Solutions',
    blurb: 'Thinking rigorously and shipping real work.',
    items: [
      ['critical', 'Critical Thinking', 'I analyze problems deeply using tools like the Ladder of Inference before making assumptions.'],
      ['impl', 'Implementation', 'I follow through on plans and use structures like IMRAD to deliver rigorous technical reports.'],
      ['innov', 'Innovation Mindset', 'I look for creative ways to improve company processes and suggest "outside-in" perspectives.'],
    ],
  },
];
const ALL_FRTF = FRTF_CLUSTERS.flatMap((c) => c.items);
const MAX = ALL_FRTF.length * 5;

const SCALE_LEGEND = [
  ['1', 'Rarely', 'I rarely demonstrate this or have significant difficulty.'],
  ['3', 'Emerging', 'I sometimes demonstrate this and am actively learning.'],
  ['5', 'Consistently', 'I consistently demonstrate this at a high level, with evidence of growth.'],
];

function StudentAssessment({ store, setStore, onSubmit }) {
  const { Card, Eyebrow, Button, TextField, ScaleSelector } = window.InternshipInsightsCoDesignSystem_cd6ca8;
  const { name, email, ratings } = store;

  const setRating = (key, v) => setStore((s) => ({ ...s, ratings: { ...s.ratings, [key]: v } }));
  const setField = (k, v) => setStore((s) => ({ ...s, [k]: v }));

  const answered = Object.keys(ratings).length;
  const total = Object.values(ratings).reduce((a, b) => a + b, 0);
  const all = answered === ALL_FRTF.length;
  const pct = Math.round((answered / ALL_FRTF.length) * 100);

  const firstUnanswered = () => {
    const el = document.querySelector('[data-unanswered="1"]');
    if (el) el.scrollTo ? null : null;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%', maxWidth: 780, padding: '44px 20px 80px', margin: '0 auto' }}>
      <Eyebrow tone="blue" style={{ marginBottom: 14 }}>Future Ready Talent Framework</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 6vw, 46px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.04, margin: '0 0 14px', color: 'var(--ink)' }}>
        FRTF Competency Self-Assessment
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 17, lineHeight: 1.55, maxWidth: 620, margin: '0 0 28px' }}>
        Rate your current ability across the 12 core competencies employers actually look for. It takes about five minutes,
        and you'll get a personalized <strong style={{ color: 'var(--ink)' }}>Gap Report</strong> showing your strengths, your emerging skills, and exactly what to work on next.
      </p>

      {/* Scale legend */}
      <Card style={{ marginBottom: 24 }} padding={22}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--text-muted)', marginBottom: 14 }}>How the 1–5 scale works</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
          {SCALE_LEGEND.map(([num, label, desc]) => (
            <div key={num} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flex: '0 0 auto', width: 30, height: 30, borderRadius: 'var(--radius-md)', background: 'var(--blue-50)', color: 'var(--blue-800)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{num}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{label}</div>
                <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.45, marginTop: 2 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Identity */}
      <Card style={{ marginBottom: 26 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <TextField label="Your name" id="name" placeholder="First and last name" value={name} onChange={(e) => setField('name', e.target.value)} focusTone="blue" />
          <TextField label="Email (optional)" id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setField('email', e.target.value)} focusTone="blue" />
        </div>
      </Card>

      {/* Clusters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {FRTF_CLUSTERS.map((cluster) => (
          <Card key={cluster.title} padding={26}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--blue)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '5px 15px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <span style={{ opacity: 0.6 }}>{cluster.n}</span> {cluster.title}
              </span>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '0 0 20px' }}>{cluster.blurb}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              {cluster.items.map((c) => {
                const done = ratings[c[0]] != null;
                return (
                  <div key={c[0]} data-unanswered={done ? '0' : '1'} style={{ paddingTop: 2 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>{c[1]}</div>
                    <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', margin: '3px 0 12px', lineHeight: 1.5 }}>{c[2]}</p>
                    <ScaleSelector name={c[1]} value={ratings[c[0]]} onChange={(v) => setRating(c[0], v)} />
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <Button variant="primary" size="lg" fullWidth disabled={!all} onClick={() => { onSubmit(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          {all ? `See my Gap Report  →` : `Answer all 12 to continue  ·  ${answered} / 12`}
        </Button>
        {!all && answered > 0 && (
          <button type="button" onClick={firstUnanswered} style={{ display: 'block', margin: '14px auto 0', background: 'none', border: 'none', color: 'var(--blue-700)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Jump to the next unanswered competency
          </button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { StudentAssessment, FRTF_CLUSTERS, ALL_FRTF, FRTF_MAX: MAX });
