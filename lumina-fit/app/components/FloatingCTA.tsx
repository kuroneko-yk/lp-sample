'use client';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(120%)',
        zIndex: 90,
        transition: 'transform 0.4s ease',
        whiteSpace: 'nowrap',
      }}
    >
      <a
        href="#form"
        className="font-serif floating-cta-mobile"
        style={{
          display: 'block',
          background: 'var(--gold)',
          color: 'var(--black)',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 2,
          padding: '14px 36px',
          textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(192,160,176,0.3)',
          transition: 'background 0.3s',
        }}
      >
        無料カウンセリングを申し込む →
      </a>
    </div>
  );
}
