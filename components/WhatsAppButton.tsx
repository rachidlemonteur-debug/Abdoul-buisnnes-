'use client';

import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { buildWhatsAppLink, BUSINESS_CONFIG } from '@/lib/constants';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'floating' | 'outline' | 'header' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  icon?: 'message' | 'send';
  className?: string;
  id?: string;
  subLabel?: string;
}

export function WhatsAppButton({
  message = 'Bonjour Abdul Business, je souhaite obtenir des informations sur vos services de recharge.',
  variant = 'primary',
  size = 'md',
  label = 'Commander sur WhatsApp',
  icon = 'message',
  className = '',
  id,
  subLabel,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppLink(message);

  if (variant === 'floating') {
    return (
      <aside aria-label="Assistance WhatsApp flottante">
        <a
          id={id || 'floating-whatsapp-btn'}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter Abdul Business sur WhatsApp"
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-black px-5 py-3.5 text-white shadow-xl hover:scale-105 transition-all duration-300 border border-zinc-800 focus:outline-none focus:ring-4 focus:ring-black/20 active:scale-95 ${className}`}
        >
          <div className="relative flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <MessageCircle className="h-4 w-4 fill-current" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-wider leading-tight">WhatsApp Direct</span>
            <span className="text-[10px] text-gray-400 font-medium">Réponse rapide</span>
          </div>
        </a>
      </aside>
    );
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5 font-bold uppercase tracking-wider rounded-full',
    md: 'px-6 py-3 text-xs sm:text-sm gap-2 font-bold uppercase tracking-wider rounded-full',
    lg: 'px-8 py-4 text-sm sm:text-base gap-2.5 font-bold uppercase tracking-wider rounded-full',
  };

  const variantClasses = {
    primary:
      'bg-black hover:bg-zinc-800 text-white shadow-xs hover:scale-105 active:scale-95',
    secondary:
      'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xs hover:scale-105 active:scale-95',
    dark:
      'bg-black hover:bg-zinc-800 text-white shadow-xs hover:scale-105 active:scale-95',
    outline:
      'border border-gray-300 bg-white hover:bg-gray-50 text-black shadow-xs hover:scale-105 active:scale-95',
    header:
      'bg-black hover:bg-zinc-800 text-white shadow-xs hover:scale-105 active:scale-95 text-xs px-4 py-2',
  };

  const IconComponent = icon === 'send' ? Send : MessageCircle;

  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} - Abdul Business (+227 74 47 09 22)`}
      className={`inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <IconComponent className={size === 'sm' ? 'h-3.5 w-3.5 shrink-0' : 'h-4 w-4 shrink-0'} />
      <span className="whitespace-nowrap">{label}</span>
      {subLabel && (
        <span className="ml-1 text-[10px] opacity-75 font-normal">({subLabel})</span>
      )}
    </a>
  );
}
