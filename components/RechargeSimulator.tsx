'use client';

import React, { useState } from 'react';
import { Phone, Zap, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { TELECOM_OPERATORS, buildWhatsAppLink } from '@/lib/constants';

export function RechargeSimulator() {
  const [operator, setOperator] = useState('airtel');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');

  const quickAmounts = ['500', '1000', '2000', '5000', '10000'];

  const selectedOpObj = TELECOM_OPERATORS.find((o) => o.id === operator) || TELECOM_OPERATORS[0];
  const finalAmount = customAmount ? customAmount : amount;

  const generatedMessage = `Bonjour Abdul Business,
Je souhaite commander une recharge de crédit téléphonique :
- Opérateur : ${selectedOpObj.name}
- Numéro à créditer : ${phoneNumber ? phoneNumber : '[À renseigner]'}
- Montant souhaité : ${finalAmount ? `${finalAmount} FCFA` : 'Non précisé'}
Merci de me confirmer le montant exact et vos coordonnées de paiement Mobile Money.`;

  const whatsappUrl = buildWhatsAppLink(generatedMessage);

  return (
    <div
      id="recharge-simulator-card"
      className="rounded-[2.5rem] border border-gray-200/90 bg-white p-7 sm:p-10 shadow-xs"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
          <Zap className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
            Calculateur Instantané
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
            Demande de Recharge
          </h3>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Choose Operator */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">
            1. Choisissez l&apos;opérateur mobile au Niger
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {TELECOM_OPERATORS.map((op) => {
              const isSelected = operator === op.id;
              return (
                <button
                  type="button"
                  key={op.id}
                  id={`operator-btn-${op.id}`}
                  onClick={() => setOperator(op.id)}
                  className={`flex flex-col items-center justify-center rounded-2xl border p-3.5 text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-black bg-black text-white shadow-xs font-bold'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-bold">{op.name.split(' ')[0]}</span>
                  <span className={`text-[10px] font-normal ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
                    {op.name.includes('Airtel') ? 'Airtel' : op.name.includes('Moov') ? 'Moov' : 'Zamani'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Phone Number */}
        <div>
          <label htmlFor="recharge-phone-input" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            2. Numéro de téléphone bénéficiaire
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
              <Phone className="h-4 w-4" />
            </div>
            <input
              id="recharge-phone-input"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Ex : +227 96 12 34 56"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 pl-10 pr-4 text-sm text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <p className="mt-1.5 text-[11px] text-gray-400">
            Vérifiez attentivement le numéro avant d&apos;envoyer votre message WhatsApp.
          </p>
        </div>

        {/* Step 3: Amount */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">
            3. Montant de la recharge (FCFA)
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {quickAmounts.map((q) => (
              <button
                type="button"
                key={q}
                id={`amount-chip-${q}`}
                onClick={() => {
                  setAmount(q);
                  setCustomAmount('');
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  amount === q && !customAmount
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {parseInt(q).toLocaleString('fr-FR')} F
              </button>
            ))}
          </div>

          <input
            id="recharge-custom-amount-input"
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Ou saisissez un autre montant personnalisé (ex: 3500)"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-2.5 text-xs text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Security Warning Notice - Bento Box */}
        <div className="flex items-start gap-3 rounded-2xl bg-[#fff7ed] p-4 border border-[#fed7aa] text-amber-950">
          <ShieldAlert className="h-4 w-4 shrink-0 text-[#c2410c] mt-0.5" />
          <p className="text-xs leading-relaxed">
            <strong>Sécurité garantie :</strong> Ne communiquez <u>jamais</u> de code PIN ou mot de passe. Abdul Business confirme le numéro marchand officiel avant tout transfert.
          </p>
        </div>

        {/* Generated Message Preview - Bento Dark Card */}
        <div className="rounded-2xl bg-black p-4 text-white text-xs">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Aperçu de la transmission WhatsApp :
          </span>
          <pre className="whitespace-pre-wrap font-sans text-xs text-gray-300">
            {generatedMessage}
          </pre>
        </div>

        {/* Primary Dispatch CTA */}
        <a
          id="send-recharge-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-zinc-800 hover:scale-[1.01] transition-all cursor-pointer"
        >
          <span>Envoyer la demande sur WhatsApp</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
