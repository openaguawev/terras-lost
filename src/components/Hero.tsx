import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const rexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rexRef.current) {
        const y = window.scrollY * 0.15
        rexRef.current.style.transform = `translateY(${y}px)`
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
      justifyContent: 'flex-end',
    }}>

      {/* SKY */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(175deg, #0a0302 0%, #1a0a04 25%, #2d1205 45%, #0a0302 100%)',
      }} />

      {/* MOON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        style={{
          position: 'absolute', top: 80, right: 160,
          width: 55, height: 55, borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #e8d5a0, #c4a84a)',
          boxShadow: '0 0 60px rgba(196,168,74,0.4)',
        }}
      />

      {/* STARS */}
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.random() * 0.8 + 0.2 }}
          transition={{ duration: 2, delay: Math.random() * 3, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            width: 1, height: 1,
            background: '#fff',
            borderRadius: '50%',
          }}
        />
      ))}

      {/* JUNGLE LAYERS */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '50%',
        background: 'linear-gradient(to top, #000 0%, #050d03 40%, transparent 100%)',
        zIndex: 2,
      }} />

      {/* T-REX SILHOUETTE */}
      <div ref={rexRef} style={{
        position: 'absolute', right: '2%', bottom: 60,
        width: 480, zIndex: 1,
        filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.15))',
      }}>
        <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 440 C118 400 98 350 106 300 C116 248 152 218 188 202 C218 188 254 186 286 194 C326 206 356 234 362 266 C368 296 352 330 326 356 C294 386 252 404 216 412 C190 420 164 428 140 440Z" fill="#0d0804"/>
          <path d="M140 440 C108 434 78 416 52 392 C26 366 6 336 10 310 C14 284 32 272 48 277 C68 284 88 302 106 318 C124 334 138 354 140 376Z" fill="#0a0603"/>
          <path d="M286 194 C308 178 328 156 346 132 C362 110 372 92 380 78 C388 64 392 56 398 62 C404 68 398 86 386 104 C372 126 350 148 332 162 C314 176 292 186 288 191Z" fill="#0a0603"/>
          <path d="M380 78 C392 56 414 42 432 38 C448 34 460 44 462 60 C464 76 450 94 430 98 C410 102 390 88 382 72Z" fill="#060402"/>
          <path d="M396 98 C412 110 436 114 450 109 C464 104 472 91 470 78 C468 64 454 56 438 58 C420 62 406 80 402 92Z" fill="#040301"/>
          <circle cx="446" cy="52" r="6" fill="#cc5500" opacity="0.9"/>
          <motion.circle
            cx="446" cy="52" r="4" fill="#ff7700"
            animate={{ r: [4, 5.5, 4], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <circle cx="447.5" cy="50.5" r="1.5" fill="#fff" opacity="0.7"/>
          <path d="M190 412 C186 440 182 468 178 488 C175 502 170 506 168 500 C166 494 172 470 175 448 C178 428 182 414 185 406Z" fill="#0a0603"/>
          <path d="M228 416 C226 444 224 472 222 492 C220 508 215 512 213 506 C211 500 217 476 219 454 C221 434 224 418 225 410Z" fill="#0a0603"/>
          <path d="M300 270 C312 260 324 258 328 266 C332 274 322 282 312 284 C302 286 294 276 294 268Z" fill="#0a0603"/>
        </svg>
      </div>

      {/* PARTICLES */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -300], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${10 + Math.random() * 80}%`,
            bottom: 0,
            width: 2, height: 2,
            background: 'rgba(201,168,76,0.5)',
            borderRadius: '50%',
            zIndex: 3,
          }}
        />
      ))}

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 60px 80px' }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 10, letterSpacing: 8,
            color: '#C9A84C', marginBottom: 14,
          }}
        >
          EXPERIENCIA CINEMATOGRÁFICA PREHISTÓRICA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(70px, 12vw, 130px)',
            fontWeight: 900, lineHeight: 0.88,
            letterSpacing: -2, color: '#fff',
            textShadow: '0 4px 30px rgba(0,0,0,0.8)',
          }}
        >
          TERRA'S<br />
          <span style={{ color: '#C9A84C' }}>LOST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          style={{
            fontFamily: 'Crimson Pro, serif',
            fontSize: 18, fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.5)',
            marginTop: 20, maxWidth: 480, lineHeight: 1.6,
          }}
        >
          El mundo que existió antes que nosotros. Las criaturas que lo dominaron. La historia que el tiempo enterró.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          style={{ display: 'flex', gap: 16, marginTop: 32 }}
        >
          <button style={{
            background: '#C9A84C', color: '#000',
            border: 'none', borderRadius: 40,
            padding: '14px 36px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(201,168,76,0.4)',
          }}>
            EXPLORAR CRIATURAS
          </button>
          <button style={{
            background: 'rgba(0,0,0,0.4)',
            color: '#fff',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 40,
            padding: '14px 36px',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 12, letterSpacing: 4,
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
          }}>
            VER VIDEO
          </button>
        </motion.div>
      </div>

      {/* SCROLL HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{
          position: 'absolute', bottom: 28,
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8, zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 9, letterSpacing: 5,
          color: 'rgba(255,255,255,0.2)',
        }}>DESCENDER</span>
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

    </section>
  )
}
