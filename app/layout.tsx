import type { Metadata, Viewport } from 'next';
import './globals.css';
import { StickyHeader } from '@/components/StickyHeader';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { BUSINESS_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} | Recharge Téléphonique, Forfaits Internet & Accessoires à Niamey`,
  description:
    'Abdul Business à Niamey (Niger) : recharge rapide de crédit Airtel, Moov et Zamani, forfaits Internet 4G/3G, assistance aux paiements et accessoires mobiles de qualité avec confirmation directe sur WhatsApp.',
  keywords: [
    'Abdul Business',
    'Recharge crédit Niamey',
    'Forfait Internet Niger',
    'Airtel Niger crédit',
    'Moov Africa Niger data',
    'Zamani Telecom',
    'Airtel Money Niamey',
    'Moov Money Flooz',
    'Accessoires téléphone Niamey',
    'Câble type C Niamey',
  ],
  authors: [{ name: 'Abdul Business' }],
  openGraph: {
    title: 'Abdul Business | Simple · fiable · sécurisé - Niamey, Niger',
    description:
      'Recharges de crédit téléphonique, forfaits data et accessoires mobiles en un clic avec assistance WhatsApp directe (+227 74 47 09 22).',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Abdul Business',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Business | Services Télécoms & Forfaits à Niamey',
    description:
      'Recharges d’unités, forfaits Internet Airtel & Moov et accessoires à Niamey avec confirmation WhatsApp.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F172A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-orange-500 selection:text-white"
      >
        <StickyHeader />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton
          variant="floating"
          message="Bonjour Abdul Business, je souhaite effectuer une commande de recharge ou obtenir des informations."
        />
      </body>
    </html>
  );
}
