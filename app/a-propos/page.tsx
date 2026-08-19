'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Zap, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function AProposPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Transparence & Sécurité',
      desc: 'Aucun frais caché ni prélèvement imprévu. Les tarifs sont convenus avant tout envoi.',
    },
    {
      icon: Zap,
      title: 'Réactivité Locale',
      desc: 'Un traitement immédiat des recharges pour que vous restiez joignable en toute circonstance.',
    },
    {
      icon: HeartHandshake,
      title: 'Relation de Confiance',
      desc: 'Un interlocuteur dédié qui comprend vos contraintes et vous conseille sur le meilleur forfait.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#1a1a1a] pt-20">
      {/* Header Hero Banner - Bento Style */}
      <section className="pt-8 pb-4 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs text-center">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
            Notre Histoire
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
            À Propos d&apos;Abdul Business
          </h1>

          <p className="text-xs sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
            Votre guichet unique de proximité à <strong className="text-black">Niamey</strong> pour simplifier vos recharges, vos forfaits 4G et vos accessoires mobiles.
          </p>
        </div>
      </section>

      {/* Main Narrative - Bento Grid */}
      <section className="py-8 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Story Narrative Card */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                Vision &amp; Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-4">
                Connecter les citoyens de Niamey en toute simplicité
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Dans un monde où rester joignable est devenu indispensable pour le travail, la famille et les transactions du quotidien, <strong>Abdul Business</strong> s&apos;est donné pour mission de rendre l&apos;accès aux recharges d&apos;unités et forfaits de données le plus fluide et rassurant possible.
                </p>
                <p>
                  Finies les hésitations sur les codes USSD ou les difficultés de paiement en ligne. Grâce à notre canal direct sur WhatsApp, nous offrons un accompagnement humain et personnalisé pour chaque abonné au Niger (Airtel, Moov, Zamani).
                </p>
                <p className="font-semibold text-black italic">
                  « {BUSINESS_CONFIG.slogan} »
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                id="apropos-story-wa-btn"
                variant="dark"
                size="md"
                label="Contacter le fondateur"
                className="!rounded-full text-xs font-bold uppercase tracking-wider"
                message="Bonjour Abdul Business, je souhaite échanger avec vous."
              />
              <span className="text-xs text-gray-400 font-mono">
                {BUSINESS_CONFIG.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Side Image Card */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-gray-200/90 bg-gray-100 shadow-xs">
            <Image
              src="https://picsum.photos/seed/abdulabout/800/1000"
              alt="Services télécoms Abdul Business à Niamey Niger"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300 mb-1">
                Ancrage Local
              </span>
              <p className="text-sm font-bold">
                Présent au cœur de Niamey, Niger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Bento Grid */}
      <section className="py-8 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full mb-8">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
              Nos Piliers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Les engagements d&apos;Abdul Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="rounded-[2rem] border border-gray-200/80 bg-gray-50/70 p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-black mb-2">{v.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
