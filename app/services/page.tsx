'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Wifi,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { RechargeSimulator } from '@/components/RechargeSimulator';
import { ForfaitSimulator } from '@/components/ForfaitSimulator';
import { PaymentMethods } from '@/components/PaymentMethods';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TELECOM_OPERATORS } from '@/lib/constants';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'recharge' | 'forfaits' | 'paiement'>('recharge');

  const steps = [
    {
      step: '01',
      title: 'Choix de l’opération',
      desc: 'Sélectionnez votre opérateur (Airtel, Moov, Zamani), indiquez le numéro et le montant ou forfait souhaité.',
    },
    {
      step: '02',
      title: 'Envoi sur WhatsApp',
      desc: 'Cliquez sur le bouton pour transmettre automatiquement votre demande structurée à notre équipe.',
    },
    {
      step: '03',
      title: 'Confirmation humaine',
      desc: 'Abdul Business valide la disponibilité, le tarif exact et vous indique le compte de paiement officiel.',
    },
    {
      step: '04',
      title: 'Exécution instantanée',
      desc: 'Dès validation de votre transfert, votre compte est crédité et nous vous envoyons la confirmation.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#1a1a1a] pt-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 pt-4 w-full">
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Accueil</span>
          </Link>
          <span>/</span>
          <span className="text-black">Services Télécoms</span>
        </nav>
      </div>

      {/* Header Banner - Bento Hero Card */}
      <section className="pt-4 pb-4 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs text-center">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
            Catalogue Télécom
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
            Recharges de Crédit &amp; Forfaits Data
          </h1>

          <p className="text-xs sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
            Profitez d’un service rapide, sécurisé et personnalisé pour tous vos besoins de communication mobile à <strong className="text-black">Niamey</strong>.
          </p>

          {/* Tab navigation - Bento Pill Switcher */}
          <div className="inline-flex p-1 bg-gray-100 border border-gray-200 rounded-full shadow-xs max-w-full overflow-x-auto">
            <button
              type="button"
              id="services-tab-recharge"
              onClick={() => setActiveTab('recharge')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'recharge'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Recharge de Crédit</span>
            </button>

            <button
              type="button"
              id="services-tab-forfaits"
              onClick={() => setActiveTab('forfaits')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'forfaits'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Wifi className="h-3.5 w-3.5" />
              <span>Forfaits Internet</span>
            </button>

            <button
              type="button"
              id="services-tab-paiement"
              onClick={() => setActiveTab('paiement')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'paiement'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Moyens de Paiement</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Content */}
      <section className="py-6 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="mx-auto max-w-5xl">
          {activeTab === 'recharge' && (
            <ScrollReveal direction="up">
              <div className="space-y-6">
                <RechargeSimulator />

                {/* Operators Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {TELECOM_OPERATORS.map((op) => (
                    <div
                      key={op.id}
                      className="rounded-[2rem] border border-gray-200/90 bg-white p-6 shadow-xs"
                    >
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-black mb-3">
                        {op.badge}
                      </span>
                      <h3 className="text-base font-bold text-black">{op.name}</h3>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{op.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {activeTab === 'forfaits' && (
            <ScrollReveal direction="up">
              <div className="space-y-6">
                <ForfaitSimulator />
              </div>
            </ScrollReveal>
          )}

          {activeTab === 'paiement' && (
            <ScrollReveal direction="up">
              <PaymentMethods />
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* How it works (Processus en 4 étapes) - Bento Grid */}
      <section className="py-8 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full mb-8">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
              Processus Simple
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Comment s&apos;effectue une commande chez Abdul Business ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-gray-200/80 bg-gray-50/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-black text-white font-mono font-bold text-xs flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <WhatsAppButton
              id="services-process-wa-btn"
              variant="dark"
              size="lg"
              label="Démarrer ma commande sur WhatsApp"
              className="!rounded-full text-xs font-bold uppercase tracking-wider"
              message="Bonjour Abdul Business, je souhaite effectuer une commande de recharge ou forfait."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
