export interface DinosaurDetail {
  slug: string;
  name: string;
  scientificName: string;
  tagline: string;
  heroImage: string;
  heroStats: {
    period: string;
    habitat: string;
    diet: string;
    discovered: string;
  };
  sideStats: { label: string; value: string }[];
  content: {
    subtitle: string;
    paragraphs: string[];
    mapLocation: string;
  };
  videoText: string;
  attributeBars: { label: string; value: number }[];
  fossils: {
    name: string;
    code: string;
    location: string;
    image: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const dinosaurs: DinosaurDetail[] = [
  {
    slug: 'tyrannosaurus-rex',
    name: 'TYRANNOSAURUS REX',
    scientificName: 'Tyrannosaurus rex',
    tagline: 'El rey de los dinosaurios. Uno de los depredadores más temibles de todos los tiempos. Con una fuerza de mordida letal y un tamaño colosal, el T-Rex dominó la cadena alimenticia del Cretácico Tardío.',
    heroImage: '/dinos/trex_spotlight_full.png',
    heroStats: {
      period: 'Cretácico Tardío',
      habitat: 'Bosques y valles',
      diet: 'Carnívoro',
      discovered: '1902'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Rey de los lagartos tiranos"' },
      { label: 'LONGITUD', value: '12 - 13 m' },
      { label: 'ALTURA', value: '3.6 - 4 m' },
      { label: 'PESO', value: '7 - 9 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 27 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '28 - 30 años' },
    ],
    content: {
      subtitle: 'SOBRE EL TYRANNOSAURUS REX',
      paragraphs: [
        'Hace 68 millones de años, el Tyrannosaurus Rex poseía una de las mordidas más poderosas de cualquier animal terrestre que haya existido. Sus dientes, algunos del tamaño de plátanos, estaban diseñados para triturar hueso sólido.',
        'A pesar de sus diminutos brazos, su inmensa cabeza, cuello musculoso y poderosas patas traseras lo convertían en una máquina de caza perfectamente adaptada a su entorno.'
      ],
      mapLocation: 'América del Norte'
    },
    videoText: 'Observa al T-Rex en su entorno natural y escucha su aterrador rugido.',
    attributeBars: [
      { label: 'AGRESIVIDAD', value: 10 },
      { label: 'INTELIGENCIA', value: 7 },
      { label: 'VELOCIDAD', value: 5 },
      { label: 'TAMAÑO', value: 9 },
    ],
    fossils: [
      { name: 'CRÁNEO COMPLETO', code: 'FMNH PR 2081 (Sue)', location: 'Chicago, EE. UU.', image: '/dinos/fossil_1.png' },
      { name: 'DIENTE SERRADO', code: 'MOR 1125', location: 'Montana, EE. UU.', image: '/dinos/fossil_4.png' },
      { name: 'FÉMUR INTACTO', code: 'BHI 3033', location: 'Dakota del Sur, EE. UU.', image: '/dinos/fossil_2.png' },
      { name: 'ESQUELETO MONTADO', code: 'AMNH 5027', location: 'Nueva York, EE. UU.', image: '/dinos/fossil_3.png' },
    ],
    features: [
      { title: 'SU MORDIDA', description: 'Fuerza de mordida letal, capaz de triturar los huesos de sus presas.', icon: 'skull' },
      { title: 'BRAZOS PEQUEÑOS', description: 'A pesar de su tamaño, podían levantar gran peso.', icon: 'scissors' },
      { title: 'PASOS GIGANTES', description: 'Sus grandes zancadas le permitían cubrir mucho terreno rápidamente.', icon: 'footprints' },
      { title: 'VISIÓN AFILADA', description: 'Visión binocular perfecta para calcular distancias al acechar.', icon: 'eye' },
    ]
  },
  {
    slug: 'velociraptor',
    name: 'VELOCIRAPTOR',
    scientificName: 'Velociraptor mongoliensis',
    tagline: 'Pequeño en tamaño, gigante en velocidad e inteligencia. El Velociraptor era un depredador ágil y estratégico, conocido por cazar en grupo y comunicarse con sofisticados sonidos y movimientos.',
    heroImage: '/dinos/velociraptor_1779606904540.png',
    heroStats: {
      period: 'Cretácico Superior',
      habitat: 'Desiertos de Asia Central',
      diet: 'Carnívoro',
      discovered: '1923'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Ladrón veloz"' },
      { label: 'LONGITUD', value: '1.8 - 2.4 m' },
      { label: 'ALTURA', value: '0.6 - 0.9 m' },
      { label: 'PESO', value: '15 - 20 kg' },
      { label: 'VELOCIDAD', value: 'Hasta 65 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '20 - 30 años' },
    ],
    content: {
      subtitle: 'PEQUEÑO, PERO MORTAL',
      paragraphs: [
        'El Velociraptor medía alrededor de 2 metros de largo y pesaba entre 15 y 20 kg. Su agilidad, visión aguda y cerebro desarrollado lo convertían en un cazador excepcional.',
        'Vivía en manadas organizadas, usando la velocidad, la estrategia y la comunicación para acechar y derribar a sus presas. Las evidencias fósiles demuestran que estaban cubiertos de plumas.'
      ],
      mapLocation: 'Asia Central (Mongolia y China)'
    },
    videoText: 'Observa al Velociraptor en movimiento y descubre cómo cazaba a sus presas.',
    attributeBars: [
      { label: 'AGRESIVIDAD', value: 9 },
      { label: 'VELOCIDAD', value: 10 },
      { label: 'INTELIGENCIA', value: 9 },
      { label: 'SIGILO', value: 10 },
      { label: 'FUERZA', value: 4 },
      { label: 'RESISTENCIA', value: 6 },
    ],
    fossils: [
      { name: 'CRÁNEO COMPLETO', code: 'IVPP V 13332', location: 'Mongolia', image: '/dinos/fossil_1.png' },
      { name: 'GARRA DE HOZ', code: 'Característica garra', location: 'Pie del depredador', image: '/dinos/fossil_4.png' },
      { name: 'ESQUELETO ARTICULADO', code: 'IVPP V 14350', location: 'Mongolia', image: '/dinos/fossil_3.png' },
      { name: 'HUEVOS FÓSILES', code: 'Otogon Obo', location: 'Mongolia', image: '/dinos/fossil_2.png' },
    ],
    features: [
      { title: 'CAZA EN MANADA', description: 'Coordinaban ataques en grupo para cazar presas mucho más grandes.', icon: 'users' },
      { title: 'COMUNICADORES', description: 'Emitían sonidos complejos y señales visuales para coordinarse.', icon: 'radio' },
      { title: 'VISIÓN EXCEPCIONAL', description: 'Tenía una vista aguda, ideal para detectar presas a gran distancia.', icon: 'eye' },
      { title: 'CEREBRO DESARROLLADO', description: 'Uno de los dinosaurios con mejor relación cerebro-tamaño corporal.', icon: 'brain' },
    ]
  },
  {
    slug: 'triceratops',
    name: 'TRICERATOPS',
    scientificName: 'Triceratops horridus',
    tagline: 'Uno de los dinosaurios herbívoros más icónicos del Cretácico tardío. Su imponente gola ósea y sus tres cuernos lo convirtieron en una fortaleza viviente contra los depredadores.',
    heroImage: '/dinos/triceratops_1779606918531.png',
    heroStats: {
      period: 'Cretácico Tardío',
      habitat: 'Llanuras y pantanos',
      diet: 'Herbívoro',
      discovered: '1887'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Cara con tres cuernos"' },
      { label: 'LONGITUD', value: '8.5 - 9 m' },
      { label: 'ALTURA', value: '2.9 - 3 m' },
      { label: 'PESO', value: '6 - 12 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 24 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '30 - 35 años' },
    ],
    content: {
      subtitle: 'UN ESCUDO NATURAL',
      paragraphs: [
        'El Triceratops poseía una enorme gola ósea que podría haber usado para defenderse de depredadores como el T-Rex, intimidar a rivales o incluso para regular su temperatura corporal.',
        'Vivía en manadas y se alimentaba de plantas duras y fibrosas, usando su fuerte y afilado pico poderoso para arrancar la dura vegetación de la época.'
      ],
      mapLocation: 'Norteamérica (EE. UU. y Canadá)'
    },
    videoText: 'Observa al Triceratops en su hábitat natural y descubre cómo se movía este gigante herbívoro.',
    attributeBars: [
      { label: 'DEFENSA', value: 10 },
      { label: 'FUERZA', value: 9 },
      { label: 'VELOCIDAD', value: 4 },
      { label: 'INTELIGENCIA', value: 4 },
      { label: 'AGRESIVIDAD', value: 6 },
      { label: 'RESISTENCIA', value: 9 },
    ],
    fossils: [
      { name: 'CRÁNEO COMPLETO', code: 'NMMNH P-2089', location: 'Denver, EE. UU.', image: '/dinos/fossil_1.png' },
      { name: 'GOLA ÓSEA', code: 'NMMNH P-2089-FR', location: 'Denver, EE. UU.', image: '/dinos/fossil_3.png' },
      { name: 'CUERNO FRONTAL', code: 'NMMNH P-2089-H1', location: 'Denver, EE. UU.', image: '/dinos/fossil_4.png' },
      { name: 'HUESO DE PATA', code: 'NMMNH P-2089-L1', location: 'Denver, EE. UU.', image: '/dinos/fossil_2.png' },
    ],
    features: [
      { title: 'VIVÍA EN MANADA', description: 'Se han encontrado restos de varios individuos juntos, sugiriendo vidas grupales.', icon: 'users' },
      { title: 'CUERNOS IMPRESIONANTES', description: 'Sus cuernos frontales podían medir hasta 1 metro de longitud.', icon: 'swords' },
      { title: 'PICO PODEROSO', description: 'Su pico de ave era ideal para cortar ramas y plantas muy resistentes.', icon: 'scissors' },
      { title: 'GOLA MULTIFUNCIONAL', description: 'Probablemente la usaba para defensa, exhibición y regulación térmica.', icon: 'shield' },
    ]
  },
  {
    slug: 'spinosaurus',
    name: 'SPINOSAURUS',
    scientificName: 'Spinosaurus aegyptiacus',
    tagline: 'El Spinosaurus fue uno de los dinosaurios carnívoros más grandes que jamás haya existido. A diferencia de otros terópodos, estaba perfectamente adaptado para la vida acuática, convirtiéndose en el rey de los ríos.',
    heroImage: '/dinos/spinosaurus_1779606934087.png',
    heroStats: {
      period: 'Cretácico Superior',
      habitat: 'Ríos y deltas',
      diet: 'Carnívoro (piscívoro)',
      discovered: '1912'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Lagarto espinoso"' },
      { label: 'LONGITUD', value: '15 - 18 m' },
      { label: 'ALTURA', value: '4 - 5 m' },
      { label: 'PESO', value: '7 - 20 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 30 km/h (agua)' },
      { label: 'EXPECTATIVA DE VIDA', value: '30 - 40 años' },
    ],
    content: {
      subtitle: 'UN DEPREDADOR ACUÁTICO ÚNICO',
      paragraphs: [
        'El Spinosaurus tenía adaptaciones únicas que le permitían cazar en el agua con una eficiencia letal. Su hocico alargado como el de un cocodrilo y sus dientes cónicos eran perfectos para atrapar peces resbaladizos.',
        'Sus poderosas patas traseras palmeadas le daban fuerza en el agua, mientras que su gran vela dorsal pudo haber servido para regular su temperatura o para exhibición territorial.'
      ],
      mapLocation: 'África del Norte (Egipto, Marruecos, Túnez)'
    },
    videoText: 'Observa al Spinosaurus en su hábitat natural y descubre cómo dominaba las aguas.',
    attributeBars: [
      { label: 'AGRESIVIDAD', value: 8 },
      { label: 'FUERZA', value: 9 },
      { label: 'VELOCIDAD (AGUA)', value: 8 },
      { label: 'INTELIGENCIA', value: 6 },
      { label: 'SIGILO', value: 7 },
      { label: 'RESISTENCIA', value: 9 },
    ],
    fossils: [
      { name: 'CRÁNEO PARCIAL', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_1.png' },
      { name: 'DIENTES CÓNICOS', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_4.png' },
      { name: 'VÉRTEBRAS DORSALES', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_3.png' },
      { name: 'GARRA CURVA', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_2.png' },
    ],
    features: [
      { title: 'NADADOR EXPERTO', description: 'Sus patas traseras palmeadas y cola plana le daban propulsión en el agua.', icon: 'droplets' },
      { title: 'HOCICO SENSORIAL', description: 'Su hocico alargado tenía terminaciones para detectar presión en el agua.', icon: 'radar' },
      { title: 'DIETA ESPECIALIZADA', description: 'Se alimentaba principalmente de peces gigantes, pero también cazaba en tierra.', icon: 'fish' },
      { title: 'VELA TÉRMICA', description: 'Su enorme vela dorsal pudo haberle ayudado a regular la temperatura rápidamente.', icon: 'thermometer' },
    ]
  },
  {
    slug: 'brachiosaurus',
    name: 'BRACHIOSAURUS',
    scientificName: 'Brachiosaurus altithorax',
    tagline: 'Uno de los dinosaurios más grandes que jamás haya caminado sobre la Tierra. Su largo cuello y postura erguida le permitían alcanzar la vegetación más alta, convirtiéndolo en un gigante amable de la era Jurásica.',
    heroImage: '/dinos/brachiosaurus_1779606953114.png',
    heroStats: {
      period: 'Jurásico Superior',
      habitat: 'Llanuras y bosques',
      diet: 'Herbívoro',
      discovered: '1903'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Lagarto de brazo"' },
      { label: 'LONGITUD', value: '22 - 26 m' },
      { label: 'ALTURA', value: '12 - 16 m' },
      { label: 'PESO', value: '30 - 50 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 10 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '70 - 100 años' },
    ],
    content: {
      subtitle: 'UN GIGANTE GENTIL',
      paragraphs: [
        'El Brachiosaurus se distinguía por sus patas delanteras más largas que las traseras y su cuello extremadamente largo, lo que le daba una postura única entre los gigantes saurópodos.',
        'Vivía en manadas y se alimentaba de las copas de los árboles, ramas y plantas altas que ningún otro herbívoro del ecosistema podía alcanzar.'
      ],
      mapLocation: 'Norteamérica (Colorado, EE. UU.)'
    },
    videoText: 'Explora al Brachiosaurus en su hábitat natural y observa cómo vivía este colosal herbívoro.',
    attributeBars: [
      { label: 'TAMAÑO', value: 10 },
      { label: 'DEFENSA', value: 8 },
      { label: 'VELOCIDAD', value: 2 },
      { label: 'INTELIGENCIA', value: 3 },
      { label: 'AGRESIVIDAD', value: 1 },
      { label: 'RESISTENCIA', value: 9 },
    ],
    fossils: [
      { name: 'CRÁNEO PARCIAL', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_1.png' },
      { name: 'VÉRTEBRAS CERVICALES', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_3.png' },
      { name: 'FÉMUR IZQUIERDO', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_2.png' },
      { name: 'COSTILLAS GIGANTES', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_4.png' },
    ],
    features: [
      { title: 'CORAZÓN ENORME', description: 'Su corazón podía pesar más de 1 tonelada para bombear sangre a su cerebro.', icon: 'heart' },
      { title: 'RESPIRACIÓN EFICIENTE', description: 'Tenía un sistema respiratorio adaptado para mantener su inmenso cuerpo.', icon: 'wind' },
      { title: 'ALCANCE IMPRESIONANTE', description: 'Su cuello de grúa le permitía alcanzar hojas a más de 12 metros de altura.', icon: 'move-up' },
      { title: 'MANADAS PACÍFICAS', description: 'Se han encontrado evidencias de que viajaban en grandes manadas protectoras.', icon: 'users' },
    ]
  },
  {
    slug: 'pteranodon',
    name: 'PTERANODON',
    scientificName: 'Pteranodon longiceps',
    tagline: 'El Pteranodon fue uno de los reptiles voladores más grandes que jamás haya existido. Dominaba los cielos del Cretácico con su enorme envergadura y su increíble capacidad de vuelo sobre océanos y continentes.',
    heroImage: '/dinos/pteranodon_1779606968978.png',
    heroStats: {
      period: 'Cretácico Superior',
      habitat: 'Costas y acantilados',
      diet: 'Piscívoro',
      discovered: '1876'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Alado y sin dientes"' },
      { label: 'ENVERGADURA', value: '6 - 8 m' },
      { label: 'LONGITUD', value: '1.5 - 2 m' },
      { label: 'PESO', value: '15 - 25 kg' },
      { label: 'VELOCIDAD', value: 'Hasta 80 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '20 - 25 años' },
    ],
    content: {
      subtitle: 'MAESTRO DEL VIENTO',
      paragraphs: [
        'El Pteranodon tenía una de las envergaduras más grandes del reino animal. Su cráneo alargado y sin dientes estaba diseñado para pescar hábilmente en la superficie del agua.',
        'Sus alas, formadas por una fuerte membrana de piel y sostenidas por un solo dedo alargado, le permitían planear durante largos períodos aprovechando las corrientes de aire cálido.'
      ],
      mapLocation: 'América del Norte (Kansas, EE. UU.)'
    },
    videoText: 'Observa al Pteranodon planear sobre los océanos del Cretácico en una experiencia interactiva.',
    attributeBars: [
      { label: 'ENVERGADURA', value: 10 },
      { label: 'VELOCIDAD', value: 9 },
      { label: 'MANIOBRABILIDAD', value: 7 },
      { label: 'INTELIGENCIA', value: 5 },
      { label: 'FUERZA', value: 4 },
      { label: 'RESISTENCIA', value: 8 },
    ],
    fossils: [
      { name: 'CRÁNEO COMPLETO', code: 'YPM 1923', location: 'Kansas, EE. UU.', image: '/dinos/fossil_1.png' },
      { name: 'ESQUELETO ARTICULADO', code: 'YPM 2281', location: 'Kansas, EE. UU.', image: '/dinos/fossil_3.png' },
      { name: 'CRESTA CRANEAL', code: 'YPM 1923', location: 'Kansas, EE. UU.', image: '/dinos/fossil_4.png' },
      { name: 'HUESOS DEL ALA', code: 'YPM 2281', location: 'Kansas, EE. UU.', image: '/dinos/fossil_2.png' },
    ],
    features: [
      { title: 'VUELO EFICIENTE', description: 'Podía planear cientos de kilómetros aprovechando las corrientes oceánicas.', icon: 'wind' },
      { title: 'PESCADOR EXPERTO', description: 'Su pico hidrodinámico le permitía atrapar peces en picada sin perder velocidad.', icon: 'fish' },
      { title: 'HUESOS LIGEROS', description: 'Sus huesos eran completamente huecos, dándole ligereza sin perder estructura.', icon: 'feather' },
      { title: 'VISIÓN AGUDA', description: 'Sus grandes ojos le daban una vista excelente para cazar peces desde las alturas.', icon: 'eye' },
    ]
  }
];

export const getDinosaurBySlug = (slug: string) => dinosaurs.find((d) => d.slug === slug);
