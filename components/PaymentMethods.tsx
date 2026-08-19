'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  PhoneCall,
  Coins,
  Building2,
  Send,
  CreditCard,
  ShieldCheck,
  Info,
  CheckCircle,
} from 'lucide-react';
import { PAYMENT_METHODS } from '@/lib/constants';
import { WhatsAppButton } from './WhatsAppButton';
import { ScrollReveal } from './ScrollReveal';

export function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'PhoneCall':
        return PhoneCall;
      case 'Coins':
        return Coins;
      case 'Building2':
        return Building2;
      case 'Send':
        return Send;
      case 'CreditCard':
      default:
        return CreditCard;
    }
  };

  return (
    <section id="payment-methods-section" className="py-12 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
          Paiements &amp; Mobile Money
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black mb-3">
          Moyens de paiement acceptés selon confirmation Abdul Business
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Pour votre sécurité, chaque transaction fait l’objet d’une validation préalable sur WhatsApp. Aucun prélèvement direct ni formulaire bancaire non sécurisé sur le site.
        </p>
      </div>

      {/* Payment Grid - Bento Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {PAYMENT_METHODS.filter((m) => m.isActive).map((method, index) => {
          const Icon = getIcon(method.iconName);
          const isSelected = selectedMethod === method.id;

          return (
            <ScrollReveal
              key={method.id}
              delay={index * 60}
              direction="up"
              className="h-full"
            >
              <div
                id={`payment-channel-${method.id}`}
                onClick={() => setSelectedMethod(isSelected ? null : method.id)}
                className={`cursor-pointer h-full rounded-[2rem] border p-6 transition-all duration-200 bg-white ${
                  isSelected
                    ? 'border-black ring-1 ring-black shadow-md'
                    : 'border-gray-200/90 hover:border-gray-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-black">
                        {method.name}
                      </h3>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-700">
                        Confirmé
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      {method.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-gray-50 p-2.5 text-[11px] text-gray-500 border border-gray-100">
                      <Info className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                      <span className="leading-tight">{method.note}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Commercial Trust Guarantee Banner - Bento Card */}
      <div className="rounded-[2.5rem] border border-[#fed7aa] bg-[#fff7ed] p-6 sm:p-8 text-black shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-black flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              Règle Commerciale &amp; Transparence
            </h4>
            <p className="text-xs text-gray-700 max-w-2xl leading-relaxed">
              <strong>Des prix imbattables à votre disposition. Le montant final est confirmé avant paiement.</strong> Les services sont traités après confirmation du numéro, du montant et du moyen de paiement.
            </p>
          </div>

          <WhatsAppButton
            id="payment-banner-wa-btn"
            variant="dark"
            size="md"
            label="Vérifier un moyen de paiement"
            message="Bonjour Abdul Business, je voudrais connaître les moyens de paiement disponibles et confirmer votre numéro marchand."
            className="shrink-0 font-bold uppercase tracking-wider text-xs !rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
