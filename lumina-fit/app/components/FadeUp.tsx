'use client';
import { useEffect, useRef, CSSProperties, ElementType } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: ElementType;
}

export default function FadeUp({ children, className = '', style, delay = 0, as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
