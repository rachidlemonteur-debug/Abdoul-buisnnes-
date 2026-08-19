'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Check, ShieldCheck, MapPin, Sparkles, Filter, ArrowLeft } from 'lucide-react';
import { BOUTIQUE_PRODUCTS, BUSINESS_CONFIG } from '@/lib/constants';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les produits' },
    { id: 'cables', label: 'Câbles de charge' },
    { id: 'chargeurs', label: 'Chargeurs rapides' },
    { id: 'adaptateurs', label: 'Adaptateurs & Hubs' },
    { id: 'ecouteurs', label: 'Écouteurs & Audio' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? BOUTIQUE_PRODUCTS
      : BOUTIQUE_PRODUCTS.filter((p) => p.category === selectedCategory);

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
          <span className="text-black">Boutique Accessoires</span>
        </nav>
      </div>

      {/* Header Banner - Bento Style */}
      <section className="pt-4 pb-4 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="rounded-[2.5rem] bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs text-center">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-3 shadow-xs">
            Boutique Locale · Niamey
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
            Accessoires Mobiles &amp; Câbles
          </h1>

          <p className="text-xs sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
            Découvrez nos accessoires fiables et testés pour vos smartphones Android et iPhone. Retrait et remise rapide convenus à Niamey via WhatsApp.
          </p>

          {/* Category Filter - Bento Pill Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Bento Cards */}
      <section className="py-6 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 50} direction="up" className="h-full">
              <div
                id={`product-card-${product.id}`}
                className="group flex h-full flex-col rounded-[2.5rem] border border-gray-200/90 bg-white p-7 shadow-xs hover:shadow-md transition-all duration-300 hover:border-gray-300"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {product.badge}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                    En Stock Niamey
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-48 w-full bg-gray-100 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Abdul Business Niamey`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="text-base font-bold text-black mb-1 group-hover:text-[#F97316] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="font-medium text-[11px] text-gray-400">{product.priceNote}</span>
                      <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-wider">Garanti</span>
                    </div>

                    <WhatsAppButton
                      id={`boutique-product-wa-${product.id}`}
                      variant="dark"
                      size="sm"
                      label="Demander sur WhatsApp"
                      className="w-full justify-center !rounded-full text-xs font-bold uppercase tracking-wider"
                      message={`Bonjour Abdul Business, je souhaite obtenir des informations et commander le produit : ${product.name}. Pouvez-vous me confirmer le tarif exact et les modalités de retrait à Niamey ?`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Boutique Policy Notice - Bento Card */}
      <section className="py-6 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full mb-8">
        <div className="rounded-[2.5rem] border border-gray-200/90 bg-white p-7 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Qualité Contrôlée</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Tous les câbles et chargeurs sont inspectés pour garantir la sécurité de votre batterie.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Remise à Niamey</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Point de rencontre ou coursier convenu directement sur WhatsApp selon votre localisation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-1">Prix Confirmé</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Des prix imbattables à votre disposition. Le montant final est confirmé avant paiement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
