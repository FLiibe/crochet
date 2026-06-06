/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pattern, FAQItem, Testimonial, Lesson } from "./types";

export const PAIN_POINTS = [
  {
    id: "pain-1",
    title: "No Saber Cómo Monetizar Tu Hobby",
    description: "Tejer por diversión es lindo, pero perder la oportunidad de ganar dinero extra vendiendo piezas que la gente busca desesperadamente es un gran error.",
    icon: "HelpCircle"
  },
  {
    id: "pain-2",
    title: "Patrones Confusos y Llenos de Errores",
    description: "Seguir guías erróneas que te hacen perder tiempo y valioso material de hilado, arruinando tu margen de ganancia antes de empezar.",
    icon: "FileX2"
  },
  {
    id: "pain-3",
    title: "Acabados Poco Profesionales",
    description: "Si pretendes vender las piezas de fe, necesitas terminados pulidos, cabecitas firmes y expresiones tiernas que los clientes compren a buen precio.",
    icon: "HeartOff"
  },
  {
    id: "pain-4",
    title: "Creer que Emprender es Complicado",
    description: "Pensar que requieres ser una experta para vender. Con nuestro método paso a paso, tus primeras piezas ya tendrán calidad lista para la venta.",
    icon: "Scissors"
  }
];

export const SOLUTIONS = [
  {
    id: "sol-1",
    title: "Patrones Diseñados Para La Venta",
    description: "Método de armado rápido y prolijo paso a paso. Optimiza tu tiempo de producción para tejer más rápido y aumentar tus ganancias.",
  },
  {
    id: "sol-2",
    title: "12 Diseños de Alta Demanda en el Mercado",
    description: "Figuras religiosas sumamente buscadas para recuerdos de Bautizos, Primeras Comuniones, Bodas y Confirmaciones que se venden con facilidad y excelente margen.",
  },
  {
    id: "sol-3",
    title: "Licencia Comercial Ilimitada de por Vida",
    description: "Recibe el derecho total para tejer y comercializar físicamente cada pieza. Recupera tu inversión de $6.99 vendiendo un solo amigurumi de fe.",
  }
];

