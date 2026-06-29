export type MotorCategory =
  | "Électrique"
  | "Thermique"
  | "Hydraulique"
  | "Pneumatique"
  | "Servo-moteur"
  | "Réducteur";

export interface Motor {
  id: string;
  name: string;
  category: MotorCategory;
  shortDesc: string;
  description: string;
  power: string;
  voltage?: string;
  rpm?: string;
  torque?: string;
  weight?: string;
  protection?: string;
  certifications: string[];
  applications: string[];
  inStock: boolean;
  featured: boolean;
  image: string;
}

export const CATEGORIES: MotorCategory[] = [
  "Électrique",
  "Thermique",
  "Hydraulique",
  "Pneumatique",
  "Servo-moteur",
  "Réducteur",
];

export const MOTORS: Motor[] = [
  {
    id: "mel-001",
    name: "Moteur asynchrone triphasé IE3",
    category: "Électrique",
    shortDesc: "Moteur à haut rendement IE3, idéal pour entraînements industriels continus.",
    description:
      "Moteur asynchrone triphasé à cage d'écureuil conforme à la norme d'efficacité énergétique IE3. Conçu pour les applications industrielles exigeantes nécessitant une fiabilité maximale et un fonctionnement continu. Boîtier en fonte robuste, roulements à billes double étanchéité, ventilation forcée.",
    power: "7,5 kW",
    voltage: "400V / 690V",
    rpm: "1 450 tr/min",
    torque: "49 N·m",
    weight: "42 kg",
    protection: "IP55",
    certifications: ["CE", "IE3", "IEC 60034"],
    applications: ["Pompes", "Compresseurs", "Ventilateurs", "Convoyeurs"],
    inStock: true,
    featured: true,
    image: "/images/motor-electric-1.jpg",
  },
  {
    id: "mel-002",
    name: "Moteur électrique monophasé",
    category: "Électrique",
    shortDesc: "Moteur monophasé compact, alimentation 230V standard.",
    description:
      "Moteur monophasé à condensateur de démarrage, parfaitement adapté aux petites machines industrielles et aux équipements alimentés en 230V monophasé. Compact, silencieux et facile à installer.",
    power: "1,5 kW",
    voltage: "230V",
    rpm: "2 850 tr/min",
    torque: "5 N·m",
    weight: "12 kg",
    protection: "IP54",
    certifications: ["CE", "IEC 60034"],
    applications: ["Machines-outils légères", "Pompes domestiques", "Broyeurs"],
    inStock: true,
    featured: false,
    image: "/images/motor-electric-2.jpg",
  },
  {
    id: "mel-003",
    name: "Moteur brushless DC haute performance",
    category: "Électrique",
    shortDesc: "Moteur brushless DC sans balais, longue durée de vie, faible maintenance.",
    description:
      "Moteur à courant continu sans balais (BLDC) offrant une densité de puissance élevée, un fonctionnement silencieux et une maintenance réduite. Idéal pour les automatismes, robots et équipements médicaux.",
    power: "3 kW",
    voltage: "48V DC",
    rpm: "3 000 tr/min",
    torque: "9,5 N·m",
    weight: "8,5 kg",
    protection: "IP44",
    certifications: ["CE", "RoHS"],
    applications: ["Robotique", "Automatismes", "AGV", "Équipements médicaux"],
    inStock: true,
    featured: true,
    image: "/images/motor-electric-3.jpg",
  },
  {
    id: "mth-001",
    name: "Moteur diesel industriel 4 cylindres",
    category: "Thermique",
    shortDesc: "Moteur diesel robuste pour groupes électrogènes et engins de chantier.",
    description:
      "Moteur diesel industriel 4 cylindres en ligne, refroidissement par eau, injection directe. Conçu pour une utilisation intensive en milieu difficile. Faible consommation, couple élevé dès les bas régimes, compatible avec le biodiesel B20.",
    power: "55 kW",
    voltage: undefined,
    rpm: "1 500 tr/min",
    torque: "350 N·m",
    weight: "320 kg",
    protection: "IP23",
    certifications: ["CE", "Stage V", "ISO 8528"],
    applications: ["Groupes électrogènes", "Engins de chantier", "Pompage agricole"],
    inStock: true,
    featured: true,
    image: "/images/motor-thermal-1.jpg",
  },
  {
    id: "mth-002",
    name: "Moteur essence monocylindre",
    category: "Thermique",
    shortDesc: "Moteur essence compact pour équipements portables et petits engins.",
    description:
      "Moteur essence 4 temps monocylindre, démarrage électrique, refroidissement par air. Léger et fiable, parfait pour les équipements de jardinage industriel, groupes électrogènes portables et petites machines.",
    power: "5,5 kW",
    voltage: undefined,
    rpm: "3 600 tr/min",
    torque: "15 N·m",
    weight: "18 kg",
    protection: "IP22",
    certifications: ["CE", "Euro 5"],
    applications: ["Groupes électrogènes portables", "Tondeuses industrielles", "Karchers"],
    inStock: false,
    featured: false,
    image: "/images/motor-thermal-2.jpg",
  },
  {
    id: "mhy-001",
    name: "Moteur hydraulique orbital basse vitesse",
    category: "Hydraulique",
    shortDesc: "Moteur hydraulique orbitale, couple élevé, basse vitesse, très compact.",
    description:
      "Moteur hydraulique à rotor orbitale (gerotor) offrant un couple élevé à très basse vitesse. Idéal pour les applications nécessitant une grande force de rotation dans un encombrement réduit. Démarrage en charge immédiat.",
    power: "15 kW",
    voltage: undefined,
    rpm: "500 tr/min",
    torque: "280 N·m",
    weight: "14 kg",
    protection: "IP65",
    certifications: ["CE", "ISO 4697"],
    applications: ["Engins de terrassement", "Convoyeurs lourds", "Treuils", "Malaxeurs"],
    inStock: true,
    featured: true,
    image: "/images/motor-hydraulic-1.jpg",
  },
  {
    id: "mhy-002",
    name: "Moteur hydraulique à pistons axiaux",
    category: "Hydraulique",
    shortDesc: "Moteur à pistons axiaux haute pression, rendement optimal.",
    description:
      "Moteur hydraulique à pistons axiaux à cylindrée fixe. Haute pression de service, excellent rendement volumétrique et mécanique. Adapté aux applications à forte sollicitation dans les industries lourdes.",
    power: "45 kW",
    voltage: undefined,
    rpm: "1 200 tr/min",
    torque: "358 N·m",
    weight: "32 kg",
    protection: "IP54",
    certifications: ["CE", "ISO 3019"],
    applications: ["Presses industrielles", "Machines de forage", "Grues"],
    inStock: true,
    featured: false,
    image: "/images/motor-hydraulic-2.jpg",
  },
  {
    id: "mpn-001",
    name: "Moteur pneumatique à palettes",
    category: "Pneumatique",
    shortDesc: "Moteur air comprimé à palettes, léger, ATEX, anti-déflagrant.",
    description:
      "Moteur pneumatique rotatif à palettes, alimenté en air comprimé à 6 bars. Certifié ATEX pour utilisation en zone explosive. Aucun risque électrique, fonctionnement possible en atmosphère humide ou chargée en poussières.",
    power: "1,2 kW",
    voltage: undefined,
    rpm: "1 500 tr/min",
    torque: "7,6 N·m",
    weight: "3,2 kg",
    protection: "IP65",
    certifications: ["CE", "ATEX II 2G", "ISO 15552"],
    applications: ["Zones ATEX", "Mines", "Industrie chimique", "Pétrochimie"],
    inStock: true,
    featured: false,
    image: "/images/motor-pneumatic-1.jpg",
  },
  {
    id: "msv-001",
    name: "Servo-moteur AC brushless haute précision",
    category: "Servo-moteur",
    shortDesc: "Servo-moteur AC avec encodeur intégré, précision de positionnement <0,01°.",
    description:
      "Servo-moteur synchrone AC à aimants permanents avec retour encodeur incrémental haute résolution. Réponse dynamique exceptionnelle, idéal pour les axes CNC, robots et machines d'assemblage automatisées.",
    power: "2 kW",
    voltage: "220V AC",
    rpm: "3 000 tr/min",
    torque: "6,4 N·m",
    weight: "5,8 kg",
    protection: "IP67",
    certifications: ["CE", "UL", "RoHS"],
    applications: ["CNC", "Robots industriels", "Machines d'emballage", "Imprimantes industrielles"],
    inStock: true,
    featured: true,
    image: "/images/motor-servo-1.jpg",
  },
  {
    id: "mrd-001",
    name: "Motoréducteur coaxial en ligne",
    category: "Réducteur",
    shortDesc: "Motoréducteur compact, rapport de réduction 1:20, montage universel.",
    description:
      "Motoréducteur coaxial associant un moteur électrique IE3 et un réducteur à engrenages hélicoïdaux. Rapport de réduction 1:20, sortie sur arbre plein. Boîtier en aluminium anodisé, lubrification à vie, montage dans toutes les positions.",
    power: "4 kW",
    voltage: "400V",
    rpm: "70 tr/min",
    torque: "545 N·m",
    weight: "28 kg",
    protection: "IP55",
    certifications: ["CE", "IE3"],
    applications: ["Convoyeurs", "Agitateurs", "Portes automatiques", "Élévateurs"],
    inStock: true,
    featured: false,
    image: "/images/motor-reducer-1.jpg",
  },
];

export function getMotorById(id: string): Motor | undefined {
  return MOTORS.find((m) => m.id === id);
}

export function getMotorsByCategory(category: MotorCategory): Motor[] {
  return MOTORS.filter((m) => m.category === category);
}

export function getFeaturedMotors(): Motor[] {
  return MOTORS.filter((m) => m.featured);
}
