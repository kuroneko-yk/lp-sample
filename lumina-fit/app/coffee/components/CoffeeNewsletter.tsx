'use client';

export default function CoffeeNewsletter() {
  return (
    <section style={{ background: '#755849', padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-noto-serif), serif',
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1.22,
            color: '#fff',
            marginBottom: 24,
          }}
        >
          ライブラリに参加する
        </h2>
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: 16,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.8)',
            marginBottom: 40,
          }}
        >
          最新の豆の発見、焙煎の秘密、抽出のテクニックなどの情報を毎週お届けします。
        </p>

        <form
          className="flex flex-col sm:flex-row"
          style={{ gap: 16 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="メールアドレスを入力"
            required
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.4)',
              color: '#fff',
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 12,
              letterSpacing: '0.1em',
              padding: '16px 0',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#fff',
              color: '#000',
              padding: '16px 40px',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontFamily: "'Work Sans', sans-serif",
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.3s, color 0.3s',
            }}
          >
            登録する
          </button>
        </form>
      </div>
    </section>
  );
}
