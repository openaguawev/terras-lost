import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { getDinosaurBySlug } from '../data/dinosaurs'

export default function DinosaurPage() {
  const { slug } = useParams()
  const dino = getDinosaurBySlug(slug || '')

  if (!dino) return (
    <div style={{
      background: '#070504', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Cinzel, serif', color: '#C9A84C', fontSize: 24
    }}>
      Criatura no encontrada — <Link to="/" style={{color:'#C9A84C',marginLeft:8}}>Volver al inicio</Link>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>{dino.name} — {dino.subtitle} | DinoRex</title>
        <meta name="description" content={dino.metaDescription} />
        <meta name="keywords" content={dino.keywords} />
        <link rel="canonical" href={`https://www.dinorex.org/criaturas/${dino.slug}`} />
        <meta property="og:title" content={`${dino.name} | DinoRex`} />
        <meta property="og:description" content={dino.metaDescription} />
        <meta property="og:image" content={`https://www.dinorex.org${dino.image}`} />
        <meta property="og:url" content={`https://www.dinorex.org/criaturas/${dino.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${dino.name} — ${dino.subtitle}`,
            "description": dino.metaDescription,
            "image": `https://www.dinorex.org${dino.image}`,
            "url": `https://www.dinorex.org/criaturas/${dino.slug}`,
            "publisher": { "@type": "Organization", "name": "DinoRex", "url": "https://www.dinorex.org" }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": dino.facts.map(fact => ({
              "@type": "Question",
              "name": `¿Sabías que el ${dino.name}...?`,
              "acceptedAnswer": { "@type": "Answer", "text": fact }
            }))
          })}
        </script>
      </Helmet>

      <div style={{ background: '#070504', minHeight: '100vh', color: '#fff' }}>

        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '20px 60px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(7,5,4,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,168,76,0.1)'
        }}>
          <Link to="/" style={{ fontFamily: 'Cinzel, serif', fontSize: 20, fontWeight: 900, color: '#C9A84C', letterSpacing: 4, textDecoration: 'none' }}>DINOREX</Link>
          <Link to="/" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 11, letterSpacing: 4, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>← VOLVER</Link>
        </nav>

        <div style={{ height: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
          <img src={dino.image} alt={`${dino.name} - ${dino.subtitle}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,5,4,1) 0%, transparent 50%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '0 60px 60px' }}>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 11, letterSpacing: 6, color: '#C9A84C', marginBottom: 12 }}>
              {dino.era} · {dino.type}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(40px, 8vw, 96px)', fontWeight: 900, lineHeight: 0.9, color: '#fff', margin: '0 0 16px' }}>
              {dino.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              style={{ fontFamily: 'Crimson Pro, serif', fontSize: 20, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', maxWidth: 600 }}>
              {dino.subtitle}
            </motion.p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 40px' }}>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, fontWeight: 700, color: '#C9A84C', marginBottom: 24 }}>Sobre el {dino.name}</h2>
            <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: 20, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>{dino.longDescription}</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, fontWeight: 700, color: '#C9A84C', marginBottom: 24 }}>Datos y características</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, border: '1px solid rgba(201,168,76,0.15)', overflow: 'hidden', borderRadius: 8 }}>
              {dino.stats.map((stat, i) => (
                <div key={i} style={{
                  padding: '20px 24px', background: 'rgba(255,255,255,0.03)',
                  borderRight: i % 3 !== 2 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                  borderBottom: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 10, letterSpacing: 3, color: 'rgba(255,255,255,0.5)', marginBottom: 6 }}>{stat.label}</div>
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: 24, fontWeight: 700, color: '#C9A84C' }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 28, fontWeight: 700, color: '#C9A84C', marginBottom: 24 }}>¿Sabías que...?</h2>
            {dino.facts.map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontSize: 20, fontWeight: 700, color: '#C9A84C', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontFamily: 'Crimson Pro, serif', fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>{fact}</p>
              </div>
            ))}
          </motion.section>

        </div>
      </div>
    </>
  )
}
