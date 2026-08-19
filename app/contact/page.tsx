'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  MapPin,
  Clock,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Send,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import { BUSINESS_CONFIG, FAQ_ITEMS, buildWhatsAppLink } from '@/lib/constants';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactService, setContactService] = useState('Recharge de crédit');
  const [contactMessage, setContactMessage] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const dynamicWaMessage = `Bonjour Abdul Business,
Je vous contacte depuis le site web :
- Nom : ${contactName ? contactName : '[Non renseigné]'}
- Numéro : ${contactPhone ? contactPhone : '[Non renseigné]'}
- Service : ${contactService}
- Message : ${contactMessage ? contactMessage : 'Je souhaite des informations générales.'}`;

  const whatsappFormUrl = buildWhatsAppLink(dynamicWaMessage);

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
          <span className="text-black">Contact &amp; FAQ</span>
        </nav>
      </div>

      {/* Header Banner - Bento Hero Card */}
      <section className="pt-4 pb-4 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs text-center">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
            Contact &amp; Assistance
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
            Parlons de vos besoins télécoms
          </h1>

          <p className="text-xs sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est basée à <strong className="text-black">Niamey</strong> et vous répond rapidement sur WhatsApp pour vos recharges, forfaits et accessoires.
          </p>
        </div>
      </section>

      {/* Main Content: Bento Grid Contact & Form */}
      <section className="py-6 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Info Cards (Bento style) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick WhatsApp Action Bento Card */}
            <div className="rounded-[2.5rem] bg-black text-white p-7 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Canal Prioritaire
                </span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">
                WhatsApp Officiel
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Le moyen le plus rapide pour obtenir une recharge, un forfait ou un devis d&apos;accessoire.
              </p>

              <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 mb-6">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block mb-1">
                  Numéro commercial Niamey
                </span>
                <span className="font-mono text-xl font-bold text-white tracking-wide">
                  {BUSINESS_CONFIG.phoneDisplay}
                </span>
              </div>

              <WhatsAppButton
                id="contact-page-direct-wa"
                variant="primary"
                size="md"
                label="Ouvrir WhatsApp (+227 74 47 09 22)"
                className="w-full justify-center !bg-white !text-black hover:!bg-gray-100 !rounded-full text-xs font-bold uppercase tracking-wider"
                message="Bonjour Abdul Business, je vous contacte pour une assistance."
              />
            </div>

            {/* Location & Hours Bento Card */}
            <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-7 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Localisation</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{BUSINESS_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Disponibilité</h4>
                  <p className="text-xs text-gray-500">Semaine : {BUSINESS_CONFIG.hours.weekdays}</p>
                  <p className="text-xs text-gray-500">Samedi : {BUSINESS_CONFIG.hours.saturday}</p>
                  <p className="text-xs text-gray-500">Dimanche : {BUSINESS_CONFIG.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled WhatsApp Message Builder */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-7 sm:p-10 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                    Formulaire Direct
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    Envoyer une Demande
                  </h3>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                      Votre Nom ou Prénom
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex : Moussa, Fatima"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 px-4 text-xs text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                      Numéro de Téléphone
                    </label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="Ex : +227 96 00 00 00"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 px-4 text-xs text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Nature de votre besoin
                  </label>
                  <select
                    value={contactService}
                    onChange={(e) => setContactService(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 px-4 text-xs text-black focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
                  >
                    <option value="Recharge de crédit">Recharge de crédit (Airtel, Moov, Zamani)</option>
                    <option value="Forfait Internet 4G">Forfait Internet 4G (Pass jour, semaine, mois)</option>
                    <option value="Accessoire boutique">Achat d&apos;accessoire (Câble, chargeur, écouteurs)</option>
                    <option value="Assistance Mobile Money">Assistance paiement Mobile Money</option>
                    <option value="Autre demande">Autre question ou partenariat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Détails ou précisions
                  </label>
                  <textarea
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Précisez votre demande, montant ou type d'accessoire souhaité..."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 px-4 text-xs text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                {/* Live WhatsApp message preview */}
                <div className="rounded-2xl bg-black p-4 text-white text-xs">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    Aperçu envoyé au +227 74 47 09 22 :
                  </span>
                  <pre className="whitespace-pre-wrap font-sans text-xs text-gray-300">
                    {dynamicWaMessage}
                  </pre>
                </div>

                <a
                  id="contact-form-send-wa"
                  href={whatsappFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-zinc-800 hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmettre sur WhatsApp</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section - Bento Style */}
      <section id="faq-section" className="py-8 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full mb-8">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
              Questions Fréquentes
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Tout savoir sur Abdul Business
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  id={`faq-item-${index}`}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/70 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-black hover:text-[#F97316] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-black' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-200/60 pt-3">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
