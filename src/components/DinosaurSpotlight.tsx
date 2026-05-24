import { Play, ChevronRight, Trees, Skull, Ruler, Weight, Gauge, Search, Thermometer, Leaf, Footprints, Globe2, Beef, Calendar, Volume2 } from 'lucide-react';
import './DinosaurSpotlight.css';

export default function DinosaurSpotlight() {
  return (
    <section className="dino-spotlight-section">
      <div className="spotlight-bg" style={{ backgroundImage: `url('/dinos/trex_spotlight.png')` }}></div>
      <div className="spotlight-overlay"></div>

      <div className="spotlight-content">
        <div className="spotlight-left">
          <div className="sl-eyebrow">
            <Skull size={14} color="#e6c875" />
            <span>DINOSAURIO DESTACADO</span>
          </div>

          <h1 className="sl-title">TYRANNOSAURUS REX</h1>
          <h2 className="sl-subtitle">EL REY ABSOLUTO DEL CRETÁCICO</h2>

          <p className="sl-desc">
            El Tyrannosaurus rex fue uno de los depredadores más grandes y temibles que jamás haya existido. 
            Con su poderosa mordida, su imponente tamaño y su instinto letal, dominó los ecosistemas de 
            América del Norte durante el Cretácico Superior.
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
              <div className="sl-stat-val text-gold">Carnívoro</div>
            </div>

            <div className="sl-stat-text">
              <div className="sl-stat-label">
                <Trees size={14} color="#e6c875"/> <span>HÁBITAT</span>
              </div>
              <div className="sl-stat-val text-gold">Bosques, llanuras y riberas</div>
            </div>

            <div className="sl-stat-text">
              <div className="sl-stat-label">
                <Calendar size={14} color="#e6c875"/> <span>PERÍODO</span>
              </div>
              <div className="sl-stat-val text-gold">Cretácico Superior (68 – 66 Ma)</div>
            </div>
            
            <hr className="sl-divider" />

            <div className="sl-danger-row">
              <div className="sl-stat-label">
                <Skull size={14} color="#e6c875"/> <span>NIVEL DE PELIGRO</span>
              </div>
              <div className="sl-skulls">
                {[...Array(10)].map((_, i) => (
                  <Skull key={i} size={14} color={i < 10 ? "#e6c875" : "rgba(255,255,255,0.1)"} fill={i < 10 ? "#e6c875" : "none"} className={i < 10 ? "skull-active" : ""} />
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
          <div>
            <h4>UBICACIÓN</h4>
            <p className="highlight">América del Norte</p>
            <div className="map-placeholder"></div>
          </div>
        </div>
        
        <div className="sl-bot-col">
          <Thermometer size={18} color="#e6c875"/>
          <div>
            <h4>CLIMA</h4>
            <p className="highlight">Cálido y húmedo</p>
            <p>Temperaturas entre<br/>25°C y 35°C</p>
          </div>
        </div>

        <div className="sl-bot-col">
          <Leaf size={18} color="#e6c875"/>
          <div>
            <h4>VEGETACIÓN</h4>
            <p>Bosques densos,<br/>helechos gigantes,<br/>coníferas y cicadáceas.</p>
          </div>
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
