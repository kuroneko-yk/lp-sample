import FadeUp from './FadeUp';

const steps = [
  {
    num: '1',
    tag: 'Step 01',
    title: '無料カウンセリング',
    desc: '目標・現在の体型・生活習慣・食生活を丁寧にヒアリング。完全無料・所要時間60分。押しつけ販売は一切ありません。',
  },
  {
    num: '2',
    tag: 'Step 02',
    title: 'オーダーメイドプラン作成',
    desc: 'あなただけのトレーニングプログラムと食事プランを作成。体型測定・体組成分析を行い、科学的なアプローチで目標を設計します。',
  },
  {
    num: '3',
    tag: 'Step 03',
    title: 'トレーニング開始',
    desc: '専任トレーナーと二人三脚でスタート。毎回のセッションで進捗を確認しながら、確実に理想の体型へ近づいていきます。',
  },
];

export default function FlowSection() {
  return (
    <section id="flow" style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">How It Works</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            はじめるまでの<span style={{ color: 'var(--gold)' }}>3ステップ</span>
          </h2>
        </FadeUp>

        <div style={{ marginTop: 56, maxWidth: 560 }}>
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                  <div
                    className="font-garamond"
                    style={{
                      width: 44,
                      height: 44,
                      border: '1px solid var(--gold)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      color: 'var(--gold)',
                      fontWeight: 600,
                      flexShrink: 0,
                      background: 'var(--black)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: 'rgba(192,160,176,0.2)',
                        margin: '6px 0',
                        minHeight: 40,
                      }}
                    />
                  )}
                </div>
                <div style={{ padding: '0 0 48px 24px' }}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: 10,
                      letterSpacing: 2,
                      border: '1px solid rgba(192,160,176,0.3)',
                      color: 'var(--gold)',
                      padding: '3px 10px',
                      marginBottom: 10,
                      textTransform: 'uppercase',
                    }}
                  >
                    {step.tag}
                  </div>
                  <div
                    className="font-serif"
                    style={{ fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 8 }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.8 }}>{step.desc}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp style={{ marginTop: 8, maxWidth: 360 }}>
          <a href="#form" className="btn-gold">
            まずは無料カウンセリングから
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
