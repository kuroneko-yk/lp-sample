'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: '焙煎度合いは選べますか？',
    a: '初回設定時に簡単なフレーバープロフィールのアンケートにご回答いただきます。その結果をもとに、キュレーターがあなたの好みに合わせたライト、ミディアム、ダークローストを厳選します。',
  },
  {
    q: '配送をスキップすることは可能ですか？',
    a: 'はい、可能です。ダッシュボードから配送カレンダーを管理いただけます。手数料なしで、いつでも1ヶ月スキップしたり、一時停止したりすることができます。',
  },
  {
    q: '豆の産地はどこですか？',
    a: 'エチオピア、コロンビア、インドネシアなどの高地農家を中心に、世界中から調達しています。すべての収穫物は倫理的に取引され、品質基準を満たしたものです。',
  },
  {
    q: 'パッケージはリサイクル可能ですか？',
    a: 'はい。私たちのコーヒーバッグは堆肥化可能であり、配送ボックスは100%再生紙を使用し、植物性インクで印刷されています。',
  },
];

export default function CoffeeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section style={{ padding: '120px 32px', maxWidth: 768, margin: '0 auto' }}>
      {/* ヘッダー */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2
          style={{
            fontFamily: 'var(--font-noto-serif), serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.14,
            letterSpacing: '-0.01em',
            color: '#000',
            marginBottom: 16,
          }}
        >
          よくあるご質問
        </h2>
        <div style={{ height: 1, width: 96, background: '#755849', margin: '0 auto 32px' }} />
      </div>

      {/* アコーディオン */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            style={{ borderBottom: '1px solid #c4c7c7', paddingBottom: 24, marginBottom: 24 }}
          >
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                marginBottom: openIndex === i ? 16 : 0,
                textAlign: 'left',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-noto-serif), serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#000',
                  lineHeight: 1.4,
                  flex: 1,
                  paddingRight: 16,
                }}
              >
                {faq.q}
              </h4>
              <span
                className="material-symbols-outlined"
                style={{
                  color: '#444748',
                  fontSize: 24,
                  flexShrink: 0,
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                }}
              >
                add
              </span>
            </button>

            {openIndex === i && (
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: '#444748',
                }}
              >
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
