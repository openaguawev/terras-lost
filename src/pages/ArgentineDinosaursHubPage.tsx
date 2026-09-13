import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, HelpCircle, Scale, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import { dinosaurs } from '../data/dinosaurs';
import CallToAction from '../components/CallToAction';
import './ArgentineDinosaursHubPage.css';

const FAQS = [
  {
    question: '¿Por qué en Argentina se descubrieron los dinosaurios más grandes del mundo?',
    answer: 'Durante el período Cretácico, la región patagónica contaba con un clima cálido y húmedo atravesado por gigantescos sistemas fluviales y una vegetación exuberante de coníferas primitivas. El aislamiento geográfico de América del Sur tras la separación de Gondwana y las condiciones tectónicas propiciaron cuencas sedimentarias que no solo permitieron a los titanosaurios evolucionar hacia tamaños descomunales sin barreras naturales, sino que brindaron una rápida sedimentación aluvial que preservó sus enormes osamentas de forma excepcional.'
  },
  {
    question: '¿Cuáles son los dinosaurios carnívoros más famosos de Argentina?',
    answer: 'El más emblemático es el Carnotaurus sastrei, célebre por sus cuernos frontales, su piel escamosa fosilizada y su extraordinaria velocidad de carrera. Otros terópodos colosales descubiertos en la Patagonia argentina incluyen al Giganotosaurus carolinii (uno de los mayores terópodos de la historia, superior en longitud al T-Rex) y al Mapusaurus roseae, un cazador gregario que acechaba a los grandes titanosaurios.'
  },
  {
    question: '¿Dónde se pueden visitar los fósiles de dinosaurios en Argentina?',
    answer: 'Los principales epicentros paleontológicos y museos se concentran en la Patagonia y Cuyo: el Museo Paleontológico Egidio Feruglio (MEF) en Trelew (Chubut), el Museo Carmen Funes en Plaza Huincul (Neuquén), el Museo Ernesto Bachmann en Villa El Chocón (Neuquén), el Museo Argentino de Ciencias Naturales (MACN) en Buenos Aires, y el Parque Provincial Ischigualasto (Valle de la Luna) en San Juan.'
  },
  {
    question: '¿Quién fue más grande: Argentinosaurus o Patagotitan?',
    answer: 'Patagotitan mayorum es el dinosaurio más largo (~37 metros) y cuenta con el esqueleto más completo jamás verificado por la ciencia (+84% recuperado de 6 individuos). Argentinosaurus huinculensis, aunque conocido por fósiles más fragmentarios, poseía vértebras dorsales aún más anchas y robustas, por lo que muchos paleontólogos calculan que pudo haber alcanzado una masa corporal superior (entre 70 y 90 toneladas frente a las 70-77 de Patagotitan).'
  }
];

