'use client';
import { useEffect, useState } from 'react';

export default function CoffeeNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '16px 32px' : '24px 32px',
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(196,199,199,0.2)',
        transition: 'padding 0.3s ease',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-noto-serif), serif',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#1c1c19',
        }}
      >
        キュレーターズ・ライブラリ
      </div>

      <div
        className="hidden md:flex"
        style={{ gap: 32, fontSize: 14, fontFamily: "'Work Sans', sans-serif" }}
      >
        <a
          href="#"
          style={{
            color: '#1c1c19',
            borderBottom: '1px solid #1c1c19',
            paddingBottom: 4,
            textDecoration: 'none',
          }}
        >
          ライブラリ
        </a>
        <a href="#features" style={{ color: '#747878', textDecoration: 'none' }}>
          サブスクリプション
        </a>
        <a href="#" style={{ color: '#747878', textDecoration: 'none' }}>
          ロースタリー
        </a>
        <a href="#" style={{ color: '#747878', textDecoration: 'none' }}>
          私たちの物語
        </a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <button
          aria-label="ショッピングバッグ"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#1c1c19', display: 'flex' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>shopping_bag</span>
        </button>
        <button
          style={{
            background: '#000',
            color: '#fff',
            padding: '8px 24px',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            fontFamily: "'Work Sans', sans-serif",
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = '#755849')}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = '#000')}
        >
          始める
        </button>
      </div>
    </nav>
  );
}
