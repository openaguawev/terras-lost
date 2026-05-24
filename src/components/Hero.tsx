import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Mouse, Bone, Trees, History, Map } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#000', display: 'flex', flexDirection: 'column' }}>
      {/* BACKGROUND VIDEO */}
      <div ref={parallaxRef} style={{ position: 'absolute', inset: 0, transform: 'scale(1.1)' }}>
        <video autoPlay muted loop playsInline style={{
          width: '100%', height: '100%', objectFit: 'cover',
          objectPosition: isMobile ? '80% center' : 'center center',
          filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
        }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* SUBTLE OVERLAYS */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 30%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%)' }} />

      {/* NAVBAR */}
      <nav style={{
        position: 'relative', zIndex: 50, flexShrink: 0,
        padding: isMobile ? '16px 20px' : '16px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Skull Logo SVG Placeholder */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
            <path d="M12 4C8.686 4 6 6.686 6 10v4.536l-1.562 1.562A2 2 0 005 19.5V20h14v-.5a2 2 0 00-.586-1.414L16.85 16.526V10c0-3.314-2.686-6-6-6zM9 13h.01M15 13h.01M9 17h6" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 28, letterSpacing: 2, lineHeight: 1 }}>DINOMUNDO</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, letterSpacing: 2, color: 'rgba(255,255,255,0.6)', marginTop: -2 }}>EXPLORA EL PASADO. DESCUBRE LA VIDA.</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 32 }}>
            {[
              { label: 'INICIO', active: true },
              { label: 'DINOSAURIOS ⌄' },
            { label: 'HÁBITAT' },
            { label: 'HISTORIA' },
            { label: 'FÓSILES' },
            { label: 'NOTICIAS' },
            { label: 'CONTACTO' },
          ].map(link => (
            <div key={link.label} style={{ position: 'relative', paddingBottom: 4 }}>
              <a href="#" style={{
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
                color: link.active ? '#fff' : 'rgba(255,255,255,0.7)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}>{link.label}</a>
              {link.active && <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#e6c875' }} />}
            </div>
          ))}
          </div>
          <Search size={18} color="#fff" style={{ cursor: 'pointer', marginLeft: isMobile ? 0 : 16 }} />
        </div>
      </nav>

      {/* MAIN CONTENT (LEFT SIDE) */}
      <div style={{
        position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: isMobile ? '0 20px' : '0 60px', maxWidth: 710
      }}>
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

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.8)', marginTop: 16, lineHeight: 1.5, maxWidth: 500 }}>
          Explora su vida, sus hábitats, su historia y los secretos que aún guarda la Tierra prehistórica.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          style={{ display: 'flex', marginTop: 24 }}>
          <button style={{
            background: '#e6c875', color: '#000', border: 'none', borderRadius: 40,
            padding: '18px 40px', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
            boxShadow: '0 8px 30px rgba(230,200,117,0.3)', transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4C8.686 4 6 6.686 6 10v4.536l-1.562 1.562A2 2 0 005 19.5V20h14v-.5a2 2 0 00-.586-1.414L16.85 16.526V10c0-3.314-2.686-6-6-6zM9 13h.01M15 13h.01M9 17h6" /></svg>
            EXPLORAR DINOSAURIOS
          </button>
        </motion.div>
      </div>

      {/* FEATURES BAND (BOTTOM) */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'relative', zIndex: 10, margin: isMobile ? '0 20px 10px 20px' : '0 60px 10px 60px', flexShrink: 0,
          display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)', borderRadius: 12, overflow: 'hidden'
        }}>
        {[
          { icon: <Bone size={18} color="#e6c875" strokeWidth={1.5} />, title: 'ESPECIES INCREÍBLES', desc: 'Conoce los dinosaurios más fascinantes que jamás existieron.' },
          { icon: <Trees size={18} color="#e6c875" strokeWidth={1.5} />, title: 'HÁBITATS REALISTAS', desc: 'Descubre los ecosistemas donde vivieron y cómo era su entorno.' },
          { icon: <History size={18} color="#e6c875" strokeWidth={1.5} />, title: 'HISTORIA EVOLUTIVA', desc: 'Desde su origen hasta su extinción. La historia completa.' },
          { icon: <Map size={18} color="#e6c875" strokeWidth={1.5} />, title: 'FÓSILES Y DESCUBRIMIENTOS', desc: 'Los últimos hallazgos y cómo se reconstruye el pasado.' },
        ].map((item, i) => (
          <div key={i} style={{ 
            padding: '10px 16px', background: 'rgba(0,0,0,0.4)', 
            borderRight: (isMobile ? (i % 2 === 0) : (i < 3)) ? '1px solid rgba(255,255,255,0.05)' : 'none',
            borderBottom: (isMobile && i < 2) ? '1px solid rgba(255,255,255,0.05)' : 'none'
          }}>
            <div style={{ marginBottom: 4, display: 'flex', filter: 'drop-shadow(0 0 8px rgba(230,200,117,0.4))' }}>{item.icon}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#fff', marginBottom: 2 }}>{item.title}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)', lineHeight: 1.2 }}>{item.desc}</div>
          </div>
        ))}
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{
          position: 'relative', margin: '0 auto 12px auto', zIndex: 10, flexShrink: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
        }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, letterSpacing: 2, color: 'rgba(255,255,255,0.5)' }}>DESLIZA PARA EXPLORAR</span>
        <Mouse size={16} color="rgba(255,255,255,0.5)" />
      </motion.div>
    </section>
  )
}
