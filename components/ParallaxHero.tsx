'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Zap, ShieldCheck, Wifi, MessageCircle, PhoneCall, Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function ParallaxHero() {
  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto"
    >
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* Bento 1: Main Statement Card (col-span-2 row-span-2) */}
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white border border-gray-200/90 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-xs relative overflow-hidden group">
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

        {/* Bento 2: Metric / Assurance Card */}
        <div className="bg-white border border-gray-200/90 rounded-[2.5rem] p-7 sm:p-8 shadow-xs flex flex-col justify-center">
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

        {/* Bento 3: Tech Stack / Network Operator Stack */}
        <div className="bg-black text-white rounded-[2.5rem] p-7 sm:p-8 shadow-xs flex flex-col justify-center text-center">
          <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3">
            Réseaux &amp; Télécoms
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-zinc-800 text-gray-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Airtel Niger
            </span>
            <span className="bg-zinc-800 text-gray-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Moov Africa
            </span>
            <span className="bg-zinc-800 text-gray-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Zamani
            </span>
            <span className="bg-zinc-800 text-gray-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Mobile Money
            </span>
          </div>
        </div>

        {/* Bento 4: Featured Service Mini-Card (row-span-2) */}
        <div className="bg-[#eef1f5] border border-slate-200/80 rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden lg:row-span-2">
          <div className="relative z-10">
            <span className="inline-block px-2.5 py-0.5 bg-white text-gray-800 text-[9px] uppercase font-bold tracking-widest rounded-full mb-3 border border-gray-200 shadow-2xs">
              Service Vedette
            </span>
            <h3 className="font-extrabold text-xl sm:text-2xl text-black tracking-tight mb-2">
              Forfaits Data 4G
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Pass jour, semaine &amp; mois avec activation rapide sans composer de code complexe.
            </p>
          </div>

          {/* Floating UI visual representation */}
          <div className="mt-6 bg-white rounded-2xl p-4 shadow-md border border-gray-200/80 flex flex-col gap-2.5 relative z-10 transition-transform duration-300 hover:scale-102">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-black">Airtel / Moov</span>
              <span className="text-[9px] font-extrabold text-white bg-[#F97316] px-2 py-0.5 rounded-full uppercase">
                Actif
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
              <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
            </div>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-700">
              <span>Pass 2.5 Go à 30 Go</span>
              <span className="text-emerald-600">Dispo</span>
            </div>
          </div>
        </div>

        {/* Bento 5: Customer Promise / Testimonial Box */}
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-[2.5rem] p-7 sm:p-8 flex flex-col justify-between">
          <div className="w-9 h-9 bg-[#ffedd5] text-[#c2410c] rounded-full flex items-center justify-center mb-2">
            <Zap className="w-4 h-4" />
          </div>
          <p className="text-xs font-semibold text-gray-800 leading-relaxed italic">
            « Des prix imbattables à votre disposition. Le montant final est confirmé avant paiement. »
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">
            Abdul Business · Niamey
          </span>
        </div>

        {/* Bento 6: Direct Project / WhatsApp Call to Action Card (col-span-2) */}
        <div className="md:col-span-2 lg:col-span-2 bg-white border border-gray-200/90 rounded-[2.5rem] p-7 sm:p-8 flex items-center justify-between shadow-xs group hover:border-gray-300 transition-all">
          <div className="flex flex-col pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                Commande Directe
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
              Besoin d’un service immédiat ?
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm">
              Discutez directement avec notre conseiller sur WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/22774470922?text=Bonjour%20Abdul%20Business%2C%20je%20souhaite%20effectuer%20une%20commande."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Abdul Business sur WhatsApp (+227 74 47 09 22)"
            className="bg-black text-white w-14 h-14 rounded-full shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-md cursor-pointer"
          >
            <ArrowUpRight className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
