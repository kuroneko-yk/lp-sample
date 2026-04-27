import Image from 'next/image';

export default function CoffeeHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 背景画像 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/coffee/hero-bg.png"
          alt="プレミアムコーヒー豆のジャーが暗いミニマルな木製テーブルに置かれたシネマティック写真"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 70%',
            filter: 'brightness(0.5)',
            transform: 'scale(1.08)',
          }}
        />
      </div>

      {/* オーバーレイコンテンツ */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 1024,
          margin: '0 auto',
        }}
      >
        <span
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#fff',
            display: 'block',
            marginBottom: 24,
            fontWeight: 600,
          }}
        >
          希少な産地と、職人の焙煎。
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-noto-serif), serif',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginBottom: 40,
          }}
        >
          至高の一杯を、
          <br />
          日常の儀式に。
        </h1>

        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: 640,
            margin: '0 auto 48px',
          }}
        >
          世界中から厳選された最高級の豆を、ご注文に合わせて焙煎。
          <br />
          ロースタリーからあなたのお手元へ直接お届けします。
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            justifyContent: 'center',
          }}
        >
          <a
            href="#pricing"
            style={{
              background: '#fff',
              color: '#000',
              padding: '20px 40px',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: "'Work Sans', sans-serif",
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.3s',
            }}
          >
            コレクションを探索
          </a>
          <a
            href="#features"
            style={{
              background: 'transparent',
              color: '#fff',
              padding: '20px 40px',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: "'Work Sans', sans-serif",
              border: '1px solid rgba(255,255,255,0.4)',
              textDecoration: 'none',
              display: 'inline-block',
              backdropFilter: 'blur(4px)',
              transition: 'background 0.3s',
            }}
          >
            私たちのこだわり
          </a>
        </div>
      </div>
    </section>
  );
}
