'use client'

import { useEffect, useRef, type CSSProperties } from 'react'

type AnimatedLogoVideoProps = {
  ariaLabel?: string
  style: CSSProperties
}

export default function AnimatedLogoVideo({
  ariaLabel,
  style,
}: AnimatedLogoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true

    const resumePlayback = () => {
      if (!document.hidden && video.paused) {
        void video.play().catch(() => {
          // Some browsers defer autoplay until the page becomes active.
        })
      }
    }

    const resumeAfterPause = () => {
      window.requestAnimationFrame(resumePlayback)
    }

    resumePlayback()
    video.addEventListener('canplay', resumePlayback)
    video.addEventListener('pause', resumeAfterPause)
    document.addEventListener('visibilitychange', resumePlayback)
    window.addEventListener('focus', resumePlayback)
    window.addEventListener('pageshow', resumePlayback)

    return () => {
      video.removeEventListener('canplay', resumePlayback)
      video.removeEventListener('pause', resumeAfterPause)
      document.removeEventListener('visibilitychange', resumePlayback)
      window.removeEventListener('focus', resumePlayback)
      window.removeEventListener('pageshow', resumePlayback)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/logo.png"
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      style={style}
    >
      <source src="/polysacc-logo-neon-wave.mp4" type="video/mp4" />
    </video>
  )
}
