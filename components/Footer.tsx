'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="pt-8 pb-12 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
      <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs">
        {/* Main Bento Grid Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight uppercase text-black">
                  Abdul <span className="text-[#F97316]">Business</span>
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {BUSINESS_CONFIG.slogan}
                </span>
              </div>
            </Link>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              Votre service de confiance à Niamey pour recharges d&apos;unités téléphoniques, forfaits Internet Airtel &amp; Moov et accessoires mobiles.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                id="footer-whatsapp-main-btn"
                variant="dark"
                size="sm"
                label="Discuter sur WhatsApp"
                className="!rounded-full text-xs font-bold uppercase tracking-wider !bg-black"
                message="Bonjour Abdul Business, je souhaite obtenir une assistance pour un service."
              />
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-black transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  Contact &amp; FAQ
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-black transition-colors">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
              Services Actifs
            </span>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>• Recharge Airtel &amp; Moov Niger</li>
              <li>• Forfaits Internet 4G / 3G</li>
              <li>• Câbles Type-C &amp; Lightning</li>
              <li>• Chargeurs rapides &amp; adaptateurs</li>
              <li>• Assistance Mobile Money</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
              Horaires &amp; Contact
            </span>
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-black shrink-0" />
                <span className="font-mono text-black font-bold">{BUSINESS_CONFIG.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-black shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 text-black shrink-0 mt-0.5" />
                <div>
                  <p>Semaine : {BUSINESS_CONFIG.hours.weekdays}</p>
                  <p>Week-end : {BUSINESS_CONFIG.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200/80 mb-6 text-xs text-gray-500 leading-relaxed">
          <p className="flex items-center gap-1.5 text-black font-bold uppercase tracking-wider text-[10px] mb-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Transparence tarifaire
          </p>
          <p className="text-[11px]">
            Des prix imbattables à votre disposition. Le montant final est confirmé avant paiement. Les services sont traités après confirmation du numéro, du montant et du moyen de paiement sur WhatsApp (+227 74 47 09 22).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-100 text-[11px] text-gray-400 uppercase font-bold tracking-widest">
          <p>© {currentYear} Abdul Business — Niamey, Niger.</p>
          <span className="text-black">{BUSINESS_CONFIG.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
