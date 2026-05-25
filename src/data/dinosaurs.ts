export interface Dinosaur {
  slug: string
  name: string
  subtitle: string
  era: string
  type: string
  description: string
  longDescription: string
  stats: { label: string; value: string }[]
  keywords: string
  metaDescription: string
  image: string
  facts: string[]
}

export const dinosaurs: Dinosaur[] = [
  {
    slug: 'tyrannosaurus-rex',
    name: 'Tyrannosaurus Rex',
    subtitle: 'El último rey del Cretácico',
    era: 'Cretácico Tardío · 68–66 Ma',
    type: 'Theropoda · Depredador Apex',
    description: 'La mordida más devastadora en la historia terrestre. 57.000 newtons de fuerza pura.',
    longDescription: `El Tyrannosaurus Rex fue el depredador más poderoso que jamás pisó la Tierra. Con hasta 12 metros de longitud y 8 toneladas de peso, dominó los ecosistemas del Cretácico Tardío durante casi 3 millones de años. Su mordida de 57.000 newtons podía triturar hueso como arcilla. Sus pequeños brazos, lejos de ser inútiles, eran extraordinariamente poderosos. Estudios recientes sugieren que poseía labios escamosos que cubrían sus dientes. Vivió en lo que hoy es Norteamérica occidental.`,
    stats: [
      { label: 'Longitud', value: '12 metros' },
      { label: 'Peso', value: '8 toneladas' },
      { label: 'Mordida', value: '57.000 N' },
      { label: 'Velocidad', value: '20 km/h' },
      { label: 'Período', value: '68–66 Ma' },
      { label: 'Hábitat', value: 'Norteamérica' },
    ],
    keywords: 'tyrannosaurus rex, t-rex, dinosaurio carnívoro, cretácico, depredador, características tyrannosaurus rex',
    metaDescription: 'Todo sobre el Tyrannosaurus Rex: características, tamaño, alimentación y curiosidades del dinosaurio carnívoro más famoso del Cretácico.',
    image: '/dinos/trex.jpg',
    facts: [
      'Su nombre significa "rey de los lagartos tiranos"',
      'Tenía una visión binocular mejor que los halcones modernos',
      'Podía comer hasta 230 kg de carne en un solo bocado',
      'Sus huesos tenían cavidades de aire como los pájaros modernos',
      'Los científicos creen que podía vivir hasta 28 años',
    ]
  },
  {
    slug: 'velociraptor',
    name: 'Velociraptor',
    subtitle: 'Inteligencia letal en forma pura',
    era: 'Cretácico · 75–71 Ma',
    type: 'Dromaeosauridae · Cazador',
    description: 'Cubierto de plumas. Coordinación táctica aterradora.',
    longDescription: `Contrario a su representación en el cine, el Velociraptor real era del tamaño de un pavo grande — apenas 1.8 metros de largo y 15 kg de peso. Pero lo que le faltaba en tamaño lo compensaba con inteligencia. Su cerebro era proporcionalmente más grande que el de casi cualquier otro dinosaurio. Estaba completamente cubierto de plumas y cazaba en manadas con coordinación táctica. Su garra retráctil en forma de hoz podía perforar la tráquea de su presa con precisión quirúrgica.`,
    stats: [
      { label: 'Longitud', value: '1.8 metros' },
      { label: 'Peso', value: '15 kg' },
      { label: 'Velocidad', value: '25 km/h' },
      { label: 'Garra', value: '6.5 cm' },
      { label: 'Período', value: '75–71 Ma' },
      { label: 'Hábitat', value: 'Asia Central' },
    ],
    keywords: 'velociraptor, velociraptor real, velociraptor tamaño, dinosaurio cazador, velociraptor plumas',
    metaDescription: 'Descubrí la verdad sobre el Velociraptor: tamaño real, plumas e inteligencia. Muy diferente al del cine.',
    image: '/dinos/raptor.jpg',
    facts: [
      'Tenía plumas — era básicamente un ave con dientes',
      'Su garra retráctil se usaba para sujetar, no para cortar',
      'Era del tamaño de un pavo, no de un humano como en Jurassic Park',
      'Cazaba en grupos coordinados como los lobos modernos',
      'Su nombre significa "ladrón veloz"',
    ]
  },
  {
    slug: 'pterodactilo',
    name: 'Pterodactylus',
    subtitle: 'El primero en conquistar los cielos',
    era: 'Jurásico Tardío · 150 Ma',
    type: 'Pterosauria · Volador',
    description: 'El primer vertebrado en conquistar el cielo.',
    longDescription: `El Pterodactylus no era técnicamente un dinosaurio, sino un pterosaurio — un reptil volador que evolucionó independientemente el vuelo. Con una envergadura de hasta 1 metro en los adultos, dominó los cielos del Jurásico Tardío. Sus alas eran membranas de piel vascularizada sostenidas por un dedo anular extremadamente elongado. Se alimentaba principalmente de peces y pequeños animales. Fue el primer pterosaurio descubierto por la ciencia, en 1784 en Baviera, Alemania.`,
    stats: [
      { label: 'Envergadura', value: '1 metro' },
      { label: 'Peso', value: '1 kg' },
      { label: 'Período', value: '150 Ma' },
      { label: 'Hábitat', value: 'Europa' },
      { label: 'Dieta', value: 'Peces' },
      { label: 'Tipo', value: 'Pterosaurio' },
    ],
    keywords: 'pterodactilo, pterodáctilo características, dinosaurio volador, pterodáctilo tamaño',
    metaDescription: 'Todo sobre el Pterodáctilo: características, envergadura y datos curiosos del primer vertebrado en conquistar los cielos.',
    image: '/dinos/ptero.jpg',
    facts: [
      'Técnicamente no era un dinosaurio sino un pterosaurio',
      'Su dedo anular sostenía toda el ala',
      'Fue el primer reptil volador descubierto por la ciencia',
      'Podía caminar en cuatro patas en el suelo',
      'Tenía una cresta ósea en la cabeza para comunicarse',
    ]
  },
  {
    slug: 'brachiosaurus',
    name: 'Brachiosaurus',
    subtitle: 'Un edificio viviente que respiraba',
    era: 'Jurásico Tardío · 154–153 Ma',
    type: 'Sauropoda · Titán Herbívoro',
    description: 'Su corazón pesaba 400kg. El titán del Jurásico.',
    longDescription: `El Brachiosaurus fue uno de los animales más grandes que jamás caminaron sobre la Tierra. Con hasta 26 metros de altura y 58 toneladas de peso, era como un edificio de seis pisos con patas. Su cuello de 9 metros alcanzaba las copas de árboles que ningún otro ser podía tocar. A diferencia de otros saurópodos, sus patas delanteras eran más largas que las traseras, dándole una postura inclinada hacia arriba. Su corazón pesaba unos 400 kg y latía poderosamente para bombear sangre hasta su cerebro a 13 metros de altura.`,
    stats: [
      { label: 'Altura', value: '26 metros' },
      { label: 'Peso', value: '58 toneladas' },
      { label: 'Cuello', value: '9 metros' },
      { label: 'Longitud', value: '30 metros' },
      { label: 'Período', value: '154–153 Ma' },
      { label: 'Hábitat', value: 'Norteamérica' },
    ],
    keywords: 'brachiosaurus, brachiosaurus altura, dinosaurio cuello largo, sauropodo, jurásico',
    metaDescription: 'Descubrí el Brachiosaurus: altura, peso, alimentación y curiosidades del titán del Jurásico.',
    image: '/dinos/bronto.jpg',
    facts: [
      'Era tan alto como un edificio de 6 pisos',
      'Su corazón pesaba aproximadamente 400 kg',
      'Necesitaba comer más de 400 kg de plantas por día',
      'Sus fosas nasales estaban en la cima de su cabeza',
      'Vivía en manadas para protegerse de los depredadores',
    ]
  },
  {
    slug: 'smilodon',
    name: 'Smilodon',
    subtitle: 'El cazador que esperaba en silencio',
    era: 'Pleistoceno · 2.5 Ma–10 Ka',
    type: 'Felidae · Emboscador',
    description: 'Colmillos de 28cm. No perseguía su presa. La esperaba.',
    longDescription: `El Smilodon, comúnmente llamado tigre dientes de sable, no era realmente un tigre. Era un félido extinto que evolucionó independientemente sus enormes caninos. Con hasta 400 kg de peso y colmillos de 28 cm, era el depredador de emboscada definitivo. Su mandíbula podía abrirse hasta 120° — el doble que un león moderno. No perseguía a su presa en largas carreras; la esperaba oculto para atacar con una precisión letal. Se extinguió hace apenas 10.000 años, posiblemente por la caza humana y el cambio climático.`,
    stats: [
      { label: 'Longitud', value: '2.1 metros' },
      { label: 'Peso', value: '400 kg' },
      { label: 'Colmillos', value: '28 cm' },
      { label: 'Apertura', value: '120°' },
      { label: 'Período', value: '2.5Ma–10Ka' },
      { label: 'Hábitat', value: 'Américas' },
    ],
    keywords: 'smilodon, tigre dientes de sable, smilodon características, felino prehistórico, animales extintos',
    metaDescription: 'Todo sobre el Smilodon o tigre dientes de sable: colmillos, tamaño, caza y extinción del felino prehistórico más famoso.',
    image: '/dinos/smilodon.jpg',
    facts: [
      'No era un tigre — era un félido completamente diferente',
      'Sus colmillos eran tan frágiles que no podía morderlos en hueso',
      'Se extinguió hace solo 10.000 años — convivió con humanos',
      'Miles de fósiles fueron encontrados en los pozos de La Brea, California',
      'Probablemente cazaba en grupos como los leones modernos',
    ]
  },
  {
    slug: 'styracosaurus',
    name: 'Styracosaurus',
    subtitle: 'Una fortaleza viviente de cuernos y voluntad',
    era: 'Cretácico Tardío · 75.5 Ma',
    type: 'Ceratopsidae · Herbívoro',
    description: 'Seis cuernos en la corona. Ni el T-Rex se atrevía a acercarse.',
    longDescription: `El Styracosaurus fue uno de los ceratopsios más espectaculares que jamás existió. Su corona ósea lucía hasta 6 cuernos largos, más un imponente cuerno nasal de 60 cm. Con 3 toneladas de peso y una actitud defensiva feroz, vivía en grandes manadas que formaban círculos protectores ante los depredadores. Incluso el Tyrannosaurus Rex pensaba dos veces antes de atacar a un grupo de Styracosaurus. Su colorida corona probablemente también se usaba para comunicarse y atraer pareja.`,
    stats: [
      { label: 'Longitud', value: '6 metros' },
      { label: 'Peso', value: '3 toneladas' },
      { label: 'Cuerno nasal', value: '60 cm' },
      { label: 'Cuernos corona', value: '6' },
      { label: 'Período', value: '75.5 Ma' },
      { label: 'Hábitat', value: 'Norteamérica' },
    ],
    keywords: 'styracosaurus, styracosaurus cuernos, ceratopsio, dinosaurio herbívoro, cretácico',
    metaDescription: 'Conocé el Styracosaurus: el dinosaurio con corona de cuernos del Cretácico. Características, defensa y curiosidades.',
    image: '/dinos/styra.jpg',
    facts: [
      'Su nombre significa "lagarto de picos"',
      'Su corona de cuernos podía tener colores brillantes',
      'Vivía en manadas de cientos de individuos',
      'El cuerno nasal podía crecer hasta 60 centímetros',
      'Era pariente cercano del Triceratops',
    ]
  },
]

export const getDinosaurBySlug = (slug: string) =>
  dinosaurs.find(d => d.slug === slug)
