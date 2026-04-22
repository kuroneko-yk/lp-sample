# Handoff: Women's Personal Training Gym — Landing Page

## Overview

This is a high-fidelity landing page design for **LUMINA FIT**, a women's-only personal training gym. The goal of the page is to drive **free counseling sign-ups** (無料カウンセリング申し込み). Target audience is women aged 20–40 interested in diet and body recomposition who have struggled to maintain routines on their own.

---

## About the Design Files

`LP.html` in this bundle is a **design reference created in HTML** — a high-fidelity prototype showing the intended visual design and interactions. It is **not production code to be shipped directly**.

The task is to **recreate this design in your target codebase** (Next.js, React, Vue, etc.) using its established patterns, component libraries, and routing conventions. Use `LP.html` as a pixel-accurate visual spec.

---

## Fidelity

**High-fidelity.** The prototype uses final colors, typography, spacing, animations, and interactions. Recreate the UI pixel-closely, adapting markup and structure to fit the target framework's conventions.

---

## Design Tokens

### Colors
```
--gold:        #c0a0b0   /* Primary accent (user-adjusted to rose-gold) */
--gold-light:  #d8c0cc
--gold-dark:   #9a7888
--black:       #0a0806   /* Page background */
--black-2:     #111009   /* Section alt background */
--black-3:     #1a1814   /* Form section background */
--white:       #faf8f4   /* Body text */
--white-2:     #f0ede6
--gray:        #888070   /* Subdued text */
--gray-light:  #d8d0c0
```

### Typography
```
--serif:   'Noto Serif JP', Georgia, serif       /* Headings, CTAs */
--sans:    'Noto Sans JP', sans-serif             /* Body, labels */
--display: 'Cormorant Garamond', serif            /* Large decorative numbers */
```

Google Fonts imports required:
```
Noto Serif JP: 300, 400, 700, 900
Cormorant Garamond: 300, 600, italic 300
Noto Sans JP: 300, 400, 500
```

### Spacing scale (used in sections)
```
section padding:     96px top/bottom (desktop), 64px (mobile)
container max-width: 1100px, padding 0 24px
card gap:            1px (grid lines via background color trick)
```

### Border radius
Intentionally **0** throughout — sharp corners reinforce the luxury aesthetic.

### Shadows
```
floating CTA button: box-shadow 0 8px 32px rgba(201,168,76,0.3)
```

---

## Screens / Views

### Single-page layout with 9 sections

---

### 1. Navbar (Fixed)

- **Position**: Fixed top, full width, z-index 100
- **Default state**: Transparent background
- **Scrolled state** (after 60px scroll): `background: rgba(10,8,6,0.95)`, `backdrop-filter: blur(12px)`, bottom border `1px solid rgba(201,168,76,0.2)`
- **Left**: Logo `LUMINA.FIT` — Noto Serif JP 700, 18px, letter-spacing 6px. The `.` is colored `--gold`
- **Right**: CTA link "無料カウンセリング" — 11px, letter-spacing 2px, gold border, hover fills gold

---

### 2. Hero Section

- **Height**: 100svh, min-height 600px
- **Background**: Dark gradient overlay + decorative right-side photo placeholder (55% width, 90% height, right-aligned)
- **Photo placeholder**: `linear-gradient(160deg, #2a2018, #1a1410, #0f0c08)` with gold border `1px solid rgba(201,168,76,0.15)`. Top-right corner accent lines (60×60px gold border)
- **Overlay gradients**:
  ```css
  linear-gradient(to bottom,
    rgba(10,8,6,0.3) 0%,
    rgba(10,8,6,0.1) 30%,
    rgba(10,8,6,0.65) 70%,
    rgba(10,8,6,0.92) 100%)
  ```
- **Content** (bottom-left, max-width 520px, padding-bottom 64px):
  - Eyebrow: "Women's Personal Training" — 10px, letter-spacing 5px, gold, uppercase, with 24px gold line before
  - H1: "あなただけの / トレーニングで、/ 理想の私へ。" — Noto Serif JP 700, clamp(32px, 7vw, 52px), line-height 1.3. "理想の私" colored gold
  - Sub: 14px, rgba(250,248,244,0.65), line-height 1.8
  - CTAs (stacked, max-width 360px):
    1. Gold filled button: "無料カウンセリングを申し込む" → `#form`
    2. Gold outline button: "詳しく見る" → `#why`
  - Note: "完全無料 · 勧誘なし · 当日キャンセルOK" — 11px, rgba(250,248,244,0.4)
