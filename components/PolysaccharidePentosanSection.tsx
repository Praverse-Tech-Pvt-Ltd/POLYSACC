const PPS_STATS = [
  { value: '3–8%',    label: 'Women globally affected by IC/BPS' },
  { value: '5–7 yr',  label: 'Average delay to IC/BPS diagnosis' },
  { value: 'India',  label: 'Oral PPS formulation — manufactured domestically by Polysacc' },
]

const PPS_INDICATIONS = [
  { area: 'Bladder Pain — IC/BPS',        detail: 'Interstitial Cystitis / Bladder Pain Syndrome — first-line oral therapy; replenishes the GAG protective layer of the urothelium' },
  { area: 'Osteoarthritis (OA)',           detail: 'PPS modulates cartilage metabolism and inhibits enzymes implicated in articular cartilage degradation, with evidence for pain and functional improvement' },
  { area: 'Hyperlipidaemia (HL)',          detail: 'Heparin-like sulphation confers lipid-lowering activity; inhibits lipoprotein lipase and reduces LDL uptake in vascular endothelium' },
  { area: 'Diabetic Nephropathy (DN)',     detail: 'Restores glomerular basement membrane heparan sulphate proteoglycans; reduces proteinuria and slows nephropathy progression in preclinical and early clinical evidence' },
]

