import type { Metadata } from 'next';
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const notoSerifJP = Noto_Serif_JP({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'LUMINA FIT — 女性専用パーソナルトレーニング',
  description:
    '女性専用のパーソナルトレーニングジム。専任トレーナーが体質・目標に合わせた完全オーダーメイドプログラムを提供します。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorantGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
