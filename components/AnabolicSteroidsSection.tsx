'use client'

import { useState } from 'react'

const ANABOLIC_ACCORDIONS = [
  {
    title: 'The Ester Guide — Duration Determines Dosing Protocol',
    body: 'Testosterone undecanoate achieves stable physiological levels over 10–14 weeks — quarterly injections, ideal for adherence in TRT. Enanthate and cypionate offer reliable biweekly dosing with smooth concentration curves. Propionate and phenyl propionate, with their 2–4 day half-lives, allow precise titration and rapid dose adjustment — preferred where close monitoring is required. Testosterone base (unesterified) acts within hours; rarely used for TRT but relevant in hospital acute settings. Understanding ester pharmacokinetics is the formulation science of the entire category.',
  },
  {
    title: 'Hypogonadism — The Underdiagnosed Men\'s Health Crisis',
    body: 'Conservative epidemiological estimates suggest 30–40% of men over 45 have biochemically low testosterone. The vast majority remain undiagnosed and untreated. This is not androgen deficiency in the sense of catastrophic endocrine failure — it is a gradual decline presenting as fatigue, reduced muscle mass, sexual dysfunction, mood changes, and insulin resistance. Prospective data from the TRAVERSE trial (2023) has significantly reshaped the cardiovascular safety debate, with TRT showing non-inferiority to placebo for MACE outcomes. The clinical consensus around TRT is maturing rapidly.',
  },
  {
    title: 'Regulatory Landscape: Controlled Substance Navigation',
    body: 'Testosterone preparations are Schedule III controlled substances in the USA and variously regulated across global markets. Legitimate pharmaceutical manufacturing — GMP-certified, for prescription markets — operates in an entirely separate regulatory category from grey-market supply. Regulatory compliance in this category requires precise documentation of batch provenance, controlled substance handling procedures, and export licence frameworks for each destination market. Manufacturing capability without regulatory infrastructure is commercially meaningless.',
  },
  {
    title: 'Market Structure: Who Buys Testosterone APIs',
    body: 'Primary customers for testosterone APIs are: (1) established branded TRT product manufacturers (Nebido®, Aveed®, Depo-Testosterone® generics); (2) compounding pharmacies in jurisdictions where TRT compounding is legal (US, Australia); (3) emerging market pharmaceutical manufacturers building out men\'s health portfolios. The Indian domestic TRT market is nascent but growing; the larger commercial opportunity for GMP-certified Indian API manufacturers is export to regulated markets with established TRT demand.',
  },
]

const ANABOLIC_NARRATIVE = [
  `The testosterone deficiency landscape has undergone a clinical paradigm shift over the past decade. What was historically addressed only in catastrophic primary hypogonadism is now recognised as a significant contributor to the global burden of metabolic syndrome, cardiovascular risk, and quality-of-life impairment in men over 35. The testosterone replacement therapy (TRT) conversation has moved from endocrinology subspecialty to primary care — and the commercial market has followed.`,
  `The ester portfolio represents a clinical science of its own. Different ester bonds — undecanoate, enanthate, cypionate, propionate, decanoate — produce different half-lives, release kinetics, and injection frequency requirements. A quarterly undecanoate injection (Nebido® protocol) and a weekly propionate injection are chemically the same active molecule in different pharmacokinetic packages. Selecting the right ester is matching the therapy to the patient's physiology, lifestyle, and clinical monitoring capability.`,
  `Manufacturing testosterone APIs to GMP specification for controlled substance markets requires a different organisational infrastructure than standard pharmaceutical API production. Controlled substance licences, import/export permits, batch documentation for regulatory authorities, and supply chain traceability are pre-conditions — not afterthoughts. Polysacc's capability in this category reflects a compliance infrastructure that supports legitimate pharmaceutical supply chains to regulated markets globally.`,
]

type SteroidItem = {
  name: string
  alias?: string
  body: string
}

type SteroidFamily = {
  number: string
  title: string
  subtitle: string
  intro: string
  accent: 'sage' | 'amber'
  items: SteroidItem[]
}

