const links = ['プライバシーポリシー', '特定商取引法に基づく表記', '会社概要', 'お問い合わせ'];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(192,160,176,0.08)',
        padding: '32px 24px',
        textAlign: 'center',
      }}
    >
      <div
        className="font-serif"
        style={{ fontSize: 14, letterSpacing: 6, color: 'rgba(192,160,176,0.5)', marginBottom: 16 }}
      >
        LUMINA · FIT
      </div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="footer-link"
            style={{ fontSize: 11, color: 'rgba(250,248,244,0.3)', textDecoration: 'none', letterSpacing: 1 }}
          >
            {link}
          </a>
        ))}
      </div>
      <div style={{ fontSize: 10, color: 'rgba(250,248,244,0.2)', letterSpacing: 1 }}>
        © 2026 LUMINA FIT. All rights reserved.
      </div>
    </footer>
  );
}
