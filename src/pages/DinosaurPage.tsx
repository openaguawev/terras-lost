import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Play, ChevronRight, Trees, Skull, Ruler, Weight, Gauge, Search, Thermometer, Leaf, Footprints, Globe2, Beef, Calendar, Volume2, ChevronLeft } from 'lucide-react';
import { getDinosaurBySlug } from '../data/dinosaurs';
import './DinosaurPage.css';

export default function DinosaurPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
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

  return (
    <section className="dino-spotlight-section">
      <Helmet>
        <title>{dino.name} — DinoRex</title>
        <meta name="description" content={dino.tagline} />
      </Helmet>

      {/* Nav back button */}
      <nav style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '30px 60px', zIndex: 100 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', color: '#e6c875', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'Bebas Neue', letterSpacing: 2 }}>
          <ChevronLeft size={16} /> VOLVER
        </button>
      </nav>

      <div className="spotlight-bg" style={{ backgroundImage: `url('${dino.heroImage || '/dinos/trex_spotlight_full.png'}')` }}></div>
      <div className="spotlight-overlay"></div>

      <div className="spotlight-content">
        <div className="spotlight-left">
          <div className="sl-eyebrow">
            <Skull size={14} color="#e6c875" />
            <span>DINOSAURIO DESTACADO</span>
          </div>

          <h1 className="sl-title">{dino.name}</h1>
          <h2 className="sl-subtitle">{dino.content.subtitle}</h2>

          <p className="sl-desc">
            {dino.tagline}
          </p>

          <div className="sl-stats-list">
            <div className="sl-stat-bar">
              <div className="sl-stat-label">
                <Ruler size={14} color="#e6c875"/> <span>LONGITUD</span>
              </div>
              <div className="sl-bar-container"><div className="sl-bar-fill" style={{ width: '80%' }}></div></div>
              <div className="sl-stat-val">12 – 13 m</div>
            </div>

            <div className="sl-stat-bar">
              <div className="sl-stat-label">
                <Leaf size={14} color="#e6c875"/> <span>ALTURA (A LA CADERA)</span>
              </div>
              <div className="sl-bar-container"><div className="sl-bar-fill" style={{ width: '60%' }}></div></div>
              <div className="sl-stat-val">4 – 4.5 m</div>
            </div>

            <div className="sl-stat-bar">
              <div className="sl-stat-label">
                <Weight size={14} color="#e6c875"/> <span>PESO</span>
              </div>
              <div className="sl-bar-container"><div className="sl-bar-fill" style={{ width: '70%' }}></div></div>
              <div className="sl-stat-val">6 – 9 toneladas</div>
            </div>

            <div className="sl-stat-bar">
              <div className="sl-stat-label">
                <Gauge size={14} color="#e6c875"/> <span>VELOCIDAD</span>
              </div>
              <div className="sl-bar-container"><div className="sl-bar-fill" style={{ width: '50%' }}></div></div>
              <div className="sl-stat-val">20 – 27 km/h</div>
            </div>

            <div className="sl-stat-bar">
              <div className="sl-stat-label">
                <Search size={14} color="#e6c875"/> <span>FUERZA DE MORDIDA</span>
              </div>
              <div className="sl-bar-container"><div className="sl-bar-fill" style={{ width: '95%' }}></div></div>
              <div className="sl-stat-val">Hasta 57.000 N</div>
            </div>
            
            <hr className="sl-divider" />

            <div className="sl-stat-text">
              <div className="sl-stat-label">
                <Beef size={14} color="#e6c875"/> <span>DIETA</span>
              </div>
              <div className="sl-stat-val text-gold">{dino.heroStats.diet}</div>
            </div>

            <div className="sl-stat-text">
              <div className="sl-stat-label">
                <Trees size={14} color="#e6c875"/> <span>HÁBITAT</span>
              </div>
              <div className="sl-stat-val text-gold">{dino.heroStats.habitat}</div>
            </div>

            <div className="sl-stat-text">
              <div className="sl-stat-label">
                <Calendar size={14} color="#e6c875"/> <span>PERÍODO</span>
              </div>
              <div className="sl-stat-val text-gold">{dino.heroStats.period}</div>
            </div>
            
            <hr className="sl-divider" />

            <div className="sl-danger-row">
              <div className="sl-stat-label">
                <Skull size={14} color="#e6c875"/> <span>NIVEL DE PELIGRO</span>
              </div>
              <div className="sl-skulls">
                {[...Array(10)].map((_, i) => (
                  <Skull key={i} size={18} color={i < 10 ? "#e6c875" : "rgba(255,255,255,0.1)"} fill={i < 10 ? "#e6c875" : "none"} className={i < 10 ? "skull-active" : ""} />
                ))}
              </div>
            </div>
          </div>

          <div className="sl-actions">
            <button className="btn-explore">EXPLORAR ESPECIE <ChevronRight size={16} /></button>
            <button className="btn-secondary"><Trees size={16} /> VER HÁBITAT</button>
            <button className="btn-secondary"><Volume2 size={16} /> ESCUCHAR RUGIDO</button>
          </div>
        </div>

        <div className="spotlight-right">
          <div className="sl-pagination">
            <div className="sl-pag-dot active"></div>
            <div className="sl-pag-dot"></div>
            <div className="sl-pag-dot"></div>
            <div className="sl-pag-num"><span>03</span>/10</div>
          </div>

          <div className="sl-view-360">
            <button className="btn-play-360">
              <Play size={20} color="#e6c875" fill="#e6c875" />
            </button>
            <div className="view-360-text">
              <strong>VISTA 360°</strong>
              <span>Explora el modelo<br/>en 3D interactivo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sl-bottom-panel">
        <div className="sl-bot-col map-col">
          <Globe2 size={18} color="#e6c875"/>
          <div className="fc-text">
            <h4>UBICACIÓN</h4>
            <p className="highlight">{dino.content.mapLocation}</p>
            <div className="map-img" style={{ backgroundImage: `url('/dinos/mapa_norteamerica.png')` }}></div>
          </div>
        </div>
        
        <div className="sl-bot-col">
          <Thermometer size={18} color="#e6c875"/>
          <div>
            <h4>CLIMA</h4>
            <p className="highlight">Cálido y húmedo</p>
            <p className="sl-temp-big">25°C y 35°C</p>
          </div>
        </div>

        <div className="sl-bot-col feature-col">
          <Leaf size={18} color="#e6c875"/>
          <div className="fc-text">
            <h4>VEGETACIÓN</h4>
            <p>Bosques densos,<br/>helechos gigantes,<br/>coníferas y cicadáceas.</p>
          </div>
          <div className="feature-img" style={{ backgroundImage: `url('/dinos/vegetacion_dino.png')` }}></div>
        </div>

        <div className="sl-bot-col feature-col">
          <Skull size={18} color="#e6c875"/>
          <div className="fc-text">
            <h4>¿SABÍAS QUÉ?</h4>
            <p>Su visión binocular y su<br/>extraordinario olfato le<br/>permitían detectar presas<br/>a varios kilómetros.</p>
          </div>
          <div className="feature-img" style={{ backgroundImage: `url('/dinos/dino_eye.png')` }}></div>
        </div>

        <div className="sl-bot-col feature-col">
          <Footprints size={18} color="#e6c875"/>
          <div className="fc-text">
            <h4>HUELLAS ENCONTRADAS</h4>
            <p>Miles de huellas fósiles<br/>han sido encontradas en<br/>formaciones de Montana<br/>y Dakotas.</p>
          </div>
          <div className="feature-img" style={{ backgroundImage: `url('/dinos/fossil_footprint.png')` }}></div>
        </div>
      </div>
    </section>
  )
}
