import FadeUp from './FadeUp';

const reasons = [
  {
    num: '01',
    icon: '◆',
    title: '専任トレーナー制',
    desc: '入会から卒業まで、担当は一人。毎回同じトレーナーがあなたの変化を記録・分析し、最適なプログラムに改善し続けます。',
  },
  {
    num: '02',
    icon: '◇',
    title: '完全個室トレーニング',
    desc: '他のお客様と顔を合わせることはありません。人目を気にせず、集中できる上質な空間でトレーニングに臨めます。',
  },
  {
    num: '03',
    icon: '◆',
    title: '食事サポート付き',
    desc: '厳しいカロリー制限は不要。ライフスタイルに合わせた食事アドバイスで、無理なく体の内側から変わっていきます。',
  },
  {
    num: '04',
    icon: '◇',
    title: '24時間LINEサポート',
    desc: '食事の写真を送るだけでアドバイスをもらえます。トレーニング外での習慣づくりもトレーナーが二人三脚でサポートします。',
  },
];

export default function WhySection() {
  return (
    <section
      id="why"
      className="why-watermark"
      style={{ background: 'var(--black-2)', padding: '96px 0' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div className="section-eyebrow">Why Lumina Fit</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            選ばれる<span style={{ color: 'var(--gold)' }}>4つ</span>の理由
          </h2>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'rgba(192,160,176,0.08)',
            border: '1px solid rgba(192,160,176,0.08)',
            marginTop: 48,
          }}
        >
          {reasons.map((r, i) => (
            <FadeUp key={r.num} delay={i * 0.1}>
              <div
                className="why-card why-card-hover"
                style={{
                  background: 'var(--black-2)',
                  padding: '36px 28px',
                  height: '100%',
                }}
              >
                <div
                  className="font-garamond"
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontSize: 40,
                    color: 'rgba(192,160,176,0.08)',
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {r.num}
                </div>
                <div style={{ fontSize: 26, marginBottom: 14, opacity: 0.85 }}>{r.icon}</div>
                <div
                  className="font-serif"
                  style={{ fontSize: 16, fontWeight: 700, color: 'var(--white)', marginBottom: 8 }}
                >
                  {r.title}
                </div>
                <div style={{ fontSize: 13, color: 'var(--gray)', lineHeight: 1.8 }}>{r.desc}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
