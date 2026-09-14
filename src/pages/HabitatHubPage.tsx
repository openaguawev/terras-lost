import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Bone, HelpCircle, Waves, Sun, Leaf, Mountain } from 'lucide-react';
import { dinosaurs } from '../data/dinosaurs';
import SEO from '../components/SEO';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HabitatHubPage.css';

gsap.registerPlugin(ScrollTrigger);

interface HabitatEditorialSection {
  title: string;
  content: string;
}

interface HabitatDetails {
  title: string;
  seoTitle: string;
  editorialHeading: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  icon: React.ElementType;
  sections: HabitatEditorialSection[];
}

const HABITAT_DATA: Record<string, HabitatDetails> = {
  'jungla': {
    title: 'JUNGLA Y SELVAS',
    seoTitle: 'Hábitat Jungla y Selvas: Dinosaurios y Entorno — DinoRex',
    editorialHeading: 'Ecología y Vida en la Jungla y Selvas',
    subtitle: 'Bosques densos y exuberantes',
    description: 'Las selvas prehistóricas del Mesozoico eran mundos húmedos y cálidos que albergaban una densidad colosal de flora, helechos gigantescos y grandes coníferas. Este entorno densamente arbolado proveía abundante follaje para alimentar a gigantescos herbívoros y proporcionaba las mejores áreas de caza y sigilo para los depredadores terrestres más veloces.',
    color: '#4ade80',
    image: '/habitat_jungle.webp',
    icon: Leaf,
    sections: [
      {
        title: 'El Canopio Mesozoico y la Biomasa Vegetal',
        content: 'Las selvas y bosques húmedos del Mesozoico constituyeron auténticos motores ecológicos de descomunal productividad biológica. A diferencia de las selvas tropicales modernas dominadas por angiospermas de hoja ancha, las selvas mesozoicas estaban estructuradas en múltiples estratos de coníferas arcaicas (parientes de las araucarias y podocarpáceas), densos sotobosques de cícadas leñosas, ginkgofitas y frondosos tapices de helechos arborescentes. La humedad constante y las elevadas temperaturas aceleraban las tasas de fotosíntesis, generando una inmensa biomasa vegetal capaz de sustentar comunidades biológicas de extraordinaria complejidad.'
      },
      {
        title: 'Nichos Tróficos y Estrategias en la Frondosidad',
        content: 'Habitar una selva prehistórica exigía adaptaciones morfológicas y sensoriales altamente refinadas. Los dinosaurios herbívoros ramoneadores, como los ornitópodos basales y anquilosaurios, aprovechaban el follaje bajo y medio gracias a picos córneos resistentes y complejas baterías dentarias. Por su parte, los terópodos carnívoros medianos y ágiles explotaban los troncos caídos y la espesura para emboscar a sus presas: una visión binocular aguda, garras prensiles y extremidades diseñadas para quiebros rápidos eran ventajas decisivas en el sotobosque. En las copas arbóreas, pterosaurios insectívoros y pequeños mamíferos primitivos ocupaban los nichos aéreos.'
      },
      {
        title: 'Preservación Fosilífera en Ambientes Húmedos',
        content: 'La fosilización en entornos selváticos es sumamente excepcional debido a la acidez natural de los suelos y a la rápida descomposición orgánica bacteriana. No obstante, en circunstancias donde meandros de ríos desbordados, lagunas tranquilas o coladas de barro sepultaban sedimentos de forma repentina, se formaban yacimientos fosilíferos de conservación extraordinaria (Lagerstätten). Estos eventos aislados han permitido preservar desde impresiones microscópicas de cutículas vegetales y flores primitivas hasta escamas de dinosaurios y gotas de ámbar con artrópodos intactos.'
      }
    ]
  },
  'oceano': {
    title: 'OCÉANO Y MARES',
    seoTitle: 'Hábitat Océano y Mares: Criaturas Prehistóricas — DinoRex',
    editorialHeading: 'Ecología y Vida en el Océano Prehistórico',
    subtitle: 'Extensos mares prehistóricos',
    description: 'Gran parte del planeta estaba cubierto por mares interiores y extensos océanos tropicales que albergaban una rica cadena alimenticia. En estas aguas cálidas y profundas, dominaban gigantescos reptiles marinos y peces voladores que libraban batallas por la supervivencia lejos de las costas terrestres.',
    color: '#3b82f6',
    image: '/habitat_ocean.webp',
    icon: Waves,
    sections: [
      {
        title: 'Los Mares Epicontinentales y la Cadena Pelágica',
        content: 'Durante el Mesozoico, extensos mares interiores poco profundos y océanos como el mar de Tetis anegaban grandes porciones de las plataformas continentales. Estas masas de agua cálidas y ricas en nutrientes, alimentadas por la escorrentía fluvial continental, sustentaban una cadena trófica marina de asombrosa diversidad. La base biológica estaba compuesta por florecientes comunidades de fitoplancton, ammonites de conchas espiraladas, belemnites de cuerpo fusiforme y arrecifes edificados por rudistas (bivalvos masivos de formas cónicas), que servían de sustento a bancos de peces óseos y tiburones pelágicos.'
      },
      {
        title: 'El Señorío de los Grandes Reptiles Marinos',
        content: 'Aunque no eran dinosaurios en sentido estricto, los reptiles marinos mesozoicos protagonizaron una de las transiciones evolutivas más fascinantes de la historia natural al reconquistar los océanos. Los ictiosaurios desarrollaron perfiles hidrodinámicos convergentes con los delfines actuales; los plesiosaurios se dividieron entre elegantes formas de cuello kilométrico para capturar cardúmenes y pliosaurios de cabezas masivas capaces de triturar presas blindadas. Hacia el Cretácico superior, los mosasaurios —gigantescos lagartos acuáticos de hasta 15 metros emparentados con los varanos— dominaron la cúspide trófica con una ferocidad inigualable.'
      },
      {
        title: 'Yacimientos y Registro en Fondos Anóxicos',
        content: 'Las cuencas oceánicas estancadas y los fondos marinos con baja concentración de oxígeno crearon condiciones insuperables para la preservación fósil. La ausencia de carroñeros y la calma de las corrientes abisales permitieron que esqueletos enteros se asentaran sobre fangos calcáreos finos sin desarticularse. Sitios de renombre internacional, como las calizas litográficas de Solnhofen en Europa o la Formación Niobrara en Norteamérica, han revelado ejemplares tridimensionales completos, restos estomacales fosilizados con peces a medio digerir e incluso impresiones de piel y aletas carnosas.'
      }
    ]
  },
  'desierto': {
    title: 'DESIERTO',
    seoTitle: 'Hábitat Desierto: Entorno Prehistórico y Especies — DinoRex',
    editorialHeading: 'Ecología y Vida en el Desierto Mesozoico',
    subtitle: 'Tierras áridas y vastas',
    description: 'Los desiertos del Mesozoico presentaban condiciones climáticas extremas con escasa vegetación y prolongados períodos de sequía. En este entorno inhóspito, solo los dinosaurios más resistentes, ágiles y con adaptaciones corporales específicas lograban sobrevivir, confiando en su astucia y resistencia física.',
    color: '#fbbf24',
    image: '/habitat_desert.webp',
    icon: Sun,
    sections: [
      {
        title: 'Los Grandes Cinturones Áridos del Mesozoico',
        content: 'Los paleoambientes desérticos del Mesozoico, especialmente patentes durante el Triásico tardío y el Cretácico en el corazón continental de Pangea y Asia Central, abarcaron formidables mares de dunas eólicas o «ergs». En estas regiones hiperáridas, dunas móviles de hasta cien metros de altura modelaban horizontes desprovistos de vegetación continua. El régimen térmico experimentaba gradientes extremos entre días sofocantes y noches gélidas, mientras que la presencia de agua líquida se limitaba a lagunas estacionales efímeras, salares endorreicos y oasis alimentados por acuíferos profundos.'
      },
      {
        title: 'Supervivencia Extrema y Adaptaciones Específicas',
        content: 'Prosperar en los ergs prehistóricos demandaba soluciones biológicas ingeniosas. Dinosaurios icónicos como Velociraptor, Protoceratops y Oviraptor, descubiertos en los estratos del desierto de Gobi (Formación Djadokhta), exhibían anatomías compactas, garras curvadas para afianzarse en arena suelta y metabolismos eficientes capaces de maximizar el ahorro hídrico. Muchos herbívoros desarrollaron picos afilados para cortar vegetación xerófila espinosa y fosas nasales agrandadas para enfriar la sangre cerebral y condensar vapor al exhalar. Asimismo, la excavación de madrigueras y la anidación en arena garantizaban la viabilidad de sus crías.'
      },
      {
        title: 'Tafonomía Eólica: Fósiles Congelados en Combate',
        content: 'Las violentas tormentas de polvo y los derrumbes imprevistos de frentes dunares saturados tras lluvias torrenciales dieron lugar a un tipo único de fosilización instantánea. Animales enteros quedaban asfixiados y sepultados en segundos en su postura natural de reposo o actividad cotidiana. La joya indiscutible de este fenómeno es el célebre fósil de los «Dinosaurios Luchadores», donde un Velociraptor aferra su garra letal en el cuello de un Protoceratops mientras este último atenaza el brazo del depredador con su poderoso pico, preservando su pugna a través de 80 millones de años.'
      }
    ]
  },
  'volcan': {
    title: 'VOLCÁN',
    seoTitle: 'Hábitat Volcán: Tierras Ígneas y Dinosaurios — DinoRex',
    editorialHeading: 'Ecología y Vida en Paisajes Volcánicos',
    subtitle: 'Zonas de intensa actividad geológica',
    description: 'Los paisajes volcánicos presentaban suelos ricos en ceniza y actividad hidrotermal constante. Con una atmósfera densa en gases y temperaturas extremas, estas tierras inestables eran cruzadas temporalmente por especies migratorias resistentes que se adaptaban a las dinámicas geológicas de un planeta en constante transformación.',
    color: '#ef4444',
    image: '/habitat_volcano.webp',
    icon: Mountain,
    sections: [
      {
        title: 'Vulcanismo Continental y Magmatismo a Gran Escala',
        content: 'El paisaje mesozoico estuvo profundamente marcado por erupciones volcánicas de magnitudes incomparables a cualquier evento observado en la historia humana moderna. Grandes provincias ígneas basálticas, como la provincia magmática de Paraná-Etendeka o las colosales efusiones de los Traps del Decán, expulsaron millones de kilómetros cúbicos de lava a través de fisuras corticales. Estas emanaciones liberaron a la atmósfera concentraciones masivas de dióxido de azufre, cenizas silíceas y compuestos halogenados, provocando fenómenos de lluvia ácida y fluctuaciones térmicas que forzaron la resiliencia de la biota terrestre.'
      },
      {
        title: 'Ecosistemas Piroclásticos y Ciclos de Fertilidad',
        content: 'A pesar del peligro evidente, las inmediaciones de los complejos volcánicos alternaban fases de devastación con períodos de fertilidad botánica exuberante. Los depósitos de tefra y cenizas finas enriquecían los suelos con potasio, calcio y fósforo, permitiendo un rápido rebrote de vegetación pionera que atraía manadas de dinosaurios herbívoros en sus rutas migratorias. Sin embargo, estas especies debían sortear terrenos inestables propensos a lahares (corrientes de lodo volcánico) y convivir con aguas fluviales cargadas de sedimentos abrasivos que desgastaban prematuramente sus coronas dentales.'
      },
      {
        title: 'Pompeyas del Mesozoico y Fosilización Excepcional',
        content: 'Las nubes ardientes y los flujos piroclásticos actuaron con frecuencia como agentes tafonómicos milagrosos. Al sepultar valles fluviales y lagos de manera hermética y repentina, la ceniza volcánica ultrafina sofocaba el entorno impidiendo la acción de carroñeros y bacterias descomponedoras. El exponente más extraordinario es el Biota de Jehol (Formaciones Yixian y Jiufotang) en China: estas «Pompeyas paleontológicas» han preservado con una nitidez celular insólita plumas completas con sus melanosomas originales (revelando el color auténtico de los dinosaurios), membranas de piel, fibras musculares y restos de vísceras intactas.'
      }
    ]
  }
};

