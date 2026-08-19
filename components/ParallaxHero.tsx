'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Zap, ShieldCheck, Wifi, MessageCircle, PhoneCall, Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { Card3D } from './Card3D';
import { ScrollReveal } from './ScrollReveal';

export function ParallaxHero() {
  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Bento Grid Layout with 3D Depth */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* Bento 1: Main Statement Card (col-span-2 row-span-2) */}
        <ScrollReveal variant="3d-card" className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full">
          <Card3D maxTilt={4} perspective={1200} className="h-full">
            <div className="bg-white border border-gray-200/90 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-xs relative overflow-hidden group h-full">
              {/* Subtle background glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-6 shadow-xs">
                  Disponible à Niamey · 7j/7
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black leading-[0.95] mb-5">
                  Rechargez.<br />
                  <span className="text-[#F97316]">Envoyez.</span><br />
                  Restez connecté.
                </h1>

                <p className="text-gray-500 text-base sm:text-lg max-w-md leading-relaxed mb-6">
                  Votre partenaire télécom de proximité à Niamey. Recharges d&apos;unités, forfaits Internet Airtel &amp; Moov, et accessoires garantis sans attente.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                <WhatsAppButton
                  id="hero-bento-primary-cta"
                  variant="primary"
                  size="md"
                  label="Commander sur WhatsApp"
                  message="Bonjour Abdul Business, je souhaite effectuer une commande immédiate de recharge ou forfait."
                  className="!bg-black hover:!bg-zinc-800 !text-white !rounded-full text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-xs"
                />

                <Link
                  href="/services"
                  id="hero-bento-secondary-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-wider text-black hover:bg-gray-100 hover:border-gray-300 transition-all active:scale-95"
                >
                  <span>Voir les services</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Card3D>
        </ScrollReveal>

        {/* Bento 2: Hero Visual Card (Commercial Telecom Photo in Niamey) */}
        <ScrollReveal variant="3d-flip" delay={80} className="md:col-span-2 lg:col-span-2 h-full">
          <Card3D maxTilt={5} perspective={1100} className="h-full">
            <div className="relative min-h-[220px] sm:min-h-[260px] h-full rounded-[2.5rem] overflow-hidden border border-gray-200/90 bg-gray-100 shadow-xs group">
              <Image
                src="/images/hero-telecom.jpg"
                alt="Abdul Business - Services télécoms et forfaits à Niamey"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                    Service Express Niamey
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  Airtel · Moov · Zamani · Mobile Money
                </h3>
              </div>
            </div>
          </Card3D>
        </ScrollReveal>

        {/* Bento 3: Metric / Assurance Card */}
        <ScrollReveal variant="3d-card" delay={120} className="h-full">
          <Card3D maxTilt={6} className="h-full">
            <div className="bg-white border border-gray-200/90 rounded-[2.5rem] p-7 sm:p-8 shadow-xs flex flex-col justify-center h-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                  100%
                </span>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>
              <span className="text-gray-400 uppercase text-[10px] font-bold tracking-widest">
                Validation Avant Paiement
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Zéro risque : le montant exact et le numéro sont vérifiés ensemble sur WhatsApp.
              </p>
            </div>
          </Card3D>
        </ScrollReveal>

        {/* Bento 4: Customer Promise / Testimonial Box */}
        <ScrollReveal variant="3d-card" delay={160} className="h-full">
          <Card3D maxTilt={6} className="h-full">
            <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between h-full">
              <div className="w-9 h-9 bg-[#ffedd5] text-[#c2410c] rounded-full flex items-center justify-center mb-2 shadow-2xs">
                <Zap className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed italic">
                « Des prix imbattables à votre disposition. Le montant final est confirmé avant paiement. »
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">
                Abdul Business · Niamey
              </span>
            </div>
          </Card3D>
        </ScrollReveal>

      </div>
    </section>
  );
}
