import Image from 'next/image';
import FadeUp from './FadeUp';

const trainers = [
  {
    img: '/trainer1_lumina.jpg',
    cert: 'NSCA-CPT 認定',
    name: '山田 さくら',
    spec: 'ダイエット・ボディメイク専門。「続けられる習慣づくり」を大切にするトレーナー。産後ケアの経験も豊富。',
  },
  {
    img: '/trainer2_lumina.jpg',
    cert: 'JATI-ATI 認定',
    name: '中村 あやか',
    spec: '産後ケア・姿勢改善が得意。育児と両立しながら理想の体型を目指す方を多数サポート。',
  },
  {
    img: '/trainer3_lumina.jpg',
    cert: 'NESTA-PFT 認定',
    name: '田中 みほ',
    spec: '競技経験者。スポーツパフォーマンス向上からダイエットまで幅広く対応。食事指導に定評あり。',
  },
];

export default function TrainerSection() {
  return (
    <section id="trainers" style={{ background: 'var(--black)', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <FadeUp>
          <div className="section-eyebrow">Our Trainers</div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(24px, 5vw, 38px)', fontWeight: 700, lineHeight: 1.4, color: 'var(--white)' }}
          >
            あなたを支える<span style={{ color: 'var(--gold)' }}>トレーナー</span>
          </h2>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginTop: 48,
          }}
        >
          {trainers.map((trainer, i) => (
            <FadeUp key={trainer.name} delay={i * 0.1}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    aspectRatio: '3/4',
                    background: 'linear-gradient(160deg, #1e1a14, #0f0c08)',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: 16,
                    border: '1px solid rgba(192,160,176,0.1)',
                  }}
                >
                  <Image
                    src={trainer.img}
                    alt={trainer.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {/* Bottom gradient fade */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '30%',
                      background: 'linear-gradient(to top, var(--black), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
                <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 6 }}>
                  {trainer.cert}
                </div>
                <div className="font-serif" style={{ fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 6 }}>
                  {trainer.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--gray)', lineHeight: 1.6 }}>{trainer.spec}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
