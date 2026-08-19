'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface StorySlide {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  ctaText: string;
  highlight: string;
}

export function StoryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: StorySlide[] = [
    {
      id: 'toujours-connecte',
      label: 'Continuité Télécom',
      title: 'Toujours connecté, partout à Niamey',
      description: 'Recharges de crédit et forfaits Internet sans parcours compliqué. Ne restez plus bloqué faute d’unités lors d’un appel important ou d’une session WhatsApp.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      imageAlt: 'Utilisateur connecté avec son smartphone à Niamey',
      whatsappMessage: 'Bonjour Abdul Business, je souhaite faire une recharge de crédit rapide.',
      ctaText: 'Faire une recharge',
      highlight: 'Zéro interruption',
    },
    {
      id: 'pense-pour-niamey',
      label: 'Proximité Locale',
      title: 'Pensé pour Niamey & le Niger',
      description: 'Un service de proximité clair et accessible, adapté aux réalités des réseaux Airtel, Moov et Zamani ainsi qu’aux solutions Mobile Money locales.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80',
      imageAlt: 'Commerce et connectivité mobile au Niger',
      whatsappMessage: 'Bonjour Abdul Business, je souhaite me renseigner sur vos services à Niamey.',
      ctaText: 'Nous contacter',
      highlight: '100% Niamey',
    },
    {
      id: 'paiement-confirme',
      label: 'Sécurité & Transparence',
      title: 'Paiement confirmé avant exécution',
      description: 'Le montant exact, le numéro bénéficiaire et le moyen de paiement sont confirmés ensemble avant que vous ne versiez le moindre franc.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
      imageAlt: 'Paiement mobile sécurisé par vérification WhatsApp',
      whatsappMessage: 'Bonjour Abdul Business, je voudrais connaître la procédure de paiement sécurisée.',
      ctaText: 'Vérifier la procédure',
      highlight: 'Zéro risque',
    },
    {
      id: 'assistance-humaine',
      label: 'Écoute & Disponibilité',
      title: 'Une vraie assistance humaine sur WhatsApp',
      description: 'Pas de robot impersonnel. Vous échangez directement avec un conseiller dédié qui suit votre demande pas à pas jusqu’à la réception du crédit.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop&q=80',
      imageAlt: 'Assistance client humaine et personnalisée sur WhatsApp',
      whatsappMessage: 'Bonjour Abdul Business, j’ai besoin d’une assistance personnalisée.',
      ctaText: 'Parler à un conseiller',
      highlight: 'Assistance dédiée',
    },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const target = scrollContainerRef.current.children[index] as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(slides.length - 1, activeIndex + 1);
    scrollToSlide(nextIdx);
  };

  return (
    <section id="storytelling-carousel-section" className="py-10 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-6 sm:p-10 shadow-xs">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
              Expérience Client
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-black">
              Pourquoi choisir Abdul Business ?
            </h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              id="carousel-prev-btn"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Diapositive précédente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-black hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              id="carousel-next-btn"
              onClick={handleNext}
              disabled={activeIndex === slides.length - 1}
              aria-label="Diapositive suivante"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-black hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          tabIndex={0}
          role="region"
          aria-label="Carousel de présentation Abdul Business"
          className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none focus:outline-none rounded-[2rem]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`story-slide-${index}`}
              className="w-full shrink-0 snap-start snap-always"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-[2rem] border border-gray-200/80 bg-gray-50/70">
                {/* Left Visual */}
                <div className="relative h-60 sm:h-72 lg:h-[360px] lg:col-span-6 overflow-hidden bg-gray-100">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-xs">
                      {slide.highlight}
                    </span>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {slide.label}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-black leading-tight mb-3">
                    {slide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {slide.description}
                  </p>

                  <div className="mt-auto pt-2 flex flex-wrap items-center gap-3">
                    <WhatsAppButton
                      id={`slide-wa-btn-${slide.id}`}
                      variant="dark"
                      size="sm"
                      label={slide.ctaText}
                      message={slide.whatsappMessage}
                      className="!rounded-full text-xs uppercase tracking-wider font-bold"
                    />

                    <span className="text-[11px] text-gray-400 font-medium">
                      Accompagnement 7j/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              id={`carousel-dot-${idx}`}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Aller au panneau ${idx + 1}`}
              aria-current={activeIndex === idx ? 'true' : 'false'}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-black'
                  : 'w-2 bg-gray-200 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
