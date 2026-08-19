export interface BusinessInfo {
  name: string;
  slogan: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  location: string;
  city: string;
  country: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  email: string;
}

export const BUSINESS_CONFIG: BusinessInfo = {
  name: "Abdul Business",
  slogan: "Simple · fiable · sécurisé",
  phone: "+22774470922",
  phoneDisplay: "+227 74 47 09 22",
  whatsappUrl: "https://wa.me/22774470922",
  location: "Niamey, Niger (Zone de couverture Niamey & environs)",
  city: "Niamey",
  country: "Niger",
  hours: {
    weekdays: "07h30 – 22h00",
    saturday: "08h00 – 22h30",
    sunday: "08h30 – 21h30",
  },
  email: "contact@abdul-business.ne",
};

export interface TelecomOperator {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
  accentBorder: string;
  badge: string;
  description: string;
  hasRecharge: boolean;
  hasData: boolean;
}

export const TELECOM_OPERATORS: TelecomOperator[] = [
  {
    id: "airtel",
    name: "Airtel Niger",
    color: "#E11924",
    bgColor: "bg-red-50 hover:bg-red-100/80 border-red-200",
    textColor: "text-red-700",
    accentBorder: "border-red-500",
    badge: "Réseau National",
    description: "Recharges de crédit d'appel et forfaits internet Airtel 4G/3G.",
    hasRecharge: true,
    hasData: true,
  },
  {
    id: "moov",
    name: "Moov Africa Niger",
    color: "#0055A5",
    bgColor: "bg-blue-50 hover:bg-blue-100/80 border-blue-200",
    textColor: "text-blue-700",
    accentBorder: "border-blue-500",
    badge: "Haute Disponibilité",
    description: "Crédit et forfaits Moov data jour, semaine et mois.",
    hasRecharge: true,
    hasData: true,
  },
  {
    id: "zamani",
    name: "Zamani Telecom",
    color: "#FF8200",
    bgColor: "bg-orange-50 hover:bg-orange-100/80 border-orange-200",
    textColor: "text-orange-700",
    accentBorder: "border-orange-500",
    badge: "Opérateur Local",
    description: "Recharges téléphoniques et forfaits Zamani sous réserve de disponibilité.",
    hasRecharge: true,
    hasData: true,
  },
];

export interface PaymentMethod {
  id: string;
  name: string;
  category: "mobile_money" | "transfert_bancaire" | "autre";
  description: string;
  iconName: string;
  isActive: boolean; // Configurable toggle
  note: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "airtel_money",
    name: "Airtel Money",
    category: "mobile_money",
    description: "Paiement via portefeuille électronique Airtel Niger.",
    iconName: "Smartphone",
    isActive: true,
    note: "Validation du numéro marchand sur WhatsApp avant tout envoi",
  },
  {
    id: "moov_money",
    name: "Moov Money",
    category: "mobile_money",
    description: "Transfert sécurisé via Flooz / Moov Money Niger.",
    iconName: "PhoneCall",
    isActive: true,
    note: "Confirmation immédiate avec capture ou référence SMS",
  },
  {
    id: "zamani_cash",
    name: "Zamani Cash",
    category: "mobile_money",
    description: "Paiement via compte Zamani Cash disponible.",
    iconName: "Coins",
    isActive: true,
    note: "À confirmer lors de votre commande WhatsApp",
  },
  {
    id: "nita",
    name: "Nita Transfert",
    category: "transfert_bancaire",
    description: "Agence et réseau de transfert d'argent national Nita.",
    iconName: "Building2",
    isActive: true,
    note: "Dépôt en agence ou transfert direct selon consigne",
  },
  {
    id: "amanah",
    name: "Amanah Express",
    category: "transfert_bancaire",
    description: "Service de transfert d'argent Amanah à Niamey.",
    iconName: "Send",
    isActive: true,
    note: "Indiquez votre agence émettrice à notre conseiller",
  },
  {
    id: "coris_money",
    name: "Coris Money / E-coris",
    category: "transfert_bancaire",
    description: "Solution de monnaie électronique et banque partenaire.",
    iconName: "CreditCard",
    isActive: true,
    note: "Option disponible pour montants intermédiaires",
  },
];

