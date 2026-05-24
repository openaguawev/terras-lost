import { motion } from 'framer-motion';
import { ChevronRight, Mountain, Flame, PawPrint, Leaf, Feather, TreePine, Dna, Skull, Shield, Globe } from 'lucide-react';
import './ExploreEras.css';

const ERAS = [
  {
    id: 'triassic',
    time: '252 - 201 Ma',
    title: 'TRIÁSICO',
    subtitle: 'El comienzo de los dinosaurios',
    color: '#ff6a00',
    icon: <Mountain size={20} color="#ff6a00" />,
    image: '/triassic.png',
    features: [
      { text: 'Primeros dinosaurios', icon: <PawPrint size={14} color="#ff6a00" /> },
      { text: 'Ambiente volcánico', icon: <Mountain size={14} color="#ff6a00" /> },
      { text: 'Reptiles gigantes', icon: <Flame size={14} color="#ff6a00" /> },
      { text: 'Ecosistemas en formación', icon: <PawPrint size={14} color="#ff6a00" /> }
    ]
  },
  {
    id: 'jurassic',
    time: '201 - 145 Ma',
    title: 'JURÁSICO',
    subtitle: 'La era de los gigantes',
    color: '#4ade80',
    icon: <Leaf size={20} color="#4ade80" />,
    image: '/jurassic.png',
    features: [
      { text: 'Dinosaurios colosales', icon: <PawPrint size={14} color="#4ade80" /> },
      { text: 'Primeras aves', icon: <Feather size={14} color="#4ade80" /> },
      { text: 'Selvas exuberantes', icon: <TreePine size={14} color="#4ade80" /> },
      { text: 'Diversificación de especies', icon: <Dna size={14} color="#4ade80" /> }
    ]
  },
  {
    id: 'cretaceous',
    time: '145 - 66 Ma',
    title: 'CRETÁCICO',
    subtitle: 'El dominio y la extinción',
    color: '#fbbf24',
    icon: <PawPrint size={20} color="#fbbf24" />,
    image: '/cretaceous.png',
    features: [
      { text: 'Grandes depredadores', icon: <Skull size={14} color="#fbbf24" /> },
      { text: 'Dinosaurios con cuernos y armaduras', icon: <Shield size={14} color="#fbbf24" /> },
      { text: 'Expansión continental', icon: <Globe size={14} color="#fbbf24" /> },
      { text: 'El evento que cambió la vida', icon: <Flame size={14} color="#fbbf24" /> }
    ]
  }
];

export default function ExploreEras() {
  return (
    <section className="explore-eras-section">
      <div className="eras-header">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eras-number"
        >
          <span className="dot"></span>
          03
          <span className="dot"></span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="eras-title"
        >
          EXPLORA LAS ERAS
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="eras-subtitle"
        >
          VIAJA A TRAVÉS DE MILLONES DE AÑOS
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="eras-description"
        >
          La Tierra ha cambiado radicalmente a lo largo del tiempo.<br/>
          Descubre cómo era nuestro planeta y los increíbles seres que lo habitaron.
        </motion.p>
      </div>

      <div className="eras-grid">
        {ERAS.map((era, idx) => (
          <motion.div 
            key={era.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.2 }}
            className="era-card"
            style={{ 
              backgroundImage: `url(${era.image})`,
              borderColor: `${era.color}40`,
              boxShadow: `0 0 30px ${era.color}10`
            }}
          >
            <div className="era-card-overlay"></div>
            
            <div className="era-time">
              {era.time}
            </div>

            <div className="era-content">
              <div className="era-icon-wrapper" style={{ borderColor: era.color }}>
                {era.icon}
              </div>
              
              <h3 className="era-card-title">{era.title}</h3>
              <p className="era-card-subtitle" style={{ color: era.color }}>{era.subtitle}</p>
              
              <ul className="era-features">
                {era.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <span className="feature-icon">{feature.icon}</span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <button className="era-button" style={{ borderColor: `${era.color}60` }}>
                EXPLORAR ERA <ChevronRight size={16} color={era.color} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="timeline-container"
      >
        <div className="timeline-info">
          <Globe size={32} color="#fbbf24" strokeWidth={1} />
          <div className="timeline-text">
            <h4>LÍNEA DE TIEMPO</h4>
            <p>ESCALA DE TIEMPO GEOLÓGICO</p>
          </div>
        </div>
        
        <div className="timeline-bar">
          <div className="timeline-line">
            <div className="timeline-progress" style={{ background: 'linear-gradient(90deg, #ff6a00 0%, #4ade80 50%, #fbbf24 100%)' }}></div>
          </div>
          
          <div className="timeline-points">
            <div className="timeline-point" style={{ left: '0%' }}>
              <span className="point-time">252 Ma</span>
              <div className="point-dot" style={{ backgroundColor: '#ff6a00' }}></div>
              <span className="point-label">TRIÁSICO</span>
            </div>
            <div className="timeline-point" style={{ left: '33%' }}>
              <span className="point-time">201 Ma</span>
              <div className="point-dot" style={{ backgroundColor: '#4ade80' }}></div>
              <span className="point-label">JURÁSICO</span>
            </div>
            <div className="timeline-point" style={{ left: '66%' }}>
              <span className="point-time">145 Ma</span>
              <div className="point-dot" style={{ backgroundColor: '#fbbf24' }}></div>
              <span className="point-label">CRETÁCICO</span>
            </div>
            <div className="timeline-point" style={{ left: '100%' }}>
              <span className="point-time">66 Ma</span>
              <div className="point-dot" style={{ backgroundColor: '#ffffff' }}></div>
              <span className="point-label">HOY</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
