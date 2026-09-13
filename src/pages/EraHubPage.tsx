import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, MapPin, Bone, HelpCircle } from 'lucide-react';
import { dinosaurs } from '../data/dinosaurs';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EraHubPage.css';

gsap.registerPlugin(ScrollTrigger);

interface EraEditorialSection {
  title: string;
  content: string;
}

interface EraDetails {
  title: string;
  time: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  sections: EraEditorialSection[];
}

const ERA_DATA: Record<string, EraDetails> = {
  'triasico': {
    title: 'TRIÁSICO',
    time: '252 - 201 Ma',
    subtitle: 'El comienzo de los dinosaurios',
    description: 'La era Triásica marcó el inicio de la dinastía de los dinosaurios tras la gran extinción del Pérmico. En un mundo cálido dominado por el supercontinente Pangea, surgieron los primeros reptiles ágiles y arcosaurios que sentaron las bases para los siguientes millones de años de evolución y dominio terrestre.',
    color: '#ff6a00',
    image: '/triassic.webp',
    sections: [
      {
        title: 'El Escenario Pangeano y Clima Árido',
        content: 'El Triásico (hace entre 252 y 201 millones de años) inauguró la Era Mesozoica emergiendo de las cenizas de la mayor catástrofe biológica de la Tierra: la extinción masiva del Pérmico-Triásico. Durante este período, todas las masas de tierra emergidas permanecían ensambladas en el supercontinente Pangea, circundado por el gigantesco océano Panthalassa. Esta vasta masa de tierra continentalizada dio lugar a un clima predominantemente árido y continental, con marcadas oscilaciones estacionales y gigantescos cinturones de dunas en su interior. La ausencia de casquetes polares y las elevadas concentraciones atmosféricas de dióxido de carbono propiciaron temperaturas globales considerablemente más cálidas que las actuales.'
      },
      {
        title: 'El Amanecer de los Dinosaurios y Arcosaurios',
        content: 'En sus etapas iniciales, los ecosistemas terrestres no estaban comandados por dinosaurios, sino por terápsidos (reptiles similares a mamíferos) y una prolífica variedad de arcosaurios basales emparentados con los cocodrilos. Fue hacia mediados del Triásico, hace aproximadamente 230 millones de años (piso Carniense), cuando los primeros dinosaurios verdaderos evolucionaron a partir de pequeños ancestros bípedos y veloces. Hallazgos extraordinarios como Eoraptor y Herrerasaurus en la Formación Ischigualasto de Argentina revelaron criaturas ligeras de marcha bípeda y dieta oportunista, cuyo diseño anatómico les permitió explotar con éxito nichos ecológicos vacantes.'
      },
      {
        title: 'Flora Mesozoica y la Extinción Triásico-Jurásico',
        content: 'La vegetación triásica estaba dominada por gimnospermas resistentes: coníferas primitivas, ginkgos, helechos con semillas y densos campos de cícadas capaces de prosperar con escasa humedad. Hacia el final del período, hace 201 millones de años, la reactivación tectónica y la fractura inicial de Pangea generaron la colosal Provincia Magmática del Atlántico Central (CAMP). Las masivas emisiones de gases de efecto invernadero y ceniza desencadenaron un colapso ecológico que extinguió a la mayoría de los competidores arcosaurios basales, despejando definitivamente el camino para el reinado global de los dinosaurios.'
      }
    ]
  },
  'jurasico': {
    title: 'JURÁSICO',
    time: '201 - 145 Ma',
    subtitle: 'La era de los gigantes',
    description: 'Durante el período Jurásico, la fragmentación de Pangea dio origen a climas más húmedos y templados, permitiendo la expansión de exuberantes selvas y bosques de coníferas. Bajo estas condiciones ideales, la vida vegetal floreció y surgieron los mayores gigantes de la Tierra, los enormes saurópodos de cuello largo y los primeros acorazados.',
    color: '#4ade80',
    image: '/jurassic.webp',
    sections: [
      {
        title: 'La Fragmentación Continental y el Clima Húmedo',
        content: 'El período Jurásico (hace entre 201 y 145 millones de años) representó una profunda transformación geológica y climática para la biosfera. A medida que Pangea comenzó a desgajarse en dos grandes supercontinentes —Laurasia al norte y Gondwana al sur—, las aguas del naciente mar de Tetis y las nuevas cuencas oceánicas facilitaron la penetración de vientos marítimos cargados de humedad hacia el interior continental. Este fenómeno transformó los antiguos desiertos triásicos en extensos bosques templados, selvas pantanosas y fértiles llanuras aluviales alimentadas por ríos perennes.'
      },
      {
        title: 'El Esplendor de los Saurópodos Gigantes',
        content: 'Bajo esta bonanza vegetal proliferaron los mayores animales terrestres que jamás hayan caminado sobre el planeta. Los saurópodos neosaurópodos, tales como Diplodocus, Brachiosaurus y Apatosaurus, desarrollaron cuellos extraordinariamente largos, esqueletos con vértebras neumatizadas (huecas y ligeras) y un sistema respiratorio asistido por sacos aéreos de flujo unidireccional idéntico al de las aves modernas. Estas adaptaciones biomecánicas les permitían pastorear copas de coníferas de 15 a 30 metros de altura sin gastar excesiva energía, conviviendo con herbívoros acorazados como los estegosaurios.'
      },
      {
        title: 'Megadepredadores y el Salto Hacia el Aire',
        content: 'La colosal masa de presas herbívoras impulsó el florecimiento de formidables terópodos carnívoros, encabezados por Allosaurus, Ceratosaurus y Torvosaurus, dotados de mandíbulas articuladas y garras curvas diseñadas para desgarrar. Simultáneamente, el Jurásico tardío atestiguó un hito trascendental en la historia de la vida: pequeños terópodos celurosaurios desarrollaron plumas complejas para aislamiento térmico y exhibición, dando origen a las primeras aves primitivas como Archaeopteryx. En los cielos costeros, los pterosaurios dominaban el aire mientras los mares albergaban la cúspide de plesiosaurios e ictiosaurios.'
      }
    ]
  },
  'cretacico': {
    title: 'CRETÁCICO',
    time: '145 - 66 Ma',
    subtitle: 'El dominio y la extinción',
    description: 'El Cretácico representa el apogeo y florecimiento de la diversidad dinosauriana. Los continentes se separaron hacia sus posiciones modernas y surgieron los depredadores terrestres más temibles, los ceratópsidos con cuernos y el desarrollo completo de armaduras defensivas. La era terminó con un cataclismo masivo por impacto astronómico.',
    color: '#fbbf24',
    image: '/cretaceous.webp',
    sections: [
      {
        title: 'Mosaico Continental y la Revolución Floral',
        content: 'El período Cretácico (hace entre 145 y 66 millones de años) fue el capítulo culminante y más dinámico de la Era Mesozoica. Las masas de tierra continuaron disgregándose hacia configuraciones geográficas reconocibles, creando una red de mares interiores y masas aisladas que estimularon una intensa radiación evolutiva. A mediados del período ocurrió un evento biológico revolucionario: la aparición y rápida diversificación de las angiospermas (plantas con flor). La coevolución entre flores e insectos polinizadores transformó los paisajes terrestres, enriqueciendo las dietas de herbívoros con baterías dentales complejas.'
      },
      {
        title: 'Especialización Máxima: De Titanosaurios a Tiranosáuridos',
        content: 'La variedad de formas y tamaños alcanzó cotas nunca antes vistas. En las tierras meridionales de Gondwana (especialmente la Patagonia argentina), los titanosaurios alcanzaron proporciones descomunales, con colosos como Argentinosaurus y Patagotitan superando las 40 a 70 toneladas de peso. En el hemisferio norte, las llanuras fueron colonizadas por manadas de hadrosáuridos («picos de pato») y ceratópsidos provistos de golas y cuernos óseos como Triceratops. En la cima de la pirámide trófica se consolidaron megaterópodos temibles: los abelisáuridos y carcarodontosáuridos en el sur, y el célebre Tyrannosaurus rex en el norte.'
      },
      {
        title: 'El Evento de Extinción Masiva K-Pg',
        content: 'Hace 66 millones de años, la era de los dinosaurios no aviares finalizó de forma súbita y catastrófica debido a la colisión de un asteroide de entre 10 y 14 kilómetros de diámetro en la península de Yucatán (el cráter de Chicxulub), acompañado de un violento vulcanismo en los Traps del Decán (India). El impacto lanzó billones de toneladas de azufre, polvo y hollín a la estratosfera, bloqueando la luz solar durante años y colapsando las cadenas tróficas globales. Si bien el 75% de las especies terrestres y marinas perecieron, un linaje de pequeños dinosaurios terópodos emplumados logró sobrevivir: las aves que hoy habitan nuestro planeta.'
      }
    ]
  }
};

