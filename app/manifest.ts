import { MetadataRoute } from 'next';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abdul Business - Services Télécoms Niamey',
    short_name: 'Abdul Business',
    description:
      'Recharge de crédit, forfaits Internet et accessoires télécoms à Niamey avec confirmation WhatsApp directe.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      {
        src: 'https://picsum.photos/seed/abdulicon192/192/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://picsum.photos/seed/abdulicon512/512/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