export interface DataPassOption {
  id: string;
  operatorId: "airtel" | "moov" | "zamani";
  name: string;
  volume: string;
  validity: string;
  recommendedUse: string;
  popular?: boolean;
}

export const DATA_PASS_OPTIONS: DataPassOption[] = [
  {
    id: "airtel_pass_jour",
    operatorId: "airtel",
    name: "Pass Flash Jour",
    volume: "500 Mo à 1.5 Go",
    validity: "24 Heures",
    recommendedUse: "Idéal pour WhatsApp, urgences et navigation rapide",
  },
  {
    id: "airtel_pass_semaine",
    operatorId: "airtel",
    name: "Pass Hebdomadaire",
    volume: "2.5 Go à 5 Go",
    validity: "7 Jours",
    recommendedUse: "Réseaux sociaux, appels vocaux et travail quotidien",
    popular: true,
  },
  {
    id: "airtel_pass_mois",
    operatorId: "airtel",
    name: "Pass Maxi Mensuel",
    volume: "10 Go à 30 Go",
    validity: "30 Jours",
    recommendedUse: "Streaming, bureautique, vidéos et usage intensif",
  },
  {
    id: "moov_pass_jour",
    operatorId: "moov",
    name: "Moov Data 24H",
    volume: "300 Mo à 1 Go",
    validity: "24 Heures",
    recommendedUse: "Dépannage immédiat et messagerie instantanée",
  },
  {
    id: "moov_pass_semaine",
    operatorId: "moov",
    name: "Moov Data 7 Jours",
    volume: "3 Go à 6 Go",
    validity: "7 Jours",
    recommendedUse: "Confort pour consultations web et réseaux sociaux",
    popular: true,
  },
  {
    id: "moov_pass_mois",
    operatorId: "moov",
    name: "Moov Data 30 Jours",
    volume: "12 Go à 25 Go",
    validity: "30 Jours",
    recommendedUse: "Pour toute la famille ou le travail connecté",
  },
  {
    id: "zamani_pass_mixte",
    operatorId: "zamani",
    name: "Pass Zamani Connect",
    volume: "Volume selon grille",
    validity: "Journalier / Hebdo / Mensuel",
    recommendedUse: "Confirmation du forfait exact sur WhatsApp",
  },
];

export interface AccessoryProduct {
  id: string;
  name: string;
  category: "cables" | "chargeurs" | "adaptateurs" | "ecouteurs";
  description: string;
  specs: string[];
  inStock: boolean;
  priceNote: string;
  image: string;
  badge: string;
}

