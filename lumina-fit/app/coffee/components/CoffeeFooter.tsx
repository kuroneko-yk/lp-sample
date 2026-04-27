const LINKS = ['プライバシーポリシー', '利用規約', '配送について', 'お問い合わせ'];

export default function CoffeeFooter() {
  return (
    <footer
      style={{
        background: '#f9f6f0',
        borderTop: '1px solid #e5e2dd',
        padding: '80px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-noto-serif), serif',
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: '#1c1c19',
          textTransform: 'uppercase',
        }}
      >
        キュレーターズ・ライブラリ
      </div>

      <nav
        className="flex flex-wrap justify-center"
        style={{ gap: '10px 40px' }}
      >
        {LINKS.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#747878',
              textDecoration: 'none',
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', gap: 24 }}>
        {['public', 'alternate_email', 'chat'].map((icon) => (
          <span
            key={icon}
            className="material-symbols-outlined"
            style={{ color: '#747878', fontSize: 22, cursor: 'pointer' }}
          >
            {icon}
          </span>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: 11,
          letterSpacing: '0.1em',
          color: '#747878',
          textTransform: 'uppercase',
        }}
      >
        © 2024 THE CURATOR&apos;S LIBRARY. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