export default function ArgentineDinosaursHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Extract the three featured Argentine dinosaurs
  const argentinosaurus = dinosaurs.find(d => d.slug === 'argentinosaurus');
  const patagotitan = dinosaurs.find(d => d.slug === 'patagotitan');
  const carnotaurus = dinosaurs.find(d => d.slug === 'carnotaurus');

  const argentineDinos = [
    {
      data: argentinosaurus,
      badge: 'EL MÁS MASIVO ESTIMADO',
      tagline: 'El coloso indiscutible de Plaza Huincul, un titanosaurio de hasta 90 toneladas que dominó los ecosistemas cretácicos de Neuquén.'
    },
    {
      data: patagotitan,
      badge: 'EL MÁS GRANDE CONFIRMADO',
      tagline: 'El titán de 37 metros descubierto en Chubut, con más del 84% de su esqueleto recuperado y confirmado por la ciencia moderna.'
    },
    {
      data: carnotaurus,
      badge: 'EL DEPREDADOR CON CUERNOS',
      tagline: 'El toro carnívoro de la Patagonia, un velocista letal con cuernos óseos frontales y piel fosilizada preservada de forma única.'
    }
  ].filter(item => item.data !== undefined);

  return (
    <div className="arg-hub-container">
      <SEO
        title="Dinosaurios de Argentina — Los Gigantes de la Patagonia | DinoRex"
        description="Explora los dinosaurios descubiertos en Argentina: Argentinosaurus, Patagotitan y Carnotaurus. Fósiles, comparativa de tamaños y la fascinante paleontología patagónica."
        keywords="dinosaurios argentinos, dinosaurios de argentina, dinosaurios en argentina, argentinosaurus, patagotitan, carnotaurus, paleontologia argentina, fosiles patagonia, titanosaurios"
        url="https://www.dinorex.org/dinosaurios-argentinos"
        image="https://www.dinorex.org/dinos/patagotitan.webp"
        customSchema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Dinosaurios de Argentina — DinoRex",
            "description": "Explora los dinosaurios más impresionantes descubiertos en territorio argentino: Argentinosaurus, Patagotitan y Carnotaurus.",
            "url": "https://www.dinorex.org/dinosaurios-argentinos",
            "hasPart": [
              {
                "@type": "Article",
                "name": "Argentinosaurus huinculensis",
                "url": "https://www.dinorex.org/criaturas/argentinosaurus"
              },
              {
                "@type": "Article",
                "name": "Patagotitan mayorum",
                "url": "https://www.dinorex.org/criaturas/patagotitan"
              },
              {
                "@type": "Article",
                "name": "Carnotaurus sastrei",
                "url": "https://www.dinorex.org/criaturas/carnotaurus"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.dinorex.org/" },
              { "@type": "ListItem", "position": 2, "name": "Dinosaurios", "item": "https://www.dinorex.org/#dinosaurios" },
              { "@type": "ListItem", "position": 3, "name": "Dinosaurios de Argentina", "item": "https://www.dinorex.org/dinosaurios-argentinos" }
            ]
          }
        ]}
      />

      {/* TOP NAVIGATION */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '24px 40px', zIndex: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#e6c875', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontFamily: 'Bebas Neue', letterSpacing: '2px', fontSize: '15px' }}>
          <ChevronLeft size={18} /> VOLVER AL INICIO
        </Link>
        <Link to="/#dinosaurios" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '12px', letterSpacing: '1px', fontWeight: 600 }}>
          TODOS LOS DINOSAURIOS →
        </Link>
      </nav>

      {/* HERO SECTION */}
      <header className="arg-hero">
        <div className="arg-hero-content">
          <div className="arg-eyebrow">
            <Compass size={14} /> PALEONTOLOGÍA ARGENTINA · TIERRA DE GIGANTES
          </div>
          <h1 className="arg-hero-title">DINOSAURIOS DE ARGENTINA</h1>
          <p className="arg-hero-subtitle">
            La Patagonia y las cuencas sedimentarias argentinas constituyen uno de los yacimientos fósiles más prolíficos del planeta. 
            Aquí caminaron los mayores saurópodos jamás registrados en la historia de la vida terrestre y depredadores con adaptaciones únicas en el mundo.
          </p>

          <div className="arg-stats-row">
            <div className="arg-stat-box">
              <div className="arg-stat-num">+37 m</div>
              <div className="arg-stat-lbl">LONGITUD MÁXIMA REGISTRADA</div>
            </div>
            <div className="arg-stat-box">
              <div className="arg-stat-num">90 t</div>
              <div className="arg-stat-lbl">PESO MÁXIMO ESTIMADO</div>
            </div>
            <div className="arg-stat-box">
              <div className="arg-stat-num">150 Ma</div>
              <div className="arg-stat-lbl">HISTORIA FÓSIL CONTINUA</div>
            </div>
            <div className="arg-stat-box">
              <div className="arg-stat-num">N° 1</div>
              <div className="arg-stat-lbl">CAPITAL MUNDIAL DE TITANOSAURIOS</div>
            </div>
          </div>
        </div>
      </header>

      {/* PRINCIPALES CRIATURAS ARGENTINAS */}
      <section className="arg-section">
        <div className="arg-section-header">
          <h2 className="arg-section-title">LOS TRES COLOSOS DEL SUR</h2>
          <p className="arg-section-desc">
            Conoce en profundidad a los tres dinosaurios argentinos que transformaron para siempre los libros de paleontología y batieron récords mundiales de tamaño, anatomía y velocidad.
          </p>
        </div>

        <div className="arg-dinos-grid">
          {argentineDinos.map(({ data, badge, tagline }) => {
            if (!data) return null;
            return (
              <article className="arg-dino-card" key={data.slug}>
                <div className="arg-dino-img-wrap">
                  <img src={data.heroImage} alt={data.name} className="arg-dino-img" width={400} height={240} loading="lazy" />
                  <span className="arg-dino-badge">{badge}</span>
                </div>
                <div className="arg-dino-body">
                  <h3 className="arg-dino-name">{data.name}</h3>
                  <div className="arg-dino-scientific">{data.scientificName}</div>
                  <p className="arg-dino-desc">{tagline}</p>

                  <div className="arg-dino-meta">
                    <div className="arg-dino-meta-item">
                      <span className="arg-dino-meta-lbl">LONGITUD</span>
                      <span className="arg-dino-meta-val">{data.sideStats.find(s => s.label === 'LONGITUD')?.value || 'N/A'}</span>
                    </div>
                    <div className="arg-dino-meta-item">
                      <span className="arg-dino-meta-lbl">PESO</span>
                      <span className="arg-dino-meta-val">{data.sideStats.find(s => s.label === 'PESO')?.value || 'N/A'}</span>
                    </div>
                    <div className="arg-dino-meta-item">
                      <span className="arg-dino-meta-lbl">YACIMIENTO</span>
                      <span className="arg-dino-meta-val">{data.content.mapLocation.split(',')[0]}</span>
                    </div>
                    <div className="arg-dino-meta-item">
                      <span className="arg-dino-meta-lbl">DIETA</span>
                      <span className="arg-dino-meta-val">{data.heroStats.diet}</span>
                    </div>
                  </div>

                  <Link to={`/criaturas/${data.slug}`} className="arg-dino-btn">
                    EXPLORAR FICHA COMPLETA <ChevronRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BLOQUE COMPARATIVO: ARGENTINOSAURUS VS PATAGOTITAN */}
      <section className="arg-section" style={{ background: 'rgba(230, 200, 117, 0.02)', borderRadius: '24px' }}>
        <div className="arg-section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#e6c875', fontFamily: 'Bebas Neue', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>
            <Scale size={16} /> COMPARATIVA CIENTÍFICA
          </div>
          <h2 className="arg-section-title">ARGENTINOSAURUS VS PATAGOTITAN: ¿CUÁL FUE MÁS GRANDE?</h2>
          <p className="arg-section-desc">
            El debate sobre cuál fue el mayor animal terrestre de todos los tiempos enfrenta a dos colosos descubiertos en la Patagonia argentina. 
            Ambos alcanzaron los límites físicos de la biomecánica de vertebrados terrestres, pero sus diferencias fósiles marcan un debate apasionante.
          </p>
        </div>

        <div className="arg-table-wrapper">
          <table className="arg-table">
            <thead>
              <tr>
                <th>CARACTERÍSTICA</th>
                <th>ARGENTINOSAURUS HUINCULENSIS</th>
                <th>PATAGOTITAN MAYORUM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Descubrimiento</strong></td>
                <td>1987 — Plaza Huincul, Neuquén (descrito 1993)</td>
                <td>2012 — Estancia La Flecha, Chubut (descrito 2017)</td>
              </tr>
              <tr>
                <td><strong>Longitud Total</strong></td>
                <td>30 - 35 metros</td>
                <td><strong>37 metros</strong> (Líder confirmado en longitud)</td>
              </tr>
              <tr>
                <td><strong>Masa Corporal Estimada</strong></td>
                <td><strong>70 - 90 toneladas</strong> (Vértebras más anchas y voluminosas)</td>
                <td>70 - 77 toneladas (Masa confirmada con múltiples fémures)</td>
              </tr>
              <tr>
                <td><strong>Completitud del Esqueleto</strong></td>
                <td>~10 - 15% (Vértebras dorsales gigantes, sacro, costillas, fémur parcial)</td>
                <td><strong>+84%</strong> (+150 huesos fósiles pertenecientes a 6 individuos)</td>
              </tr>
              <tr>
                <td><strong>Altura de los Hombros</strong></td>
                <td>~4.5 a 5 metros (~18 m con cuello extendido)</td>
                <td>~6 a 8 metros (~15 m con cuello extendido)</td>
              </tr>
              <tr>
                <td><strong>Dimensión de Vértebras</strong></td>
                <td>Holotipo MCF-PVPH-1: <strong>1.59 m de altura</strong> por 1.29 m de ancho</td>
                <td>Holotipo MPEF-PV 3400: ~1.40 m de altura</td>
              </tr>
              <tr>
                <td><strong>Veredicto Paleontológico</strong></td>
                <td>
                  <strong>Probable campeón en peso:</strong> El enorme ancho de sus vértebras sugiere que tenía una caja torácica y volumen muscular aún más masivo.
                </td>
                <td>
                  <strong>Campeón indiscutido en verificación:</strong> Es el mayor animal terrestre del que poseemos prácticamente todo el esqueleto para medir con certeza.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PALEONTOLOGÍA ARGENTINA: CONTEXTO HISTÓRICO */}
      <section className="arg-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: 'Bebas Neue', color: '#e6c875', letterSpacing: '3px', fontSize: '14px' }}>
              HISTORIA NATURAL DEL CONO SUR
            </span>
            <h2 className="arg-section-title" style={{ marginTop: '8px', textAlign: 'left' }}>
              ¿POR QUÉ LA PATAGONIA FUE LA CUNA DE LOS COLOSOS?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', fontSize: '15px', marginBottom: '16px' }}>
              Hace entre 100 y 70 millones de años, la geografía de la actual Patagonia era radicalmente distinta a la meseta árida de hoy. Se trataba de una vasta planicie aluvial de clima subtropical, surcada por ríos meandriformes que descendían de cordilleras volcánicas y desembocaban en mares cálidos interiores.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', fontSize: '15px', marginBottom: '16px' }}>
              La abundante vegetación de araucarias gigantescas, coníferas y helechos permitió a los saurópodos titanosaurios desarrollar estaturas monumentales para alcanzar el dosel arbóreo. A su vez, el desprendimiento de América del Sur de Gondwana creó un santuario evolutivo libre de competencia con las faunas del hemisferio norte.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', fontSize: '15px' }}>
              Las periódicas crecidas fluviales sepultaron de manera inmediata los restos de estos colosos bajo gruesas capas de arena y limo, evitando la descomposición a la intemperie y regalando a la humanidad uno de los registros paleontológicos más ricos y asombrosos del mundo.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(230, 200, 117, 0.3)' }}>
            <img src="/habitat_jungle.webp" alt="Paisaje prehistórico patagónico" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,5,4,0.85) 0%, transparent 50%)' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
              <div style={{ fontFamily: 'Bebas Neue', color: '#e6c875', fontSize: '20px', letterSpacing: '1px' }}>ECOSISTEMAS CRETÁCICOS DEL SUR</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Llanuras fluviales de Neuquén y valles de inundación de Chubut.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="arg-section">
        <div className="arg-section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#e6c875', fontFamily: 'Bebas Neue', letterSpacing: '3px', fontSize: '14px', marginBottom: '10px' }}>
            <HelpCircle size={16} /> DUDAS HABITUALES
          </div>
          <h2 className="arg-section-title">PREGUNTAS FRECUENTES SOBRE DINOSAURIOS ARGENTINOS</h2>
          <p className="arg-section-desc">
            Respuestas basadas en estudios paleontológicos recientes sobre los dinosaurios hallados en el territorio argentino.
          </p>
        </div>

        <div className="arg-faq-list">
          {FAQS.map((faq, idx) => (
            <div className="arg-faq-item" key={idx} onClick={() => toggleFaq(idx)}>
              <div className="arg-faq-q">
                <span>{faq.question}</span>
                <span style={{ color: '#e6c875', fontSize: '20px', fontWeight: 300, transition: 'transform 0.2s', transform: openFaq === idx ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              {openFaq === idx && (
                <div className="arg-faq-a">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA & FOOTER */}
      <CallToAction />
    </div>
  );
}
