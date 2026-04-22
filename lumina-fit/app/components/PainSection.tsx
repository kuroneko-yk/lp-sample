import FadeUp from './FadeUp';

const pains = [
  {
    num: '01',
    title: '一人では続かない',
    body: '何度も挫折してきた。モチベーションが続かず、気づけばやめてしまう。',
  },
  {
    num: '02',
    title: '食事制限が辛すぎる',
    body: 'カロリー制限を頑張っても痩せない。むしろ反動で食べてしまう。',
  },
  {
    num: '03',
    title: '何度もリバウンド',
    body: '体重は落とせたのに、すぐ戻る。根本から体を変えたい。',
  },
  {
    num: '04',
    title: '何から始めたらいいかわからない',
    body: 'ジムに行っても何をすればいいのか。正しいやり方を教えてほしい。',
  },
];

export default function PainSection() {
  return (
    <section id="pain" style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">Your Concerns</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            こんなお悩み、<br />
            <span style={{ color: 'var(--gold)' }}>ありませんか？</span>
          </h2>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'rgba(192,160,176,0.1)',
            border: '1px solid rgba(192,160,176,0.1)',
            marginTop: 48,
          }}
        >
          {pains.map((pain, i) => (
            <FadeUp key={pain.num} delay={i * 0.1}>
              <div
                className="pain-item-hover"
                style={{
                  background: 'var(--black)',
                  padding: '28px 24px',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <div
                  className="font-garamond"
                  style={{ fontSize: 22, color: 'rgba(192,160,176,0.3)', lineHeight: 1, flexShrink: 0, paddingTop: 2 }}
                >
                  {pain.num}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(250,248,244,0.8)', lineHeight: 1.7 }}>
                  <strong
                    className="font-serif"
                    style={{ display: 'block', fontSize: 15, color: 'var(--white)', fontWeight: 700, marginBottom: 4 }}
                  >
                    {pain.title}
                  </strong>
                  {pain.body}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
