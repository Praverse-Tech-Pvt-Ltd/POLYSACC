const PATHWAY_CONCEPTS = [
  {
    type: 'New Dosage Form',
    description: 'Converting an existing approved drug into a new physical form — tablet to patch, solution to microsphere, immediate-release to modified-release. The 505(b)(2) pathway allows reliance on the safety and efficacy data of the reference listed drug (RLD), requiring only bridging studies for the new form.',
    examples: 'Oral → transdermal, IM injectable → subcutaneous depot, immediate-release → extended-release capsule',
    effort: 'Medium',
  },
  {
    type: 'New Route of Administration',
    description: 'Repurposing an approved molecule via a different delivery route that achieves a meaningfully different pharmacokinetic or clinical outcome. The regulatory argument centres on the new clinical benefit while retaining reliance on the known safety database of the parent compound.',
    examples: 'Oral → intravesical, systemic → topical, IV → inhalation',
    effort: 'Medium–High',
  },
  {
    type: 'Modified-Release Concept',
    description: 'Engineering the release kinetics of an approved molecule to reduce dosing frequency, smooth plasma concentration curves, reduce peak-related adverse effects, or achieve site-specific release. A well-characterised pharmacokinetic-pharmacodynamic model underpins the regulatory submission.',
    examples: 'Once-daily formulation of a twice-daily molecule, gastric-retention systems, colon-targeted delivery',
    effort: 'Medium',
  },
  {
    type: 'Fixed-Dose Combination',
    description: 'Combining two or more individually approved molecules into a single dosage form where the combination demonstrates additive or synergistic clinical value, simplifies treatment, or improves adherence meaningfully over co-administration. The 505(b)(2) route allows reliance on each component\'s existing approval while adding combination-specific bridging data.',
    examples: 'Alpha-blocker + 5-ARI combination tablets, OCP combination optimisation, anti-emetic combinations',
    effort: 'Medium–High',
  },
  {
    type: 'New Strength or Packaging',
    description: 'Regulatory opportunities exist where an approved molecule lacks a clinically useful dose strength or patient-appropriate packaging format — paediatric doses, geriatric unit-dose packaging, or precision dose strengths for specific subpopulations.',
    examples: 'Paediatric dosing strengths, geriatric blister unit doses, precision microdose formulations',
    effort: 'Low–Medium',
  },
  {
    type: 'Repurposing / New Use Concept',
    description: 'Extending an approved molecule into a new indication where existing safety data supports the regulatory argument and the clinical evidence base is emerging. The 505(b)(2) pathway is ideally suited: the full safety database is inherited; only efficacy for the new indication requires demonstration.',
    examples: 'IC/BPS indications for existing urological molecules, neuropathy adjunct use for metabolic drugs',
    effort: 'High — indication-specific trials required',
  },
]

