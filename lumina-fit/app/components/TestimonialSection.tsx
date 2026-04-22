import Image from 'next/image';
import FadeUp from './FadeUp';

const testimonials = [
  {
    before: '/before_lumina1.jpg',
    after: '/after_lumina1.jpg',
    result: '-8kg / 3ヶ月',
    name: 'A.M. さん',
    age: '32歳 / 会社員',
    quote:
      '「一人では絶対に続かなかった。トレーナーが毎回の変化を見てくれるから諦められなかった。3ヶ月でこんなに変われるとは思わなかったです。」',
  },
  {
    before: '/before_lumina2.jpg',
    after: '/after_lumina2.jpg',
    result: 'ウエスト -12cm',
    name: 'K.T. さん',
    age: '28歳 / 看護師',
    quote:
      '「食事制限ゼロで体型が変わって本当に驚きました。むしろ食べる量が増えたくらいなのに、ウエストが12cmも細くなりました。」',
  },
  {
    before: '/before_lumina3jpg.jpg',
    after: '/after_lumina3.jpg',
    result: '体脂肪率 -9%',
    name: 'Y.S. さん',
    age: '41歳 / 主婦',
    quote:
      '「産後からずっと悩んでいた体型が、半年で別人のように変わりました。体脂肪が9%も落ちて、自信を持って外出できるようになりました。」',
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" style={{ background: 'var(--black-2)', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">Results &amp; Voices</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            お客様の声・<span style={{ color: 'var(--gold)' }}>ビフォーアフター</span>
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
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div
                style={{
                  background: 'var(--black-2)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div
                    style={{
                      flex: 1,
                      aspectRatio: '3/4',
                      background: '#1a1612',
                      border: '1px solid rgba(192,160,176,0.1)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Image src={t.before} alt="Before" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                    <div className="ba-label">Before</div>
                  </div>
                  <div style={{ fontSize: 18, color: 'rgba(192,160,176,0.4)', flexShrink: 0 }}>→</div>
                  <div
                    style={{
                      flex: 1,
                      aspectRatio: '3/4',
                      background: '#1a1612',
                      border: '1px solid rgba(192,160,176,0.1)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Image src={t.after} alt="After" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                    <div className="ba-label">After</div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'inline-block',
                    background: 'var(--gold)',
                    color: 'var(--black)',
                    fontSize: 10,
                    letterSpacing: 2,
                    padding: '4px 12px',
                    fontWeight: 700,
                    alignSelf: 'flex-start',
                  }}
                >
                  {t.result}
                </div>

                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--white)', marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--gray)' }}>{t.age}</div>
                </div>

                <div style={{ color: 'var(--gold)', fontSize: 12, letterSpacing: 2 }}>★★★★★</div>

                <div style={{ fontSize: 13, color: 'rgba(250,248,244,0.65)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  {t.quote}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#form" className="btn-gold" style={{ maxWidth: 360, margin: '0 auto' }}>
            私も変わりたい → 無料相談へ
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