- **Scroll indicator**: Bottom-right, vertical line animation + "scroll" label

---

### 3. Trust Bar

- **Background**: `--black-2`
- **Border**: top + bottom `1px solid rgba(201,168,76,0.15)`
- **Layout**: 3-column grid, dividers between columns
- **Items**:
  | Label | Value | Font |
  |---|---|---|
  | 累計会員数 | 500+ | Cormorant Garamond 600, 36px, gold |
  | 継続率 | 94% | same |
  | 平均減量 | -6kg | same |
- Sub-labels: 11px, `--gray`, letter-spacing 1px

---

### 4. Pain Points (こんなお悩みありませんか？)

- **Background**: `--black`
- **Eyebrow**: "Your Concerns"
- **Title**: "こんなお悩み、ありませんか？" — title word in gold
- **Grid**: 2×2 on desktop, 1 column on mobile
- **Grid styling**: `gap: 1px`, background `rgba(201,168,76,0.1)` (creates gold grid lines), border same
- **Each item**: padding 28px 24px, flex row, hover darkens to `--black-3`
  - Number: Cormorant Garamond, 22px, `rgba(201,168,76,0.3)`
  - Strong title: Noto Serif JP 700, 15px, white
  - Body: 14px, rgba(250,248,244,0.8)
- **Content**:
  1. 一人では続かない / 何度も挫折してきた…
  2. 食事制限が辛すぎる / カロリー制限を頑張っても…
  3. 何度もリバウンド / 体重は落とせたのに…
  4. 何から始めたらいいかわからない / ジムに行っても…

---

### 5. Why Choose (選ばれる理由)

- **Background**: `--black-2`
- **Decorative**: `LUMINA` text watermark, bottom-right, Cormorant Garamond 160px, `rgba(201,168,76,0.03)`
- **Grid**: 2×2
- **Each card**:
  - Hover: background darkens to `#161410`
  - Left border: 2px gold, animates from `height:0` to `height:100%` on hover (CSS transition)
  - Large number (top-right): Cormorant Garamond, 40px, `rgba(201,168,76,0.08)`, absolute
  - Icon: 26px emoji/glyph, opacity 0.85
  - Title: Noto Serif JP 700, 16px
  - Description: 13px, `--gray`, line-height 1.8
- **Content**:
  1. 専任トレーナー制 — 入会から卒業まで担当は一人…
  2. 完全個室トレーニング — 他のお客様と顔を合わせることはありません…
  3. 食事サポート付き — 厳しいカロリー制限は不要…
  4. 24時間LINEサポート — 食事の写真を送るだけで…

---

### 6. Flow (トレーニングの流れ)

- **Background**: `--black`
- **Max-width**: 560px (left-aligned)
- **Layout**: Vertical stepper — number circle + vertical line + content
  - Circle: 44px, `border: 1px solid --gold`, gold text, Cormorant Garamond 18px
  - Line: 1px wide, `rgba(201,168,76,0.2)`, min-height 40px
  - Tag: 10px, letter-spacing 2px, gold border, uppercase
- **Steps**:
  1. 無料カウンセリング — ヒアリング60分、完全無料、押しつけ販売なし
  2. オーダーメイドプラン作成 — 体型測定・体組成分析
  3. トレーニング開始 — 専任トレーナーと二人三脚
- **CTA below steps**: Gold filled button "まずは無料カウンセリングから" → `#form`

---

### 7. Pricing (料金プラン)

- **Background**: `--black-2`
- **Grid**: 3 columns desktop, 1 column mobile
- **Regular cards**: background `--black-2`, hover `#161410`
- **Featured card** (中央): border `1px solid rgba(201,168,76,0.4)`, background `--black-3`, margin `-1px` to overlap grid lines
  - Badge "人気 No.1": absolute top `-12px`, centered, gold background, black text, 9px, letter-spacing 2px
- **Card anatomy**:
  - Plan name: 11px, letter-spacing 3px, gold, uppercase
  - Frequency: Noto Serif JP 700, 16px
  - Price: Cormorant Garamond 600, 40px. "/月" suffix: 13px, `--gray`
  - Gold divider line
  - Feature list: `—` prefix in gold, 12px, `rgba(250,248,244,0.6)`
  - CTA: gold filled (featured) or gold outline (others)
