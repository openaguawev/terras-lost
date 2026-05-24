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
    }}>

      {/* VIDEO DE FONDO */}
      <div ref={parallaxRef} style={{
        position: 'absolute', inset: 0,
        transform: 'scale(1.1)',
      }}>
        <video
          autoPlay muted loop playsInline
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'brightness(1.0) contrast(1.05) saturate(1.2)',
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAY CAPAS */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.05)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 35%, rgba(0,0,0,0.1) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 50%)',
      }} />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: '28px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 20, fontWeight: 900,
            color: '#C9A84C', letterSpacing: 4,
          }}>TERRA'S LOST</span>
          <span style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 9, letterSpacing: 6,
            color: 'rgba(201,168,76,0.4)',
          }}>PREHISTORIC WORLD</span>
        </div>

        <div style={{ display: 'flex', gap: 36 }}>
          {['INICIO', 'CRIATURAS', 'ERAS', 'FÓSILES'].map(link => (
            <a key={link} href="#" style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 11, letterSpacing: 4,
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >{link}</a>
          ))}
        </div>

        <div style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 10, letterSpacing: 3,
          color: 'rgba(201,168,76,0.4)',
        }}>66M — PRESENTE</div>
      </motion.nav>

      {/* CONTENIDO HERO */}
      <div style={{
        position: 'absolute', 
        zIndex: 10,
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        padding: '0 60px',
        width: '100%',
        maxWidth: '800px',
      }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 11, letterSpacing: 7,
            color: '#C9A84C', marginBottom: 14,
          }}
        >
          VIAJA MILLONES DE AÑOS ATRÁS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(50px, 10vw, 110px)',
            fontWeight: 900, lineHeight: 0.9,
            letterSpacing: -2, color: '#fff',
            textShadow: '0 4px 40px rgba(0,0,0,0.9)',
          }}
        >
          DESCUBRE EL<br />
          MUNDO DE LOS<br />
          <span style={{ color: '#C9A84C' }}>DINOSAURIOS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: 18, fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.6)',
            marginTop: 20, maxWidth: 500,
            lineHeight: 1.6,
          }}
        >
          Explora su vida, sus hábitats, su historia y los secretos que aún guarda la Tierra prehistórica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ display: 'flex', gap: 16, marginTop: 32 }}
        >
          <button style={{
            background: '#C9A84C', color: '#000',
            border: 'none', borderRadius: 40,
            padding: '16px 40px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(201,168,76,0.5)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            EXPLORAR DINOSAURIOS
          </button>
          <button style={{
            background: 'rgba(0,0,0,0.3)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 40,
            padding: '16px 40px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            ▶ VER VIDEO
          </button>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: '150px', left: '50%',
          transform: 'translateX(-50%)',
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
            width: 1, height: 50,
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>

      {/* FEATURES BAND */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 0, left: '60px', right: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderBottom: 'none',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        {[
          { icon: '🦴', title: 'ESPECIES INCREÍBLES', desc: 'Conoce los dinosaurios más fascinantes que jamás existieron.' },
          { icon: '🌿', title: 'HÁBITATS REALISTAS', desc: 'Descubre los ecosistemas donde vivieron y cómo era su entorno.' },
          { icon: '📖', title: 'HISTORIA EVOLUTIVA', desc: 'Desde su origen hasta su extinción. La historia completa.' },
          { icon: '🔬', title: 'FÓSILES Y DESCUBRIMIENTOS', desc: 'Los últimos hallazgos y cómo se reconstruye el pasado.' },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '24px',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(12px)',
            borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
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

    </section>
  )
}
