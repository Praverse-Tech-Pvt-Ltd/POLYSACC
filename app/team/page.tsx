import type { Metadata } from 'next'
import MolecularPattern from '@/components/MolecularPattern'
import TeamSection from '@/components/TeamSection'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'The people behind Polysaccharide Chemistry Pvt Ltd — how two specialty pharma veterans founded Polysacc.',
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          background: 'var(--hero-grey)',
          padding: '14rem 6rem 8rem',
          overflow: 'hidden',
          borderBottom: '0.5px solid rgba(91,99,94,0.18)',
        }}
        className="page-hero"
      >
        <MolecularPattern variant="heroGrey" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-tag" style={{ marginBottom: '1rem' }}>
            Team
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 300,
              color: 'var(--charcoal)',
              lineHeight: 1.05,
              marginBottom: '1.75rem',
              maxWidth: 820,
            }}
          >
            Two careers in specialty pharma.{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>One conviction.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: 580,
              lineHeight: 1.75,
            }}
          >
            Polysacc was not built from a business plan. It was built from two decades-long
            careers in API chemistry colliding with the same uncomfortable observation —
            and deciding to do something about it.
          </p>
        </div>
      </section>

      {/* Origin storyline — Act I: The Observation */}
      <section
        style={{ background: 'var(--cream)', padding: '8rem 6rem' }}
        className="section-pad"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
            <div>
              <p className="section-tag" style={{ marginBottom: '1rem' }}>
                The Origin Story · Part I
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: 'var(--charcoal)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                Two different vantage points.{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
                  The same blind spot.
                </span>
              </h2>
              <div
                style={{
                  width: 40,
                  height: '0.5px',
                  background: 'var(--sage)',
                  marginBottom: '2rem',
                }}
              />
            </div>
            <div>
              {[
                `Rajender Rao Juvvadi was watching the industry from a vantage point built over 30 years of large-scale API and CDMO operations — as MD & CEO of Solara Active Pharma Sciences, and later as Founder of Aurore Life Sciences and Chairman of GeneSys Biologics — he had scaled biopharma businesses across continents. But scale, he had come to believe, was solving the wrong problem. The industry was optimised to manufacture more of what already sold. It was not built to find what patients actually needed and had simply never been offered.`,
                `Vishal Jajodia had spent over 25 years inside the unglamorous end of pharmaceutical chemistry — specialty APIs and orphan-disease molecules that never made headlines but quietly kept patients alive. As Founder and CEO of Swati Spentose, he had done something no other Indian manufacturer had attempted: commercialised oral Pentosan Polysulfate Sodium, the only approved therapy for Interstitial Cystitis/Bladder Pain Syndrome — a disease most physicians had never been trained to recognise, let alone treat.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origin storyline — Act II: The Convergence */}
      <section
        style={{
          position: 'relative',
          background: 'var(--sage-pale)',
          padding: '8rem 6rem',
          overflow: 'hidden',
        }}
        className="section-pad"
      >
        <MolecularPattern variant="light" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ maxWidth: 760, marginBottom: '3.5rem' }}>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              The Origin Story · Part II
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              When the chemist and the operator agreed
            </h2>
            <div
              style={{
                width: 40,
                height: '0.5px',
                background: 'var(--sage)',
                marginBottom: '2rem',
              }}
            />
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--charcoal)',
              lineHeight: 1.4,
              maxWidth: 900,
              margin: '0 0 3rem',
              borderLeft: '3px solid var(--sage)',
              paddingLeft: '1.75rem',
            }}
          >
            "Every other niche molecule we found had the same story as PPS — proven science,
            real patients, and no company willing to build the years of regulatory and
            manufacturing depth it required. That was not a gap in the market. That was the market."
          </blockquote>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
            className="responsive-split mobile-gap"
          >
            <div>
              {[
                `When Rajender and Vishal's paths crossed, the conversation did not start with strategy decks or market sizing — it started with a shared frustration. Rajender brought the structural question he had been asking for years: how do you build a company around molecules that don't fit the conventional API playbook? His decades architecting CDMO scale-up and governance at Solara, and building biologics infrastructure at GeneSys, meant he had already solved versions of this problem — just never for a portfolio this deliberately narrow.`,
                `Vishal had the molecular conviction that answered it: he had lived the slow, painstaking work of commercialising PPS and knew, firsthand, how many other equally important molecules sat in the same neglected category — complex to manufacture, clinically validated, and economically unattractive to large generic players chasing volume.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div>
              {[
                `Polysacc was founded on a simple division of conviction. Rajender would architect the strategic scaffolding — the regulatory sequencing, partnership structuring, and operational discipline needed to take a portfolio of niche, complex molecules from bench credibility to bedside availability. Vishal would anchor the company in molecular and manufacturing depth — the same rigour that had made oral PPS commercially real in India for the first time.`,
                `Neither man set out to build a generic pharma company with a sustainability story attached. They set out to build the company that should have existed already — one organised entirely around the molecules everyone else had decided were too difficult to be worth the effort.`,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    lineHeight: 1.9,
                    marginBottom: '1.5rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <TeamSection />
    </>
  )
}
