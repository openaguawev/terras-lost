import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Box, Bone, MapPin, Play, ChevronRight,
  Skull, Eye, Wind, TrendingUp, Users, Radio, Brain, Swords, Scissors, Shield,
  Droplets, Radar, Fish, Thermometer, Heart, MoveUp, Feather, Footprints
} from 'lucide-react';
import { getDinosaurBySlug } from '../data/dinosaurs';
import './DinosaurPage.css';

const IconMap: Record<string, React.ElementType> = {
  'skull': Skull,
  'eye': Eye,
  'wind': Wind,
  'trending-up': TrendingUp,
  'users': Users,
  'radio': Radio,
  'brain': Brain,
  'swords': Swords,
  'scissors': Scissors,
  'shield': Shield,
  'droplets': Droplets,
  'radar': Radar,
  'fish': Fish,
  'thermometer': Thermometer,
  'heart': Heart,
  'move-up': MoveUp,
  'feather': Feather,
  'footprints': Footprints,
};

export default function DinosaurPage() {
  const { slug } = useParams();
  const dino = getDinosaurBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!dino) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: '#070504' }}>
        <h2>Criatura no encontrada</h2>
        <Link to="/" style={{ color: '#C9A84C', marginLeft: 20 }}>Volver al inicio</Link>
      </div>
    );
  }

  const TABS = ['DESCRIPCIÓN', 'CARACTERÍSTICAS', 'COMPORTAMIENTO', 'FÓSILES', 'CURIOSIDADES'];

  return (
    <div className="dino-page-container">
      <Helmet>
        <title>{dino.name} — DinoRex</title>
        <meta name="description" content={dino.tagline} />
      </Helmet>

      {/* HEADER / NAV (Simple back button for now, assuming main nav is in App/Layout) */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '30px 60px', zIndex: 100 }}>
        <Link to="/" style={{ color: '#C9A84C', display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontFamily: 'Bebas Neue', letterSpacing: 2 }}>
          <ChevronLeft size={16} /> VOLVER A DINOSAURIOS
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="dp-hero">
        <div className="dp-hero-bg">
          <img src={dino.heroImage} alt={dino.name} />
        </div>
        <div className="dp-hero-gradient"></div>
        
        <div className="dp-hero-content">
          <div className="dp-hero-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="dp-hero-eyebrow">
                <Box size={16} /> EL REY DE LOS DINOSAURIOS
              </div>
              <h1 className="dp-hero-title">{dino.name}</h1>
              <h2 className="dp-hero-scientific">{dino.scientificName}</h2>
              <p className="dp-hero-tagline">{dino.tagline}</p>

              <div className="dp-hero-stats-grid">
                <div className="dp-hero-stat-item">
                  <div className="dp-hero-stat-icon"><Clock size={14} /> PERÍODO</div>
                  <div className="dp-hero-stat-value">{dino.heroStats.period}</div>
                </div>
                <div className="dp-hero-stat-item">
                  <div className="dp-hero-stat-icon"><MapPin size={14} /> HÁBITAT</div>
                  <div className="dp-hero-stat-value">{dino.heroStats.habitat}</div>
                </div>
                <div className="dp-hero-stat-item">
                  <div className="dp-hero-stat-icon"><Bone size={14} /> DIETA</div>
                  <div className="dp-hero-stat-value">{dino.heroStats.diet}</div>
                </div>
                <div className="dp-hero-stat-item">
                  <div className="dp-hero-stat-icon"><Pen size={14} /> DESCUBIERTO</div>
                  <div className="dp-hero-stat-value">{dino.heroStats.discovered}</div>
                </div>
              </div>

              <div className="dp-hero-buttons">
                <button className="dp-btn-primary">
                  <Bone size={20} /> VER ESQUELETO
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div className="dp-hero-right" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {dino.sideStats.map((stat, idx) => (
              <div className="dp-side-stat" key={idx}>
                <div className="dp-side-stat-icon">
                  <ChevronRight size={16} />
                </div>
                <div className="dp-side-stat-content">
                  <span className="dp-side-stat-label">{stat.label}</span>
                  <span className="dp-side-stat-value">{stat.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TABS */}
      <div className="dp-tabs-wrapper">
        <div className="dp-tabs">
          {TABS.map(tab => (
            <a 
              key={tab} 
              href={`#${tab.toLowerCase()}`}
              className="dp-tab"
              style={{ textDecoration: 'none' }}
            >
              {tab === 'DESCRIPCIÓN' && <Box size={16} />}
              {tab === 'CARACTERÍSTICAS' && <Bone size={16} />}
              {tab === 'COMPORTAMIENTO' && <Play size={16} />}
              {tab === 'FÓSILES' && <MapPin size={16} />}
              {tab === 'CURIOSIDADES' && <Eye size={16} />}
              {tab}
            </a>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="dp-main-content">
        <div className="dp-grid-3col" id="descripción">
          {/* Left Column */}
          <div className="dp-col-left">
            <div className="dp-text-content">
              <h3 className="dp-section-title">{dino.content.subtitle}</h3>
              {dino.content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            
            <div className="dp-map-box">
              <h4 className="dp-map-title">DISTRIBUCIÓN GEOGRÁFICA</h4>
              <img src="/dinos/map_dark.png" alt="Map" className="dp-map-img" width={400} height={200} />
              <div className="dp-map-location">
                <MapPin size={14} color="#C9A84C" /> {dino.content.mapLocation}
              </div>
            </div>
          </div>



          {/* Right Column */}
          <div className="dp-col-right">
            <h3 className="dp-section-title" style={{ fontSize: 18, marginBottom: 30 }}>ASÍ ERA EL {dino.name}</h3>
            <div className="dp-stats-list">
              {dino.attributeBars.map((attr, idx) => (
                <div className="dp-stat-row" key={idx}>
                  <div className="dp-stat-row-left">
                    <Box size={14} opacity={0.5} /> {attr.label}
                  </div>
                  <div className="dp-stat-bars">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className={`dp-stat-bar ${i < attr.value ? 'filled' : 'empty'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FÓSILES */}
        <div className="dp-fossils-header" id="fósiles">
          <h3 className="dp-section-title" style={{ margin: 0 }}>FÓSILES DESTACADOS</h3>
          <a href="#todos" className="dp-view-all">VER TODOS LOS FÓSILES <ChevronRight size={14} /></a>
        </div>
        
        <div className="dp-fossils-grid">
          {dino.fossils.map((fossil, idx) => (
            <div className="dp-fossil-card" key={idx}>
              <img src={fossil.image} alt={fossil.name} className="dp-fossil-img" width={300} height={168} />
              <div className="dp-fossil-info">
                <h4 className="dp-fossil-name">{fossil.name}</h4>
                <p className="dp-fossil-code">{fossil.code}</p>
                <p className="dp-fossil-loc">{fossil.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES GRID */}
        <div className="dp-features-grid" id="curiosidades">
          {dino.features.map((feat, idx) => {
            const Icon = IconMap[feat.icon] || Box;
            return (
              <div className="dp-feature-item" key={idx}>
                <div className="dp-feature-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="dp-feature-content">
                  <h4>{feat.title}</h4>
                  <p>{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER CTA */}
        <div className="dp-cta-banner">
          <img src="/hero.png" alt="Background" className="dp-cta-bg" width={1200} height={300} />
          <div className="dp-cta-gradient"></div>
          <div className="dp-cta-content">
            <h2>EL PASADO TE LLAMA</h2>
            <p>Explora más dinosaurios y descubre los secretos de un mundo que existió millones de años antes que nosotros.</p>
          </div>
          <Link to="/" className="dp-cta-btn" style={{ textDecoration: 'none' }}>
            EXPLORAR MÁS DINOSAURIOS <ChevronRight size={20} />
          </Link>
        </div>

      </section>
    </div>
  );
}

// Quick inline icons for hero stats since we don't want to overcomplicate imports
const Clock = ({size}: {size:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Pen = ({size}: {size:number}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>;