export default function EraHubPage() {
  const { era } = useParams<{ era: string }>();
  const eraKey = era?.toLowerCase() || '';
  const eraInfo = ERA_DATA[eraKey];
  
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eraKey]);

  useEffect(() => {
    if (!eraInfo) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header entrance
        gsap.from(".era-header-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });

        // Cards scroll reveal
        gsap.from(".era-dino-card", {
          scrollTrigger: {
            trigger: ".era-hub-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out"
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // Fallback simple instant fade
        gsap.from(".era-header-content, .era-hub-grid", {
          opacity: 0,
          duration: 0.3
        });
      });
    });

    return () => ctx.revert();
  }, [eraKey, eraInfo]);

  if (!eraInfo) {
    return (
      <div className="era-not-found">
        <h2>Era no encontrada</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  const filteredDinos = dinosaurs.filter(d => d.era === eraKey);
  const formattedEraTitle = eraInfo.title.charAt(0) + eraInfo.title.slice(1).toLowerCase();
  const pageTitle = `Período ${formattedEraTitle}: Clima, Ecosistemas y Dinosaurios — DinoRex`;

  // Generate CollectionPage Schema
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": pageTitle,
      "description": eraInfo.description,
      "url": `https://www.dinorex.org/eras/${eraKey}`,
      "about": {
        "@type": "Thing",
        "name": `Era ${eraInfo.title}`
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": filteredDinos.map((dino, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://www.dinorex.org/criaturas/${dino.slug}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.dinorex.org/" },
        { "@type": "ListItem", "position": 2, "name": "Eras", "item": "https://www.dinorex.org/#eras" },
        { "@type": "ListItem", "position": 3, "name": eraInfo.title, "item": `https://www.dinorex.org/eras/${eraKey}` }
      ]
    }
  ];

  return (
    <div className="era-hub-container">
      <SEO
        title={pageTitle}
        description={eraInfo.description}
        url={`https://www.dinorex.org/eras/${eraKey}`}
        image={`https://www.dinorex.org${eraInfo.image}`}
        customSchema={schema}
      />

      <nav className="era-hub-nav">
        <Link to="/" className="era-back-to-home">
          <ChevronLeft size={16} /> VOLVER A DINOSAURIOS
        </Link>
      </nav>

      <header ref={headerRef} className="era-hub-header" style={{ backgroundImage: `url(${eraInfo.image})` }}>
        <div className="era-header-overlay"></div>
        <div className="era-header-content">
          <div className="era-time-badge" style={{ color: eraInfo.color, borderColor: eraInfo.color }}>
            <Clock size={14} /> {eraInfo.time}
          </div>
          <h1 className="era-hub-title">{eraInfo.title}</h1>
          <h2 className="era-hub-subtitle" style={{ color: eraInfo.color }}>{eraInfo.subtitle}</h2>
          <p className="era-hub-description">{eraInfo.description}</p>
        </div>
      </header>

      <main className="era-hub-main">
        {/* Editorial Guide Section */}
        <section className="era-editorial-section">
          <div className="era-editorial-header">
            <span className="era-editorial-tag" style={{ color: eraInfo.color, borderColor: eraInfo.color }}>
              GUÍA PALEONTOLÓGICA
            </span>
            <h2 className="era-editorial-heading">Historia y Ecosistemas del {eraInfo.title}</h2>
          </div>
          <div className="era-editorial-grid">
            {eraInfo.sections.map((sec, idx) => (
              <article key={idx} className="era-editorial-card">
                <div className="era-editorial-card-num" style={{ color: eraInfo.color }}>0{idx + 1}</div>
                <h3 className="era-editorial-card-title">{sec.title}</h3>
                <p className="era-editorial-card-text">{sec.content}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="era-section-divider">
          <span className="divider-line"></span>
          <span className="divider-label" style={{ color: eraInfo.color }}>ESPECIES CATALOGADAS</span>
          <span className="divider-line"></span>
        </div>

        {filteredDinos.length > 0 ? (
          <div ref={gridRef} className="era-hub-grid">
            {filteredDinos.map(dino => (
              <Link to={`/criaturas/${dino.slug}`} key={dino.slug} className="era-dino-card">
                <img src={dino.heroImage} alt={dino.name} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                <div className="era-dino-card-overlay"></div>
                <div className="era-dino-card-content">
                  <span className="era-dino-diet" style={{ 
                    color: dino.heroStats.diet === 'Carnívoro' ? '#ff4444' : '#4ade80',
                    borderColor: dino.heroStats.diet === 'Carnívoro' ? 'rgba(255, 68, 68, 0.3)' : 'rgba(74, 222, 128, 0.3)'
                  }}>
                    <Bone size={12} /> {dino.heroStats.diet}
                  </span>
                  <h3 className="era-dino-name">{dino.name}</h3>
                  <p className="era-dino-scientific">{dino.scientificName}</p>
                  
                  <div className="era-dino-brief">
                    <div className="era-dino-stat">
                      <MapPin size={12} /> {dino.heroStats.habitat}
                    </div>
                  </div>
                  
                  <span className="era-dino-btn" style={{ color: eraInfo.color }}>
                    VER DETALLES <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="era-hub-empty">
            <HelpCircle size={48} strokeWidth={1} color="#C9A84C" />
            <p>Próximamente más criaturas de esta era en el catálogo.</p>
          </div>
        )}
      </main>
    </div>
  );
}
