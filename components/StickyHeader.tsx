'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, PhoneCall, Zap, Wifi, ShoppingBag, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { WhatsAppButton } from './WhatsAppButton';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll only when mobile menu is actively open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Contact & FAQ', href: '/contact' },
    { name: 'À Propos', href: '/a-propos' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/90 shadow-xs py-3'
            : 'bg-[#f8f9fa]/90 backdrop-blur-xs py-3.5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">
          {/* Brand Logo - Bento Style */}
          <Link
            href="/"
            id="header-brand-logo"
            onClick={handleLinkClick}
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-black rounded-xl p-1"
          >
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xs transition-transform duration-200 group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight uppercase text-black">
                  Abdul <span className="text-[#F97316]">Business</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-black text-white text-[9px] uppercase font-bold tracking-widest rounded-full">
                  Niamey
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-wide text-gray-500 uppercase">
                {BUSINESS_CONFIG.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Pill Bento Style */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-1 bg-white border border-gray-200/90 rounded-full px-3 py-1.5 shadow-xs"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white shadow-xs'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Header Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+22774470922"
              className="text-xs font-bold text-gray-600 hover:text-black flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5 text-black" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <WhatsAppButton
              id="header-whatsapp-cta"
              variant="primary"
              size="sm"
              label="WhatsApp"
              className="!bg-black hover:!bg-zinc-800 !text-white !rounded-full text-xs font-bold uppercase tracking-wider shadow-xs px-4 py-2"
              message="Bonjour Abdul Business, je souhaite effectuer une commande de recharge ou de service."
            />
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <WhatsAppButton
              id="mobile-header-quick-wa"
              variant="secondary"
              size="sm"
              label="WhatsApp"
              className="px-3 py-1.5 text-[11px] font-bold uppercase rounded-full"
              message="Bonjour Abdul Business, j'ai une question rapide."
            />
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileMenuOpen}
              className="rounded-full bg-white border border-gray-200 p-2.5 text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer shadow-2xs"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Clickable Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-nav-drawer"
            className="fixed inset-x-4 top-16 max-h-[calc(100vh-80px)] overflow-y-auto border border-gray-200 bg-white p-6 rounded-[2.5rem] shadow-2xl transition-all duration-300 z-50"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-600 text-[10px]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Service Actif à Niamey
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`mobile-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-black text-white shadow-xs'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600 px-1 font-mono font-bold">
                <span>Appel direct :</span>
                <a href="tel:+22774470922" className="text-black underline">{BUSINESS_CONFIG.phoneDisplay}</a>
              </div>

              <WhatsAppButton
                id="mobile-drawer-wa-btn"
                variant="primary"
                size="md"
                className="w-full justify-center !rounded-full font-bold uppercase tracking-wider text-xs !bg-black text-white"
                label="Commander sur WhatsApp (+227 74 47 09 22)"
                message="Bonjour Abdul Business, je souhaite passer une commande."
              />
              <p className="text-center text-[10px] uppercase font-bold tracking-widest text-gray-400">
                {BUSINESS_CONFIG.slogan} · Niamey, Niger
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
