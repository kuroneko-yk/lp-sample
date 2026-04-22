'use client';
import { useState } from 'react';
import FadeUp from './FadeUp';

const faqs = [
  {
    q: '運動が苦手・初心者でも大丈夫ですか？',
    a: 'もちろんです。会員の約60%が運動初心者の方です。トレーナーが現在の体力・運動歴に合わせて、無理のないところから丁寧に指導します。',
  },
  {
    q: 'カウンセリングに費用はかかりますか？',
    a: '完全無料です。入会を強制することも一切ありません。「まず話を聞いてみたい」という方も大歓迎です。',
  },
  {
    q: '厳しい食事制限は必要ですか？',
    a: '厳しい制限はありません。現在の食生活をベースに、少しずつ改善していく方法をご提案します。食事を楽しみながら痩せることを大切にしています。',
  },
  {
    q: '仕事や育児で忙しくても通えますか？',
    a: '早朝・夜間も対応しています。週1回から始められるコースもございます。また、セッションの振替も柔軟に対応いたします。',
  },
  {
    q: 'トレーナーは女性ですか？',
    a: '全トレーナーが女性です。体のことを話すのが恥ずかしい方も安心してご相談ください。',
  },
  {
    q: '途中でコースをやめることはできますか？',
    a: '月ごとの契約のため、いつでも退会できます。長期契約の縛りはありませんのでご安心ください。',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">FAQ</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            よくある<span style={{ color: 'var(--gold)' }}>ご質問</span>
          </h2>
        </FadeUp>

        <FadeUp style={{ marginTop: 48, borderTop: '1px solid rgba(192,160,176,0.1)' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(192,160,176,0.1)' }}>
                <button
                  className="font-serif"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: isOpen ? 'var(--gold)' : 'var(--white)',
                    fontSize: 15,
                    fontWeight: 700,
                    textAlign: 'left',
                    padding: '22px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) (e.currentTarget as HTMLElement).style.color = 'var(--white)';
                  }}
                >
                  {faq.q}
                  <span
                    className="font-garamond"
                    style={{
                      fontSize: 20,
                      color: 'var(--gold)',
                      flexShrink: 0,
                      transition: 'transform 0.3s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <div
                    style={{
                      paddingBottom: 20,
                      fontSize: 13,
                      color: 'var(--gray)',
                      lineHeight: 1.9,
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </FadeUp>
      </div>
    </section>
  );
}
