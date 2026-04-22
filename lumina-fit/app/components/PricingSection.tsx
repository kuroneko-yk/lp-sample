import FadeUp from './FadeUp';

const plans = [
  {
    name: 'Standard',
    freq: '週2回コース',
    price: '¥29,800',
    suffix: '/月',
    features: ['専任トレーナー指導 8回/月', '完全個室トレーニング', '食事アドバイス', 'LINEサポート'],
    featured: false,
  },
  {
    name: 'Premium',
    freq: '週3回コース',
    price: '¥39,800',
    suffix: '/月',
    features: [
      '専任トレーナー指導 12回/月',
      '完全個室トレーニング',
      '食事プラン作成',
      '24hLINEサポート',
      '月1回体組成分析',
    ],
    featured: true,
  },
  {
    name: 'Executive',
    freq: '週4回以上',
    price: '¥54,800',
    suffix: '/月〜',
    features: [
      '専任トレーナー指導 16回+/月',
      '完全個室トレーニング',
      '完全食事管理',
      '24hLINEサポート',
      '月2回体組成分析',
      '栄養士によるカウンセリング',
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ background: 'var(--black-2)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">Plans &amp; Pricing</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            料金プラン
          </h2>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'rgba(192,160,176,0.08)',
            border: '1px solid rgba(192,160,176,0.08)',
            marginTop: 48,
          }}
        >
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <div
                className="pricing-card-hover"
                style={{
                  background: plan.featured ? 'var(--black-3)' : 'var(--black-2)',
                  border: plan.featured ? '1px solid rgba(192,160,176,0.4)' : 'none',
                  margin: plan.featured ? -1 : 0,
                  padding: '36px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  height: '100%',
                }}
              >
                {plan.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gold)',
                      color: 'var(--black)',
                      fontSize: 9,
                      letterSpacing: 2,
                      padding: '4px 14px',
                      whiteSpace: 'nowrap',
                      fontWeight: 700,
                    }}
                  >
                    人気 No.1
                  </div>
                )}

                <div style={{ fontSize: 11, letterSpacing: 3, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 8 }}>
                  {plan.name}
                </div>
                <div className="font-serif" style={{ fontSize: 16, color: 'var(--white)', fontWeight: 700, marginBottom: 20 }}>
                  {plan.freq}
                </div>
                <div className="font-garamond" style={{ fontSize: 40, fontWeight: 600, color: 'var(--white)', lineHeight: 1, marginBottom: 4 }}>
                  {plan.price}
                  <span style={{ fontSize: 13, color: 'var(--gray)', fontWeight: 300 }}>{plan.suffix}</span>
                </div>

                <div style={{ width: '100%', height: 1, background: 'rgba(192,160,176,0.12)', margin: '20px 0' }} />

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, flex: 1 }}>
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="pricing-feature"
                      style={{ fontSize: 12, color: 'rgba(250,248,244,0.6)', display: 'flex', gap: 8, alignItems: 'flex-start' }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#form" className={plan.featured ? 'btn-gold' : 'btn-outline'}>
                  このプランを選ぶ
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: 'var(--gray)' }}>
          * 全プラン入会金無料（期間限定）· 2回無料体験トレーニング付き
        </p>
      </div>
    </section>
  );
}
