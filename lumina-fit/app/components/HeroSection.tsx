import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <div className="hero-bg" />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          background:
            'linear-gradient(to bottom, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.0) 30%, rgba(10,8,6,0.7) 75%, rgba(10,8,6,0.96) 100%)',
        }}
      >
        <div
          className="hero-photo-corner"
          style={{
            width: '55%',
            height: '90%',
            marginRight: '4%',
            marginTop: '4%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/luminafit_hero.jpg"
            alt="LUMINA FIT トレーニング"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div className="hero-photo-overlay" />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 24px 64px',
          maxWidth: 520,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: 5,
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ width: 24, height: 1, background: 'var(--gold)', display: 'block', flexShrink: 0 }} />
          Women&apos;s Personal Training
        </div>

        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(32px, 7vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.3,
            color: 'var(--white)',
            marginBottom: 16,
            textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
          }}
        >
          あなただけの
          <br />
          トレーニングで、
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--gold)' }}>理想の私</em>へ。
        </h1>

        <p
          style={{
            fontSize: 14,
            color: 'rgba(250,248,244,0.65)',
            lineHeight: 1.8,
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          専任トレーナーが体質・目標・ライフスタイルに合わせた
          <br />
          完全オーダーメイドのプログラムを提供します。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
          <a href="#form" className="btn-gold">
            無料カウンセリングを申し込む
          </a>
          <a href="#why" className="btn-outline">
            詳しく見る
          </a>
        </div>

        <p style={{ fontSize: 11, color: 'rgba(250,248,244,0.4)', letterSpacing: 1, marginTop: 16 }}>
          完全無料 · 勧誘なし · 当日キャンセルOK
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          fontSize: 9,
          letterSpacing: 3,
          color: 'rgba(192,160,176,0.5)',
          textTransform: 'uppercase',
        }}
      >
        <div
          className="scroll-pulse"
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, rgba(192,160,176,0.5), transparent)',
          }}
        />
        <span>scroll</span>
      </div>
    </section>
  );
}
