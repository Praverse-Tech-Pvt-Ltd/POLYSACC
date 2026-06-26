'use client'

const TEAM = [
  {
    name: 'Rajender Rao Juvvadi',
    role: 'Strategic Architect & Advisor',
    bio: 'Founder of Aurore Life Sciences and Chairman of GeneSys Biologics. Former MD & CEO of Solara Active Pharma Sciences with over 30 years of leadership in API development, CDMO operations, and global biopharma scale-up — instrumental in shaping the strategic foundation of Polysacc.',
    initial: 'RR',
    highlight: true,
    linkedin: 'https://www.linkedin.com/in/rajenderraojuvvadi/',
  },
  {
    name: 'Vishal Jajodia',
    role: 'Founder',
    bio: 'Founder and CEO of Swati Spentose and Founder of Polysacc. Over 25 years of experience in specialty API development and orphan diseases, leading scientific collaborations globally and pioneering the commercialization of Pentosan Polysulfate Sodium (PPS).',
    initial: 'VJ',
    highlight: true,
    linkedin: 'https://www.linkedin.com/in/vishal-jajodia-31a34211/',
  },
]

export default function TeamSection() {
  return (
    <section
      id="team"
      style={{
        background: 'var(--hero-grey)',
        padding: '7rem 6rem',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            marginBottom: '5rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ color: 'var(--sage)', marginBottom: '1rem' }}>
              The People
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--charcoal)',
                lineHeight: 1.12,
              }}
            >
              Built by people who{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage)' }}>
                understand the molecule.
              </span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.85,
              }}
            >
              Niche pharma requires people who think in chemistry, speak in clinical outcomes,
              and execute in supply chains. Our team brings together manufacturing expertise,
              technical advisory depth, and market-building experience — with the shared conviction
              that the most important molecules are often the least talked about.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '4rem',
            maxWidth: '840px',
            margin: '0 auto',
          }}
          className="responsive-split"
        >
          {TEAM.map((member) => (
            <div
              key={member.name || member.initial}
              style={{
                border: member.highlight
                  ? '0.5px solid rgba(138,171,138,0.5)'
                  : '0.5px solid rgba(138,171,138,0.2)',
                background: member.highlight
                  ? 'rgba(138,171,138,0.1)'
                  : 'rgba(255,255,255,0.6)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Avatar initial */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: member.highlight ? 'var(--sage)' : 'rgba(138,171,138,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: member.highlight ? '#fff' : 'var(--sage)',
                  }}
                >
                  {member.initial}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    color: 'var(--charcoal)',
                    margin: '0 0 0.2rem',
                    lineHeight: 1.2,
                  }}
                >
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        borderBottom: '0.5px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'var(--sage)';
                        (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(138,171,138,0.5)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = 'inherit';
                        (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent';
                      }}
                    >
                      {member.name} <span style={{ fontSize: '0.8rem', verticalAlign: 'middle', opacity: 0.7 }}>↗</span>
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                {member.role && (
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 400,
                      color: 'var(--sage)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {member.role}
                  </p>
                )}
              </div>

              {member.bio && (
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.82rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            paddingTop: '3rem',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--muted)',
                margin: '0 0 0.5rem',
              }}
            >
              Want to work with us, or explore a partnership?
            </p>
            <a
              href="mailto:info@polysacc.com"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'var(--sage)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--sage-light)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--sage)')}
            >
              info@polysacc.com
            </a>
          </div>
          <a
            href="#enquiry"
            className="btn-ghost-sage"
            style={{ whiteSpace: 'nowrap' }}
          >
            Get in touch ↗
          </a>
        </div>

      </div>
    </section>
  )
}