export default function PolysaccharidePentosanSection() {
  return (
    <>
      {/* Basket narrative */}
      <section
        style={{
          background: 'var(--hero-grey)',
          padding: '6rem 6rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.22)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
            className="responsive-split"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1.5rem' }}>
                Basket 01 — Polysaccharide & Pentosan
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--charcoal)',
                  lineHeight: 1.3,
                  margin: '0 0 2.5rem',
                  borderLeft: '3px solid var(--sage)',
                  paddingLeft: '1.5rem',
                }}
              >
                "Specialty polysaccharide chemistry, built for the niche that needs it most."
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {PPS_STATS.map((s) => (
                  <div key={s.value} style={{ borderTop: '0.5px solid rgba(138,171,138,0.25)', paddingTop: '1rem' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.value}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  borderTop: 'none',
                }}
              >
                Pentosan Polysulfate Sodium (PPS) is a semi-synthetic polysaccharide — a heparin-like sulphated xylan derived from beechwood hemicellulose. It is the only oral small-molecule therapy FDA-approved for Interstitial Cystitis / Bladder Pain Syndrome, a debilitating chronic condition affecting an estimated 3–8% of women globally and significantly underdiagnosed across emerging markets.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                  borderTop: '0.5px solid rgba(138,171,138,0.2)',
                  paddingTop: '1.5rem',
                }}
              >
                Its mechanism is structurally elegant: PPS replenishes and stabilises the glycosaminoglycan (GAG) layer of the bladder urothelium — the mucosal defence barrier whose breakdown is central to IC/BPS pathophysiology. Unlike symptom management approaches, PPS addresses the underlying defect.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  borderTop: '0.5px solid rgba(138,171,138,0.2)',
                  paddingTop: '1.5rem',
                }}
              >
                Polysacc manufactures oral PPS in India — removing the supply chain, cost, and regulatory barriers that previously made this therapy inaccessible to Indian and emerging-market patients. The specialty polysaccharide chemistry required to produce pharmaceutical-grade PPS represents a genuine technical capability and commercial moat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product & indications */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '7rem 6rem 5rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.2)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10rem', alignItems: 'start' }} className="responsive-split">
            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Basket Products</p>

              {/* Heparanase card — first */}
              <div
                style={{
                  background: 'var(--sage-pale)',
                  padding: '2rem',
                  border: '0.5px solid rgba(138,171,138,0.35)',
                  borderLeft: '3px solid var(--sage)',
                  marginBottom: '1.25rem',
                }}
              >
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--sage-deep)', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>Target Biology</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                  Heparanase
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                  Endo-glucuronidase · ECM remodelling · Heparan sulfate cleavage
                </p>
              </div>

              {/* PPS card — second */}
              <div
                style={{
                  background: 'var(--sage-pale)',
                  padding: '2rem',
                  border: '0.5px solid rgba(138,171,138,0.35)',
                  borderLeft: '3px solid var(--sage)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'var(--sage-deep)', letterSpacing: '0.1em', margin: '0 0 0.75rem' }}>API</p>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--charcoal)', margin: '0 0 0.5rem', lineHeight: 1.2 }}>
                  Pentosan Polysulfate Sodium
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                  Semi-synthetic sulphated xylan · FDA-approved · Schedule H
                </p>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Pitch</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  For bladder health, interstitial cystitis, bladder pain syndrome, and specialty polysaccharide positioning — a defined clinical niche with very limited global competition.
                </p>
              </div>
            </div>

            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>Therapeutic Indications</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {PPS_INDICATIONS.map((ind, i) => (
                  <div
                    key={ind.area}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      gap: '2rem',
                      padding: '1.1rem 0',
                      borderTop: i === 0 ? '0.5px solid rgba(138,171,138,0.25)' : '0.5px solid rgba(138,171,138,0.15)',
                      alignItems: 'start',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--sage-deep)', margin: 0, letterSpacing: '0.02em' }}>
                      {ind.area}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>
                      {ind.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heparanase Target Biology detail */}
      <section
        style={{
          background: 'var(--sage-pale)',
          padding: '7rem 6rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.22)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '6rem',
              alignItems: 'center',
            }}
            className="responsive-split"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>
                Target Biology
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Heparanase
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                }}
              >
                Heparanase is the only mammalian endo-glucuronidase capable of cleaving heparan sulfate side chains of proteoglycans in the extracellular matrix (ECM). It is an essential enzyme involved in tissue remodeling, cell migration, and regulating the structure of the cell surface and basement membrane.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                }}
              >
                Upregulation of heparanase leads to the degradation of the protective endothelial glycocalyx and mucosal linings. This breakdown disrupts the barrier integrity of tissues and blood vessels, promoting inflammatory cell infiltration and driving pathologies in chronic inflammatory diseases and vascular disorders.
              </p>
              <div
                style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
                className="responsive-split mobile-gap"
              >
                <div
                  style={{
                    background: 'rgba(248,246,241,0.65)',
                    border: '0.5px solid rgba(138,171,138,0.25)',
                    padding: '1.25rem',
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--sage-deep)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    Enzymatic Activity
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>
                    Cleaves heparan sulfate side chains of proteoglycans, leading to disassembly of the extracellular matrix and release of matrix-bound active molecules.
                  </p>
                </div>
                <div
                  style={{
                    background: 'rgba(176,125,58,0.04)',
                    border: '0.5px solid rgba(176,125,58,0.25)',
                    padding: '1.25rem',
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--amber)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    Pathological Role
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>
                    Degrades the endothelial glycocalyx and mucosal linings. Uncontrolled activity impairs organ barrier function and propagates inflammatory responses.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'transparent',
                  border: '0.5px solid rgba(138,171,138,0.25)',
                  padding: '2.5rem 1.5rem',
                  boxShadow: '0 12px 36px rgba(44,44,42,0.06)',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '2px',
                }}
              >
                <img
                  src="/heparanase-structure.png"
                  alt="Chemical Structure associated with Heparanase"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.58rem',
                  color: 'var(--muted)',
                  marginTop: '1rem',
                  textAlign: 'center',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Structure: Cholestanol-conjugated sulfated oligosaccharide
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PPS Target Biology detail */}
      <section
        style={{
          background: 'var(--cream)',
          padding: '7rem 6rem',
          borderBottom: '0.5px solid rgba(138,171,138,0.22)',
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '6rem',
              alignItems: 'center',
            }}
            className="responsive-split"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1.25rem' }}>
                Target Biology
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Pentosan Polysulfate Sodium
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                }}
              >
                Pentosan Polysulfate Sodium (PPS) is a semi-synthetic sulphated xylan — a heparin-like polysaccharide derived from beechwood hemicellulose. Its backbone consists of repeating β-1,4-linked xylose units with 4-O-methyl-glucuronic acid branches, carrying sulphate groups at the 2- and 3-positions that confer its biological activity.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  marginBottom: '1.5rem',
                }}
              >
                PPS exerts its therapeutic effect by replenishing and stabilising the glycosaminoglycan (GAG) layer of the bladder urothelium — the mucosal defence barrier whose disruption is central to IC/BPS pathophysiology. Its heparin-like sulphation also underpins activity in osteoarthritis, hyperlipidaemia, and diabetic nephropathy.
              </p>
              <div
                style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
                className="responsive-split mobile-gap"
              >
                <div
                  style={{
                    background: 'rgba(248,246,241,0.65)',
                    border: '0.5px solid rgba(138,171,138,0.25)',
                    padding: '1.25rem',
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--sage-deep)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    Mechanism of Action
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>
                    Adheres to the urothelial surface, restoring the GAG protective layer and preventing irritants from contacting the bladder wall.
                  </p>
                </div>
                <div
                  style={{
                    background: 'rgba(176,125,58,0.04)',
                    border: '0.5px solid rgba(176,125,58,0.25)',
                    padding: '1.25rem',
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--amber)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    Structural Basis
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1.6 }}>
                    β-1,4-xylan backbone with MGA branches; sulphate groups at C-2 and C-3 mimic heparan sulphate and confer GAG-layer affinity.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  background: 'white',
                  border: '0.5px solid rgba(138,171,138,0.25)',
                  padding: '2.5rem 1.5rem',
                  boxShadow: '0 12px 36px rgba(44,44,42,0.06)',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '2px',
                }}
              >
                <img
                  src="/pps-structure.png"
                  alt="Chemical structure of Pentosan Polysulfate Sodium"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.58rem',
                  color: 'var(--muted)',
                  marginTop: '1rem',
                  textAlign: 'center',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Structure: Sulphated β-1,4-xylan with 4-O-methyl-glucuronic acid branches
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
