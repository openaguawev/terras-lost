import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform =
          `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* VIDEO */}
      <div ref={parallaxRef} style={{
        position: 'absolute', inset: 0,
      }}>
        <video autoPlay muted loop playsInline style={{
          width: '100%', height: '100%', objectFit: 'cover',
          filter: 'brightness(0.95) contrast(1.1) saturate(1.3)',
        }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAYS */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />

      {/* NAVBAR — fijo arriba */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative', zIndex: 50,
          padding: '24px 60px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontFamily: 'Cinzel, serif', fontSize: 18,
            fontWeight: 900, color: '#C9A84C', letterSpacing: 4,
          }}>TERRA'S LOST</span>
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif', fontSize: 9,
            letterSpacing: 6, color: 'rgba(201,168,76,0.4)',
          }}>PREHISTORIC WORLD</span>
        </div>

        <div style={{ display: 'flex', gap: 36 }}>
          {['INICIO', 'CRIATURAS', 'ERAS', 'FÓSILES'].map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'Bebas Neue, sans-serif', fontSize: 11,
              letterSpacing: 4, color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none', transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >{link}</a>
          ))}
        </div>

        <span style={{
          fontFamily: 'Bebas Neue, sans-serif', fontSize: 10,
          letterSpacing: 3, color: 'rgba(201,168,76,0.4)',
        }}>66M — PRESENTE</span>
      </motion.nav>

      {/* CONTENIDO — ocupa el espacio restante */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 60px',
      }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 11, letterSpacing: 7,
            color: '#C9A84C', marginBottom: 16,
          }}
        >
          VIAJA MILLONES DE AÑOS ATRÁS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(36px, 6vw, 80px)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: -1, color: '#fff',
            textShadow: '0 4px 30px rgba(0,0,0,0.8)',
            maxWidth: 700, margin: 0,
          }}
        >
          DESCUBRE EL MUNDO<br />DE LOS{' '}
          <span style={{ color: '#C9A84C' }}>DINOSAURIOS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: 17, fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            marginTop: 16, maxWidth: 460, lineHeight: 1.6,
          }}
        >
          Explora su vida, sus hábitats, su historia y los secretos que aún guarda la Tierra prehistórica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          style={{ display: 'flex', gap: 14, marginTop: 28 }}
        >
          <button style={{
            background: '#C9A84C', color: '#000',
            border: 'none', borderRadius: 40,
            padding: '14px 36px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(201,168,76,0.4)',
          }}>EXPLORAR DINOSAURIOS</button>

          <button style={{
            background: 'rgba(0,0,0,0.3)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 40, padding: '14px 36px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer', backdropFilter: 'blur(12px)',
          }}>▶ VER VIDEO</button>
        </motion.div>
      </div>

      {/* FEATURES BAND — pegada al fondo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'relative', zIndex: 10,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          flexShrink: 0,
        }}
      >
        {[
          { icon: '🦴', title: 'ESPECIES INCREÍBLES', desc: 'Conoce los dinosaurios más fascinantes que jamás existieron.' },
          { icon: '🌿', title: 'HÁBITATS REALISTAS', desc: 'Descubre los ecosistemas donde vivieron y cómo era su entorno.' },
          { icon: '📖', title: 'HISTORIA EVOLUTIVA', desc: 'Desde su origen hasta su extinción. La historia completa.' },
          { icon: '🔬', title: 'FÓSILES Y DESCUBRIMIENTOS', desc: 'Los últimos hallazgos y cómo se reconstruye el pasado.' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '20px 24px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
          }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{item.icon}</div>
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 13, letterSpacing: 2,
              color: '#fff', marginBottom: 6,
            }}>{item.title}</div>
            <div style={{
              fontFamily: 'Crimson Pro, serif',
              fontSize: 13, color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.5,
            }}>{item.desc}</div>
          </div>
        ))}
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 110,
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 6, zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 9, letterSpacing: 5,
          color: 'rgba(255,255,255,0.3)',
        }}>DESLIZA PARA EXPLORAR</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>

    </section>
  )
}
