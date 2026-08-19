'use client';

import React, { useState } from 'react';
import { Wifi, Sparkles, Check, ArrowRight } from 'lucide-react';
import { DATA_PASS_OPTIONS, TELECOM_OPERATORS, buildWhatsAppLink } from '@/lib/constants';

export function ForfaitSimulator() {
  const [operator, setOperator] = useState<'airtel' | 'moov' | 'zamani'>('airtel');
  const [selectedPassId, setSelectedPassId] = useState<string>('airtel_pass_semaine');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialNeed, setSpecialNeed] = useState('');

  const filteredPasses = DATA_PASS_OPTIONS.filter((p) => p.operatorId === operator);
  const currentPass = DATA_PASS_OPTIONS.find((p) => p.id === selectedPassId) || filteredPasses[0];
  const selectedOpObj = TELECOM_OPERATORS.find((o) => o.id === operator) || TELECOM_OPERATORS[0];

  const generatedMessage = `Bonjour Abdul Business,
Je souhaite commander un forfait Internet :
- Opérateur : ${selectedOpObj.name}
- Type de forfait : ${currentPass ? `${currentPass.name} (${currentPass.volume} - ${currentPass.validity})` : 'À définir'}
- Numéro bénéficiaire : ${phoneNumber ? phoneNumber : '[À préciser]'}
${specialNeed ? `- Précision besoin : ${specialNeed}` : ''}
Merci de me confirmer la grille tarifaire exacte et les modalités de règlement.`;

  const whatsappUrl = buildWhatsAppLink(generatedMessage);

  const handleOperatorChange = (opId: 'airtel' | 'moov' | 'zamani') => {
    setOperator(opId);
    const firstPass = DATA_PASS_OPTIONS.find((p) => p.operatorId === opId);
    if (firstPass) setSelectedPassId(firstPass.id);
  };

  return (
    <div
      id="forfait-simulator-card"
      className="rounded-[2.5rem] border border-gray-200/90 bg-white p-7 sm:p-10 shadow-xs"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
          <Wifi className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
            Configurateur Data
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
            Forfaits Internet 4G/3G
          </h3>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Operator selector */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">
            1. Réseau mobile
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {TELECOM_OPERATORS.map((op) => (
              <button
                type="button"
                key={op.id}
                id={`forfait-op-btn-${op.id}`}
                onClick={() => handleOperatorChange(op.id as 'airtel' | 'moov' | 'zamani')}
                className={`py-3 px-3 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  operator === op.id
                    ? 'border-black bg-black text-white shadow-xs'
                    : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {op.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Pass options */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">
            2. Sélectionnez la formule de forfait
          </label>
          <div className="space-y-2.5">
            {filteredPasses.map((pass) => {
              const isSelected = selectedPassId === pass.id;
              return (
                <div
                  key={pass.id}
                  id={`pass-option-${pass.id}`}
                  onClick={() => setSelectedPassId(pass.id)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                    isSelected
                      ? 'border-black bg-gray-50 ring-1 ring-black shadow-xs'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-black">{pass.name}</span>
                      {pass.popular && (
                        <span className="rounded-full bg-black px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                          Populaire
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-extrabold text-black bg-gray-100 px-3 py-1 rounded-full">
                      {pass.volume}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-xs text-gray-500">
                    <span>Validité : {pass.validity}</span>
                    <span className="text-[11px] italic">{pass.recommendedUse}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Phone number */}
        <div>
          <label htmlFor="forfait-phone-input" className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            3. Numéro de la puce à activer
          </label>
          <input
            id="forfait-phone-input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ex : +227 96 XX XX XX"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-3 px-4 text-sm text-black placeholder:text-gray-400 focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Message preview */}
        <div className="rounded-2xl bg-black p-4 text-white text-xs">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
            Message WhatsApp pré-généré :
          </span>
          <pre className="whitespace-pre-wrap font-sans text-xs text-gray-300">
            {generatedMessage}
          </pre>
        </div>

        {/* Action Button */}
        <a
          id="send-forfait-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-zinc-800 hover:scale-[1.01] transition-all cursor-pointer"
        >
          <span>Demander l&apos;activation sur WhatsApp</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
