import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, MapPin, Bone, HelpCircle } from 'lucide-react';
import { dinosaurs } from '../data/dinosaurs';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EraHubPage.css';

gsap.registerPlugin(ScrollTrigger);

const ERA_DATA: Record<string, {
  title: string;
  time: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
}> = {
  'triasico': {
    title: 'TRIÁSICO',
    time: '252 - 201 Ma',
    subtitle: 'El comienzo de los dinosaurios',
    description: 'La era Triásica marcó el inicio de la dinastía de los dinosaurios tras la gran extinción del Pérmico. En un mundo cálido dominado por el supercontinente Pangea, surgieron los primeros reptiles ágiles y arcosaurios que sentaron las bases para los siguientes millones de años de evolución y dominio terrestre.',
    color: '#ff6a00',
    image: '/triassic.png'
  },
  'jurasico': {
    title: 'JURÁSICO',
    time: '201 - 145 Ma',
    subtitle: 'La era de los gigantes',
    description: 'Durante el período Jurásico, la fragmentación de Pangea dio origen a climas más húmedos y templados, permitiendo la expansión de exuberantes selvas y bosques de coníferas. Bajo estas condiciones ideales, la vida vegetal floreció y surgieron los mayores gigantes de la Tierra, los enormes saurópodos de cuello largo y los primeros acorazados.',
    color: '#4ade80',
    image: '/jurassic.png'
  },
  'cretacico': {
    title: 'CRETÁCICO',
    time: '145 - 66 Ma',
    subtitle: 'El dominio y la extinción',
    description: 'El Cretácico representa el apogeo y florecimiento de la diversidad dinosauriana. Los continentes se separaron hacia sus posiciones modernas y surgieron los depredadores terrestres más temibles, los ceratópsidos con cuernos y el desarrollo completo de armaduras defensivas. La era terminó con un cataclismo masivo por impacto astronómico.',
    color: '#fbbf24',
    image: '/cretaceous.png'
  }
};

export default function EraHubPage() {
  const { era } = useParams<{ era: string }>();
  const eraKey = era?.toLowerCase() || '';
  const eraInfo = ERA_DATA[eraKey];
  
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eraKey]);

  useEffect(() => {
    if (!eraInfo) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header entrance
        gsap.from(".era-header-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });

        // Cards scroll reveal
        gsap.from(".era-dino-card", {
          scrollTrigger: {
            trigger: ".era-hub-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out"
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Fallback simple instant fade
        gsap.from(".era-header-content, .era-hub-grid", {
          opacity: 0,
          duration: 0.3
        });
      });
    });

    return () => ctx.revert();
  }, [eraKey, eraInfo]);

  if (!eraInfo) {
    return (
      <div className="era-not-found">
        <h2>Era no encontrada</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  const filteredDinos = dinosaurs.filter(d => d.era === eraKey);

  // Generate CollectionPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${eraInfo.title} — DinoRex`,
    "description": eraInfo.description,
    "url": `https://www.dinorex.org/eras/${eraKey}`,
    "about": {
      "@type": "Thing",
      "name": `Era ${eraInfo.title}`
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredDinos.map((dino, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.dinorex.org/criaturas/${dino.slug}`
      }))
    }
  };

  return (
    <div className="era-hub-container">
      <SEO
        title={`${eraInfo.title} — DinoRex`}
        description={eraInfo.description}
        url={`https://www.dinorex.org/eras/${eraKey}`}
        image={`https://www.dinorex.org${eraInfo.image}`}
        customSchema={schema}
      />

      <nav className="era-hub-nav">
        <Link to="/" className="era-back-to-home">
          <ChevronLeft size={16} /> VOLVER A DINOSAURIOS
        </Link>
      </nav>

      <header ref={headerRef} className="era-hub-header" style={{ backgroundImage: `url(${eraInfo.image})` }}>
        <div className="era-header-overlay"></div>
        <div className="era-header-content">
          <div className="era-time-badge" style={{ color: eraInfo.color, borderColor: eraInfo.color }}>
            <Clock size={14} /> {eraInfo.time}
          </div>
          <h1 className="era-hub-title">{eraInfo.title}</h1>
          <h2 className="era-hub-subtitle" style={{ color: eraInfo.color }}>{eraInfo.subtitle}</h2>
          <p className="era-hub-description">{eraInfo.description}</p>
        </div>
      </header>

      <main className="era-hub-main">
        <div className="era-section-divider">
          <span className="divider-line"></span>
          <span className="divider-label" style={{ color: eraInfo.color }}>ESPECIES CATALOGADAS</span>
          <span className="divider-line"></span>
        </div>

        {filteredDinos.length > 0 ? (
          <div ref={gridRef} className="era-hub-grid">
            {filteredDinos.map(dino => (
              <Link to={`/criaturas/${dino.slug}`} key={dino.slug} className="era-dino-card" style={{ backgroundImage: `url(${dino.heroImage})` }}>
                <div className="era-dino-card-overlay"></div>
                <div className="era-dino-card-content">
                  <span className="era-dino-diet" style={{ 
                    color: dino.heroStats.diet === 'Carnívoro' ? '#ff4444' : '#4ade80',
                    borderColor: dino.heroStats.diet === 'Carnívoro' ? 'rgba(255, 68, 68, 0.3)' : 'rgba(74, 222, 128, 0.3)'
                  }}>
                    <Bone size={12} /> {dino.heroStats.diet}
                  </span>
                  <h3 className="era-dino-name">{dino.name}</h3>
                  <p className="era-dino-scientific">{dino.scientificName}</p>
                  
                  <div className="era-dino-brief">
                    <div className="era-dino-stat">
                      <MapPin size={12} /> {dino.heroStats.habitat}
                    </div>
                  </div>
                  
                  <span className="era-dino-btn" style={{ color: eraInfo.color }}>
                    VER DETALLES <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="era-hub-empty">
            <HelpCircle size={48} strokeWidth={1} color="#C9A84C" />
            <p>Próximamente más criaturas de esta era en el catálogo.</p>
          </div>
        )}
      </main>
    </div>
  );
}