export const PATTERNS_CATALOG: Pattern[] = [
  {
    id: "pat-1",
    name: "Jesús (en \"Jesús en la cruz de madera\")",
    description: "Un diseño solemne e imponente de Jesús, acompañado del tutorial para ensamblar una base de cruz rústica. Altísimo valor percibido en el mercado artesanal.",
    difficulty: "Medio",
    height: "18 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_3_jesuscruz_1780755472031.png",
    tags: ["Cruz Rústica", "Pieza Coleccionable", "Gran Margen"]
  },
  {
    id: "pat-2",
    name: "Virgen de Guadalupe",
    description: "La patrona de América con su túnica azul estrellada y halo dorado. Es la figura más vendida del mercado religioso; ideal para altares y regalos premium.",
    difficulty: "Medio",
    height: "18 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_1_guadalupe_1780755441186.png",
    tags: ["Manto Azul", "Estrellas Doradas", "Venta Premium"]
  },
  {
    id: "pat-3",
    name: "Sagrado Corazón de Jesús",
    description: "Espectacular figura representativa con su llama de amor bordada al centro y túnica blanca tradicional. Un clásico infaltable muy solicitado por familias religiosas.",
    difficulty: "Medio",
    height: "17 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_4_corazon_1780755487273.png",
    tags: ["Túnica Clásica", "Corazón Bordado", "Muy Demandado"]
  },
  {
    id: "pat-4",
    name: "Madre Teresa de Calcuta",
    description: "Hermoso y noble diseño con su clásico sari blanco de rayas azules. Un patrón sumamente tierno muy buscado como regalo de confirmación o para maestras catequistas.",
    difficulty: "Principiante",
    height: "14 cm",
    hookSize: "2.25 mm",
    image: "/src/assets/images/pat_5_teresa_1780755502088.png",
    tags: ["Sari Blanco", "Fácil de Tejer", "Ideal Confirmaciones"]
  },
  {
    id: "pat-5",
    name: "San Judas Tadeo",
    description: "El santo más popular y vendido por excelencia. Su manto verde brillante, escudo dorado y báculo de fe lo convierten en un éxito garantizado de ventas semanales.",
    difficulty: "Medio",
    height: "16 cm",
    hookSize: "2.25 mm",
    image: "/src/assets/images/pat_6_judas_1780755517754.png",
    tags: ["Éxito en Ventas", "Causas Difíciles", "Santo Popular"]
  },
  {
    id: "pat-6",
    name: "Virgen Desatanudos (incluye Ángeles acompañantes)",
    description: "Una de las piezas más admiradas y valoradas. Incluye a la Virgen desatando la cinta con nudos y dos angelitos acompañantes. Perfecta para vender a precios altos.",
    difficulty: "Avanzado",
    height: "19 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_7_desatanudos_1780755538679.png",
    tags: ["Ángeles Incluidos", "Colección Lujo", "Precio de Venta Alto"]
  },
  {
    id: "pat-7",
    name: "Santísima Virgen María (con el Niño Jesús)",
    description: "Representación llena de amor maternal y misticismo. Ideal para obsequios costosos de recién nacidos, baby showers y regalar a madres embarazadas.",
    difficulty: "Medio",
    height: "18 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_8_marianino_1780755556625.png",
    tags: ["Amor Maternal", "Regalo Recién Nacido", "Muy Lucrativo"]
  },
  {
    id: "pat-8",
    name: "San Expedito",
    description: "Un patrón imponente con su armadura de legionario y su cruz. Muy buscado por creyentes en busca de milagros y auxilio rápido, lo que garantiza pedidos fluidos.",
    difficulty: "Avanzado",
    height: "18 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_9_expedito_1780755569770.png",
    tags: ["Armadura Detallada", "Santo de Urgencias", "Valor Agregado"]
  },
  {
    id: "pat-9",
    name: "Virgen María (Inmaculada Concepción)",
    description: "La Inmaculada Concepción con sus manos unidas y vestido de pureza con destellos estelares. Atemporal y muy solicitada para fiestas patronales y bautizos.",
    difficulty: "Medio",
    height: "16 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_inmaculada_1780756082031.png",
    tags: ["Pureza Celestial", "Manos Unidas", "Fiesta Patronal"]
  },
  {
    id: "pat-10",
    name: "San Miguel Arcángel",
    description: "El poderoso guerrero celestial con sus alas detalladas y espada de justicia. Su impresionante diseño atrae a compradores dispuestos a pagar excelentes márgenes.",
    difficulty: "Avanzado",
    height: "19 cm",
    hookSize: "2.75 mm",
    image: "/src/assets/images/pat_miguel_1780756099145.png",
    tags: ["Alas Majestuosas", "Espada Celestial", "Gran Protección"]
  },
  {
    id: "pat-11",
    name: "Virgen María (con el Niño Jesús)",
    description: "Una versión alternativa entrañable que destaca el tierno vínculo con el Niño dormido en sus brazos, con acabados súper pro y detalles delicados ideales para principiantes avanzados.",
    difficulty: "Medio",
    height: "17 cm",
    hookSize: "2.5 mm",
    image: "/src/assets/images/pat_marianino2_1780756117423.png",
    tags: ["Dulce Expresión", "Regalo de Bautizo", "Éxito Comercial"]
  },
  {
    id: "pat-12",
    name: "Virgen de la Medalla Milagrosa",
    description: "Nuestra Señora de la Medalla Milagrosa, con sus brazos extendidos derramando gracias. Un patrón codiciado y lleno de devoción que es un imán de clientes.",
    difficulty: "Medio",
    height: "18 cm",
    hookSize: "2.25 mm",
    image: "/src/assets/images/pat_milagrosa_1780756135326.png",
    tags: ["Brazos Abiertos", "Detalle de Gracias", "Devoción Popular"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Mariana Silva",
    location: "Guadalajara, México",
    rating: 5,
    comment: "¡Inicié sin saber nada de crochet y ya recuperé mi inversión multiplicada por diez! El manual digital de Ana Valentina es tan fácil de seguir que tejí mi primera Virgencita en 3 días. Ya vendí mis primeras 10 figuras a $15 USD cada una para souvenirs de un bautizo local.",
    avatarColor: "bg-rose-100 text-rose-700",
    projectDescription: "Vendió 10 Virgencitas para Bautizo ($150 USD)",
    date: "Hace 1 semana"
  },
  {
    id: "test-2",
    name: "Elena Restrepo",
    location: "Bogotá, Colombia",
    rating: 5,
    comment: "El nicho de recuerdos religiosos es una mina de oro. He comprado otros patrones en internet pero venían con errores. Estos del PDF calzan perfecto a la primera, lo que me permite tejer más rápido y aumentar mi margen de ganancia diaria. ¡Tengo la agenda llena para la temporada de Comuniones!",
    avatarColor: "bg-amber-100 text-amber-700",
    projectDescription: "Agenda de pedidos de Comunión completa",
    date: "Hace 3 días"
  },
  {
    id: "test-3",
    name: "Claudia Martínez",
    location: "Córdoba, Argentina",
    rating: 5,
    comment: "Empecé solo para tejerle a mis nietos, pero cuando sus amigos de la catequesis los vieron, todas las mamás me empezaron a encargar angelitos y santitos. Ahora tengo un negocio súper rentable desde mi comedor que me genera un excelente ingreso extra sin sacrificar horas de hogar.",
    avatarColor: "bg-emerald-100 text-emerald-700",
    projectDescription: "Genera excelentes ingresos extras semanales",
    date: "Hace 2 semanas"
  },
  {
    id: "test-4",
    name: "Gabriela Goya",
    location: "Lima, Perú",
    rating: 5,
    comment: "¡El secreto de un buen negocio es la calidad! Los acabados de firmeza y expresión facial dulce que enseña Ana Valentina hacen que los clientes paguen felizmente tarifas premium por cada amigurumi de fe. Una bendición total para emprender.",
    avatarColor: "bg-sky-100 text-sky-700",
    projectDescription: "Lanzó su marca @MilagroTejido con éxito",
    date: "Hace 5 días"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo recibo el manual digital con las 12 recetas en PDF?",
    answer: "Inmediatamente después de realizar tu pago promocional único de $6.99, recibirás un correo electrónico automático para descargar directo el manual digital en PDF. Podrás guardarlo para siempre en tu celular, tablet o computadora, e inclusive imprimirlo a todo color si lo deseas para comenzar tu negocio hoy.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "No tengo experiencia tejiendo amigurumis, ¿me servirá el manual para vender?",
    answer: "¡Definitivamente sí! El manual digital inicia con una completa guía visual paso a paso para principiantes. Conocerás qué materiales usar, cómo tejer el anillo mágico, aumentos, disminuciones y los puntos necesarios. Diseñamos las explicaciones tan claras que tus primeras figuras tendrán calidad profesional lista para la venta.",
    category: "Contenido"
  },
  {
    id: "faq-3",
    question: "¿Cómo funciona la garantía de satisfacción de 7 días?",
    answer: "Queremos que te sientas enteramente segura de tu inversión empresarial. Si decides que el paso a paso o los patrones del manual no cumplen con tus expectativas, dispones de 7 días desde tu compra para escribirnos un correo de contacto. Te devolveremos el 100% de tus $6.99 dólares de inmediato de forma íntegra.",
    category: "Pagos"
  },
  {
    id: "faq-4",
    question: "¿Tengo que volver a pagar mensualmente de forma recurrente?",
    answer: "¡No! El precio promocional de $6.99 USD es un pago único de por vida. No existen mensualidades, anualidades ni cobros ocultos bajo ningún concepto. El manual es de tu propiedad exclusiva para explotar comercialmente y generar ingresos continuos.",
    category: "Pagos"
  },
  {
    id: "faq-5",
    question: "¿Puedo vender las piezas que teja basándome en estas 12 recetas?",
    answer: "¡Claro que sí! Ese es el principal propósito de este manual. Tienes plenos derechos comerciales ilimitados sobre cualquier amigurumi físico que crees utilizando los patrones de este manual. Nos hace sumamente felices ver que nuestras recetas impulsan nuevos negocios prósperos de fe desde casa.",
    category: "General"
  },
  {
    id: "faq-6",
    question: "¿Puedo imprimir el manual digital PDF?",
    answer: "¡Sí, por supuesto! El archivo PDF cuenta con un formato limpio de alta definición optimizado tanto para lectura en pantallas como para impresión física del recetario en papel para tenerlo a mano en tu taller.",
    category: "General"
  }
];

export const STUDENT_LESSONS: Lesson[] = [
  {
    id: "les-0",
    module: "Sección 1: Guía de Inicio",
    title: "1. Introducción, Materiales Hilados y Ganchos",
    duration: "Guía Ilustrada",
    description: "Los tipos de hilo acrílico o de algodón mercerizado recomendados, rellenos ideales y tamaños de aguja idóneos para que tus amigurumis queden firmes y llanos."
  },
  {
    id: "les-1",
    module: "Sección 2: Puntos Básicos",
    title: "2. El Anillo Mágico y Puntos de Inicio Cero",
    duration: "Guía Ilustrada",
    description: "Dominarás el inicio del tejido circular, cómo ajustar bien el centro del anillo mágico y la diferencia técnica entre los puntos en 'X' and en 'V'."
  },
  {
    id: "les-2",
    module: "Sección 2: Puntos Básicos",
    title: "3. Incrementos y Disminución Invisible",
    duration: "Guía Ilustrada",
    description: "Aprenderás a dar forma curva a cabezas y cuerpos perfectos sin que queden huecos o poros visibles por donde se filtre el relleno."
  },
  {
    id: "les-3",
    module: "Sección 3: Técnicas de Armado",
    title: "4. Costuras Ocultas y Expresiones Faciales",
    duration: "Guía Ilustrada",
    description: "Técnicas detalladas para bordar tiernos ojitos durmientes y unir la cabeza al cuerpo de forma segura sin que baile o se incline."
  },
  {
    id: "les-4",
    module: "Sección 4: 12 Patrones",
    title: "5. Recetario de 12 Figuras Religiosas Paso a Paso",
    duration: "Guía Ilustrada",
    description: "Acceso completo a la descripción hilado por hilado de las 12 figuras de fe descritas en el manual para tu catálogo de venta."
  }
];
