import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Bone, HelpCircle, Waves, Sun, Leaf, Mountain } from 'lucide-react';
import { dinosaurs } from '../data/dinosaurs';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HabitatHubPage.css';

gsap.registerPlugin(ScrollTrigger);

const HABITAT_DATA: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  icon: React.ElementType;
}> = {
  'jungla': {
    title: 'SELVAS',
    subtitle: 'Bosques densos y exuberantes',
    description: 'Las selvas prehistóricas del Mesozoico eran mundos húmedos y cálidos que albergaban una densidad colosal de flora, helechos gigantescos y grandes coníferas. Este entorno densamente arbolado proveía abundante follaje para alimentar a gigantescos herbívoros y proporcionaba las mejores áreas de caza y sigilo para los depredadores terrestres más veloces.',
    color: '#4ade80',
    image: '/habitat_jungle.png',
    icon: Leaf
  },
  'oceano': {
    title: 'OCÉANOS',
    subtitle: 'Extensos mares prehistóricos',
    description: 'Gran parte del planeta estaba cubierto por mares interiores y extensos océanos tropicales que albergaban una rica cadena alimenticia. En estas aguas cálidas y profundas, dominaban gigantescos reptiles marinos y peces voladores que libraban batallas por la supervivencia lejos de las costas terrestres.',
    color: '#3b82f6',
    image: '/habitat_ocean.png',
    icon: Waves
  },
  'desierto': {
    title: 'DESIERTOS',
    subtitle: 'Tierras áridas y vastas',
    description: 'Los desiertos del Mesozoico presentaban condiciones climáticas extremas con escasa vegetación y prolongados períodos de sequía. En este entorno inhóspito, solo los dinosaurios más resistentes, ágiles y con adaptaciones corporales específicas lograban sobrevivir, confiando en su astucia y resistencia física.',
    color: '#fbbf24',
    image: '/habitat_desert.png',
    icon: Sun
  },
  'volcan': {
    title: 'VOLCANES',
    subtitle: 'Zonas de intensa actividad geológica',
    description: 'Los paisajes volcánicos presentaban suelos ricos en ceniza y actividad hidrotermal constante. Con una atmósfera densa en gases y temperaturas extremas, estas tierras inestables eran cruzadas temporalmente por especies migratorias resistentes que se adaptaban a las dinámicas geológicas de un planeta en constante transformación.',
    color: '#ef4444',
    image: '/habitat_volcano.png',
    icon: Mountain
  }
};

export default function HabitatHubPage() {
  const { habitat } = useParams<{ habitat: string }>();
  const habitatKey = habitat?.toLowerCase() || '';
  const habitatInfo = HABITAT_DATA[habitatKey];
  
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [habitatKey]);

  useEffect(() => {
    if (!habitatInfo) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header entrance
        gsap.from(".hab-header-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });

        // Cards scroll reveal
        gsap.from(".hab-dino-card", {
          scrollTrigger: {
            trigger: ".hab-hub-grid",
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
        gsap.from(".hab-header-content, .hab-hub-grid", {
          opacity: 0,
          duration: 0.3
        });
      });
    });

    return () => ctx.revert();
  }, [habitatKey, habitatInfo]);

  if (!habitatInfo) {
    return (
      <div className="hab-not-found">
        <h2>Hábitat no encontrado</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  const filteredDinos = dinosaurs.filter(d => d.habitat === habitatKey);
  const HabitatIcon = habitatInfo.icon;

  // Generate CollectionPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${habitatInfo.title} — DinoRex`,
    "description": habitatInfo.description,
    "url": `https://www.dinorex.org/habitats/${habitatKey}`,
    "about": {
      "@type": "Thing",
      "name": `Hábitat ${habitatInfo.title}`
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
    <div className="hab-hub-container">
      <SEO
        title={`${habitatInfo.title} — DinoRex`}
        description={habitatInfo.description}
        url={`https://www.dinorex.org/habitats/${habitatKey}`}
        image={`https://www.dinorex.org${habitatInfo.image}`}
        customSchema={schema}
      />

      <nav className="hab-hub-nav">
        <Link to="/" className="hab-back-to-home">
          <ChevronLeft size={16} /> VOLVER A DINOSAURIOS
        </Link>
      </nav>

      <header ref={headerRef} className="hab-hub-header" style={{ backgroundImage: `url(${habitatInfo.image})` }}>
        <div className="hab-header-overlay"></div>
        <div className="hab-header-content">
          <div className="hab-icon-badge" style={{ color: habitatInfo.color, borderColor: habitatInfo.color }}>
            <HabitatIcon size={16} /> HÁBITAT PREHISTÓRICO
          </div>
          <h1 className="hab-hub-title">{habitatInfo.title}</h1>
          <h2 className="hab-hub-subtitle" style={{ color: habitatInfo.color }}>{habitatInfo.subtitle}</h2>
          <p className="hab-hub-description">{habitatInfo.description}</p>
        </div>
      </header>

      <main className="hab-hub-main">
        <div className="hab-section-divider">
          <span className="divider-line"></span>
          <span className="divider-label" style={{ color: habitatInfo.color }}>ESPECIES NATIVAS</span>
          <span className="divider-line"></span>
        </div>

        {filteredDinos.length > 0 ? (
          <div ref={gridRef} className="hab-hub-grid">
            {filteredDinos.map(dino => (
              <Link to={`/criaturas/${dino.slug}`} key={dino.slug} className="hab-dino-card" style={{ backgroundImage: `url(${dino.heroImage})` }}>
                <div className="hab-dino-card-overlay"></div>
                <div className="hab-dino-card-content">
                  <span className="hab-dino-diet" style={{ 
                    color: dino.heroStats.diet === 'Carnívoro' ? '#ff4444' : '#4ade80',
                    borderColor: dino.heroStats.diet === 'Carnívoro' ? 'rgba(255, 68, 68, 0.3)' : 'rgba(74, 222, 128, 0.3)'
                  }}>
                    <Bone size={12} /> {dino.heroStats.diet}
                  </span>
                  <h3 className="hab-dino-name">{dino.name}</h3>
                  <p className="hab-dino-scientific">{dino.scientificName}</p>
                  
                  <div className="hab-dino-brief">
                    <div className="hab-dino-stat">
                      <Clock size={12} /> {dino.heroStats.period}
                    </div>
                  </div>
                  
                  <span className="hab-dino-btn" style={{ color: habitatInfo.color }}>
                    VER DETALLES <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="hab-hub-empty">
            <HelpCircle size={48} strokeWidth={1} color="#C9A84C" />
            <p>Próximamente más criaturas de este hábitat en el catálogo.</p>
          </div>
        )}
      </main>
    </div>
  );
}
