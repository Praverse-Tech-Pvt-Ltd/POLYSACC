'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PILLARS = [
  {
    number: '01',
    title: "Nature's most intricate polymer",
    body: 'Unlike DNA or protein, a polysaccharide has no genetic template dictating its sequence. Chain length, branching, and sulfation pattern all vary — making it one of the most structurally complex molecule classes in biology, and one of the hardest to synthesize with precision.',
  },
  {
    number: '02',
    title: 'One chemistry, many disguises',
    body: 'That same complex molecule shows up everywhere disease hides: the GAG layer lining the bladder, heparan sulphate in the kidney glomerulus, chondroitin sulphate in cartilage, the glycocalyx coating blood vessels. Different organs, different symptoms — one shared molecular thread.',
  },
  {
    number: '03',
    title: 'Repair the layer, not the symptom list',
    body: 'Conventional medicine treats each downstream symptom separately — pain relief here, anti-inflammatories there. Once you can reliably manufacture the polysaccharide itself, you repair the root surface directly. One mechanism replaces a dozen palliative ones.',
  },
  {
    number: '04',
    title: 'Complexity, converted to clarity',
    body: 'This is the paradox we build around: mastering one of nature\'s most complicated molecules is what lets us offer physicians one of the simplest therapeutic ideas available — restore the layer, and the disease loses its foothold.',
  },
]

const pillarContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const pillarItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ComplexitySimplifiedSection() {
  const pillarsRef = useRef<HTMLDivElement>(null)
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-60px' })

  return (
    <section
      id="complexity-simplified"
      style={{
        background: 'var(--hero-grey)',
        padding: '7rem 6rem',
        borderBottom: '0.5px solid rgba(138,171,138,0.22)',
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Opening statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '5rem',
            marginBottom: '5rem',
            alignItems: 'end',
          }}
          className="responsive-split"
        >
          <div>
            <p className="section-tag" style={{ marginBottom: '1rem' }}>
              From Complexity to Clarity
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
              The most{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--sage-deep)' }}>complicated</span>
              {' '}molecule in biology{' '}
              <br />
              builds the simplest therapy.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.85,
                marginBottom: '1.5rem',
              }}
            >
              Polysaccharides are notoriously difficult — no fixed sequence, no simple way to
              read or replicate their structure, and a biological role that shifts depending
              on where in the body they sit. Most pharmaceutical chemistry avoids this category
              precisely because it resists simplification.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: 1.85,
              }}
            >
              We work the other way around. We absorb that complexity at the chemistry level
              so that, clinically, the therapy becomes almost deceptively simple: identify where
              the protective polysaccharide layer has broken down, and restore it — directly,
              biomimetically, without a cascade of secondary interventions.
            </p>
          </div>
        </div>

        {/* Four pillars */}
        <motion.div
          ref={pillarsRef}
          variants={pillarContainer}
          initial="hidden"
          animate={pillarsInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
          }}
          className="responsive-four"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.number}
              variants={pillarItem}
              style={{
                padding: '2.5rem 2rem',
                borderLeft: i === 0 ? 'none' : '0.5px solid rgba(138,171,138,0.2)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  fontSize: '0.62rem',
                  color: 'var(--sage)',
                  letterSpacing: '0.1em',
                  margin: '0 0 1.25rem',
                }}
              >
                {p.number}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--charcoal)',
                  lineHeight: 1.3,
                  margin: '0 0 1rem',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '0.5px solid rgba(138,171,138,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--muted)',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            "We don't simplify the molecule. We let the molecule simplify the medicine."
          </p>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.72rem', color: 'var(--sage)', letterSpacing: '0.06em', margin: '0 0 0.2rem', textTransform: 'uppercase' }}>Principle</p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 300, color: 'var(--charcoal)', margin: 0, lineHeight: 1 }}>One layer.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
