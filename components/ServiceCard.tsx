'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { ScrollReveal } from './ScrollReveal';
import { Card3D } from './Card3D';

export interface ServiceCardData {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  ctaText: string;
  internalLink?: string;
}

interface ServiceCardProps {
  service: ServiceCardData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <ScrollReveal delay={index * 100} variant="3d-flip" className="h-full">
      <Card3D maxTilt={5} perspective={1100} className="h-full">
        <article
          id={`service-card-${service.id}`}
          className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-gray-200/90 bg-white p-7 sm:p-8 shadow-xs transition-shadow duration-300 hover:shadow-xl hover:border-gray-300"
        >
          {/* Top Header Pill */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-2xs">
              {service.badge}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              0{index + 1}
            </span>
          </div>

          {/* Image Container with Rounded Corners & 3D Depth */}
          <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-100 mb-5 shadow-2xs">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              referrerPolicy="no-referrer"
              className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            />
          </div>

          {/* Content Body */}
          <div className="flex flex-1 flex-col">
            <h3 className="text-xl font-extrabold tracking-tight text-black group-hover:text-[#F97316] transition-colors mb-2">
              {service.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Key Highlights Checklist */}
            <ul className="mb-6 space-y-2 text-xs text-gray-700">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-100 text-black">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            {/* Actions & WhatsApp CTA */}
            <div className="mt-auto space-y-2.5 pt-4 border-t border-gray-100">
              <WhatsAppButton
                id={`service-card-wa-btn-${service.id}`}
                variant="dark"
                size="md"
                label={service.ctaText}
                message={service.whatsappMessage}
                className="w-full justify-center text-center font-bold uppercase tracking-wider text-xs !rounded-full !bg-black hover:!bg-zinc-800"
              />

              {service.internalLink && (
                <Link
                  href={service.internalLink}
                  className="inline-flex w-full items-center justify-center gap-1.5 py-1 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                >
                  <span>Configurer les options</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </article>
      </Card3D>
    </ScrollReveal>
  );
}
