import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ChevronRight, Leaf, Beef, Droplets, Wind, ScanFace, CheckCircle, Bone, Globe2, Dna } from 'lucide-react';
import './FeaturedDinosaurs.css';

import { dinosaurs } from '../data/dinosaurs';

const DINO_DATA = dinosaurs.map((d, index) => {
  const dangerBar = d.attributeBars.find(b => b.label === 'PELIGRO');
  const dangerValue = dangerBar ? Math.ceil(dangerBar.value / 20) : 3;

  let category = 'herbivoros';
  if (d.heroStats.diet === 'Carnívoro') {
    category = 'carnivoros';
  }
  // Casos especiales basados en el slug para mantener las categorías del diseño original
  if (d.slug === 'spinosaurus') category = 'acuaticos';
  if (d.slug === 'pteranodon') category = 'voladores';

  const lengthStat = d.sideStats.find(s => s.label === 'LONGITUD');

  return {
    id: (index + 1).toString().padStart(2, '0'),
    name: d.name,
    scientific: d.scientificName.toUpperCase(),
    image: d.heroImage,
    diet: d.heroStats.diet,
    length: lengthStat ? lengthStat.value : 'Desconocida',
    period: d.heroStats.period,
    danger: dangerValue,
    category,
    slug: d.slug,
    altText: d.name + ' - ' + d.heroStats.period
  };
});

const CATEGORIES = [
  { id: 'todos', label: 'TODOS', icon: <ScanFace size={16} /> },
  { id: 'carnivoros', label: 'CARNÍVOROS', icon: <Beef size={16} /> },
  { id: 'herbivoros', label: 'HERBÍVOROS', icon: <Leaf size={16} /> },
  { id: 'acuaticos', label: 'ACUÁTICOS', icon: <Droplets size={16} /> },
  { id: 'voladores', label: 'VOLADORES', icon: <Wind size={16} /> },
];

import BlurText from './BlurText';

export default function FeaturedDinosaurs() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredDinos = DINO_DATA.filter(d => activeCategory === 'todos' || d.category === activeCategory);

  return (
    <section className="featured-dinos-section">
      <div className="dinos-header">
        <span className="dinos-eyebrow">DINOSAURIOS DESTACADOS</span>
        <BlurText 
          text="CONOCE A LOS GIGANTES QUE DOMINARON LA TIERRA" 
          delay={50}
          animateBy="words"
          direction="top"
          className="dinos-title"
        />
        <p className="dinos-subtitle">
          Explora los dinosaurios más impresionantes que han habitado nuestro planeta.<br/>
          Descubre sus características, hábitos y el legado que dejaron millones de años atrás.
        </p>
        <button className="dinos-header-btn">
          VER TODOS LOS DINOSAURIOS <ChevronRight size={16} />
        </button>
      </div>

      <div className="dinos-categories">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            className={`dinos-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="dinos-grid">
        <AnimatePresence>
          {filteredDinos.map((dino, idx) => (
            <motion.div 
              layout
              key={dino.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`dino-card ${idx < 3 && activeCategory === 'todos' ? 'top-row' : 'bottom-row'}`}
            >
              <img src={dino.image} alt={dino.altText} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: dino.id === '04' ? '20% center' : 'center', zIndex: 0 }} />
              <div className="dino-card-overlay"></div>
              
              <div className="dino-card-top">
                <span className="dino-id">{dino.id}</span>
                <button className="dino-sound" aria-label="Escuchar rugido"><Volume2 size={16} /></button>
              </div>

              <div className="dino-card-content">
                <h3 className="dino-name">{dino.name}</h3>
                <p className="dino-scientific">{dino.scientific}</p>

                <div className="dino-stats">
                  <div className="dino-stat">
                    <span className="stat-label">DIETA</span>
                    <span className="stat-value">
                      {dino.diet === 'Carnívoro' ? <Beef size={12} color="#ff4444" /> : <Leaf size={12} color="#44ff44" />}
                      {dino.diet}
                    </span>
                  </div>
                  <div className="dino-stat">
                    <span className="stat-label">LONGITUD</span>
                    <span className="stat-value">{dino.length}</span>
                  </div>
                  <div className="dino-stat">
                    <span className="stat-label">PERÍODO</span>
                    <span className="stat-value">{dino.period}</span>
                  </div>
                </div>

                <div className="dino-danger">
                  <span className="stat-label">NIVEL DE PELIGRO</span>
                  <div className="danger-dots">
                    {[1,2,3,4,5].map(dot => (
                      <span 
                        key={dot} 
                        className={`danger-dot ${dot <= dino.danger ? (dino.danger > 3 ? 'high' : 'medium') : 'empty'}`}
                      ></span>
                    ))}
                  </div>
                </div>

                <Link to={`/criaturas/${dino.slug}`} className="dino-full-btn">
                  VER COMPLETO <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      <div className="dinos-footer-features">
        <div className="dino-footer-feature">
          <CheckCircle size={32} strokeWidth={1} />
          <div className="dff-content">
            <h4>INFORMACIÓN VERIFICADA</h4>
            <p>Contenido basado en estudios paleontológicos actualizados.</p>
          </div>
        </div>
        <div className="dino-footer-feature">
          <Bone size={32} strokeWidth={1} />
          <div className="dff-content">
            <h4>FÓSILES REALES</h4>
            <p>Descubre los restos fósiles que permitieron conocerlos.</p>
          </div>
        </div>
        <div className="dino-footer-feature">
          <Globe2 size={32} strokeWidth={1} />
          <div className="dff-content">
            <h4>HÁBITATS AUTÉNTICOS</h4>
            <p>Reconstrucciones basadas en el entorno de cada especie.</p>
          </div>
        </div>
        <div className="dino-footer-feature">
          <Dna size={32} strokeWidth={1} />
          <div className="dff-content">
            <h4>EVOLUCIÓN COMPLETA</h4>
            <p>Conoce su origen, adaptación y extinción.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