const STEROID_FAMILIES: SteroidFamily[] = [
  {
    number: '01',
    title: 'Pure Testosterone & Testosterone Esters',
    subtitle: '8 APIs · GMP',
    intro: 'Bioidentical testosterone molecules chemically attached to an ester chain. The ester does not change how the hormone works — it determines only how slowly or quickly it releases into the bloodstream.',
    accent: 'sage',
    items: [
      { name: 'Testosterone Base', body: 'Pure testosterone with no ester attached. Acts almost instantly and leaves the body rapidly.' },
      { name: 'Testosterone Propionate', body: 'A short-acting ester; requires frequent administration.' },
      { name: 'Testosterone Phenyl Propionate', body: 'A short-to-medium acting ester.' },
      { name: 'Testosterone Isocaproate', body: 'A medium-acting ester, often found in multi-ester hormone blends.' },
      { name: 'Testosterone Enanthate', body: 'A slow-acting, long ester — one of the most common base compounds used medically and athletically.' },
      { name: 'Testosterone Cypionate', body: 'A slow-acting, long ester highly similar in timing to Enanthate.' },
      { name: 'Testosterone Decanoate', body: 'A very slow-acting, long-lasting ester.' },
      { name: 'Testosterone Undecanoate', body: 'An exceptionally long-acting ester used for extended hormone replacement intervals.' },
    ],
  },
  {
    number: '02',
    title: 'Synthetic Testosterone Derivatives',
    subtitle: '3 APIs · GMP',
    intro: 'Molecules that started as testosterone but were structurally altered in a lab to amplify anabolic (tissue-building) properties or to survive oral administration.',
    accent: 'sage',
    items: [
      { name: 'Methyltestosterone', body: "An oral version of testosterone altered at the 17th carbon position so the liver doesn't immediately destroy it." },
      { name: 'Methandienone', alias: 'Methandrostenolone · Dianabol', body: 'A highly potent, orally active synthetic derivative designed for massive glycogen retention, protein synthesis, and rapid weight gain.' },
      { name: 'Boldenone Undecylenate', alias: 'Equipoise', body: 'A structural derivative of testosterone designed to heavily increase red blood cell production and steady, lean muscle mass.' },
    ],
  },
  {
    number: '03',
    title: 'Dihydrotestosterone (DHT) Derivatives',
    subtitle: '5 APIs · GMP',
    intro: 'Structural modifications of DHT, a naturally occurring, highly androgenic male hormone. Because DHT cannot convert into estrogen, these compounds are primarily used for building lean mass without water retention.',
    accent: 'amber',
    items: [
      { name: 'Stanozolol', alias: 'Winstrol', body: 'An oral or injectable compound heavily favoured for athletic speed and muscle hardness.' },
      { name: 'Oxandrolone', alias: 'Anavar', body: 'A mild oral compound frequently used to preserve muscle tissue during calorie deficits or severe trauma recovery.' },
      { name: 'Oxymetholone', alias: 'Anadrol', body: 'A heavily modified, potent oral DHT derivative used medically for severe anaemia, and off-label for extreme strength and bulk.' },
      { name: 'Methenolone Enanthate', alias: 'Primobolan', body: 'A mild, long-acting injectable steroid with high anabolic efficiency and a low side-effect profile.' },
      { name: 'Drostanolone Enanthate', alias: 'Masteron', body: 'A long-acting injectable compound heavily used to increase muscle density and definition.' },
    ],
  },
  {
    number: '04',
    title: '19-Nortestosterone (19-Nor) Derivatives',
    subtitle: '1 API · GMP',
    intro: 'Altered molecules missing the carbon atom at the 19th position. They interact heavily with progesterone receptors and rank among the most powerful, tissue-binding compounds in existence.',
    accent: 'amber',
    items: [
      { name: 'Trenbolone Enanthate', body: 'A highly modified, long-acting injectable compound — roughly five times more anabolic and androgenic than basic testosterone, causing massive muscle gains and aggressive fat oxidation.' },
    ],
  },
  {
    number: '05',
    title: 'Non-Steroidal Compound',
    subtitle: '1 API · GMP · Misclassified',
    intro: 'Grouped commercially alongside anabolic steroids, but structurally and pharmacologically unrelated — included here for catalogue completeness, not chemical kinship.',
    accent: 'amber',
    items: [
      { name: 'Clenbuterol HCl', body: 'A Beta-2 adrenergic agonist — a pharmaceutical sympathomimetic stimulant used to open airways in asthmatics and accelerate fat loss via thermogenesis. Possesses zero hormonal steroid structure.' },
    ],
  },
]

