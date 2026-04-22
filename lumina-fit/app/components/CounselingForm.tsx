'use client';
import { useState, FormEvent } from 'react';
import FadeUp from './FadeUp';

type SubmitState = 'idle' | 'loading' | 'done';

export default function CounselingForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('loading');
    setTimeout(() => setSubmitState('done'), 1200);
  };

  return (
    <section
      id="form"
      style={{
        background: 'var(--black-3)',
        borderTop: '1px solid rgba(192,160,176,0.15)',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-eyebrow section-eyebrow-center" style={{ marginBottom: 12 }}>
              Free Counseling
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(22px, 4vw, 32px)',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1.5,
                marginBottom: 12,
              }}
            >
              まずは無料カウンセリング
              <br />
              からはじめましょう
            </h2>
            <p style={{ fontSize: 13, color: 'var(--gray)' }}>所要時間60分 · 完全無料 · 当日キャンセルOK</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              {['完全無料', '勧誘なし', '女性スタッフ対応'].map((badge) => (
                <span
                  key={badge}
                  className="form-badge"
                  style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 6 }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit}>
              <FormField label="お名前" htmlFor="name" required>
                <input
                  className="form-input-field"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="山田 花子"
                  required
                />
              </FormField>
              <FormField label="メールアドレス" htmlFor="email" required>
                <input
                  className="form-input-field"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </FormField>
              <FormField label="電話番号" htmlFor="tel" required>
                <input
                  className="form-input-field"
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="090-0000-0000"
                  required
                />
              </FormField>
              <FormField label="ご希望の日時" htmlFor="date">
                <input
                  className="form-input-field"
                  type="text"
                  id="date"
                  name="date"
                  placeholder="例：平日夕方、土日午前など"
                />
              </FormField>

              <div style={{ marginTop: 32 }}>
                <button
                  type="submit"
                  className="font-serif"
                  disabled={submitState !== 'idle'}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: submitState === 'done' ? 'var(--gold-dark)' : 'var(--gold)',
                    color: 'var(--black)',
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 2,
                    padding: '16px 40px',
                    border: 'none',
                    cursor: submitState === 'idle' ? 'pointer' : 'default',
                    textAlign: 'center',
                    transition: 'background 0.3s',
                    opacity: submitState === 'loading' ? 0.7 : 1,
                  }}
                >
                  {submitState === 'idle' && '申し込む（無料）'}
                  {submitState === 'loading' && '送信中…'}
                  {submitState === 'done' && '✓ 申し込みを受け付けました'}
                </button>
              </div>

              <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(192,160,176,0.4)', marginTop: 16, letterSpacing: 1 }}>
                プライバシーポリシーに同意の上、送信してください
              </p>
            </form>
          </FadeUp>
        </div>
      </div>

      <style>{`
        .form-input-field {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(192,160,176,0.2);
          color: var(--white);
          font-family: inherit;
          font-size: 14px;
          font-weight: 300;
          padding: 14px 16px;
          outline: none;
          transition: border-color 0.3s, background 0.3s;
          appearance: none;
        }
        .form-input-field:focus {
          border-color: var(--gold);
          background: rgba(192,160,176,0.04);
        }
        .form-input-field::placeholder {
          color: rgba(192,160,176,0.2);
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'block',
          fontSize: 11,
          letterSpacing: 2,
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        {label}
        {required && <span style={{ color: '#c0392b', fontSize: 10, marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  );
}
