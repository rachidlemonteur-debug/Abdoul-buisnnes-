'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  Wifi,
  ShoppingBag,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronUp,
  CreditCard,
} from 'lucide-react';
import { ParallaxHero } from '@/components/ParallaxHero';
import { TrustBanner } from '@/components/TrustBanner';
import { ServiceCard, ServiceCardData } from '@/components/ServiceCard';
import { StoryCarousel } from '@/components/StoryCarousel';
import { PaymentMethods } from '@/components/PaymentMethods';
import { RechargeSimulator } from '@/components/RechargeSimulator';
import { ForfaitSimulator } from '@/components/ForfaitSimulator';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card3D } from '@/components/Card3D';
import { BOUTIQUE_PRODUCTS, BUSINESS_CONFIG } from '@/lib/constants';

export default function HomePage() {
  const [activeSimTab, setActiveSimTab] = useState<'recharge' | 'forfait'>('recharge');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices: ServiceCardData[] = [
    {
      id: 'recharge-credit',
      title: 'Recharge de Crédit',
      badge: 'Instantané',
      description:
        'Rechargez votre crédit d’appel sur Airtel Niger, Moov Africa et Zamani en quelques secondes sans vous déplacer.',
      highlights: [
        'Prise en charge tous opérateurs au Niger',
        'Montants libres de 500 F à 50 000 F',
        'Confirmation de réception sécurisée',
      ],
      image: '/images/recharge-credit.jpg',
      imageAlt: 'Recharge rapide de crédit téléphonique sur smartphone à Niamey',
      whatsappMessage: 'Bonjour Abdul Business, je souhaite faire une recharge de crédit téléphonique.',
      ctaText: 'Recharger sur WhatsApp',
      internalLink: '/services',
    },
    {
      id: 'forfaits-internet',
      title: 'Forfaits Internet & Data',
      badge: '4G Haut Débit',
      description:
        'Activez vos pass data journaliers, hebdomadaires ou mensuels Airtel & Moov pour rester connecté en continu.',
      highlights: [
        'Formules jour, semaine et gros volumes mois',
        'Idéal pour WhatsApp, YouTube et bureautique',
        'Activation assistée sans code USSD complexe',
      ],
      image: '/images/forfait-internet.jpg',
      imageAlt: 'Activation de forfait Internet et données mobiles pour le travail et la famille',
      whatsappMessage: 'Bonjour Abdul Business, je souhaite acheter un forfait Internet.',
      ctaText: 'Commander un forfait',
      internalLink: '/services',
    },
    {
      id: 'paiement-assistance',
      title: 'Paiements & Assistance',
      badge: 'Accompagnement',
      description:
        'Aide au règlement de services et orientation Mobile Money (Airtel Money, Moov Money, Nita, Amanah, Zamani Cash).',
      highlights: [
        'Conseiller humain dédié sur WhatsApp',
        'Validation stricte des montants avant envoi',
        'Service disponible 7j/7 à Niamey',
      ],
      image: '/images/mobile-money.jpg',
      imageAlt: 'Assistance et paiement mobile money sécurisé à Niamey',
      whatsappMessage: 'Bonjour Abdul Business, je souhaite obtenir de l’aide pour un paiement ou une opération.',
      ctaText: 'Demander une assistance',
      internalLink: '/contact',
    },
  ];

  const previewProducts = BOUTIQUE_PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#1a1a1a]">
      {/* 1. Bento Grid Hero with 3D Depth */}
      <ParallaxHero />

      {/* Quick Navigation In-Page Jump Bar */}
      <nav aria-label="Accès direct aux sections" className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full -mt-2 mb-4">
        <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none">
          <a
            href="#services-overview-section"
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-2xs"
          >
            ⚡ Services
          </a>
          <a
            href="#interactive-simulator-section"
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-2xs"
          >
            🧮 Simulateur
          </a>
          <a
            href="#storytelling-carousel-section"
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-2xs"
          >
            💬 Témoignages
          </a>
          <a
            href="#payment-methods-section"
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-2xs"
          >
            💳 Paiements
          </a>
          <a
            href="#boutique-preview-section"
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black hover:border-gray-400 transition-colors shadow-2xs"
          >
            🛍️ Boutique
          </a>
        </div>
      </nav>

      {/* 2. Trust Pillars Banner */}
      <TrustBanner />

      {/* 3. Main Services Section - 3D Bento Grid */}
      <section id="services-overview-section" className="py-10 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full scroll-mt-20">
        <ScrollReveal variant="3d-card">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
                Prestations Télécoms
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
                Services mobiles pensés pour votre quotidien
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-[#F97316] transition-colors"
            >
              <span>Explorer tous les services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {mainServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* 4. Interactive Simulator Section - 3D Bento Style */}
      <section id="interactive-simulator-section" className="py-10 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full scroll-mt-20">
        <ScrollReveal variant="3d-flip">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-2 shadow-xs">
                Outil Interactif
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                Préparez votre commande en 1 clic
              </h2>
            </div>

            {/* Simulator Switcher Tabs - Bento Pill Style */}
            <div className="inline-flex p-1 bg-white border border-gray-200 rounded-full shadow-xs">
              <button
                type="button"
                id="tab-sim-recharge"
                onClick={() => setActiveSimTab('recharge')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSimTab === 'recharge'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Recharge</span>
              </button>

              <button
                type="button"
                id="tab-sim-forfait"
                onClick={() => setActiveSimTab('forfait')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSimTab === 'forfait'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <Wifi className="h-3.5 w-3.5" />
                <span>Forfaits</span>
              </button>
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeSimTab === 'recharge' ? <RechargeSimulator /> : <ForfaitSimulator />}
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Storytelling Carousel with 3D Depth */}
      <StoryCarousel />

      {/* 6. Payment Methods Section */}
      <PaymentMethods />

      {/* 7. Boutique Light Preview Section - 3D Bento Grid */}
      <section id="boutique-preview-section" className="py-10 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full scroll-mt-20">
        <ScrollReveal variant="3d-card">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
                Boutique Accessoires
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight">
                Câbles &amp; Chargeurs à Niamey
              </h2>
            </div>

            <Link
              href="/boutique"
              id="view-full-boutique-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-[#F97316] transition-colors"
            >
              <span>Voir toute la boutique</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {previewProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 80} variant="3d-card" className="h-full">
              <Card3D maxTilt={5} perspective={1100} className="h-full">
                <div
                  id={`boutique-preview-${product.id}`}
                  className="group flex h-full flex-col rounded-[2.5rem] border border-gray-200/90 bg-white p-7 shadow-xs hover:shadow-xl transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-2xs">
                      {product.badge}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                      En Stock Niamey
                    </span>
                  </div>

                  <div className="relative h-44 w-full bg-gray-100 rounded-2xl overflow-hidden mb-5 shadow-2xs">
                    <Image
                      src={product.image}
                      alt={`${product.name} disponible chez Abdul Business Niamey`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-base font-bold text-black mb-1 group-hover:text-[#F97316] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-[11px] text-gray-400 font-medium mb-3">
                        {product.priceNote}
                      </p>
                      <WhatsAppButton
                        id={`buy-wa-btn-${product.id}`}
                        variant="dark"
                        size="sm"
                        label="Demander sur WhatsApp"
                        className="w-full justify-center !rounded-full text-xs font-bold uppercase tracking-wider"
                        message={`Bonjour Abdul Business, je souhaite acheter le produit : ${product.name}. Est-il disponible ?`}
                      />
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 8. Call to Action Banner - 3D Bento Card */}
      <section id="fast-cta-banner" className="py-10 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <ScrollReveal variant="3d-flip">
          <div className="rounded-[2.5rem] bg-black text-white p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-gray-200 text-[10px] uppercase font-bold tracking-widest rounded-full mb-4">
              Service Rapide · Niamey
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Besoin d’une recharge ou d’un forfait maintenant ?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Contactez notre conseiller Abdul Business sur WhatsApp au <strong className="text-white font-mono">{BUSINESS_CONFIG.phoneDisplay}</strong> pour une exécution immédiate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <WhatsAppButton
                id="cta-bottom-banner-wa"
                variant="primary"
                size="lg"
                label="Contacter sur WhatsApp"
                message="Bonjour Abdul Business, je souhaite effectuer une opération de crédit ou forfait."
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-xs !bg-white !text-black hover:!bg-gray-100 !rounded-full shadow-lg"
              />

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-800 transition-all"
              >
                <HelpCircle className="h-4 w-4" />
                <span>FAQ &amp; Horaires</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Floating Scroll to Top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Retour en haut de page"
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white border border-gray-300 text-black shadow-lg hover:bg-gray-100 hover:scale-105 transition-all cursor-pointer"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
