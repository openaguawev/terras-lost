import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Compass, 
  Mountain, 
  Disc, 
  PawPrint, 
  Skull, 
  Globe, 
  Clock, 
  Leaf
} from 'lucide-react';
import BlurText from './BlurText';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <>
      <section className="cta-section" style={{ backgroundImage: 'url(/cta_background.webp)' }}>
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <motion.div 
            className="cta-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.span 
              className="cta-eyebrow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              EL PASADO SIGUE VIVO
            </motion.span>
            
            <BlurText 
              text="EL MUNDO PERDIDO TE ESTÁ ESPERANDO" 
              delay={50}
              animateBy="words"
              direction="top"
              className="cta-title"
            />
            
            <motion.p 
              className="cta-description"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Explora especies legendarias, hábitats perdidos y<br/>
              millones de años de historia.
            </motion.p>
            
            <motion.div 
              className="cta-features"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="cta-feature">
                <div className="cta-feature-icon"><Compass size={18} color="#fbbf24" /></div>
                <div className="cta-feature-text">
                  <h5>DESCUBRE</h5>
                  <p>Especies increíbles</p>
                </div>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon"><Mountain size={18} color="#fbbf24" /></div>
                <div className="cta-feature-text">
                  <h5>EXPLORA</h5>
                  <p>Hábitats únicos</p>
                </div>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon"><Disc size={18} color="#fbbf24" /></div>
                <div className="cta-feature-text">
                  <h5>APRENDE</h5>
                  <p>La historia de la vida</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="cta-buttons"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.button 
                className="cta-btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PawPrint size={18} /> EXPLORAR DINOSAURIOS <ChevronRight size={16} />
              </motion.button>
              
              <motion.button 
                className="cta-btn-secondary"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                COMENZAR EXPEDICIÓN <ChevronRight size={16} />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="cta-stats"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="cta-stat">
                <Skull size={24} color="#fbbf24" strokeWidth={1.5} />
                <div className="cta-stat-text">
                  <h5>+1.000</h5>
                  <p>ESPECIES</p>
                </div>
              </div>
              <div className="cta-stat">
                <Globe size={24} color="#fbbf24" strokeWidth={1.5} />
                <div className="cta-stat-text">
                  <h5>6</h5>
                  <p>CONTINENTES</p>
                </div>
              </div>
              <div className="cta-stat">
                <Clock size={24} color="#fbbf24" strokeWidth={1.5} />
                <div className="cta-stat-text">
                  <h5>4.600 M</h5>
                  <p>AÑOS DE HISTORIA</p>
                </div>
              </div>
              <div className="cta-stat">
                <Leaf size={24} color="#fbbf24" strokeWidth={1.5} />
                <div className="cta-stat-text">
                  <h5>+10</h5>
                  <p>HÁBITATS ÚNICOS</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <div className="footer-logo-icon" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                <img src="/logo.webp" alt="Dinorex Logo" width={50} height={50} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </div>
              <div className="footer-logo-text">
                <h2>DINOREX</h2>
                <p>EXPLORA. APRENDE. DESCUBRE LA VIDA.</p>
              </div>
            </div>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>EXPLORAR</h4>
              <ul>
                <li><a href="/#dinosaurios" style={{ color: 'inherit', textDecoration: 'none' }}>Dinosaurios</a></li>
                <li><a href="/#habitats" style={{ color: 'inherit', textDecoration: 'none' }}>Hábitats</a></li>
                <li><a href="/#eras" style={{ color: 'inherit', textDecoration: 'none' }}>Eras</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-right">
            <p className="footer-copyright">© 2024 Dinorex. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