export default function HabitatHubPage() {
  const { habitat } = useParams<{ habitat: string }>();
  const habitatKey = habitat?.toLowerCase() || '';
  const habitatInfo = HABITAT_DATA[habitatKey];
  
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [habitatKey]);

  useEffect(() => {
    if (!habitatInfo) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Header entrance
        gsap.from(".hab-header-content > *", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });

        // Cards scroll reveal
        gsap.from(".hab-dino-card", {
          scrollTrigger: {
            trigger: ".hab-hub-grid",
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
        gsap.from(".hab-header-content, .hab-hub-grid", {
          opacity: 0,
          duration: 0.3
        });
      });
    });

    return () => ctx.revert();
  }, [habitatKey, habitatInfo]);

  if (!habitatInfo) {
    return (
      <div className="hab-not-found">
        <h2>Hábitat no encontrado</h2>
        <Link to="/" className="back-btn">Volver al inicio</Link>
      </div>
    );
  }

  const filteredDinos = dinosaurs.filter(d => d.habitat === habitatKey);
  const HabitatIcon = habitatInfo.icon;
  const pageTitle = habitatInfo.seoTitle;

  // Generate CollectionPage Schema
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": pageTitle,
      "description": habitatInfo.description,
      "url": `https://www.dinorex.org/habitats/${habitatKey}`,
      "about": {
        "@type": "Thing",
        "name": `Hábitat ${habitatInfo.title}`
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
        { "@type": "ListItem", "position": 2, "name": "Hábitats", "item": "https://www.dinorex.org/#habitats" },
        { "@type": "ListItem", "position": 3, "name": habitatInfo.title, "item": `https://www.dinorex.org/habitats/${habitatKey}` }
      ]
    }
  ];

  return (
    <div className="hab-hub-container">
      <SEO
        title={pageTitle}
        description={habitatInfo.description}
        url={`https://www.dinorex.org/habitats/${habitatKey}`}
        image={`https://www.dinorex.org${habitatInfo.image}`}
        customSchema={schema}
      />

      <nav className="hab-hub-nav">
        <Link to="/" className="hab-back-to-home">
          <ChevronLeft size={16} /> VOLVER A DINOSAURIOS
        </Link>
      </nav>

      <header ref={headerRef} className="hab-hub-header" style={{ backgroundImage: `url(${habitatInfo.image})` }}>
        <div className="hab-header-overlay"></div>
        <div className="hab-header-content">
          <div className="hab-icon-badge" style={{ color: habitatInfo.color, borderColor: habitatInfo.color }}>
            <HabitatIcon size={16} /> HÁBITAT PREHISTÓRICO
          </div>
          <h1 className="hab-hub-title">{habitatInfo.title}</h1>
          <h2 className="hab-hub-subtitle" style={{ color: habitatInfo.color }}>{habitatInfo.subtitle}</h2>
          <p className="hab-hub-description">{habitatInfo.description}</p>
        </div>
      </header>

      <main className="hab-hub-main">
        {/* Editorial Guide Section */}
        <section className="hab-editorial-section">
          <div className="hab-editorial-header">
            <span className="hab-editorial-tag" style={{ color: habitatInfo.color, borderColor: habitatInfo.color }}>
              GUÍA DEL ENTORNO
            </span>
            <h2 className="hab-editorial-heading">{habitatInfo.editorialHeading}</h2>
          </div>
          <div className="hab-editorial-grid">
            {habitatInfo.sections.map((sec, idx) => (
              <article key={idx} className="hab-editorial-card">
                <div className="hab-editorial-card-num" style={{ color: habitatInfo.color }}>0{idx + 1}</div>
                <h3 className="hab-editorial-card-title">{sec.title}</h3>
                <p className="hab-editorial-card-text">{sec.content}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="hab-section-divider">
          <span className="divider-line"></span>
          <span className="divider-label" style={{ color: habitatInfo.color }}>ESPECIES NATIVAS</span>
          <span className="divider-line"></span>
        </div>

        {filteredDinos.length > 0 ? (
          <div ref={gridRef} className="hab-hub-grid">
            {filteredDinos.map(dino => (
              <Link to={`/criaturas/${dino.slug}`} key={dino.slug} className="hab-dino-card">
                <img src={dino.heroImage} alt={dino.name} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: dino.cardPosition || 'center', zIndex: 0 }} />
                <div className="hab-dino-card-overlay"></div>
                <div className="hab-dino-card-content">
                  <span className="hab-dino-diet" style={{ 
                    color: dino.heroStats.diet === 'Carnívoro' ? '#ff4444' : '#4ade80',
                    borderColor: dino.heroStats.diet === 'Carnívoro' ? 'rgba(255, 68, 68, 0.3)' : 'rgba(74, 222, 128, 0.3)'
                  }}>
                    <Bone size={12} /> {dino.heroStats.diet}
                  </span>
                  <h3 className="hab-dino-name">{dino.name}</h3>
                  <p className="hab-dino-scientific">{dino.scientificName}</p>
                  
                  <div className="hab-dino-brief">
                    <div className="hab-dino-stat">
                      <Clock size={12} /> {dino.heroStats.period}
                    </div>
                  </div>
                  
                  <span className="hab-dino-btn" style={{ color: habitatInfo.color }}>
                    VER DETALLES <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="hab-hub-empty">
            <HelpCircle size={48} strokeWidth={1} color="#C9A84C" />
            <p>Próximamente más criaturas de este hábitat en el catálogo.</p>
          </div>
        )}
      </main>
    </div>
  );
}
