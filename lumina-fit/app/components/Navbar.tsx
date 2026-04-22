'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '14px 24px' : '20px 24px',
        background: scrolled ? 'rgba(10,8,6,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(192,160,176,0.2)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.4s, padding 0.4s, border-bottom 0.4s',
      }}
    >
      <a
        href="#hero"
        className="font-serif"
        style={{
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 6,
          color: 'var(--white)',
          textDecoration: 'none',
        }}
      >
        LUMINA<span style={{ color: 'var(--gold)' }}>.</span>FIT
      </a>
      <a
        href="#form"
        className="nav-cta-link"
        style={{
          fontSize: 11,
          letterSpacing: 2,
          color: 'var(--gold)',
          border: '1px solid var(--gold)',
          padding: '8px 20px',
          textDecoration: 'none',
        }}
      >
        無料カウンセリング
      </a>
    </nav>
  );
}
