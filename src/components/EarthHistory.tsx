import { motion } from 'framer-motion';
import { ChevronRight, Mountain, Leaf, PawPrint, Flame, Globe, Skull } from 'lucide-react';
import BlurText from './BlurText';
import './EarthHistory.css';

const ERAS_DATA = [
  {
    id: 'triassic',
    time: '252 - 201 Ma',
    title: 'TRIÁSICO',
    subtitle: 'El comienzo',
    description: 'Los primeros dinosaurios aparecen en un mundo dominado por volcanes y grandes cambios climáticos.',
    color: '#ef4444',
    icon: <Mountain size={20} color="#ef4444" />,
    image: '/triassic.png'
  },
  {
    id: 'jurassic',
    time: '201 - 145 Ma',
    title: 'JURÁSICO',
    subtitle: 'La era de los gigantes',
    description: 'Los dinosaurios alcanzan tamaños colosales y los mares, cielos y tierras se llenan de vida diversa y exuberante.',
    color: '#4ade80',
    icon: <Leaf size={20} color="#4ade80" />,
    image: '/jurassic.png'
  },
  {
    id: 'cretaceous',
    time: '145 - 66 Ma',
    title: 'CRETÁCICO',
    subtitle: 'El dominio y la diversidad',
    description: 'Los dinosaurios dominan la Tierra. Surgen los depredadores más temibles y los continentes se acercan a su forma actual.',
    color: '#fbbf24',
    icon: <PawPrint size={20} color="#fbbf24" />,
    image: '/cretaceous.png'
  },
  {
    id: 'extinction',
    time: '66 Ma - Hoy',
    title: 'EXTINCIÓN',
    subtitle: 'Un nuevo comienzo',
    description: 'Un evento catastrófico cambió la vida para siempre. Los dinosaurios desaparecieron, pero su legado continúa.',
    color: '#a855f7',
    icon: <Flame size={20} color="#a855f7" />,
    image: '/extinction.png'
  }
];

export default function EarthHistory() {
  return (
    <section className="earth-history-section">
      <div className="eh-header">
        <div className="eh-eyebrow-container">
          <span className="eh-line"></span>
          <span className="eh-eyebrow">LÍNEA DE TIEMPO</span>
          <span className="eh-line"></span>
        </div>
        
        <BlurText 
          text="LA HISTORIA DE LA TIERRA" 
          delay={50}
          animateBy="words"
          direction="top"
          className="eh-title"
        />
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="eh-subtitle"
        >
          MILLONES DE AÑOS DE EVOLUCIÓN, CAMBIO Y SUPERVIVENCIA
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="eh-description"
        >
          Viaja a través del tiempo y descubre cómo nuestro planeta<br/>
          se transformó en el hogar de criaturas extraordinarias.
        </motion.p>
      </div>

      <div className="eh-timeline-top">
        <div className="eh-timeline-line"></div>
        {ERAS_DATA.map((era, idx) => (
          <motion.div 
            key={era.id} 
            className="eh-timeline-node"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + idx * 0.2 }}
          >
            <span className="eh-node-time" style={{ color: era.color }}>{era.time}</span>
            <div className="eh-node-dot" style={{ borderColor: era.color }}>
              <div className="eh-node-inner" style={{ backgroundColor: era.color }}></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="eh-cards-grid">
        {ERAS_DATA.map((era, idx) => (
          <motion.div 
            key={era.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
            className="eh-card"
            style={{ borderColor: `${era.color}30` }}
          >
            <div 
              className="eh-card-image" 
              style={{ backgroundImage: `url(${era.image})` }}
            >
              <div className="eh-card-overlay"></div>
            </div>
            <div className="eh-card-content">
              <div className="eh-card-icon" style={{ borderColor: `${era.color}50` }}>
                {era.icon}
              </div>
              <h3 className="eh-card-title">{era.title}</h3>
              <h4 className="eh-card-subtitle" style={{ color: era.color }}>{era.subtitle}</h4>
              <p className="eh-card-text">{era.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="eh-stats-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="eh-stat">
          <Globe size={32} color="#4ade80" strokeWidth={1.5} />
          <div className="eh-stat-text">
            <h5>4.600 MILLONES<br/>DE AÑOS</h5>
            <p>Tiene la Tierra desde<br/>su formación.</p>
          </div>
        </div>
        <div className="eh-stat">
          <Mountain size={32} color="#ef4444" strokeWidth={1.5} />
          <div className="eh-stat-text">
            <h5>3 GRANDES<br/>EXTINCIONES</h5>
            <p>Moldearon la vida en<br/>nuestro planeta.</p>
          </div>
        </div>
        <div className="eh-stat">
          <Skull size={32} color="#fbbf24" strokeWidth={1.5} />
          <div className="eh-stat-text">
            <h5>+1.000 ESPECIES<br/>DE DINOSAURIOS</h5>
            <p>Descubiertas hasta hoy<br/>(y contando).</p>
          </div>
        </div>
        <div className="eh-stat">
          <Leaf size={32} color="#3b82f6" strokeWidth={1.5} />
          <div className="eh-stat-text">
            <h5>CAMBIOS<br/>CLIMÁTICOS</h5>
            <p>Que transformaron continentes,<br/>océanos y ecosistemas.</p>
          </div>
        </div>
        <div className="eh-stat">
          <Flame size={32} color="#a855f7" strokeWidth={1.5} />
          <div className="eh-stat-text">
            <h5>UN IMPACTO<br/>QUE LO CAMBIÓ TODO</h5>
            <p>El fin de una era, el inicio de<br/>otra.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="eh-bottom-scale"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
      >
        <motion.div 
          className="eh-scale-line"
          variants={{
            hidden: { scaleX: 0, y: "-50%", transformOrigin: "left" },
            visible: { scaleX: 1, y: "-50%", transition: { duration: 1.5, ease: "easeInOut" } }
          }}
        ></motion.div>
        {[
          { label: '252 Ma', color: '#ef4444', left: '0%' },
          { label: '200 Ma', color: '#4ade80', left: '25%' },
          { label: '150 Ma', color: '#fbbf24', left: '50%' },
          { label: '100 Ma', color: '#6b7280', left: '70%' },
          { label: '50 Ma', color: '#a855f7', left: '85%' },
          { label: 'Hoy', color: '#6b7280', left: '100%' }
        ].map((mark, i) => (
          <motion.div 
            key={i} 
            className="eh-scale-mark" 
            style={{ left: mark.left }}
            variants={{
              hidden: { opacity: 0, scale: 0, x: "-50%", y: "-30%" },
              visible: { opacity: 1, scale: 1, x: "-50%", y: "-50%", transition: { type: "spring", stiffness: 300, damping: 15 } }
            }}
            whileHover={{ scale: 1.2, x: "-50%", y: "-50%" }}
          >
            <span className="eh-mark-label" style={{ color: mark.color !== '#6b7280' ? mark.color : '#a3a3a3' }}>{mark.label}</span>
            <div className="eh-mark-dot" style={{ backgroundColor: mark.color, boxShadow: `0 0 12px ${mark.color}90` }}></div>
            <div className="eh-mark-pulse" style={{ borderColor: mark.color }}></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button 
        className="eh-explore-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EXPLORAR CADA ERA <ChevronRight size={16} />
      </motion.button>
    </section>
  );
}
