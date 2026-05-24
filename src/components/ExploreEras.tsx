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
            whileHover={{ scale: 1.02, y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + idx * 0.2 }}
            className="era-card"
            style={{ 
              backgroundImage: `url(${era.image})`,
              backgroundPosition: era.id === 'jurassic' ? 'center 15%' : 'center',
              borderColor: `${era.color}40`,
              boxShadow: `0 0 30px ${era.color}10`
            }}
          >
            <div className="era-card-overlay"></div>
            
            <motion.div 
              className="era-time"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + idx * 0.2 }}
            >
              {era.time}
            </motion.div>

            <div className="era-content">
              <motion.div 
                className="era-icon-wrapper" 
                style={{ borderColor: era.color }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {era.icon}
              </motion.div>
              
              <h3 className="era-card-title">{era.title}</h3>
              <p className="era-card-subtitle" style={{ color: era.color }}>{era.subtitle}</p>
              
              <motion.ul 
                className="era-features"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 + idx * 0.2 } }
                }}
              >
                {era.features.map((feature, fIdx) => (
                  <motion.li 
                    key={fIdx}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <span className="feature-icon">{feature.icon}</span>
                    {feature.text}
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.button 
                className="era-button" 
                style={{ borderColor: `${era.color}60` }}
                whileHover={{ backgroundColor: `${era.color}30`, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EXPLORAR ERA <ChevronRight size={16} color={era.color} />
              </motion.button>
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
            <motion.div 
              className="timeline-progress" 
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              style={{ background: 'linear-gradient(90deg, #ff6a00 0%, #4ade80 50%, #fbbf24 100%)' }}
            />
          </div>
          
          <div className="timeline-points">
            {[ 
              { time: '252 Ma', label: 'TRIÁSICO', color: '#ff6a00', left: '0%' },
              { time: '201 Ma', label: 'JURÁSICO', color: '#4ade80', left: '33%' },
              { time: '145 Ma', label: 'CRETÁCICO', color: '#fbbf24', left: '66%' },
              { time: '66 Ma', label: 'HOY', color: '#ffffff', left: '100%' },
            ].map((point, i) => (
              <motion.div 
                className="timeline-point" 
                style={{ left: point.left, cursor: 'pointer' }} 
                key={point.label}
                whileHover="hover"
              >
                <motion.span 
                  className="point-time"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.3 }}
                >
                  {point.time}
                </motion.span>
                
                <motion.div 
                  className="point-dot" 
                  style={{ backgroundColor: point.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.8 + i * 0.3 }}
                  variants={{ hover: { scale: 2.2 } }}
                />
                
                <motion.span 
                  className="point-label"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + i * 0.3 }}
                  variants={{ hover: { scale: 1.25, color: '#fbbf24' } }}
                >
                  {point.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
