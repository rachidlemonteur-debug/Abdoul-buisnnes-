'use client';

import React from 'react';
import { Zap, Wifi, WalletCards, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export function TrustBanner() {
  const pillars = [
    {
      icon: Zap,
      title: 'Recharge rapide',
      subtitle: 'Instantané',
      desc: 'Crédit d’appel injecté sur votre numéro Airtel ou Moov dès confirmation.',
      badgeNumber: '01',
    },
    {
      icon: Wifi,
      title: 'Forfaits & Données',
      subtitle: 'Pass 4G/3G',
      desc: 'Activation rapide de vos gigas pour travailler et communiquer sans coupure.',
      badgeNumber: '02',
    },
    {
      icon: WalletCards,
      title: 'Paiement flexible',
      subtitle: 'Mobile Money',
      desc: 'Règlement via Airtel Money, Moov Money, Nita ou Amanah à Niamey.',
      badgeNumber: '03',
    },
    {
      icon: Users,
      title: 'Assistance humaine',
      subtitle: 'WhatsApp 7j/7',
      desc: 'Un interlocuteur réel qui vérifie chaque numéro avant l’exécution.',
      badgeNumber: '04',
    },
  ];

  return (
    <section id="trust-banner-section" className="py-6 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <ScrollReveal
              key={pillar.title}
              delay={index * 70}
              variant="3d-card"
              className="h-full"
            >
              <Card3D maxTilt={6} perspective={1000} className="h-full">
                <div className="group h-full rounded-[2rem] border border-gray-200/90 bg-white p-7 shadow-xs transition-shadow duration-300 hover:shadow-xl hover:border-gray-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Pilier {pillar.badgeNumber}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-black group-hover:text-[#F97316] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-2">
                      {pillar.subtitle}
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
