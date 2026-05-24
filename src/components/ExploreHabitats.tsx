import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Leaf, 
  CloudRain, 
  Mountain, 
  Waves, 
  Thermometer, 
  Fish, 
  Sun, 
  TreePine, 
  ThermometerSun, 
  AlertTriangle,
  Lightbulb,
  Globe
} from 'lucide-react';
import './ExploreHabitats.css';

const HABITATS = [
  {
    id: 'jungle',
    title: 'SELVAS',
    subtitle: 'Bosques densos y exuberantes, hogar de depredadores feroces y gigantes herbívoros.',
    color: '#4ade80',
    icon: <Leaf size={20} color="#4ade80" />,
    image: '/habitat_jungle.png',
    stats: [
      { label: 'VEGETACIÓN', value: 'Muy densa', icon: <Leaf size={14} color="#4ade80" /> },
      { label: 'CLIMA', value: 'Cálido y húmedo', icon: <CloudRain size={14} color="#4ade80" /> },
      { label: 'ESPECIES', value: '+120', icon: <Mountain size={14} color="#4ade80" /> }
    ]
  },
  {
    id: 'ocean',
    title: 'OCÉANOS',
    subtitle: 'Extensos mares que cubrían gran parte del planeta, dominio de reptiles marinos gigantes.',
    color: '#3b82f6',
    icon: <Waves size={20} color="#3b82f6" />,
    image: '/habitat_ocean.png',
    stats: [
      { label: 'PROFUNDIDAD', value: 'Variable', icon: <Waves size={14} color="#3b82f6" /> },
      { label: 'CLIMA', value: 'Templado', icon: <Thermometer size={14} color="#3b82f6" /> },
      { label: 'ESPECIES', value: '+80', icon: <Fish size={14} color="#3b82f6" /> }
    ]
  },
  {
    id: 'desert',
    title: 'DESIERTOS',
    subtitle: 'Tierras áridas y vastas, donde la supervivencia dependía de la resistencia y adaptación.',
    color: '#fbbf24',
    icon: <Sun size={20} color="#fbbf24" />,
    image: '/habitat_desert.png',
    stats: [
      { label: 'CLIMA', value: 'Seco y extremo', icon: <Sun size={14} color="#fbbf24" /> },
      { label: 'VEGETACIÓN', value: 'Escasa', icon: <TreePine size={14} color="#fbbf24" /> },
      { label: 'ESPECIES', value: '+60', icon: <TreePine size={14} color="#fbbf24" /> }
    ]
  },
  {
    id: 'volcano',
    title: 'VOLCANES',
    subtitle: 'Zonas de intensa actividad volcánica, suelos ricos en minerales y paisajes cambiantes.',
    color: '#ef4444',
    icon: <Mountain size={20} color="#ef4444" />,
    image: '/habitat_volcano.png',
    stats: [
      { label: 'ACTIVIDAD', value: 'Alta', icon: <Mountain size={14} color="#ef4444" /> },
      { label: 'CLIMA', value: 'Extremo', icon: <ThermometerSun size={14} color="#ef4444" /> },
      { label: 'ESPECIES', value: '+40', icon: <AlertTriangle size={14} color="#ef4444" /> }
    ]
  }
];

export default function ExploreHabitats() {
  return (
    <section className="explore-habitats-section">
      <div className="habitats-header">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="habitats-subtitle"
        >
          HÁBITATS PREHISTÓRICOS
        </motion.h3>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="habitats-title"
        >
          DESCUBRE LOS MUNDOS QUE HABITARON
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="habitats-description"
        >
          Desde densas selvas hasta profundos océanos, cada hábitat albergó criaturas<br/>
          extraordinarias adaptadas a su entorno.
        </motion.p>
      </div>

      <div className="habitats-grid">
        {HABITATS.map((habitat, idx) => (
          <motion.div 
            key={habitat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.15 }}
            className="habitat-card"
            style={{ 
              backgroundImage: `url(${habitat.image})`,
              borderColor: `${habitat.color}30`
            }}
          >
            <div className="habitat-card-overlay"></div>

            <div className="habitat-content">
              <motion.div 
                className="habitat-icon-wrapper" 
                style={{ borderColor: `${habitat.color}50` }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {habitat.icon}
              </motion.div>
              
              <h3 className="habitat-card-title">{habitat.title}</h3>
              <p className="habitat-card-subtitle">{habitat.subtitle}</p>
              
              <motion.div 
                className="habitat-stats"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 + idx * 0.15 } }
                }}
              >
                {habitat.stats.map((stat, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="habitat-stat"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className="stat-header">
                      {stat.icon}
                      <span className="stat-label">{stat.label}</span>
                    </div>
                    <span className="stat-value">{stat.value}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button 
                className="habitat-button" 
                style={{ borderColor: `${habitat.color}40` }}
                whileHover={{ backgroundColor: `${habitat.color}20`, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                EXPLORAR HÁBITAT <ChevronRight size={16} color={habitat.color} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="habitats-banner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="banner-left">
          <div className="banner-icon-bg">
            <Lightbulb size={24} color="#fbbf24" />
          </div>
          <div className="banner-text">
            <h4>¿SABÍAS QUE?</h4>
            <p>Durante el Mesozoico existieron más tipos de ecosistemas que hoy en día.<br/>Los dinosaurios se adaptaron a cada rincón del planeta.</p>
          </div>
        </div>
        
        <div className="banner-middle">
          <div className="banner-stat-item">
            <Leaf size={24} color="#4ade80" strokeWidth={1.5} />
            <div className="bs-text">
              <span className="bs-value">6</span>
              <span className="bs-label">GRANDES<br/>HÁBITATS</span>
            </div>
          </div>
          <div className="banner-stat-item">
            <Globe size={24} color="#3b82f6" strokeWidth={1.5} />
            <div className="bs-text">
              <span className="bs-value">300+</span>
              <span className="bs-label">ESPECIES<br/>ADAPTADAS</span>
            </div>
          </div>
          <div className="banner-stat-item">
            <Mountain size={24} color="#fbbf24" strokeWidth={1.5} />
            <div className="bs-text">
              <span className="bs-value">MILLONES</span>
              <span className="bs-label">DE AÑOS DE<br/>EVOLUCIÓN</span>
            </div>
          </div>
        </div>
        
        <div className="banner-right">
          <motion.button 
            className="banner-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORA TODOS LOS HÁBITATS <ChevronRight size={16} color="#fbbf24" />
          </motion.button>
          <span className="banner-btn-hint">Sumérgete en cada entorno prehistórico</span>
        </div>
      </motion.div>
    </section>
  );
}
