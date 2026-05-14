# Handoff: Hair Salon Nico ランディングページ

## Overview
東京都渋谷区幡ヶ谷の美容院「Hair Salon Nico」のランディングページデザインです。完全予約制・髪質改善トリートメント専門サロンのブランディングLPで、30〜50代の大人女性をメインターゲットとしています。

## About the Design Files
このバンドル内のファイル（`nico_index.html` + `images/`）は **HTMLで作られたデザインリファレンス** です。完成形のルック＆フィール・インタラクションを示すプロトタイプであり、本番コードとしてそのまま使うことを想定したものではありません。

**実装タスク**：対象コードベース（Next.js / Astro / WordPress テーマ など）の既存の環境・規約に従って、このHTMLデザインを忠実に再現してください。フレームワーク未定の場合は、LPの性質（静的・SEO重視）から Next.js (App Router) もしくは Astro を推奨します。

## Fidelity
**High-fidelity (hifi)** — 配色・タイポグラフィ・余白・レイアウトはすべて確定値です。ピクセルパーフェクトに再現してください。

## Sections (上から順に)

1. **Header** — 固定ヘッダー (`fixed top-0`)、ロゴ＋ナビゲーション＋ご予約ボタン。スマホではナビ非表示
2. **Hero** — 大型ビジュアル、キャッチコピー、電話/LINE CTA、縦書きサブコピー（PCのみ）
3. **お悩み (Worries)** — 3つの悩みカード＋イメージ画像
4. **選ばれる3つの理由 (Reasons)** — Reason帯＋画像＋見出し＋本文を交互2カラムで3セット。末尾にワイドなサロン雰囲気画像
5. **CTA (中段)** — 背景画像オーバーレイ＋ご予約ボタン
6. **メニュー・料金 (Menu)** — 5項目のリスト形式。3番目「髪質改善トリートメント」に「人気No.1」バッジ
7. **お客様の声 (Voice)** — ★5評価＋お客様コメント3件のカード
8. **スタイリスト紹介 (Stylist)** — 3名のスタッフ縦型カード（写真→役職→名前→英字名→紹介文）
9. **CTA (下段)** — 背景画像＋電話/オンライン予約ボタン
10. **アクセス (Access)** — 店舗情報の定義リスト＋地図（OpenStreetMap埋め込み、Google Maps APIに差し替え推奨）
11. **ご予約 (Booking)** — Calendlyインライン埋め込み＋電話/LINE代替CTA
12. **Footer** — 3カラム（ブランド/連絡先/メニュー）＋著作権表示
13. **Floating CTA** — 画面右下（PC）/下端（モバイル）に固定。Hero表示中とBooking表示中は自動非表示

## Interactions & Behavior
- **スムーススクロール**：`html { scroll-behavior: smooth }` ＋ アンカーリンクで実装
- **フェードイン**：`.reveal` 要素を IntersectionObserver で監視し、ビューポート入場時に `.is-visible` 付与 → `opacity 0 → 1` + `translateY(24px) → 0`、transition 0.8s ease
- **Floating CTA**：
  - Hero (`#hero`) が threshold 0.4 以上で表示中 → 非表示
  - Booking (`#booking`) が threshold 0.2 以上で表示中 → 非表示
  - それ以外 → 表示
- **Header**：常に固定、背景は `bg-beige-50/85` + `backdrop-filter: blur`
- **Hover**：ボタン・リンクすべて0.2–0.3s ease の色変化トランジション

## Responsive
- **Breakpoint**：Tailwind デフォルト（`sm: 640px`, `md: 768px`, `lg: 1024px`）
- **Hero（重要）**：
  - PC：背景画像 + 左寄せテキスト + 右側に縦書きコピー
  - モバイル (< 640px)：背景画像は無効化し、`<img>` を画面上部に表示（aspect 4:3）。画像下部に背景色へのフェードグラデーション。テキストは中央揃え、CTAボタンも中央配置
- **Reasons**：PCは2カラム交互（画像↔テキスト）、モバイルは1カラム縦積み

