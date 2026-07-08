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
  era: 'triasico' | 'jurasico' | 'cretacico';
  habitat: 'desierto' | 'jungla' | 'oceano' | 'volcan';
  faqs: { question: string; answer: string }[];
}

export const dinosaurs: DinosaurDetail[] = [
  {
    slug: 'tyrannosaurus-rex',
    name: 'TYRANNOSAURUS REX',
    scientificName: 'Tyrannosaurus rex',
    tagline: 'El rey de los dinosaurios. Uno de los depredadores más temibles de todos los tiempos. Con una fuerza de mordida letal y un tamaño colosal, el T-Rex dominó la cadena alimenticia del Cretácico Tardío.',
    heroImage: '/dinos/trex_spotlight_full.webp',
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
        'Hace 68 millones de años, el Tyrannosaurus Rex poseía una de las mordidas más poderosas de cualquier animal terrestre que haya existido. Sus dientes, algunos del tamaño de plátanos, estaban diseñados para triturar hueso sólido y desgarrar carne con facilidad.',
        'A pesar de sus diminutos brazos, su inmensa cabeza, cuello musculoso y poderosas patas traseras lo convertían en una máquina de caza perfectamente adaptada a su entorno. Su estructura bípeda le permitía balancearse con una cola larga y pesada.',
        'Nuevas investigaciones sugieren que el T-Rex pudo haber tenido una excelente agudeza visual binocular, superior a la de los halcones modernos, permitiéndole calcular distancias con precisión quirúrgica al acechar a sus presas en los densos bosques y valles fluviales.',
        'Además de sus habilidades como cazador activo, es probable que este superdepredador aprovechara su imponente tamaño para intimidar a otros carnívoros más pequeños y arrebatarles sus capturas, actuando también como un oportunista carroñero cuando la ocasión lo requería.',
        'El descubrimiento de ejemplares notablemente completos como "Sue" y "Stan" ha revelado detalles fascinantes sobre su crecimiento, patologías óseas e incluso marcas de combate que demuestran la dura vida que enfrentaban estos reyes del Cretácico.'
      ],
      mapLocation: 'América del Norte'
    },
    videoText: 'Observa al T-Rex en su entorno natural y escucha su rugido.',
    attributeBars: [
      { label: 'AGRESIVIDAD', value: 10 },
      { label: 'FUERZA', value: 10 },
      { label: 'VELOCIDAD', value: 5 },
      { label: 'INTELIGENCIA', value: 7 },
      { label: 'RESISTENCIA', value: 8 },
    ],
    fossils: [
      { name: 'CRÁNEO COMPLETO', code: 'FMNH PR 2081 (Sue)', location: 'Chicago, EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'DIENTE SERRADO', code: 'MOR 1125', location: 'Montana, EE. UU.', image: '/dinos/fossil_4.webp' },
      { name: 'FÉMUR INTACTO', code: 'BHI 3033', location: 'Dakota del Sur, EE. UU.', image: '/dinos/fossil_2.webp' },
      { name: 'ESQUELETO MONTADO', code: 'AMNH 5027', location: 'Nueva York, EE. UU.', image: '/dinos/fossil_3.webp' },
    ],
    features: [
      { title: 'SU MORDIDA', description: 'Fuerza de mordida letal, capaz de triturar los huesos de sus presas.', icon: 'skull' },
      { title: 'BRAZOS PEQUEÑOS', description: 'A pesar de su tamaño, podían levantar gran peso.', icon: 'scissors' },
      { title: 'PASOS GIGANTES', description: 'Sus grandes zancadas le permitían cubrir mucho terreno rápidamente.', icon: 'footprints' },
      { title: 'VISIÓN AFILADA', description: 'Visión binocular perfecta para calcular distancias al acechar.', icon: 'eye' },
    ],
    era: 'cretacico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Tyrannosaurus Rex?', answer: 'El T-Rex medía aproximadamente entre 12 y 13 metros de longitud y alcanzaba una altura de unos 4 metros hasta las caderas.' },
      { question: '¿Qué comía el Tyrannosaurus Rex?', answer: 'Era un carnívoro estricto. Se alimentaba de grandes herbívoros de su época, como el Triceratops y el Edmontosaurus.' },
      { question: '¿Cuándo se extinguió el Tyrannosaurus Rex?', answer: 'Se extinguió hace unos 66 millones de años, durante el evento de extinción masiva del Cretácico-Paleógeno.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'La mayoría de sus fósiles se han descubierto en el oeste de América del Norte, en formaciones geológicas como Hell Creek.' }
    ]
  },
  {
    slug: 'velociraptor',
    name: 'VELOCIRAPTOR',
    scientificName: 'Velociraptor mongoliensis',
    tagline: 'Pequeño en tamaño, gigante en velocidad e inteligencia. El Velociraptor era un depredador ágil y estratégico, conocido por cazar en grupo y comunicarse con sofisticados sonidos y movimientos.',
    heroImage: '/dinos/velociraptor_1779606904540.webp',
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
        'El Velociraptor medía alrededor de 2 metros de largo y pesaba entre 15 y 20 kg. Su agilidad, visión aguda y cerebro desarrollado lo convertían en un cazador excepcional de los antiguos desiertos asiáticos.',
        'Vivía en manadas organizadas, usando la velocidad, la estrategia y la comunicación para acechar y derribar a sus presas. Las evidencias fósiles demuestran que estaban cubiertos de plumas, lo que sugiere un metabolismo de sangre caliente.',
        'Su garra retráctil en forma de hoz, ubicada en el segundo dedo de cada pie, era su arma más letal. No la usaba para destripar, sino para perforar la tráquea o venas principales de sus víctimas, inmovilizándolas con rapidez.',
        'A diferencia de su representación en la cultura popular, el Velociraptor real era del tamaño de un pavo grande. Sin embargo, su inteligencia social y sus tácticas coordinadas compensaban con creces su falta de tamaño frente a presas mayores.',
        'Fósiles famosos como el de los "Dinosaurios Combatientes" capturan un momento eterno de lucha a muerte entre un Velociraptor y un Protoceratops, demostrando su comportamiento depredador directo y su ferocidad.'
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
      { name: 'CRÁNEO COMPLETO', code: 'IVPP V 13332', location: 'Mongolia', image: '/dinos/fossil_1.webp' },
      { name: 'GARRA DE HOZ', code: 'Garra distintiva', location: 'Pie del depredador', image: '/dinos/fossil_4.webp' },
      { name: 'ESQUELETO ARTICULADO', code: 'IVPP V 14350', location: 'Mongolia', image: '/dinos/fossil_3.webp' },
      { name: 'HUEVOS FÓSILES', code: 'Otogon Obo', location: 'Mongolia', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'CAZA EN MANADA', description: 'Coordinaban ataques en grupo para cazar presas mucho más grandes.', icon: 'users' },
      { title: 'COMUNICADORES', description: 'Emitían sonidos complejos y señales visuales para coordinarse.', icon: 'radio' },
      { title: 'VISIÓN EXCEPCIONAL', description: 'Tenía una vista aguda, ideal para detectar presas a gran distancia.', icon: 'eye' },
      { title: 'CEREBRO DESARROLLADO', description: 'Uno de los dinosaurios con mejor relación cerebro-tamaño corporal.', icon: 'brain' },
    ],
    era: 'cretacico',
    habitat: 'desierto',
    faqs: [
      { question: '¿Cuánto medía el Velociraptor?', answer: 'Medía cerca de 1.8 a 2 metros de longitud y apenas 0.5 a 0.6 metros de altura en la cadera, pesando unos 15 a 20 kg.' },
      { question: '¿Qué comía el Velociraptor?', answer: 'Era un carnívoro ágil que se alimentaba principalmente de pequeños herbívoros, mamíferos, lagartos y crías de otros dinosaurios.' },
      { question: '¿Cuándo se extinguió el Velociraptor?', answer: 'Vivió a finales del período Cretácico, extinguiéndose hace aproximadamente 71 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Sus restos han sido desenterrados principalmente en el desierto de Gobi, en Mongolia y el norte de China.' }
    ]
  },
  {
    slug: 'triceratops',
    name: 'TRICERATOPS',
    scientificName: 'Triceratops horridus',
    tagline: 'Uno de los dinosaurios herbívoros más icónicos del Cretácico tardío. Su imponente gola ósea y sus tres cuernos lo convirtieron en una fortaleza viviente contra los depredadores.',
    heroImage: '/dinos/triceratops_1779606918531.webp',
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
        'El Triceratops poseía una enorme gola ósea que podría haber usado para defenderse de depredadores como el T-Rex, intimidar a rivales o incluso para regular su temperatura corporal. Sus tres cuernos distintivos le otorgaban un aspecto inconfundible.',
        'Vivía en manadas y se alimentaba de plantas duras y fibrosas, usando su fuerte y afilado pico poderoso para arrancar la dura vegetación de la época. Su mandíbula albergaba baterías de dientes especializados para moler material vegetal.',
        'Su gran cráneo, que podía llegar a medir más de dos metros de longitud, representaba casi un tercio del tamaño total de su cuerpo. A pesar de su apariencia lenta, sus patas musculosas le permitían realizar cargas defensivas efectivas.',
        'Los paleontólogos sugieren que la gola ósea no solo era un escudo, sino también una estructura de exhibición social y de cortejo. Los vasos sanguíneos que la recorrían habrían permitido cambios sutiles de color para comunicarse con otros miembros.',
        'El Triceratops convivió en el mismo tiempo y lugar que el Tyrannosaurus Rex. Las marcas de mordidas sanadas encontradas en cuernos de Triceratops confirman que estos colosos se enfrentaban frecuentemente en duros combates por la supervivencia.'
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
      { name: 'CRÁNEO COMPLETO', code: 'NMMNH P-2089', location: 'Denver, EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'GOLA ÓSEA', code: 'NMMNH P-2089-FR', location: 'Denver, EE. UU.', image: '/dinos/fossil_3.webp' },
      { name: 'CUERNO FRONTAL', code: 'NMMNH P-2089-H1', location: 'Denver, EE. UU.', image: '/dinos/fossil_4.webp' },
      { name: 'HUESO DE PATA', code: 'NMMNH P-2089-L1', location: 'Denver, EE. UU.', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'VIVÍA EN MANADA', description: 'Se han encontrado restos de varios individuos juntos, sugiriendo vidas grupales.', icon: 'users' },
      { title: 'CUERNOS IMPRESIONANTES', description: 'Sus cuernos frontales podían medir hasta 1 metro de longitud.', icon: 'swords' },
      { title: 'PICO PODEROSO', description: 'Su pico de ave era ideal para cortar ramas y plantas muy resistentes.', icon: 'scissors' },
      { title: 'GOLA MULTIFUNCIONAL', description: 'Probablemente la usaba para defensa, exhibición y regulación térmica.', icon: 'shield' },
    ],
    era: 'cretacico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Triceratops?', answer: 'El Triceratops medía entre 8 y 9 metros de longitud, unos 3 metros de altura y pesaba entre 6 y 12 toneladas.' },
      { question: '¿Qué comía el Triceratops?', answer: 'Era un herbívoro que consumía gran cantidad de vegetación baja, helechos, palmeras y plantas leñosas duras.' },
      { question: '¿Cuándo se extinguió el Triceratops?', answer: 'Se extinguió hace 66 millones de años en el evento de extinción masiva al final del Cretácico.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Se han descubierto numerosos esqueletos y cráneos en las cuencas sedimentarias del oeste de Norteamérica (EE. UU. y Canadá).' }
    ]
  },
  {
    slug: 'spinosaurus',
    name: 'SPINOSAURUS',
    scientificName: 'Spinosaurus aegyptiacus',
    tagline: 'El Spinosaurus fue uno de los dinosaurios carnívoros más grandes que jamás haya existido. A diferencia de otros terópodos, estaba perfectamente adaptado para la vida acuática, convirtiéndose en el rey de los ríos.',
    heroImage: '/dinos/spinosaurus_1779606934087.webp',
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
        'El Spinosaurus fue uno de los dinosaurios carnívoros más grandes que jamás haya existido. A diferencia de otros terópodos, estaba perfectamente adaptado para la vida acuática, convirtiéndose en el auténtico rey de los ríos prehistóricos.',
        'Tenía adaptaciones únicas que le permitían cazar en el agua con una eficiencia letal. Su hocico alargado como el de un cocodrilo y sus dientes cónicos eran perfectos para atrapar peces resbaladizos y presas acuáticas de gran tamaño.',
        'Sus poderosas patas traseras palmeadas le daban fuerza en el agua, mientras que su gran vela dorsal pudo haber servido para regular su temperatura o para exhibición territorial. Su cola plana actuaba como una aleta propulsora.',
        'Los ecosistemas fluviales del norte de África en el Cretácico eran hogar de peces gigantes de más de 3 metros, que constituían la base de la dieta del Spinosaurus, aunque también se cree que cazaba pterosaurios y dinosaurios terrestres.',
        'El descubrimiento de nuevos restos en Marruecos ha redefinido nuestra imagen de este gigante, revelando que pasaba la mayor parte de su tiempo sumergido, nadando de forma muy similar a los cocodrilos modernos.'
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
      { name: 'CRÁNEO PARCIAL', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_1.webp' },
      { name: 'DIENTES CÓNICOS', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_4.webp' },
      { name: 'VÉRTEBRAS DORSALES', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_3.webp' },
      { name: 'GARRA CURVA', code: 'MSNM V4047', location: 'Marruecos', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'NADADOR EXPERTO', description: 'Sus patas traseras palmeadas y cola plana le daban propulsión en el agua.', icon: 'droplets' },
      { title: 'HOCICO SENSORIAL', description: 'Su hocico alargado tenía terminaciones para detectar presión en el agua.', icon: 'radar' },
      { title: 'DIETA ESPECIALIZADA', description: 'Se alimentaba principalmente de peces gigantes, pero también cazaba en tierra.', icon: 'fish' },
      { title: 'VELA TÉRMICA', description: 'Su enorme vela dorsal pudo haberle ayudado a regular la temperatura rápidamente.', icon: 'thermometer' },
    ],
    era: 'cretacico',
    habitat: 'oceano',
    faqs: [
      { question: '¿Cuánto medía el Spinosaurus?', answer: 'Alcanzaba entre 15 y 18 metros de longitud y pesaba entre 7 y 20 toneladas, siendo más largo que el T-Rex.' },
      { question: '¿Qué comía el Spinosaurus?', answer: 'Su dieta era principalmente piscívora, alimentándose de peces prehistóricos gigantes, aunque era un depredador oportunista en tierra.' },
      { question: '¿Cuándo se extinguió el Spinosaurus?', answer: 'Vivió durante el Cretácico Superior y se extinguió hace aproximadamente 93 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Los fósiles principales se han encontrado en Egipto, Marruecos, Níger y otros países del norte de África.' }
    ]
  },
  {
    slug: 'brachiosaurus',
    name: 'BRACHIOSAURUS',
    scientificName: 'Brachiosaurus altithorax',
    tagline: 'Uno de los dinosaurios más grandes que jamás haya caminado sobre la Tierra. Su largo cuello y postura erguida le permitían alcanzar la vegetación más alta, convirtiéndolo en un gigante amable de la era Jurásica.',
    heroImage: '/dinos/brachiosaurus_1779606953114.webp',
    heroStats: {
      period: 'Jurásico Superior',
      habitat: 'Llanuras and bosques',
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
        'El Brachiosaurus se distinguía por sus patas delanteras más largas que las traseras y su cuello extremadamente largo, lo que le daba una postura erguida única entre los gigantes saurópodos del período Jurásico.',
        'Vivía en manadas y se alimentaba de las copas de los árboles, ramas y plantas altas que ningún otro herbívoro del ecosistema podía alcanzar. Su metabolismo requería toneladas de comida al día para sostener su enorme peso corporal.',
        'A diferencia de otros saurópodos que mantenían sus cuellos de forma horizontal, el Brachiosaurus lo elevaba de forma casi vertical. Su enorme corazón debía pesar más de una tonelada para bombear sangre con suficiente presión hasta su cabeza.',
        'Sus fosas nasales situadas en la parte superior del cráneo indicaban una adaptación respiratoria compleja. Aunque antes se pensaba que eran para bucear, hoy se sabe que ayudaban a enfriar el cerebro en el cálido clima jurásico.',
        'El gran tamaño del Brachiosaurus adulto era su mejor defensa contra depredadores como el Allosaurus. Los ejemplares completamente desarrollados no tenían enemigos naturales debido a su colosal volumen y fuerza destructiva.'
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
      { name: 'CRÁNEO PARCIAL', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'VÉRTEBRAS CERVICALES', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_3.webp' },
      { name: 'FÉMUR IZQUIERDO', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_2.webp' },
      { name: 'COSTILLAS GIGANTES', code: 'FMNH P 25107', location: 'Colorado, EE. UU.', image: '/dinos/fossil_4.webp' },
    ],
    features: [
      { title: 'CORAZÓN ENORME', description: 'Su corazón podía pesar más de 1 tonelada para bombear sangre a su cerebro.', icon: 'heart' },
      { title: 'RESPIRACIÓN EFICIENTE', description: 'Tenía un sistema respiratorio adaptado para mantener su inmenso cuerpo.', icon: 'wind' },
      { title: 'ALCANCE IMPRESIONANTE', description: 'Su cuello de grúa le permitía alcanzar hojas a más de 12 metros de altura.', icon: 'move-up' },
      { title: 'MANADAS PACÍFICAS', description: 'Se han encontrado evidencias de que viajaban en grandes manadas protectoras.', icon: 'users' },
    ],
    era: 'jurasico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Brachiosaurus?', answer: 'Medía unos 22 a 26 metros de longitud y su cabeza se elevaba hasta los 12 o 16 metros de altura.' },
      { question: '¿Qué comía el Brachiosaurus?', answer: 'Era un herbívoro de altura, alimentándose de coníferas, cícadas y helechos gigantes de las copas de los árboles.' },
      { question: '¿Cuándo se extinguió el Brachiosaurus?', answer: 'Vivió a finales del período Jurásico, extinguiéndose hace unos 150 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Sus restos se han recuperado principalmente en la Formación Morrison en el oeste de América del Norte (Colorado, Utah, Wyoming).' }
    ]
  },
  {
    slug: 'pteranodon',
    name: 'PTERANODON',
    scientificName: 'Pteranodon longiceps',
    tagline: 'El Pteranodon fue uno de los reptiles voladores más grandes que jamás haya existido. Dominaba los cielos del Cretácico con su enorme envergadura y su increíble capacidad de vuelo sobre océanos y continentes.',
    heroImage: '/dinos/pteranodon_1779606968978.webp',
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
        'El Pteranodon fue uno de los reptiles voladores más grandes que jamás haya existido. Dominaba los cielos del Cretácico con su enorme envergadura y su increíble capacidad de vuelo sobre océanos y acantilados continentales.',
        'Tenía una de las envergaduras más grandes del reino animal. Su cráneo alargado y sin dientes estaba diseñado para pescar hábilmente en la superficie del agua, tragando presas enteras como las aves marinas modernas.',
        'Sus alas, formadas por una fuerte membrana de piel y sostenidas por un solo dedo alargado, le permitían planear durante largos períodos aprovechando las corrientes de aire térmico sobre el gran mar interior de Norteamérica.',
        'La cresta en la parte posterior de su cabeza, que variaba de tamaño según el género y la madurez, actuaba como un timón para estabilizar el vuelo y también jugaba un papel crucial en el cortejo visual de la especie.',
        'Aunque compartía el mundo con los dinosaurios, el Pteranodon era un pterosaurio (reptil volador), no un dinosaurio. Sus adaptaciones esqueléticas ultraligeras con huesos neumáticos huecos eran maravillas de la ingeniería biológica.'
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
      { name: 'CRÁNEO COMPLETO', code: 'YPM 1923', location: 'Kansas, EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'ESQUELETO ARTICULADO', code: 'YPM 2281', location: 'Kansas, EE. UU.', image: '/dinos/fossil_3.webp' },
      { name: 'CRESTA CRANEAL', code: 'YPM 1923', location: 'Kansas, EE. UU.', image: '/dinos/fossil_4.webp' },
      { name: 'HUESOS DEL ALA', code: 'YPM 2281', location: 'Kansas, EE. UU.', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'VUELO EFICIENTE', description: 'Podía planear cientos de kilómetros aprovechando las corrientes oceánicas.', icon: 'wind' },
      { title: 'PESCADOR EXPERTO', description: 'Su pico hidrodinámico le permitía atrapar peces en picada sin perder velocidad.', icon: 'fish' },
      { title: 'HUESOS LIGEROS', description: 'Sus huesos eran completamente huecos, dándole ligereza sin perder estructura.', icon: 'feather' },
      { title: 'VISIÓN AGUDA', description: 'Sus grandes ojos le daban una vista excelente para cazar peces desde las alturas.', icon: 'eye' },
    ],
    era: 'cretacico',
    habitat: 'oceano',
    faqs: [
      { question: '¿Cuánto medía la envergadura del Pteranodon?', answer: 'La envergadura de sus alas oscilaba entre los 6 y 8 metros, y su cuerpo medía alrededor de 1.5 a 2 metros de largo.' },
      { question: '¿Qué comía el Pteranodon?', answer: 'Era piscívoro, alimentándose casi exclusivamente de peces y pequeños moluscos que atrapaba en la superficie marina.' },
      { question: '¿Cuándo se extinguió el Pteranodon?', answer: 'Vivió a finales del período Cretácico, desapareciendo hace aproximadamente 85 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Se han descubierto miles de ejemplares en los depósitos de tiza de Kansas y otras zonas de las Grandes Llanuras de EE. UU.' }
    ]
  },
  {
    slug: 'argentinosaurus',
    name: 'ARGENTINOSAURUS',
    scientificName: 'Argentinosaurus huinculensis',
    tagline: 'El gigante de gigantes. El dinosaurio más grande conocido por la ciencia, un titanosaurio colosal que habitó lo que hoy es Argentina durante el Cretácico Superior.',
    heroImage: '/dinos/argentinosaurus_spotlight.webp',
    heroStats: {
      period: 'Cretácico Superior',
      habitat: 'Llanuras y bosques fluviales',
      diet: 'Herbívoro',
      discovered: '1987'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Reptil de Argentina"' },
      { label: 'LONGITUD', value: '30 - 35 m' },
      { label: 'ALTURA', value: '15 - 20 m' },
      { label: 'PESO', value: '70 - 90 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 8 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '70 - 80 años' },
    ],
    content: {
      subtitle: 'EL TITÁN MÁS COLOSAL DE LA HISTORIA',
      paragraphs: [
        'El Argentinosaurus representa la cúspide del gigantismo terrestre. Este titanosaurio colosal habitó las tierras de la Patagonia hace aproximadamente 95 millones de años, asombrando a la comunidad científica por sus dimensiones descomunales.',
        'Debido a su colosal peso, estimado entre 70 y 90 toneladas, el Argentinosaurus se desplazaba a velocidades muy lentas sobre potentes extremidades columnares especialmente estructuradas para soportar la constante presión de la gravedad.',
        'Su alimentación consistía en cantidades astronómicas de vegetación. Se calcula que un individuo adulto necesitaba ingerir cientos de kilogramos de hojas y ramas al día para mantener activo su masivo metabolismo.',
        'Sus vértebras eran tan grandes que una sola de ellas medía más de 1.5 metros de altura. Estas estructuras óseas poseían complejos sistemas de soporte neumático para aligerar el peso sin sacrificar resistencia estructural.',
        'Los nidos y huevos fosilizados descubiertos en la región sugieren que, a pesar de su tamaño adulto, las crías nacían siendo extremadamente pequeñas y vulnerables, creciendo a un ritmo vertiginoso durante sus primeros años de vida.'
      ],
      mapLocation: 'Patagonia, Argentina'
    },
    videoText: 'Visualiza las dimensiones colosales del Argentinosaurus en comparación con la fauna del Cretácico.',
    attributeBars: [
      { label: 'TAMAÑO', value: 10 },
      { label: 'DEFENSA', value: 9 },
      { label: 'VELOCIDAD', value: 1 },
      { label: 'INTELIGENCIA', value: 3 },
      { label: 'AGRESIVIDAD', value: 2 },
      { label: 'RESISTENCIA', value: 10 },
    ],
    fossils: [
      { name: 'VÉRTEBRA DORSAL', code: 'MCF-PVPH-1', location: 'Plaza Huincul, Argentina', image: '/dinos/fossil_3.webp' },
      { name: 'FÉMUR COMPLETO', code: 'MCF-PVPH-2', location: 'Neuquén, Argentina', image: '/dinos/fossil_2.webp' },
      { name: 'COSTILLA GIGANTE', code: 'MCF-PVPH-3', location: 'Plaza Huincul, Argentina', image: '/dinos/fossil_4.webp' },
      { name: 'FIBULA DETALLADA', code: 'MCF-PVPH-4', location: 'Patagonia, Argentina', image: '/dinos/fossil_1.webp' },
    ],
    features: [
      { title: 'TAMAÑO TITÁNICO', description: 'El animal terrestre más grande conocido, un auténtico rascacielos de carne y hueso.', icon: 'move-up' },
      { title: 'ESTRUCTURA DE COLUMNA', description: 'Extremidades gigantescas en forma de columna para soportar su inmenso peso corporal.', icon: 'shield' },
      { title: 'SANGRE A PRESIÓN', description: 'Un sistema cardiovascular superpotente impulsado por un corazón masivo.', icon: 'heart' },
      { title: 'MIGRACIÓN COLECTIVA', description: 'Se desplazaba en manadas monumentales moldeando el paisaje patagónico a su paso.', icon: 'users' },
    ],
    era: 'cretacico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Argentinosaurus?', answer: 'Medía entre 30 y 35 metros de longitud y se calcula que tenía un peso de 70 a 90 toneladas.' },
      { question: '¿Qué comía el Argentinosaurus?', answer: 'Era herbívoro, alimentándose de hojas de coníferas, palmeras y otra vegetación del Cretácico.' },
      { question: '¿Cuándo se extinguió el Argentinosaurus?', answer: 'Vivió hace unos 95 millones de años a mediados del período Cretácico.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Sus primeros y más importantes fósiles fueron desenterrados en la provincia del Neuquén, en la Patagonia Argentina.' }
    ]
  },
  {
    slug: 'stegosaurus',
    name: 'STEGOSAURUS',
    scientificName: 'Stegosaurus stenops',
    tagline: 'El acorazado de placas. Un herbívoro icónico del período Jurásico, famoso por las placas óseas alineadas en su lomo y su cola espinosa lista para la defensa.',
    heroImage: '/dinos/stegosaurus_1779606982968.webp',
    heroStats: {
      period: 'Jurásico Superior',
      habitat: 'Llanuras y bosques abiertos',
      diet: 'Herbívoro',
      discovered: '1877'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Lagarto con tejado"' },
      { label: 'LONGITUD', value: '7 - 9 m' },
      { label: 'ALTURA', value: '4 m' },
      { label: 'PESO', value: '3 - 5 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 15 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '25 - 30 años' },
    ],
    content: {
      subtitle: 'FORTALEZA VIVIENTE DEL JURÁSICO',
      paragraphs: [
        'El Stegosaurus es uno de los dinosaurios más reconocibles gracias a la doble fila de placas óseas en forma de cometa alineadas a lo largo de su lomo y las cuatro espinas afiladas en el extremo de su cola flexible.',
        'Estas placas óseas no estaban unidas directamente al esqueleto, sino que crecían de la piel. Aunque inicialmente se pensaba que servían como armadura protectora, hoy se cree que regulaban la temperatura o atraían parejas.',
        'Su cola espinosa, conocida técnicamente como "thagomizer", era un arma defensiva extremadamente letal. El Stegosaurus balanceaba su cola con fuerza lateral para incrustar las espinas en depredadores como el Allosaurus.',
        'A pesar de su gran tamaño corporal, el Stegosaurus tenía un cerebro notablemente pequeño, del tamaño aproximado de una nuez, lo que indica un comportamiento impulsado principalmente por instintos primarios de supervivencia.',
        'Se alimentaba de vegetación a ras de suelo debido a su postura baja. Al no tener dientes frontales, utilizaba su pico córneo para cortar brotes tiernos y los digería lentamente en su enorme aparato digestivo.'
      ],
      mapLocation: 'Norteamérica (Estados Unidos) y Europa (Portugal)'
    },
    videoText: 'Observa la estructura ósea del Stegosaurus y cómo utilizaba sus placas y espinas.',
    attributeBars: [
      { label: 'DEFENSA', value: 9 },
      { label: 'FUERZA', value: 7 },
      { label: 'VELOCIDAD', value: 3 },
      { label: 'INTELIGENCIA', value: 2 },
      { label: 'AGRESIVIDAD', value: 4 },
      { label: 'RESISTENCIA', value: 8 },
    ],
    fossils: [
      { name: 'ESQUELETO COMPLETO', code: 'NHMUK PV R36730 (Sophie)', location: 'Londres, Reino Unido', image: '/dinos/fossil_3.webp' },
      { name: 'PLACA EXCEPCIONAL', code: 'USNM 4934', location: 'Washington D.C., EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'ESPINAS DE COLA', code: 'YPM 1853', location: 'Utah, EE. UU.', image: '/dinos/fossil_4.webp' },
      { name: 'MANDÍBULA CON DIENTES', code: 'USNM 4936', location: 'Colorado, EE. UU.', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'PLACAS TÉRMICAS', description: 'Placas que captaban o disipaban el calor según su orientación al sol.', icon: 'thermometer' },
      { title: 'COLA DE THAGOMIZER', description: 'Cuatro espinas óseas de hasta 90 cm de longitud para defenderse de atacantes.', icon: 'swords' },
      { title: 'POSTURA INCLINADA', description: 'Patas delanteras cortas que mantenían su cabeza cerca del suelo para ramonear.', icon: 'footprints' },
      { title: 'CEREBRO COMPACTO', description: 'Un cerebro diminuto en proporción a su cuerpo, compensado por excelentes reflejos.', icon: 'brain' },
    ],
    era: 'jurasico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Stegosaurus?', answer: 'El Stegosaurus medía entre 7 y 9 metros de longitud y unos 4 metros de altura incluyendo las placas.' },
      { question: '¿Qué comía el Stegosaurus?', answer: 'Era un herbívoro que se alimentaba de plantas bajas como helechos, musgos, colas de caballo y frutas caídas.' },
      { question: '¿Cuándo se extinguió el Stegosaurus?', answer: 'Vivió a finales del período Jurásico, hace aproximadamente 150 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Sus fósiles se han descubierto principalmente en el oeste de Estados Unidos, y recientemente en Portugal.' }
    ]
  },
  {
    slug: 'ankylosaurus',
    name: 'ANKYLOSAURUS',
    scientificName: 'Ankylosaurus magniventris',
    tagline: 'El tanque prehistórico. Un dinosaurio herbívoro acorazado con una gruesa armadura de placas óseas y una maza pesada en su cola capaz de fracturar los huesos de los depredadores más grandes.',
    heroImage: '/dinos/ankylosaurus_spotlight.webp',
    heroStats: {
      period: 'Cretácico Tardío',
      habitat: 'Bosques y llanuras costeras',
      diet: 'Herbívoro',
      discovered: '1906'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Lagarto acorazado"' },
      { label: 'LONGITUD', value: '6 - 8 m' },
      { label: 'ALTURA', value: '1.7 - 2 m' },
      { label: 'PESO', value: '4 - 8 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 10 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '25 - 35 años' },
    ],
    content: {
      subtitle: 'EL TANQUE IMPENETRABLE DEL CRETÁCICO',
      paragraphs: [
        'El Ankylosaurus es considerado el dinosaurio acorazado por excelencia. Vivió en los densos bosques de América del Norte a finales del período Cretácico, siendo contemporáneo de depredadores imponentes como el Tyrannosaurus Rex.',
        'Su lomo estaba cubierto por una densa coraza de osteodermos (placas de hueso incrustadas en la piel) y grandes espinas laterales que formaban un escudo impenetrable, protegiendo sus órganos vitales de cualquier ataque.',
        'Su característica más devastadora era la maza ósea situada al final de su cola. Compuesta por varios osteodermos fusionados y controlada por fuertes músculos, podía balancearse con la fuerza suficiente para romper las piernas de un T-Rex.',
        'Su punto débil era el vientre, el cual carecía de armadura ósea. Para protegerse, el Ankylosaurus se agachaba pegándose por completo al suelo, presentando únicamente su caparazón espinoso a los atacantes.',
        'Poseía un amplio hocico provisto de un pico sin dientes con el que arrancaba vegetación variada, y un gran estómago con cámaras de fermentación que le permitía procesar plantas de muy baja calidad nutricional.'
      ],
      mapLocation: 'Norteamérica (Estados Unidos y Canadá)'
    },
    videoText: 'Mira una reconstrucción animada de la maza de la cola del Ankylosaurus en acción.',
    attributeBars: [
      { label: 'DEFENSA', value: 10 },
      { label: 'FUERZA', value: 8 },
      { label: 'VELOCIDAD', value: 2 },
      { label: 'INTELIGENCIA', value: 3 },
      { label: 'AGRESIVIDAD', value: 5 },
      { label: 'RESISTENCIA', value: 9 },
    ],
    fossils: [
      { name: 'CRÁNEO ACORAZADO', code: 'AMNH 5895', location: 'Montana, EE. UU.', image: '/dinos/fossil_1.webp' },
      { name: 'MAZA DE LA COLA', code: 'AMNH 5214', location: 'Alberta, Canadá', image: '/dinos/fossil_4.webp' },
      { name: 'PLACAS DORSALES', code: 'NMC 8880', location: 'Alberta, Canadá', image: '/dinos/fossil_3.webp' },
      { name: 'ESQUELETO PARCIAL', code: 'AMNH 5241', location: 'Wyoming, EE. UU.', image: '/dinos/fossil_2.webp' },
    ],
    features: [
      { title: 'ARMADURA DORSAL', description: 'Osteodermos macizos fusionados en la piel que le daban una protección similar a la de un tanque.', icon: 'shield' },
      { title: 'MAZA TRITURADORA', description: 'Una protuberancia ósea al final de su cola capaz de asestar golpes óseos fracturantes.', icon: 'swords' },
      { title: 'POSTURA ULTRA BAJA', description: 'Centro de gravedad bajo para evitar que los depredadores le dieran la vuelta.', icon: 'footprints' },
      { title: 'DISEÑO COMPACTO', description: 'Un cuerpo ancho y robusto sostenido por cuatro patas cortas y fuertes.', icon: 'shield' },
    ],
    era: 'cretacico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Cuánto medía el Ankylosaurus?', answer: 'El Ankylosaurus medía entre 6 y 8 metros de longitud y tenía una altura baja de unos 1.7 a 2 metros.' },
      { question: '¿Qué comía el Ankylosaurus?', answer: 'Era herbívoro, alimentándose de plantas bajas, arbustos, helechos y frutos caídos.' },
      { question: '¿Cuándo se extinguió el Ankylosaurus?', answer: 'Se extinguió al final del período Cretácico, hace unos 66 millones de años.' },
      { question: '¿Dónde se encontraron sus fósiles?', answer: 'Sus fósiles han sido recolectados en formaciones geológicas de Montana (EE. UU.) y Alberta (Canadá).' }
    ]
  },
  {
    slug: 'coelophysis',
    name: 'COELOPHYSIS',
    scientificName: 'Coelophysis bauri',
    tagline: 'Uno de los primeros dinosaurios cazadores. Un terópodo ágil y ligero del Triásico que se adaptó perfectamente a los duros desiertos prehistóricos.',
    heroImage: '/dinos/coelophysis.webp',
    heroStats: {
      period: 'Triásico Tardío',
      habitat: 'Desiertos y llanuras secas',
      diet: 'Carnívoro',
      discovered: '1881'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Forma hueca"' },
      { label: 'LONGITUD', value: '2.5 - 3 m' },
      { label: 'ALTURA', value: '1 m' },
      { label: 'PESO', value: '15 - 20 kg' },
      { label: 'VELOCIDAD', value: 'Hasta 40 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '10 - 15 años' }
    ],
    content: {
      subtitle: 'SOBRE EL COELOPHYSIS',
      paragraphs: [
        'El Coelophysis fue uno de los dinosaurios más antiguos que se conocen, vagando por los desiertos del Triásico Tardío. Su nombre hace referencia a los huesos huecos de sus patas, una característica que le proporcionaba una ligereza excepcional y lo convertía en un corredor sumamente veloz.',
        'A diferencia de los grandes depredadores que aparecerían millones de años después, el Coelophysis dependía de su velocidad y agilidad para cazar pequeños reptiles y mamíferos incipientes, utilizando sus agudos dientes aserrados para atrapar y sujetar a sus escurridizas presas en un entorno muy competitivo y seco.'
      ],
      mapLocation: 'Norteamérica, formaciones del suroeste de EE. UU.'
    },
    videoText: 'Los densos yacimientos de fósiles sugieren que estos rápidos depredadores del Triásico pudieron haber vivido y cazado en manadas numerosas.',
    attributeBars: [
      { label: 'FUERZA', value: 30 },
      { label: 'INTELIGENCIA', value: 50 },
      { label: 'VELOCIDAD', value: 85 },
      { label: 'AGILIDAD', value: 90 },
      { label: 'DEFENSA', value: 20 },
      { label: 'PELIGRO', value: 40 }
    ],
    fossils: [
      { name: 'ESQUELETO COMPLETO', code: 'AMNH 7224', location: 'Ghost Ranch, Nuevo México', image: '/dinos/fossil_3.webp' },
      { name: 'CRÁNEO INTACTO', code: 'NMMNH P-42200', location: 'Ghost Ranch, Nuevo México', image: '/dinos/fossil_1.webp' }
    ],
    features: [
      { title: 'HUESOS HUECOS', description: 'Sus huesos eran huecos como los de las aves modernas, reduciendo su peso drásticamente.', icon: 'bone' },
      { title: 'VISIÓN BINOCULAR', description: 'Sus grandes cuencas oculares apuntaban hacia el frente, otorgándole excelente visión tridimensional.', icon: 'scan-face' },
      { title: 'VELOCISTA', description: 'Patas traseras alargadas perfectamente adaptadas para la carrera sostenida.', icon: 'wind' },
      { title: 'CAZADOR DE GRUPO', description: 'Acumulaciones de fósiles indican un posible comportamiento gregario.', icon: 'users' }
    ],
    era: 'triasico',
    habitat: 'desierto',
    faqs: [
      { question: '¿Cuándo vivió el Coelophysis?', answer: 'Vivió durante el período Triásico Tardío, hace aproximadamente entre 216 y 200 millones de años.' },
      { question: '¿Por qué es famoso el Coelophysis?', answer: 'Es uno de los primeros dinosaurios mejor documentados gracias al asombroso yacimiento de Ghost Ranch, donde se encontraron cientos de esqueletos juntos.' }
    ]
  },
  {
    slug: 'carnotaurus',
    name: 'CARNOTAURUS',
    scientificName: 'Carnotaurus sastrei',
    tagline: 'El toro carnívoro del sur. Un depredador del Cretácico Tardío reconocible por sus inusuales cuernos y un cráneo sumamente robusto.',
    heroImage: '/dinos/carnotaurus.webp',
    heroStats: {
      period: 'Cretácico Tardío',
      habitat: 'Estuarios y planicies',
      diet: 'Carnívoro',
      discovered: '1984'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Toro carnívoro"' },
      { label: 'LONGITUD', value: '7.5 - 9 m' },
      { label: 'ALTURA', value: '3 m' },
      { label: 'PESO', value: '1.3 - 2 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 48 - 56 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '20 - 25 años' }
    ],
    content: {
      subtitle: 'SOBRE EL CARNOTAURUS',
      paragraphs: [
        'El Carnotaurus es uno de los terópodos más peculiares jamás descubiertos, habitando la actual Patagonia argentina durante el Cretácico Tardío. Su característica más distintiva son los gruesos cuernos óseos ubicados justo por encima de sus ojos, que le valieron su nombre de "toro carnívoro". Estos cuernos probablemente se utilizaban en exhibiciones o combates rituales entre machos.',
        'A nivel anatómico, el Carnotaurus presentaba una curiosa combinación: unas patas traseras excepcionalmente musculosas que lo convertían en uno de los grandes terópodos más veloces, contrastadas con unos brazos tan reducidos que eran incluso proporcionalmente más pequeños que los del T-Rex. Aunque forma parte de nuestra exhibición de zonas volcánicas como categoría narrativa, en realidad recorría llanuras y estuarios cálidos, siendo un depredador dominante de la región.'
      ],
      mapLocation: 'Patagonia, Sur de Argentina'
    },
    videoText: 'El Carnotaurus poseía impresionantes adaptaciones para la velocidad en línea recta, siendo capaz de alcanzar a las presas más veloces del entorno.',
    attributeBars: [
      { label: 'FUERZA', value: 75 },
      { label: 'INTELIGENCIA', value: 65 },
      { label: 'VELOCIDAD', value: 90 },
      { label: 'AGILIDAD', value: 60 },
      { label: 'DEFENSA', value: 50 },
      { label: 'PELIGRO', value: 85 }
    ],
    fossils: [
      { name: 'CRÁNEO Y CUERNOS', code: 'MACN-CH 894', location: 'Chubut, Argentina', image: '/dinos/fossil_1.webp' },
      { name: 'IMPRESIÓN DE PIEL', code: 'MACN-CH 894', location: 'Chubut, Argentina', image: '/dinos/fossil_4.webp' }
    ],
    features: [
      { title: 'CUERNOS ÓSEOS', description: 'Dos gruesos cuernos frontales, únicos entre los grandes terópodos conocidos.', icon: 'swords' },
      { title: 'PIEL CON ESCUDOS', description: 'Conservamos impresiones fósiles que muestran su piel cubierta de escamas cónicas y bultos óseos.', icon: 'shield' },
      { title: 'VELOCIDAD EXTREMA', description: 'Poderosas patas traseras ancladas a una cola muy rígida le permitían velocidades explosivas.', icon: 'wind' },
      { title: 'BRAZOS VESTIGIALES', description: 'Brazos diminutos de cuatro dedos que prácticamente no tenían ninguna función.', icon: 'bone' }
    ],
    era: 'cretacico',
    habitat: 'volcan',
    faqs: [
      { question: '¿Para qué usaba sus cuernos el Carnotaurus?', answer: 'Se cree que no eran armas para cazar, sino que se usaban para exhibición o para empujarse en combates rituales con otros Carnotaurus.' },
      { question: '¿Vivía realmente cerca de volcanes?', answer: 'No hay evidencia científica concluyente de ello. En esta exhibición lo hemos asociado a esta categoría narrativa debido a su aspecto, pero se sabe que habitaba en estuarios y zonas de llanura.' }
    ]
  },
  {
    slug: 'parasaurolophus',
    name: 'PARASAUROLOPHUS',
    scientificName: 'Parasaurolophus walkeri',
    tagline: 'El hadrosaurio de la cresta resonante. Un majestuoso herbívoro del Cretácico reconocible por su largo tubo óseo craneal, utilizado para comunicarse a grandes distancias.',
    heroImage: '/dinos/parasaurolophus.webp',
    heroStats: {
      period: 'Cretácico Superior',
      habitat: 'Llanuras y bosques',
      diet: 'Herbívoro',
      discovered: '1920'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Cercano al lagarto crestado"' },
      { label: 'LONGITUD', value: '9.5 - 10 m' },
      { label: 'ALTURA', value: '4 - 5 m' },
      { label: 'PESO', value: '2.5 - 3 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 40 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '20 - 25 años' }
    ],
    content: {
      subtitle: 'SOBRE EL PARASAUROLOPHUS',
      paragraphs: [
        'El Parasaurolophus es uno de los dinosaurios más inconfundibles gracias a su espectacular cresta tubular, que se proyectaba hacia atrás desde su cráneo. Esta estructura no solo servía como atractivo visual, sino que actuaba como una cámara de resonancia acústica, permitiéndole emitir sonidos profundos, similares a un trombón, para comunicarse con su manada a través de kilómetros de densos bosques.',
        'Como hadrosaurio o dinosaurio "pico de pato", poseía un pico córneo sin dientes en la parte frontal y cientos de dientes trituradores en las mejillas, perfectos para masticar vegetación dura como agujas de pino y ramas. Caminaba habitualmente sobre cuatro patas para pastar pacíficamente, pero era capaz de erguirse y correr sobre dos patas para huir velozmente de depredadores como el T-Rex o el Albertosaurus.'
      ],
      mapLocation: 'Norteamérica, formaciones de Alberta y Nuevo México'
    },
    videoText: 'Los sonidos producidos por la cresta del Parasaurolophus podrían haber variado de tono según el tamaño y la edad del individuo.',
    attributeBars: [
      { label: 'FUERZA', value: 45 },
      { label: 'INTELIGENCIA', value: 60 },
      { label: 'VELOCIDAD', value: 55 },
      { label: 'AGILIDAD', value: 40 },
      { label: 'DEFENSA', value: 30 },
      { label: 'PELIGRO', value: 20 }
    ],
    fossils: [
      { name: 'ESQUELETO PARCIAL', code: 'ROM 768', location: 'Alberta, Canadá', image: '/dinos/fossil_3.webp' },
      { name: 'CRÁNEO COMPLETO', code: 'NMMNH P-25100', location: 'Nuevo México, EE. UU.', image: '/dinos/fossil_1.webp' }
    ],
    features: [
      { title: 'CRESTA RESONANTE', description: 'Una cámara acústica tubular conectada a sus conductos nasales para comunicación de largo alcance.', icon: 'bone' },
      { title: 'PICO DE PATO', description: 'Mandíbula adaptada para arrancar vegetación gruesa y hojas de los árboles.', icon: 'leaf' },
      { title: 'BÍPEDO FACULTATIVO', description: 'Podía correr en dos patas para aumentar su velocidad al huir de depredadores.', icon: 'footprints' },
      { title: 'BATERÍAS DENTALES', description: 'Cientos de dientes compactados en sus mejillas para masticación continua.', icon: 'shield' }
    ],
    era: 'cretacico',
    habitat: 'jungla',
    faqs: [
      { question: '¿Para qué servía su gran cresta?', answer: 'La teoría más aceptada es que funcionaba como una cámara de resonancia para emitir llamadas graves, además de un distintivo visual para reconocimiento entre individuos.' },
      { question: '¿El Parasaurolophus era acuático?', answer: 'Durante mucho tiempo se creyó erróneamente que usaba su cresta como esnórquel, pero hoy se sabe que era un animal completamente terrestre adaptado a ecosistemas boscosos.' }
    ]
  },
  {
    slug: 'allosaurus',
    name: 'ALLOSAURUS',
    scientificName: 'Allosaurus fragilis',
    tagline: 'El león del Jurásico. Un depredador ápice dominante, rápido y letal que aterrorizó las llanuras prehistóricas millones de años antes de la llegada del T-Rex.',
    heroImage: '/dinos/allosaurus.webp',
    heroStats: {
      period: 'Jurásico Superior',
      habitat: 'Llanuras semiáridas',
      diet: 'Carnívoro',
      discovered: '1877'
    },
    sideStats: [
      { label: 'NOMBRE SIGNIFICADO', value: '"Lagarto diferente"' },
      { label: 'LONGITUD', value: '8.5 - 9.5 m' },
      { label: 'ALTURA', value: '3 m' },
      { label: 'PESO', value: '1.5 - 2 toneladas' },
      { label: 'VELOCIDAD', value: 'Hasta 35 km/h' },
      { label: 'EXPECTATIVA DE VIDA', value: '25 - 28 años' }
    ],
    content: {
      subtitle: 'SOBRE EL ALLOSAURUS',
      paragraphs: [
        'El Allosaurus reinó indiscutiblemente como el depredador dominante del período Jurásico Superior en América del Norte. Con un cuerpo más ligero y esbelto que el posterior T-Rex, el Allosaurus dependía de emboscadas y ataques rápidos para abatir enormes saurópodos o esquivar las mortíferas púas de los estegosaurios. Sus brazos, provistos de tres formidables garras, eran proporcionalmente más grandes y funcionales que los de muchos grandes terópodos, lo que le otorgaba una ventaja letal en el combate cuerpo a cuerpo.',
        'Curiosamente, su fuerza de mordida era más débil de lo que su tamaño sugeriría. Sin embargo, su cráneo podía soportar inmensas presiones; los paleontólogos teorizan que usaba su mandíbula superior como un hacha, dejándola caer con tremenda fuerza muscular desde el cuello para infligir daños devastadores y desangrar a sus presas masivas.'
      ],
      mapLocation: 'Norteamérica, Formación Morrison (Estados Unidos)'
    },
    videoText: 'Su amplio rango de apertura mandibular le permitía asestar ataques con la mandíbula superior como si fuera un hacha dentada.',
    attributeBars: [
      { label: 'FUERZA', value: 80 },
      { label: 'INTELIGENCIA', value: 65 },
      { label: 'VELOCIDAD', value: 75 },
      { label: 'AGILIDAD', value: 70 },
      { label: 'DEFENSA', value: 50 },
      { label: 'PELIGRO', value: 90 }
    ],
    fossils: [
      { name: 'ESQUELETO "BIG AL"', code: 'MOR 693', location: 'Wyoming, EE. UU.', image: '/dinos/fossil_3.webp' },
      { name: 'CRÁNEO INTACTO', code: 'UUVP', location: 'Utah, EE. UU.', image: '/dinos/fossil_1.webp' }
    ],
    features: [
      { title: 'GARRAS TRIPLES', description: 'Manos grandes con tres garras afiladas en cada una, ideales para agarrar presas grandes.', icon: 'swords' },
      { title: 'CRÁNEO LIGERO', description: 'Un cráneo con muchas cavidades para reducir su peso, permitiendo movimientos rápidos de cuello.', icon: 'skull' },
      { title: 'ATAQUE DE HACHA', description: 'Fuertes músculos en el cuello que le permitían golpear con su mandíbula superior abierta de par en par.', icon: 'wind' },
      { title: 'CAZADOR DE MANADA', description: 'Evidencia fósil sugiere posibles agrupamientos para acorralar a grandes saurópodos herbívoros.', icon: 'scan-face' }
    ],
    era: 'jurasico',
    habitat: 'desierto',
    faqs: [
      { question: '¿Quién ganaría, un T-Rex o un Allosaurus?', answer: 'Estos animales nunca se encontraron; el Allosaurus vivió y se extinguió millones de años antes de que el T-Rex evolucionara. Además, el T-Rex era sustancialmente más grande y fuerte.' },
      { question: '¿Por qué se llama lagarto diferente?', answer: 'El término "Allosaurus" se deriva de la extraña forma de sus vértebras cóncavas, que eran "diferentes" de cualquier otro dinosaurio conocido en el momento de su descubrimiento en 1877.' }
    ]
  }
];

export const getDinosaurBySlug = (slug: string) => dinosaurs.find((d) => d.slug === slug);