export default function AnabolicSteroidsSection() {
  const [openFamily, setOpenFamily] = useState<number | null>(0)
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <>
    {/* Narrative strip */}
    <section
      style={{
        background: 'var(--sage-pale)',
        padding: '5rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.2)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ marginBottom: '1.5rem' }}>The Androgen Thesis</p>
            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.55rem, 2.4vw, 2.1rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--charcoal)',
                lineHeight: 1.35,
                margin: '0 0 2.5rem',
                borderLeft: '3px solid var(--sage)',
                paddingLeft: '1.5rem',
              }}
            >
              "30–40% of men over 45 have biochemically low testosterone. The vast majority remain undiagnosed."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { val: '40%', label: 'Men over 45 with low testosterone (est.)' },
                { val: '5', label: 'Hormone families in Polysacc\'s anabolic portfolio' },
                { val: '10–14 wk', label: 'Dosing interval with undecanoate (Nebido® protocol)' },
              ].map((s) => (
                <div key={s.val} style={{ borderTop: '0.5px solid rgba(138,171,138,0.4)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.9rem', fontWeight: 300, color: 'var(--sage-deep)', margin: '0 0 0.2rem', lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', fontWeight: 300, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {ANABOLIC_NARRATIVE.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  margin: 0,
                  borderTop: i > 0 ? '0.5px solid rgba(138,171,138,0.2)' : 'none',
                  paddingTop: i > 0 ? '1.25rem' : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Categorised steroid families */}
    <section
      id="anabolic-steroids"
      style={{
        background: 'var(--cream)',
        padding: '6rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.25)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <p className="section-tag" style={{ marginBottom: '0.75rem' }}>Basket 04 — Anabolic Steroids</p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            Anabolic{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Steroids</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.95rem',
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Anabolic-androgenic steroids are classified by the parent hormone they derive
            from — testosterone, DHT, or nandrolone — plus the non-steroidal compounds
            commercially grouped alongside them. Eighteen APIs across five distinct families.
          </p>
        </div>

        {/* Family accordions */}
        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEROID_FAMILIES.map((family, fi) => {
            const isOpen = openFamily === fi
            const accentColor = family.accent === 'sage' ? 'var(--sage-deep)' : 'var(--amber)'
            const accentBg = family.accent === 'sage' ? 'rgba(138,171,138,0.08)' : 'rgba(176,125,58,0.06)'
            const accentBorder = family.accent === 'sage' ? 'rgba(138,171,138,0.35)' : 'rgba(176,125,58,0.3)'

            return (
              <div
                key={family.title}
                style={{
                  borderTop: '0.5px solid rgba(91,99,94,0.18)',
                  borderBottom: fi === STEROID_FAMILIES.length - 1 ? '0.5px solid rgba(91,99,94,0.18)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFamily(isOpen ? null : fi)}
                  style={{
                    width: '100%',
                    background: isOpen ? accentBg : 'none',
                    border: 'none',
                    padding: '1.75rem 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.25s',
                  }}
                  className="mobile-card-pad"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      fontSize: '0.7rem',
                      color: accentColor,
                      letterSpacing: '0.1em',
                      paddingTop: '0.4rem',
                      flexShrink: 0,
                      width: 28,
                    }}
                  >
                    {family.number}
                  </span>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.9rem',
                        flexWrap: 'wrap',
                        marginBottom: isOpen ? '0.75rem' : 0,
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                          fontWeight: 300,
                          fontStyle: 'italic',
                          color: 'var(--charcoal)',
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {family.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.68rem',
                          fontWeight: 500,
                          color: accentColor,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {family.subtitle}
                      </span>
                    </div>

                    {isOpen && (
                      <p
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.88rem',
                          fontWeight: 300,
                          color: 'var(--muted)',
                          lineHeight: 1.8,
                          margin: '0 0 1.75rem',
                          maxWidth: 760,
                        }}
                      >
                        {family.intro}
                      </p>
                    )}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '1.1rem',
                      color: accentColor,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s',
                      flexShrink: 0,
                      lineHeight: 1,
                      paddingTop: '0.2rem',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      paddingLeft: 'calc(28px + 1.75rem)',
                      paddingBottom: '2.25rem',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem',
                    }}
                    className="responsive-split mobile-card-pad"
                  >
                    {family.items.map((item) => {
                      const itemKey = `${family.title}-${item.name}`
                      const itemOpen = openItem === itemKey
                      return (
                        <div
                          key={itemKey}
                          onClick={() => setOpenItem(itemOpen ? null : itemKey)}
                          style={{
                            border: `0.5px solid ${accentBorder}`,
                            background: itemOpen ? accentBg : '#fff',
                            padding: '1rem 1.25rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'baseline',
                              gap: '0.75rem',
                            }}
                          >
                            <p
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.88rem',
                                fontWeight: 500,
                                color: 'var(--charcoal)',
                                margin: 0,
                              }}
                            >
                              {item.name}
                            </p>
                            <span
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.95rem',
                                color: accentColor,
                                transform: itemOpen ? 'rotate(45deg)' : 'none',
                                transition: 'transform 0.2s',
                                flexShrink: 0,
                              }}
                            >
                              +
                            </span>
                          </div>
                          {item.alias && (
                            <p
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.7rem',
                                fontWeight: 400,
                                color: accentColor,
                                letterSpacing: '0.04em',
                                margin: '0.25rem 0 0',
                                fontStyle: 'italic',
                              }}
                            >
                              {item.alias}
                            </p>
                          )}
                          {itemOpen && (
                            <p
                              style={{
                                fontFamily: 'var(--font-dm-sans)',
                                fontSize: '0.8rem',
                                fontWeight: 300,
                                color: 'var(--muted)',
                                lineHeight: 1.7,
                                margin: '0.75rem 0 0',
                              }}
                            >
                              {item.body}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Market intelligence accordion */}
        <div style={{ marginTop: '4.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '1rem',
            }}
          >
            Market Intelligence
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ANABOLIC_ACCORDIONS.map((acc, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem 0',
                  borderTop: '0.5px solid rgba(138,171,138,0.3)',
                  borderBottom: i === ANABOLIC_ACCORDIONS.length - 1 ? '0.5px solid rgba(138,171,138,0.3)' : 'none',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: 'var(--charcoal)',
                    margin: '0 0 0.75rem',
                  }}
                >
                  {acc.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.83rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                    margin: 0,
                    maxWidth: 880,
                  }}
                >
                  {acc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
