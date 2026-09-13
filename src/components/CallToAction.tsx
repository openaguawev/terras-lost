import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                <img src="/logo.png" alt="Dinorex Logo" width={50} height={50} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
              </div>
              <div className="footer-logo-text">
                <h2>DINOREX</h2>
                <p>EXPLORA. APRENDE. DESCUBRE LA VIDA.</p>
              </div>
            </div>
            <p style={{ color: '#737373', fontSize: '0.8rem', lineHeight: '1.6', marginTop: '1rem', maxWidth: '320px' }}>
              Plataforma de divulgación paleontológica dedicada a explorar las criaturas prehistóricas, sus fósiles y los ecosistemas que dominaron la Tierra.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>EXPLORAR</h4>
              <ul>
                <li><Link to="/#dinosaurios" style={{ color: 'inherit', textDecoration: 'none' }}>Dinosaurios</Link></li>
                <li><Link to="/dinosaurios-argentinos" style={{ color: 'inherit', textDecoration: 'none' }}>Dinos Argentinos</Link></li>
                <li><Link to="/#habitats" style={{ color: 'inherit', textDecoration: 'none' }}>Hábitats</Link></li>
                <li><Link to="/#eras" style={{ color: 'inherit', textDecoration: 'none' }}>Eras Geológicas</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>APRENDER</h4>
              <ul>
                <li><Link to="/#historia" style={{ color: 'inherit', textDecoration: 'none' }}>Historia de la Tierra</Link></li>
                <li><Link to="/#dinosaurios" style={{ color: 'inherit', textDecoration: 'none' }}>Registro Fósil</Link></li>
                <li><Link to="/dinosaurios-argentinos" style={{ color: 'inherit', textDecoration: 'none' }}>Tierra de Gigantes</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>ERAS</h4>
              <ul>
                <li><Link to="/eras/triasico" style={{ color: 'inherit', textDecoration: 'none' }}>Período Triásico</Link></li>
                <li><Link to="/eras/jurasico" style={{ color: 'inherit', textDecoration: 'none' }}>Período Jurásico</Link></li>
                <li><Link to="/eras/cretacico" style={{ color: 'inherit', textDecoration: 'none' }}>Período Cretácico</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>DINOREX</h4>
              <ul>
                <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link></li>
                <li><a href="mailto:contacto@dinorex.org" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</a></li>
                <li><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ color: 'inherit', textDecoration: 'none' }}>Volver arriba</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-right">
            <p className="footer-copyright">© {new Date().getFullYear()} DinoRex. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