## Design Tokens

### Colors
```
beige-50:   #fbf8f5  // body background
beige-100:  #f5f0eb  // section alt
beige-200:  #ede4d8  // borders, dividers
brown:      #8b7355  // primary accent
brown-700:  #6f5b42  // hover/dark accent
brown-900:  #3f3528  // body text
olive:      #adc178  // CTA accent (LINE等)
olive-600:  #8fa45f  // olive hover
star:       #d9a441  // ★評価
```

### Typography
- **Sans (本文)**：`Noto Sans JP` (weights: 300, 400, 500, 700)
- **Serif (見出し)**：`Noto Serif JP` (weights: 300, 400, 500, 700) ← `.font-serif-jp` クラス
- 見出しスケール：`text-3xl md:text-4xl`（セクション見出し）／ Hero H1 は `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`、`font-bold`、`leading-[1.5] sm:leading-[2]`、`tracking-wide`
- 装飾的小見出し：英大文字 + `tracking-[0.3em]` / `[0.4em]`

### Spacing & Layout
- セクション縦余白：`py-20 md:py-28`
- 最大幅：`max-w-6xl mx-auto px-6 md:px-10`（メイン）/ `max-w-4xl`（メニュー・予約）
- Header高さ：`h-14 md:h-16`
- 角丸：基本は `rounded-sm`（控えめ）、ボタン・バッジは `rounded-full`、Floating CTA カードは `rounded-2xl`

### Section heading underline
```css
.heading-mark::after {
  content: '';
  display: block;
  width: 48px; height: 1px;
  background: #8b7355;
  margin: 16px auto 0;
}
```

### Reason banner gradient
```css
background: linear-gradient(90deg, #8b7355 0%, #6f5b42 100%);
```

## Assets

すべて `images/` フォルダに同梱。

| ファイル | 用途 | 備考 |
|---|---|---|
| `images/hero_nico.png` | Hero背景・モバイル上部画像 | モデル女性 |
| `images/onayami.png` | お悩みセクション | 髪の悩みを抱える女性 |
| `images/reason1.jpg` | 理由01 | サロン内観（プライベート空間） |
| `images/reason2.jpg` | 理由02 | トリートメント施術 |
| `images/reason3.jpg` | 理由03 | 笑顔のモデル女性 |
| `images/nico_atmosphere.jpg` | 理由セクション末尾のワイド画像 | サロン内観2 |

**未差し替え（placehold.co のプレースホルダー）**：
- 中段CTA背景画像
- 下段CTA背景画像
- スタイリスト3名の写真
- OGP画像
- お客様の声のアバター（現在はイニシャル円表示）

実装時は上記をローカルアセットに差し替えてください。

## 外部連携
- **Calendly** — `<div class="calendly-inline-widget" data-url="https://calendly.com/example/30min">` のURLを本番のアカウントURLに差し替え。`assets.calendly.com/assets/external/widget.js` を読み込み済み
- **地図** — 現状 OpenStreetMap iframe。本番では Google Maps Embed API への差し替え、または Mapbox 推奨
- **電話番号** — `03-1234-5678`（仮）→ 実番号に差し替え
- **LINE** — `https://line.me/` → 公式アカウントの友だち追加URLに差し替え

## SEO / メタ情報
- `<title>`, `<meta name="description">`, `<meta name="keywords">` 設定済み
- OGP / Twitter Card 設定済み（画像URLは要差し替え）
- `lang="ja"`、`theme-color` 設定済み

## Files
- `nico_index.html` — メインHTMLファイル（Tailwind CDN + インラインCSS + インラインJS、約800行）
- `images/` — 確定済み画像アセット

## 実装時の推奨事項
- Tailwind は CDN を本番では使わず、ビルド時に組み込むこと（PostCSS / Vite 等）
- 画像は `next/image` 等で最適化、`loading="lazy"` 付与
- IntersectionObserver のフェードインは Framer Motion や CSS で代替可
- Calendly はクライアントサイドのみで動くため、Next.js なら `"use client"` を忘れずに
