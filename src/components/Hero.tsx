import { useState, useEffect, useRef } from 'react'
import { Search, ChevronDown, Compass } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      setIsDesktop(true)
    }

    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{ minHeight: '100dvh', position: 'relative', overflow: 'hidden', background: '#000', display: 'flex', flexDirection: 'column' }}>
      {/* BACKGROUND MEDIA & RESPONSIVE POSTER */}
      <div ref={parallaxRef} style={{ position: 'absolute', inset: 0, transform: 'scale(1.1)' }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mobile.webp" type="image/webp" />
          <source media="(min-width: 769px)" srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero-mobile.webp"
            alt="Mundo prehistórico de dinosaurios"
            fetchPriority="high"
            width={1280}
            height={720}
            className="hero-bg-img"
          />
        </picture>
        {isDesktop && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-desktop-video"
            aria-hidden="true"
          >
            <source src="/hero-compressed.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* SUBTLE OVERLAYS */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 30%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%)' }} />

      {/* NAVBAR */}
      <nav className="hero-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo.png" alt="Dinorex Logo" width={32} height={32} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 2, lineHeight: 1 }}>DINOREX</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, letterSpacing: 2, color: 'rgba(255,255,255,0.6)', marginTop: -2 }}>EXPLORA EL PASADO. DESCUBRE LA VIDA.</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="hero-nav-links">
            {[
              { label: 'INICIO', href: '/', active: true },
              { label: 'DINOSAURIOS ⌄', href: '/#dinosaurios' },
              { label: 'HÁBITAT', href: '/#habitats' },
              { label: 'ERAS', href: '/#eras' },
            ].map(link => (
              <div key={link.label} style={{ position: 'relative', paddingBottom: 4 }}>
                <a 
                  href={link.href} 
                  className="hero-nav-link"
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
                    textDecoration: 'none',
                    color: link.active ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.2s ease, transform 0.2s ease'
                  }}
                >
                  {link.label}
                </a>
                {link.active && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#e6c875' }} />}
              </div>
            ))}
          </div>
          <div className="hero-search-wrapper" style={{ color: '#fff', cursor: 'pointer', transition: 'color 0.2s, transform 0.2s' }}>
            <Search size={18} color="currentColor" className="hero-search-icon" />
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT (LEFT SIDE) */}
      <div className="hero-main-content">
        <div>
          <p
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 16,
              color: '#e6c875',
              letterSpacing: '4px',
              marginBottom: 12
            }}
          >
            VIAJA MILLONES DE AÑOS ATRÁS
          </p>

          <h1
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(40px, 7vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: 1,
              color: '#fff',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              margin: 0
            }}
          >
            <div style={{ padding: '12px 0 4px', margin: '-12px 0 0' }}>
              <span style={{ display: 'inline-block', marginRight: '0.22em' }}>DESCUBRE</span>
              <span style={{ display: 'inline-block' }}>EL</span>
            </div>
            <div style={{ padding: '12px 0 4px', margin: '-12px 0 0' }}>
              <span style={{ display: 'inline-block', marginRight: '0.22em' }}>MUNDO</span>
              <span style={{ display: 'inline-block', marginRight: '0.22em' }}>DE</span>
              <span style={{ display: 'inline-block', marginRight: '0.22em' }}>LOS</span>
              <span style={{ display: 'inline-block' }}>DINOSAURIOS</span>
            </div>
          </h1>
        </div>

        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              color: 'rgba(255,255,255,0.85)',
              marginTop: 16,
              lineHeight: 1.5,
              maxWidth: 500
            }}
          >
            Explora su vida, sus hábitats, su historia y los secretos que aún guarda la Tierra prehistórica.
          </p>

          <div style={{ display: 'flex', marginTop: 24 }}>
            <button
              aria-label="Explorar dinosaurios"
              className="hero-cta-btn"
              style={{
                background: '#e6c875',
                color: '#000',
                border: 'none',
                borderRadius: 40,
                padding: '18px 40px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 8px 30px rgba(230,200,117,0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onClick={() => {
                const el = document.getElementById('dinosaurios');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Compass size={20} strokeWidth={2.2} />
              EXPLORAR DINOSAURIOS
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div 
        className="hero-scroll-indicator"
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          cursor: 'pointer'
        }}
        onClick={() => {
          const el = document.getElementById('dinosaurios');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.5)' }}>DESLIZA PARA EXPLORAR</span>
        <ChevronDown size={18} color="rgba(255,255,255,0.6)" />
      </div>
    </section>
  )
}