- **Plans**:
  | Plan | Freq | Price | Features |
  |---|---|---|---|
  | Standard | 週2回 | ¥29,800 | 指導8回/月, 個室, 食事アドバイス, LINE |
  | Premium ★ | 週3回 | ¥39,800 | 指導12回/月, 個室, 食事プラン, 24hLINE, 体組成月1回 |
  | Executive | 週4回+ | ¥54,800 | 指導16回+/月, 完全食事管理, 体組成月2回, 栄養士 |

---

### 8. Trainers (トレーナー紹介)

- **Background**: `--black`
- **Grid**: 3 columns desktop, 1 column mobile, gap 24px
- **Photo**: aspect-ratio 3/4, dark gradient background placeholder, gold border `1px solid rgba(201,168,76,0.1)`. Bottom gradient fade to black. **Replace with actual photos.**
- **Cert**: 10px, letter-spacing 2px, gold, uppercase
- **Name**: Noto Serif JP 700, 18px
- **Spec**: 12px, `--gray`, line-height 1.6
- **Trainers**:
  1. 山田 さくら — NSCA-CPT / ダイエット・ボディメイク専門
  2. 中村 あやか — JATI-ATI / 産後ケア・姿勢改善
  3. 田中 みほ — NESTA-PFT / スポーツ・食事指導

---

### 9. Testimonials (お客様の声)

- **Background**: `--black-2`
- **Grid**: 3 columns desktop, 1 column mobile
- **Each card** padding 32px 24px:
  - Before/After photos: flex row, 1:1 ratio, `aspect-ratio: 3/4`, dark bg placeholder. Arrow `→` in gold between them. **Replace with actual photos.**
  - Result badge: gold background, black text, 10px, letter-spacing 2px
  - Name: 12px bold / Age: 11px gray
  - Stars: gold, 12px
  - Quote: 13px, italic, rgba(250,248,244,0.65), line-height 1.8
- **Results**: -8kg/3ヶ月 | ウエスト-12cm | 体脂肪率-9%
- **CTA below**: "私も変わりたい → 無料相談へ" → `#form`

---

### 10. FAQ (よくあるご質問)

- **Background**: `--black`
- **Max-width**: 720px, centered
- **Accordion**: top/bottom borders `1px solid rgba(201,168,76,0.1)`, no side borders
- **Question button**: Noto Serif JP 700, 15px, full-width, flex space-between, padding 22px 0
  - Hover color: gold
  - Icon `+`: Cormorant Garamond, 20px, gold — rotates 45° when open
- **Answer**: max-height 0 → 200px transition (0.4s ease), padding-bottom 20px when open. 13px, `--gray`, line-height 1.9
- **Questions**:
  1. 運動が苦手・初心者でも大丈夫ですか？
  2. カウンセリングに費用はかかりますか？
  3. 厳しい食事制限は必要ですか？
  4. 仕事や育児で忙しくても通えますか？
  5. トレーナーは女性ですか？
  6. 途中でコースをやめることはできますか？

---

### 11. Form (無料カウンセリング申し込みフォーム)

- **Background**: `--black-3` (`#1a1814`)
- **Max-width**: 560px, centered
- **Header**: centered — eyebrow, H2, subtext, badge row
  - Badges: "完全無料", "勧誘なし", "女性スタッフ対応" — checkmark prefix, gold text, 11px
- **Fields** (4 total):
  | Field | Type | Required | Placeholder |
  |---|---|---|---|
  | お名前 | text | ✓ | 山田 花子 |
  | メールアドレス | email | ✓ | example@email.com |
  | 電話番号 | tel | ✓ | 090-0000-0000 |
  | ご希望の日時 | text | — | 例：平日夕方、土日午前など |
- **Input styling**: background `rgba(255,255,255,0.04)`, border `1px solid rgba(201,168,76,0.2)`, focus border `--gold`, focus background `rgba(201,168,76,0.04)`, height ~46px, padding 14px 16px
- **Labels**: 11px, letter-spacing 2px, gold, uppercase. Required asterisk in red (`#c0392b`)
- **Submit button**: Full-width gold filled, "申し込む（無料）"
  - On submit: show "送信中…" (1.2s) → "✓ 申し込みを受け付けました" (darkened gold bg)
