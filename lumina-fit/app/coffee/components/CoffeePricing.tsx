const PLANS = [
  {
    tier: 'エンシュージアスト',
    name: 'スタンダード',
    price: '¥3,500',
    featured: false,
    features: [
      'シグネチャー・ブレンド 250g x 1',
      '月替わりの焙煎ノート',
      '通常配送',
    ],
  },
  {
    tier: 'コノシュア',
    name: 'プレミアム',
    price: '¥6,200',
    featured: true,
    features: [
      'シングルオリジン 250g x 2',
      '詳細なカッピングガイド',
      '優先配送',
      'マイクロロットへの早期アクセス',
    ],
  },
  {
    tier: 'キュレーター',
    name: 'コレクター',
    price: '¥11,000',
    featured: false,
    features: [
      '希少な「アーティファクト」250g x 3',
      'コレクターズ・プリントとストーリー',
      '招待制のテイスティングイベント',
      '専任のアカウントマネージャー',
    ],
  },
];

export default function CoffeePricing() {
  return (
    <section id="pricing" style={{ background: '#f0ede9', padding: '120px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
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
            プランを選択する
          </h2>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: '#444748',
            }}
          >
            ライフスタイルに合わせたライブラリへのアクセス権をお選びください。
          </p>
        </div>

        {/* カードグリッド */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 24, alignItems: 'start' }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: '#fff',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                border: plan.featured ? '1px solid #755849' : '1px solid rgba(196,199,199,0.15)',
                position: 'relative',
                transform: plan.featured ? 'scale(1.04)' : 'none',
                boxShadow: plan.featured ? '0 20px 60px rgba(0,0,0,0.1)' : 'none',
                zIndex: plan.featured ? 10 : 0,
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#755849',
                    color: '#fff',
                    padding: '4px 16px',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontFamily: "'Work Sans', sans-serif",
                    whiteSpace: 'nowrap',
                  }}
                >
                  おすすめ
                </div>
              )}

              <span
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: '#755849',
                  marginBottom: 16,
                  display: 'block',
                }}
              >
                {plan.tier}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-noto-serif), serif',
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#000',
                  marginBottom: 24,
                }}
              >
                {plan.name}
              </h3>

              <div style={{ marginBottom: 32 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-noto-serif), serif',
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#000',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: 14,
                    color: '#444748',
                  }}
                >
                  {' '}/ 月
                </span>
              </div>

              <ul style={{ marginBottom: 48, flexGrow: 1, padding: 0, listStyle: 'none' }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: 14,
                      color: '#444748',
                      marginBottom: 16,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 16, color: plan.featured ? '#755849' : '#1c1c19', flexShrink: 0 }}
                    >
                      check
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: '100%',
                  background: plan.featured ? '#000' : 'transparent',
                  color: plan.featured ? '#fff' : '#000',
                  border: '1px solid #000',
                  padding: '16px',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  fontFamily: "'Work Sans', sans-serif",
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                }}
              >
                申し込む
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
