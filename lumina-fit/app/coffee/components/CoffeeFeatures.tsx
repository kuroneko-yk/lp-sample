import Image from 'next/image';

export default function CoffeeFeatures() {
  return (
    <section id="features" style={{ padding: '120px 32px', maxWidth: 1280, margin: '0 auto' }}>
      {/* セクションヘッダー */}
      <div style={{ marginBottom: 64, textAlign: 'center' }}>
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
          キュレーションされた体験
        </h2>
        <div style={{ height: 1, width: 96, background: '#755849', margin: '0 auto' }} />
      </div>

      {/* ベントーグリッド */}
      <div
        className="grid grid-cols-1 md:grid-cols-12"
        style={{ gap: 24 }}
      >
        {/* Feature 1 — col-span-7 */}
        <div
          className="md:col-span-7"
          style={{
            background: '#f6f3ee',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 320,
          }}
        >
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span
              className="material-symbols-outlined"
              style={{ color: '#755849', fontSize: 36, display: 'block', marginBottom: 32 }}
            >
              auto_awesome
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-noto-serif), serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#000',
                marginBottom: 16,
              }}
            >
              厳選されたセレクション
            </h3>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: '#444748',
                maxWidth: 400,
              }}
            >
              サステナブルな小規模農家からのみ調達。ライブラリのすべての豆は、その独自のフレーバープロファイルと歴史的価値によって選ばれています。
            </p>
          </div>
          <div style={{ marginTop: 48, position: 'relative', zIndex: 10 }}>
            <a
              href="#"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.1em',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#000',
                borderBottom: '1px solid rgba(0,0,0,0.2)',
                paddingBottom: 4,
                textDecoration: 'none',
              }}
            >
              詳細を見る
            </a>
          </div>
          {/* 装飾的な背景アイコン */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              right: '-10%',
              bottom: '-10%',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 200, fontVariationSettings: "'FILL' 1" }}
            >
              spa
            </span>
          </div>
        </div>

        {/* Feature 2 — col-span-5 */}
        <div
          className="md:col-span-5"
          style={{
            background: '#29180a',
            color: '#fff',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: 320,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: '#fed8c5', fontSize: 36, display: 'block', marginBottom: 24 }}
          >
            verified
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-noto-serif), serif',
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            鮮度の追求
          </h3>
          <p
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: 16,
              lineHeight: 1.6,
              opacity: 0.8,
            }}
          >
            発送前24時間以内に焙煎。職人の手による気密性の高いパッケージが、各収穫の複雑なアロマを完璧に保ちます。
          </p>
        </div>

        {/* Feature 3 — col-span-12 */}
        <div
          className="md:col-span-12 flex flex-col md:flex-row items-center"
          style={{
            background: '#ebe8e3',
            padding: 48,
            gap: 48,
          }}
        >
          <div style={{ flex: 1 }}>
            <span
              className="material-symbols-outlined"
              style={{ color: '#755849', fontSize: 36, display: 'block', marginBottom: 24 }}
            >
              calendar_today
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-noto-serif), serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#000',
                marginBottom: 16,
              }}
            >
              自由な配送プラン
            </h3>
            <p
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
                color: '#444748',
                maxWidth: 560,
                marginBottom: 32,
              }}
            >
              消費量に合わせてサブスクリプションを調整。ワンクリックで停止、スキップ、頻度の変更が可能です。縛りのない、自由で卓越したコーヒー体験を。
            </p>
            <button
              style={{
                background: '#000',
                color: '#fff',
                padding: '16px 32px',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontFamily: "'Work Sans', sans-serif",
                border: 'none',
                cursor: 'pointer',
              }}
            >
              プランをカスタマイズ
            </button>
          </div>

          <div
            className="w-full md:w-auto"
            style={{
              flex: 1,
              height: 320,
              background: '#fff',
              position: 'relative',
              overflow: 'hidden',
              minWidth: 0,
            }}
          >
            <Image
              src="/coffee/beans.png"
              alt="様々な焙煎コーヒー豆が清潔な明るい背景に散らばったシネマティックなクローズアップ写真"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