- **Footer note**: privacy policy, 11px, rgba(201,168,76,0.4)

---

### 12. Footer

- Background: `--black`
- Top border: `1px solid rgba(201,168,76,0.08)`
- Logo: Noto Serif JP, 14px, letter-spacing 6px, `rgba(201,168,76,0.5)`
- Links: プライバシーポリシー / 特定商取引法 / 会社概要 / お問い合わせ — 11px, rgba(250,248,244,0.3), hover gold
- Copyright: 10px, rgba(250,248,244,0.2)

---

## Interactions & Behavior

### Scroll Animations
All major elements have `.fade-up` class:
- Initial state: `opacity: 0; transform: translateY(30px)`
- Triggered state: `opacity: 1; transform: translateY(0)` via `IntersectionObserver` at threshold 0.12
- Transition: `0.7s ease`
- Staggered delays: `0.1s`, `0.2s`, `0.3s`, `0.4s`

### Floating CTA
- Fixed bottom-center
- Hidden by default (`transform: translateY(120%)`)
- Appears after 400px scroll (`transform: translateY(0)`)
- Transition: `0.4s ease`
- Text: "無料カウンセリングを申し込む →" → `#form`
- Box shadow: `0 8px 32px rgba(201,168,76,0.3)`
- On mobile: full width minus 32px padding

### Navbar
- Transition at 60px scroll: transparent → dark with blur

### FAQ Accordion
- Only one item open at a time
- Click open item to close, click another to open it

### Form Submit
- Prevent default
- Show loading state "送信中…"
- After 1200ms show success state

### Scroll behavior
- `scroll-behavior: smooth` on `html`
- All CTA links use `href="#section-id"` anchors

---

## Responsive Breakpoints

### ≤ 768px (tablet/mobile)
- Hero photo (right-side element): hidden
- Pain grid: 1 column
- Why grid: 1 column
- Pricing grid: 1 column
- Trainers grid: 1 column
- Testimonials grid: 1 column
- Floating CTA: full width (calc 100% - 32px)

### ≤ 480px (small mobile)
- Trust bar: 1 column (stacked), borders switch to bottom

---

## Assets Required

| Location | Description | Source |
|---|---|---|
| Hero (right) | Woman training, cinematic lighting, dark luxury gym | Adobe Firefly / Unsplash |
| Trainers (×3) | Portrait photos of female trainers, 3:4 aspect ratio | Adobe Firefly / Unsplash |
| Before/After (×6) | Body transformation comparison photos | Client-provided |

Recommended Unsplash search queries:
- `"women personal training luxury"`
- `"female fitness trainer studio"`
- `"gym dark interior gold"`

---

## Section Anchor IDs

```
#hero        → Hero
#trust       → Trust bar
#pain        → Pain points
#why         → Why choose
#flow        → How it works
#pricing     → Pricing
#trainers    → Trainer profiles
#testimonials → Testimonials
#faq         → FAQ
#form        → Counseling form
```

---

## Files in This Package

| File | Description |
|---|---|
| `LP.html` | High-fidelity design reference (single-file HTML prototype) |
| `README.md` | This handoff document |

---

## Implementation Notes for Claude Code

1. **Framework**: No preference specified — Next.js (App Router) with Tailwind CSS is recommended for this type of marketing LP
2. **Component split suggestion**:
   - `<Navbar />` — with scroll state hook
   - `<HeroSection />` — with photo slot prop
   - `<TrustBar />`
   - `<PainSection />`
   - `<WhySection />`
   - `<FlowSection />`
   - `<PricingSection />` — with plan data array
   - `<TrainerSection />` — with trainer data array
   - `<TestimonialSection />` — with testimonial data array
   - `<FAQSection />` — with accordion state
   - `<CounselingForm />` — with form state + submission handler
   - `<FloatingCTA />` — with scroll visibility hook
3. **Animations**: Consider `framer-motion` for the fade-up animations and floating CTA, or use Tailwind's `animate-` utilities with `IntersectionObserver`
4. **Form**: Wire to your backend or a form service (Formspree, Resend, etc.)
5. **i18n**: All content is in Japanese — ensure CJK font loading is optimized (`font-display: swap`)