// Product and programme information is published deliberately. Third-party company
// names (partners, licensees, innovators) are withheld — refer to partners generically.
const PROGRAMMES = [
  {
    id: 'eltrombopag',
    name: 'Eltrombopag',
    subtitle: 'Formulation Development & Technology Transfer',
    drugClass: 'Thrombopoietin Receptor Agonist (TPO-RA)',
    reference: 'Promacta® / Revolade®',
    dosageForm: 'Oral tablets — 12.5 mg, 25 mg, 50 mg, 75 mg',
    stage: 'Technology package complete — ready to transfer',
    stageTone: 'ready' as const,
    summary:
      'Eltrombopag is an oral thrombopoietin receptor agonist that stimulates platelet production, indicated in chronic immune thrombocytopenia, severe aplastic anaemia and thrombocytopenia associated with chronic hepatitis C. Polysacc has developed and optimised Eltrombopag tablets with a robust manufacturing process and a complete analytical package. Rights for the United States and Canada have already been outlicensed; commercialisation partners are now being sought for Europe and Australia.',
    indications: [
      'Chronic immune thrombocytopenia (ITP)',
      'Severe aplastic anaemia (SAA)',
      'Hepatitis C-associated thrombocytopenia',
    ],
    milestones: [
      { label: 'API qualification', status: 'Completed' },
      { label: 'Formulation development', status: 'Completed' },
      { label: 'Analytical methods', status: 'Completed' },
      { label: 'Process optimisation', status: 'Completed' },
      { label: 'Technology package', status: 'Completed' },
      { label: 'Technology transfer', status: 'Ready' },
      { label: 'Regulatory support', status: 'Available' },
    ],
    detailTitle: 'Strategic Advantage',
    detail: [
      'Proven formulation with a fully characterised manufacturing process.',
      'Successful outlicensing already achieved for the USA and Canada.',
      'Ready-to-transfer technology package — a de-risked route to rapid market entry.',
      'Technical and regulatory support available throughout transfer.',
      'Flexible licensing models: commercialisation partnership or regional technology licensing.',
    ],
    availability: 'USA & Canada outlicensed — open for Europe and Australia',
  },
  {
    id: 'sucroferric-oxyhydroxide',
    name: 'Sucroferric Oxyhydroxide',
    subtitle: 'Oral Liquid Reformulation',
    drugClass: 'Iron-based phosphate binder',
    reference: 'Velphoro® (chewable tablet)',
    dosageForm: 'Oral liquid — reformulation of the approved chewable tablet',
    stage: 'Proof of concept complete — prototype under development',
    stageTone: 'progress' as const,
    summary:
      'Sucroferric oxyhydroxide binds dietary phosphate in the gastrointestinal tract, lowering serum phosphate in end-stage renal disease patients on dialysis. Because iron uptake from the complex is minimal, it avoids the iron-overload risk carried by other iron-based binders. The approved product exists only as a chewable tablet — a form poorly suited to the elderly, frail and dialysis-dependent population that actually takes it. Polysacc is developing an oral liquid to address that gap, pursuing a US FDA 505(b)(2) application with an EU Article 10(3) hybrid application as the parallel route.',
    indications: [
      'Hyperphosphataemia in chronic kidney disease',
      'End-stage renal disease patients on dialysis',
    ],
    milestones: [
      { label: 'Proof of concept — bench-scale batches', status: 'Completed' },
      { label: 'Analytical methods', status: 'Completed' },
      { label: 'Provisional patent application', status: 'Submitted' },
      { label: 'Complete specification — early publication request', status: 'In process' },
      { label: 'Prototype development', status: 'In progress' },
      { label: 'In vitro protein binding studies', status: 'Planned' },
    ],
    detailTitle: 'Reformulation Rationale',
    detail: [
      'Taste and staining: the iron-based chewable tablet is unpalatable and discolours the tongue and teeth, which works against long-term adherence.',
      'Administration burden: most CKD dialysis patients are elderly, frequently bedridden or physically weakened, and cannot reliably chew a tablet at every meal.',
      'Moisture sensitivity: the molecule degrades in simple powder form, producing inconsistent dosing and under-dosing risk.',
      'An oral liquid resolves all three — easy to swallow, dose-accurate despite moisture sensitivity, and amenable to effective taste masking.',
    ],
    availability: 'Open for out-licensing, co-development or technology transfer',
  },
]

const SUCROFERRIC_MARKET = {
  heading: 'Phosphate Binder Market',
  stats: [
    { value: '$3.5Bn', label: 'Global phosphate binder market value, 2024' },
    { value: '4–5%', label: 'Projected market CAGR through 2028' },
    { value: '15–20%', label: 'Sucroferric oxyhydroxide share of the binder market' },
  ],
  shares: [
    { name: 'Sevelamer (carbonate / hydrochloride)', share: '35–40%' },
    { name: 'Lanthanum carbonate', share: '20–25%' },
    { name: 'Sucroferric oxyhydroxide', share: '15–20%' },
    { name: 'Other phosphate binders', share: '10–15%' },
  ],
  note: 'North America leads in usage, followed by Europe and Asia-Pacific where CKD incidence is rising. The reference product is protected by Orange Book-listed patents expiring between May 2029 and May 2035, several of which remain in active litigation — timing the reformulation entry window is a core part of the programme strategy.',
}

const BUSINESS_MODELS = [
  {
    model: 'Out-Licensing',
    polysacc: 'Provide IP, patent and product concept',
    partner: 'Develop, register, manufacture and commercialise',
    revenue: 'Upfront, milestones and royalties on sales',
  },
  {
    model: 'Co-Development',
    polysacc: 'Share R&D and IP, co-invest in development',
    partner: 'Share development, regulatory and manufacturing',
    revenue: 'Revenue or profit share, commercialisation rights split',
  },
  {
    model: 'Technology Transfer',
    polysacc: 'Provide detailed technology and assist transfer',
    partner: 'Scale up, validate and manufacture',
    revenue: 'Tech transfer fee plus optional supply or licence deals',
  },
]

