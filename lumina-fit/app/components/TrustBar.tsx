import FadeUp from './FadeUp';

const items = [
  { num: '500', suffix: '+', label: '累計会員数' },
  { num: '94', suffix: '%', label: '継続率' },
  { num: '-6', suffix: 'kg', label: '平均減量' },
];

export default function TrustBar() {
  return (
    <section
      id="trust"
      style={{
        background: 'var(--black-2)',
        borderTop: '1px solid rgba(192,160,176,0.15)',
        borderBottom: '1px solid rgba(192,160,176,0.15)',
      }}
    >
      <div
        className="trust-grid"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {items.map((item, i) => (
          <FadeUp
            key={item.label}
            delay={i * 0.1}
            className={`trust-item-inner trust-border-bottom${i === items.length - 1 ? ' trust-border-last' : ''}`}
            style={{
              padding: '28px 24px',
              textAlign: 'center',
              borderRight: i < items.length - 1 ? '1px solid rgba(192,160,176,0.1)' : 'none',
            }}
          >
            <div
              className="font-garamond trust-num-sm"
              style={{
                fontSize: 36,
                fontWeight: 600,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {item.num}
              <span style={{ fontSize: 18 }}>{item.suffix}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--gray)', letterSpacing: 1 }}>
              {item.label}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
