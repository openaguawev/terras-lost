import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, Mouse, Compass } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-desktop-video"
          aria-hidden="true"
        >
          <source media="(min-width: 769px)" src="/hero-compressed.mp4" type="video/mp4" />
        </video>
      </div>

      {/* SUBTLE OVERLAYS */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 30%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%)' }} />

      {/* NAVBAR */}
      <nav className="hero-nav">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <img src="/logo.png" alt="Dinorex Logo" width={32} height={32} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 2, lineHeight: 1 }}>DINOREX</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, letterSpacing: 2, color: 'rgba(255,255,255,0.6)', marginTop: -2 }}>EXPLORA EL PASADO. DESCUBRE LA VIDA.</span>
          </div>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="hero-nav-links">
            {[
              { label: 'INICIO', href: '/', active: true },
              { label: 'DINOSAURIOS ⌄', href: '/#dinosaurios' },
              { label: 'HÁBITAT', href: '/#habitats' },
              { label: 'ERAS', href: '/#eras' },
            ].map(link => (
              <div key={link.label} style={{ position: 'relative', paddingBottom: 4 }}>
                <motion.a 
                  href={link.href} 
                  initial={{ color: link.active ? '#fff' : 'rgba(255,255,255,0.7)' }}
                  whileHover={{ scale: 1.1, color: '#e6c875' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
                    textDecoration: 'none', originX: 0.5, originY: 0.5
                  }}
                >
                  {link.label}
                </motion.a>
                {link.active && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#e6c875' }} />}
              </div>
            ))}
          </div>
          <motion.div initial={{ color: '#fff' }} whileHover={{ scale: 1.15, color: '#e6c875', rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Search size={18} color="currentColor" className="hero-search-icon" />
          </motion.div>
        </div>
      </nav>

      {/* MAIN CONTENT (LEFT SIDE) */}
      <div className="hero-main-content">
        <div>
          <motion.p initial={{ opacity: 0, letterSpacing: '0px' }} animate={{ opacity: 1, letterSpacing: '4px' }} transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, color: '#e6c875', marginBottom: 12 }}>
            VIAJA MILLONES DE AÑOS ATRÁS
          </motion.p>

          <motion.h1 initial="hidden" animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } }
            }}
            style={{
              fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(40px, 7vw, 80px)',
              lineHeight: 0.95, letterSpacing: 1, color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)', margin: 0
            }}>
            <div style={{ overflow: 'hidden', padding: '12px 0 4px', margin: '-12px 0 0' }}>
              {["DESCUBRE", "EL"].map((word, i) => (
                <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.22em', cursor: 'default' }}
                  variants={{
                    hidden: { y: "110%", opacity: 0, rotateZ: 5 },
                    visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.05, y: -6, color: '#e6c875', transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div style={{ overflow: 'hidden', padding: '12px 0 4px', margin: '-12px 0 0' }}>
              {["MUNDO", "DE", "LOS", "DINOSAURIOS"].map((word, i) => (
                <motion.span key={i} style={{ display: 'inline-block', marginRight: '0.22em', cursor: 'default' }}
                  variants={{
                    hidden: { y: "110%", opacity: 0, rotateZ: 5 },
                    visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.05, y: -6, color: '#e6c875', transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.8)', marginTop: 16, lineHeight: 1.5, maxWidth: 500 }}>
            Explora su vida, sus hábitats, su historia y los secretos que aún guarda la Tierra prehistórica.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            style={{ display: 'flex', marginTop: 24 }}>
            <button aria-label="Explorar dinosaurios" style={{
              background: '#e6c875', color: '#000', border: 'none', borderRadius: 40,
              padding: '18px 40px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 8px 30px rgba(230,200,117,0.3)', transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            onClick={() => {
              const el = document.getElementById('dinosaurios');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            >
              <Compass size={20} strokeWidth={2.2} />
              EXPLORAR DINOSAURIOS
            </button>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, y: [0, 10, 0] }} 
        transition={{ 
          opacity: { delay: 1.8 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        style={{
          position: 'absolute', bottom: 20, left: '50%', x: '-50%', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer'
        }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.5)' }}>DESLIZA PARA EXPLORAR</span>
        <Mouse size={16} color="rgba(255,255,255,0.5)" />
      </motion.div>
    </section>
  )
}