const REGULATORY_NOTE = `The US FDA 505(b)(2) pathway is not a shortcut — it is a legitimate regulatory framework that allows new drug applications to rely, in part, on published literature or existing FDA drug approval findings for at least some portion of the evidence needed for approval. For a manufacturer with GMP-certified API capability and niche therapeutic focus, 505(b)(2) represents an entry mechanism into the US regulated market that does not require a full de novo clinical programme for each molecule.`

export default function FDA505b2Section() {
  return (
    <>
    {/* Hero */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '7rem 6rem 5rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 09 — Regulatory Strategy</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              US FDA<br />
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>505(b)(2) Ideas</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
              Active development programmes plus repurposing, new dosage form, new route, new combination and lifecycle extension opportunities under the US FDA 505(b)(2) pathway.
            </p>
            <div
              style={{
                padding: '1.1rem 1.4rem',
                background: 'rgba(138,171,138,0.06)',
                border: '0.5px solid rgba(138,171,138,0.2)',
                borderLeft: '3px solid var(--sage)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.4rem' }}>
                Status
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                Two named programmes in active development — Eltrombopag and Sucroferric Oxyhydroxide. Further concepts remain at opportunity stage pending internal review.
              </p>
            </div>
          </div>
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Concept Areas</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {PATHWAY_CONCEPTS.map((c) => (
                <span
                  key={c.type}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    color: 'var(--sage)',
                    background: 'rgba(138,171,138,0.1)',
                    border: '0.5px solid rgba(138,171,138,0.3)',
                    padding: '0.35rem 0.85rem',
                  }}
                >
                  {c.type}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(138,171,138,0.06)',
                border: '0.5px solid rgba(138,171,138,0.18)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                {REGULATORY_NOTE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Active programmes */}
    <section
      id="active-programmes"
      style={{ background: 'var(--cream)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>In Development</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            Active{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>programmes</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROGRAMMES.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="mobile-card-pad"
              style={{
                background: '#fff',
                border: '0.5px solid rgba(138,171,138,0.3)',
                borderTop: `3px solid ${p.stageTone === 'ready' ? 'var(--sage)' : 'var(--amber)'}`,
                padding: '2.5rem',
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.9rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2, margin: 0 }}>
                    {p.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.62rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: p.stageTone === 'ready' ? 'var(--sage-deep)' : 'var(--amber)',
                      border: `0.5px solid ${p.stageTone === 'ready' ? 'var(--sage)' : 'var(--amber)'}`,
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {p.stage}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--sage-deep)', margin: 0, fontStyle: 'italic' }}>
                  {p.subtitle}
                </p>
              </div>

              {/* Key facts */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderTop: '0.5px solid rgba(138,171,138,0.25)',
                  borderBottom: '0.5px solid rgba(138,171,138,0.25)',
                  marginBottom: '2rem',
                }}
              >
                {[
                  { k: 'Class', v: p.drugClass },
                  { k: 'Reference Product', v: p.reference },
                  { k: 'Dosage Form', v: p.dosageForm },
                  { k: 'Availability', v: p.availability },
                ].map((f) => (
                  <div key={f.k}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', margin: '0 0 0.4rem' }}>
                      {f.k}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>
                      {f.v}
                    </p>
                  </div>
                ))}
              </div>

              {/* Body: summary + rationale | development status */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="responsive-split">
                <div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, margin: '0 0 2rem' }}>
                    {p.summary}
                  </p>

                  <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Indications</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {p.indications.map((ind) => (
                      <span
                        key={ind}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          color: 'var(--sage-deep)',
                          background: 'rgba(138,171,138,0.12)',
                          border: '0.5px solid rgba(138,171,138,0.3)',
                          padding: '0.3rem 0.75rem',
                        }}
                      >
                        {ind}
                      </span>
                    ))}
                  </div>

                  <p className="section-tag" style={{ marginBottom: '0.9rem' }}>{p.detailTitle}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', margin: 0, padding: 0 }}>
                    {p.detail.map((d, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--sage)', fontSize: '0.8rem', lineHeight: 1.8, flexShrink: 0 }}>—</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.84rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8 }}>
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Development status */}
                <div>
                  <p className="section-tag" style={{ marginBottom: '1rem' }}>Development Status</p>
                  <div style={{ border: '0.5px solid rgba(138,171,138,0.25)' }}>
                    {p.milestones.map((m, i) => (
                      <div
                        key={m.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: '1rem',
                          padding: '0.85rem 1rem',
                          borderTop: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
                          background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)',
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.5 }}>
                          {m.label}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.62rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: m.status === 'Completed' ? 'var(--sage-deep)' : 'var(--amber)',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            paddingTop: '0.1rem',
                          }}
                        >
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Phosphate binder market context */}
    <section
      style={{ background: 'var(--hero-grey)', padding: '5rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="responsive-split">
          <div>
            <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Market Context</p>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.25, margin: '0 0 2rem' }}>
              {SUCROFERRIC_MARKET.heading}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {SUCROFERRIC_MARKET.stats.map((s) => (
                <div key={s.value} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage)', lineHeight: 1, flexShrink: 0, minWidth: '90px' }}>
                    {s.value}
                  </span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.6, paddingTop: '0.25rem' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>Market Share by Binder Class</p>
            <div style={{ border: '0.5px solid rgba(138,171,138,0.3)', marginBottom: '2rem' }}>
              {SUCROFERRIC_MARKET.shares.map((s, i) => (
                <div
                  key={s.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.9rem 1.25rem',
                    borderTop: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
                    background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--charcoal)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--sage-deep)', whiteSpace: 'nowrap' }}>{s.share}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, margin: 0 }}>
              {SUCROFERRIC_MARKET.note}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Partnering models */}
    <section
      style={{ background: 'var(--cream)', padding: '5rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.22)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Engagement</p>
          <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.25, margin: 0 }}>
            Partnering{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>models</span>
          </h3>
        </div>

        <div style={{ border: '0.5px solid rgba(138,171,138,0.3)', overflowX: 'auto' }}>
          <div style={{ minWidth: '640px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1fr 1fr 1fr', background: 'var(--sage-deep)', padding: '0.85rem 1.25rem', gap: '1.5rem' }}>
              {['Model', "Polysacc's Role", "Partner's Role", 'Revenue for Polysacc'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.7rem', fontWeight: 500, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {h}
                </span>
              ))}
            </div>
            {BUSINESS_MODELS.map((b, i) => (
              <div
                key={b.model}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '0.8fr 1fr 1fr 1fr',
                  gap: '1.5rem',
                  padding: '1.25rem',
                  borderTop: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
                  background: i % 2 === 0 ? '#fff' : 'var(--sage-pale)',
                  alignItems: 'start',
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.6 }}>{b.model}</span>
                {[b.polysacc, b.partner, b.revenue].map((cell, j) => (
                  <span key={j} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Concept breakdown */}
    <section
      id="fda-505b2"
      style={{ background: 'var(--sage-pale)', padding: '6rem 6rem', borderBottom: '0.5px solid rgba(138,171,138,0.25)' }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Pathway Mechanics</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)', lineHeight: 1.2 }}>
            Six{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>regulatory opportunity types</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PATHWAY_CONCEPTS.map((concept, i) => (
            <div
              key={concept.type}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '4rem',
                padding: '2.5rem 0',
                borderTop: '0.5px solid rgba(138,171,138,0.25)',
                borderBottom: i === PATHWAY_CONCEPTS.length - 1 ? '0.5px solid rgba(138,171,138,0.25)' : 'none',
                alignItems: 'start',
              }}
              className="responsive-split"
            >
              <div>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>{concept.type}</p>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.62rem',
                    fontWeight: 500,
                    color: concept.effort.startsWith('High') ? 'var(--amber)' : 'var(--sage-deep)',
                    border: `0.5px solid ${concept.effort.startsWith('High') ? 'var(--amber)' : 'var(--sage)'}`,
                    padding: '0.15rem 0.55rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {concept.effort}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.82, margin: 0 }}>
                  {concept.description}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--sage-deep)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  {concept.examples}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