export const BOUTIQUE_PRODUCTS: AccessoryProduct[] = [
  {
    id: "cable-type-c-fast",
    name: "Câble USB-C Renforcé Charge Rapide",
    category: "cables",
    description: "Câble tressé haute résistance 3A/60W, compatible smartphones Android, tablettes et accessoires modernes.",
    specs: ["Longueur 1m / 1.5m", "Gaine nylon anti-torsion", "Support charge rapide"],
    inStock: true,
    priceNote: "Prix unitaire confirmé sur WhatsApp selon longueur",
    image: "https://picsum.photos/seed/usbcable/600/450",
    badge: "Top Vente",
  },
  {
    id: "cable-lightning-iphone",
    name: "Câble Lightning pour iPhone / iPad",
    category: "cables",
    description: "Câble robuste pour synchronisation et recharge rapide de tous modèles d'iPhone avec port Lightning.",
    specs: ["Haute compatibilité iOS", "Connecteur renforcé", "Transfert de données stable"],
    inStock: true,
    priceNote: "Prix confirmé sur WhatsApp",
    image: "https://picsum.photos/seed/lightningcable/600/450",
    badge: "Indispensable",
  },
  {
    id: "chargeur-secteur-double-port",
    name: "Tête de Chargeur Secteur Double Port (USB + USB-C)",
    category: "chargeurs",
    description: "Bloc secteur compact avec protection contre les surtensions, idéal pour le réseau électrique local.",
    specs: ["Sortie USB-A + USB-C", "Protection anti-chauffe", "Prise européenne standard"],
    inStock: true,
    priceNote: "Tarif communiqué selon wattage (18W / 30W)",
    image: "https://picsum.photos/seed/wallcharger/600/450",
    badge: "Sécurité Garantie",
  },
  {
    id: "adaptateur-otg-polyvalent",
    name: "Adaptateur OTG Micro-USB & USB-C",
    category: "adaptateurs",
    description: "Permet de brancher clé USB, souris ou disque externe directement sur votre téléphone portable.",
    specs: ["Format ultra-compact métallique", "Plug & play sans pilote", "Large compatibilité"],
    inStock: true,
    priceNote: "Petit prix abordable",
    image: "https://picsum.photos/seed/otgadapter/600/450",
    badge: "Pratique",
  },
  {
    id: "ecouteurs-filaires-micro",
    name: "Écouteurs Stéréo avec Micro Intégré (Jack 3.5mm / Type-C)",
    category: "ecouteurs",
    description: "Son clair, microphone haute sensibilité pour vos appels WhatsApp et bouton de contrôle intégré.",
    specs: ["Microphone anti-bruit ambiant", "Embouts confortables", "Prise jack 3.5mm ou Type-C"],
    inStock: true,
    priceNote: "Disponible en stock à Niamey",
    image: "https://picsum.photos/seed/earphones/600/450",
    badge: "Qualité Audio",
  },
  {
    id: "support-voiture-aimante",
    name: "Support Téléphone pour Véhicule / Moto",
    category: "adaptateurs",
    description: "Fixation sécurisée sur grille d'aération ou guidon pour naviguer facilement avec votre GPS à Niamey.",
    specs: ["Aimants néodyme puissants", "Rotation 360°", "Plaques adhésives fournies"],
    inStock: true,
    priceNote: "Stock limité - réservation WhatsApp",
    image: "https://picsum.photos/seed/phoneholder/600/450",
    badge: "Accessoire Auto",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "recharges" | "paiement" | "boutique" | "securite";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Comment se déroule une recharge de crédit ou l'achat d'un forfait ?",
    answer: "C'est très simple : 1. Vous choisissez votre opérateur (Airtel, Moov ou Zamani), le numéro à créditer et le montant ou forfait désiré. 2. Cliquez sur 'Envoyer sur WhatsApp' pour nous transmettre votre demande. 3. Notre conseiller confirme le montant total et vous communique le compte marchand correspondant. 4. Dès confirmation du versement, la recharge est effectuée immédiatement.",
    category: "recharges",
  },
  {
    question: "Quels sont les opérateurs mobiles pris en charge au Niger ?",
    answer: "Nous prenons en charge les réseaux Airtel Niger et Moov Africa Niger de façon continue. Les demandes concernant Zamani Telecom et d'autres réseaux locaux sont également traitées selon les disponibilités du moment.",
    category: "recharges",
  },
  {
    question: "Dois-je renseigner mon code PIN ou mot de passe sur le site ?",
    answer: "JAMAIS ! Abdul Business ne vous demandera JAMAIS votre code secret PIN, mot de passe ou code OTP. Le site ne collecte aucune donnée bancaire sensible. Toutes les confirmations s'effectuent par contact direct et transparent.",
    category: "securite",
  },
  {
    question: "Quels moyens de paiement acceptez-vous à Niamey ?",
    answer: "Nous acceptons les principaux canaux locaux : Airtel Money, Moov Money (Flooz), Nita Transfert, Amanah, Zamani Cash et Coris Money selon confirmation de notre conseiller lors de l'échange WhatsApp.",
    category: "paiement",
  },
  {
    question: "Comment acheter un câble ou accessoire dans la boutique ?",
    answer: "Sélectionnez le produit dans la boutique et cliquez sur 'Demander sur WhatsApp'. Nous vérifions la disponibilité immédiate du stock et convenons ensemble d'un point de rendez-vous ou de remise à Niamey.",
    category: "boutique",
  },
  {
    question: "Quels sont les délais de traitement d'une commande ?",
    answer: "Pour les recharges et forfaits, le traitement est quasi-instantané dès réception de la confirmation du paiement par notre équipe durant nos heures d'ouverture (07h30 à 22h00).",
    category: "recharges",
  },
];

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/22774470922?text=${encoded}`;
}
