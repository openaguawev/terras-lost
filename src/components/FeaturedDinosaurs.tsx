import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ChevronRight, Leaf, Beef, Droplets, Wind, ScanFace, CheckCircle, Bone, Globe2, Dna } from 'lucide-react';
import './FeaturedDinosaurs.css';

const DINO_DATA = [
  {
    id: '01',
    name: 'T-REX',
    scientific: 'TIRANOSAURUS REX',
    image: '/dinos/trex_1779606889463.png',
    diet: 'Carnívoro',
    length: '12-13 m',
    period: 'Cretácico Superior',
    danger: 5,
    category: 'carnivoros',
    slug: 'tyrannosaurus-rex',
    altText: 'Tyrannosaurus Rex dinosaurio carnívoro más grande del Cretácico'
  },
  {
    id: '02',
    name: 'VELOCIRAPTOR',
    scientific: 'VELOCIRAPTOR MONGOLIENSIS',
    image: '/dinos/velociraptor_1779606904540.png',
    diet: 'Carnívoro',
    length: '1.8-2.4 m',
    period: 'Cretácico Superior',
    danger: 4,
    category: 'carnivoros',
    slug: 'velociraptor',
    altText: 'Velociraptor dinosaurio cazador inteligente del Cretácico'
  },
  {
    id: '03',
    name: 'TRICERATOPS',
    scientific: 'TRICERATOPS HORRIDUS',
    image: '/dinos/triceratops_1779606918531.png',
    diet: 'Herbívoro',
    length: '8-9 m',
    period: 'Cretácico Superior',
    danger: 3,
    category: 'herbivoros',
    slug: 'triceratops',
    altText: 'Triceratops dinosaurio con cuernos del Cretácico'
  },
  {
    id: '04',
    name: 'SPINOSAURUS',
    scientific: 'SPINOSAURUS AEGYPTIACUS',
    image: '/dinos/spinosaurus_1779606934087.png',
    diet: 'Carnívoro',
    length: '15-18 m',
    period: 'Cretácico Inferior',
    danger: 5,
    category: 'acuaticos',
    slug: 'spinosaurus',
    altText: 'Spinosaurus el depredador semiacuático más grande'
  },
  {
    id: '05',
    name: 'BRACHIOSAURUS',
    scientific: 'BRACHIOSAURUS ALTITHORAX',
    image: '/dinos/brachiosaurus_1779606953114.png',
    diet: 'Herbívoro',
    length: '22-26 m',
    period: 'Jurásico Superior',
    danger: 2,
    category: 'herbivoros',
    slug: 'brachiosaurus',
    altText: 'Brachiosaurus dinosaurio de cuello largo del Jurásico'
  },
  {
    id: '06',
    name: 'PTERANODON',
    scientific: 'PTERANODON LONGICEPS',
    image: '/dinos/pteranodon_1779606968978.png',
    diet: 'Carnívoro',
    length: '6-8 m',
    period: 'Cretácico Superior',
    danger: 3,
    category: 'voladores',
    slug: 'pterodactilo',
    altText: 'Pterodactylus primer vertebrado volador del Jurásico'
  },
  {
    id: '07',
    name: 'STEGOSAURUS',
    scientific: 'STEGOSAURUS STENOPS',
    image: '/dinos/stegosaurus_1779606982968.png',
    diet: 'Herbívoro',
    length: '7-9 m',
    period: 'Jurásico Superior',
    danger: 3,
    category: 'herbivoros',
    slug: 'stegosaurus',
    altText: 'Stegosaurus dinosaurio acorazado del Jurásico'
  }
];

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
              role="img"
              aria-label={dino.altText}
              style={{ 
                backgroundImage: `url(${dino.image})`,
                backgroundPosition: dino.id === '04' ? '20% center' : 'center'
              }}
            >
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
