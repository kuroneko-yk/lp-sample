# Handoff: KURAMI（蔵見）コーヒーサブスクリプション LP

## Overview

スペシャルティコーヒー豆のサブスクリプションサービス **KURAMI（蔵見）** のランディングページです。世界の産地から厳選した豆を月替わりで自宅にお届けするサービスを訴求します。

- **ターゲット**: 30〜50代、カフェ品質を自宅で楽しみたい層
- **トーン**: 温かみとこだわりを感じるナチュラルモダン
- **ゴール**: 「まず試してみる」CTAクリック・メール登録

---

## About the Design Files

このパッケージに含まれる `index.html` / `styles.css` / `app.js` は、**最終的な見た目と挙動を示すためのデザインリファレンス（プロトタイプ）** です。そのまま本番に貼り付けることを想定したコードではありません。

**実装タスクは、これらの HTML デザインを既存のコードベース（React / Vue / Next.js / Astro 等）の環境とパターンに従って再現すること** です。コードベースがまだ無い場合は、案件に最適なフレームワークを選定したうえで、同じビジュアルを実装してください。

- HTML はそのまま読みやすい構造になっているので、コンポーネント分割の参考にできます
- CSS は CSS 変数で全トークンを定義しているため、既存のデザイントークンへマッピングしやすい構造です
- JS は素のバニラ JS で、Drawer / FAQアコーディオン / スクロール時のリビールアニメーションを実装しています

---

## Fidelity

**High-fidelity (hifi)**

色・タイポグラフィ・スペーシング・インタラクション・**画像** すべて確定値です。`images/` フォルダに最終版の画像が同梱されています。既存ライブラリ・パターンを使ってピクセルパーフェクトに再現してください。

---

## Screens / Views

### 単一ページ・縦スクロール構成（9セクション）

| # | セクション ID | 目的 |
|---|-------------|------|
| 1 | `#top` (Hero) | ファーストビュー・第一CTA |
| 2 | `#commitment` | 4つのこだわりポイント |
| 3 | `#origins` | 産地ストーリー（4カ国） |
| 4 | `#cta-banner` | 中間CTAバナー |
| 5 | `#plans` | サブスクプラン（3プラン） |
| 6 | `#flow` | お届けの流れ（4ステップ） |
| 7 | `#voice` | お客様の声（3件） |
| 8 | `#faq` | よくある質問（アコーディオン） |
| 9 | `#cta-final` | 最終CTA・メール登録フォーム |

---

### 1. Hero (`#top`)

**目的**: サービスの第一印象を伝え、「まず試してみる」CTAをクリックさせる。

**レイアウト**:
- 全画面（`min-height: 100svh`）。背景は16:9のヒーロー画像（朝の窓辺のコーヒー）。
- 暗いブラウンのオーバーレイ（`linear-gradient + radial-gradient`）が画像の上にかかり、白文字でも可読。
- コンテンツは左寄せ、最大幅 1200px のコンテナ内。
- 下中央に「SCROLL」アニメーション付きインジケーター（SPでは非表示）。

**要素**:
- Eyebrow テキスト: `SPECIALTY COFFEE SUBSCRIPTION`（テラコッタ色、左に短いライン）
- H1: 「世界の産地から、毎月一杯の物語を。」
  - 「毎月一杯の物語を」のみ `<em>` でテラコッタ薄色（`--c-accent-soft`）にハイライト
  - フォントサイズ: `clamp(30px, 6vw, 72px)`、line-height: 1.3、Noto Serif JP 500
  - PC / SP とも 2行で改行
- リード文: 3行、白90%透明度
- CTAボタン2つ: Primary（テラコッタ塗り）+ Ghost（白ボーダー透明）
- メタ情報3点（横並び・SPでは縦積み）: `初回50%OFF` / `送料無料` / `いつでも解約`

**ナビゲーション**:
- PC（≥961px）: 横並びリンク6つ + 右に「まず試してみる」CTAボタン
- SP（≤960px）: ハンバーガーメニュー → 右からスライドインするDrawer
- スクロール量 >20px で背景白＋下境界線（`.is-scrolled`）
- ヒーロー上にいる間は文字白（`.is-hero`）、ヒーローを通り過ぎたら通常色

---

### 2. Commitment (`#commitment`)

**目的**: サービスの価値を4つのポイントで訴求。

**レイアウト**:
- PC: 2カラムグリッド（gap 24-40px / 28-56px）
- SP（≤720px）: 1カラム縦積み（gap 48px）

**各カード**:
- 16:9 画像（左上に `01`〜`04` のラベルチップ）
- Kicker: `産地直送` / `鮮度保証` / `焙煎士が選ぶ` / `通常購入よりお得`（テラコッタ・小文字スペーシング）
- H3 タイトル（Noto Serif JP）
- 本文（行間 1.95）

---

### 3. Origins (`#origins`)

**目的**: 産地ごとの個性を物語的に紹介。

**レイアウト**:
- 背景: クリーム色（`--c-cream`）
- 4ブロックを縦に並べる
- 各ブロックは PC で 2カラム（gap 32-80px）、画像と本文を **交互に左右入れ替え**（`.origin--reverse`）
- SP（≤880px）: 画像→本文の縦積みに統一

**各ブロック内容**:
| # | 国 | 産地 | 風味ノート |
|---|-----|------|----------|
| 1 | エチオピア 🇪🇹 | イルガチェフェ（標高1,900-2,200m） | ジャスミン / ベリー / 紅茶 |
| 2 | コロンビア 🇨🇴 | ウィラ ナリーニョ（1,700-2,000m） | ミルクチョコ / オレンジ / 黒糖 |
| 3 | グアテマラ 🇬🇹 | アンティグア（1,500-1,800m） | ダークチョコ / オレンジ / スパイス |
| 4 | ブラジル 🇧🇷 | セラード ミナス（1,000-1,200m） | ナッツ / キャラメル / カカオ |

各ブロックに `FLAVOR` / `PROCESS` / `ROAST` の3行ノート表（ラベル90px幅 + 値）。

---

### 4. CTA Banner (`#cta-banner`)

**目的**: スクロール途中で離脱しそうな読者を捕まえる中間CTA。

**レイアウト**:
- 全幅ダークブラウンの帯、テラコッタオーバーレイ付き16:9画像背景
- 中央寄せ、最大幅720px
- Eyebrow `FIRST DELIVERY 50% OFF` + H2「まずは、一杯からはじめてみませんか。」+ Primary CTAボタン

---

### 5. Plans (`#plans`)

**目的**: 3プランを比較してもらい、選択させる。

**レイアウト**:
- PC: 3カラムグリッド
- SP（≤960px）: 1カラム縦積み（最大幅480px センター寄せ）

**プラン比較**:

| | ライト | スタンダード ⭐人気No.1 | プレミアム |
|---|---|---|---|
| 価格 | ¥1,480/月 | ¥2,780/月 | ¥4,580/月 |
| 内容 | 豆 100g × 1種 | 豆 200g × 2種 | 豆 200g × 3種+限定豆 |
| 頻度 | 月1回 | 月1回 | 月1回 |
| 豆の種類 | 3種から選択 | 6種から選択 | 全種+希少ロット |
| 焙煎度 | 3段階 | 5段階 | 5段階+カスタム |
| 送料 | ¥350 | 送料無料 | 送料無料 |
| ボタン | Outline | Primary（塗り） | Outline |

**Featured カード（スタンダード）**:
- 背景ダークブラウン、白文字反転
- 上に -8px の浮き上がり（`translateY(-8px)`）
- 上端中央に `人気No.1` バッジ（テラコッタ）
- 価格区切り線・チェックマーク色も反転対応

**注釈**: 価格は税込 / 頻度は2週・月1・2ヶ月から選択可 / マイページでスキップ・休止・解約可

---

### 6. Flow (`#flow`)

**目的**: 申込みから受取までのシンプルさを訴求。

**レイアウト**:
- 背景: クリーム色
- PC: 4カラムグリッド、ステップ間に **矢印コネクター**（右向き → を CSS で擬似要素描画）
- タブレット（≤960px）: 2×2グリッド、コネクター非表示
- SP（≤560px）: 1カラム縦積み（最大幅420px センター寄せ）

**各ステップ**:
- 4:3 画像枠 + `STEP 01` 等のラベル + H3 + 本文
- 4ステップ: 申し込み → 焙煎 → 発送 → 自宅で楽しむ

---

### 7. Voice (`#voice`)

**目的**: 第三者の声で信頼感を補強。

**レイアウト**:
- PC: 3カラム
- SP（≤960px）: 1カラム（最大幅520px）

**各カード**:
- 白背景・1px ボーダー・border-radius 28px
- 右上に大きなクリーム色の引用符 `"`（装飾）
- 64px 円形アバター（プレースホルダー）
- 引用文 + 名前/年齢/職業 + 星評価
- 3名: 佐藤 美咲さん（34歳・デザイナー）/ 田中 健一さん（48歳・会社員）/ 山田 詩織さん（41歳・自営業）

---

### 8. FAQ (`#faq`)

**目的**: 申込み前の不安を解消。

**レイアウト**:
- 背景: クリーム色
- 最大幅820px、センター寄せ
- 6項目のアコーディオン（クリックで開閉、独立開閉可）

**インタラクション**:
- 質問行: `Q` マーク（テラコッタ・Serif）+ 質問テキスト + 右端 `+`/`−` アイコン
- 開いた状態: ボーダーがテラコッタに / `+` が消えて `−` に変化 / 回答エリアが `max-height: 400px` で展開（transition 0.35s）
- `aria-expanded` 属性を更新

**質問内容**: 解約 / 種類変更 / 挽き方 / 支払い / ギフト / 不在受取

---

### 9. Final CTA (`#cta-final`)

**目的**: 最終的にメール登録 or プラン選択へ。

**レイアウト**:
- 全幅ダークブラウン、16:9画像背景＋オーバーレイ
- 中央寄せ最大幅720px
- Eyebrow `START YOUR MONTHLY RITUAL` + H2「あなたの毎月の物語を、はじめましょう。」+ リード文
- メール入力フォーム（ピル型・横並び）: input + Primary ボタン
  - SP（≤560px）: 縦積みに切替
- 下部に3つの保証ポイント（✓ 初回50%OFF / ✓ 送料無料 / ✓ いつでも解約）

---

### Footer

**レイアウト**:
- 背景: ダークブラウン（`--c-ink`）
- PC: 1.2 : 2 の2カラム
  - 左: ブランド + 説明文
  - 右: 3カラム（サービス / サポート / 会社情報）
- SP（≤880px）: 1カラム縦積み
- 最下部に著作権表示

---

## Interactions & Behavior

### ナビゲーション
- スクロール量 >20px で `.is-scrolled` 付与（背景白透過 + blur 12px + 下境界線 + パディング縮小）
- ヒーロー領域内では `.is-hero`（白文字）、外に出たら通常色に
- アンカーリンクは `scroll-behavior: smooth`

### Drawer（モバイルメニュー）
- ハンバーガーボタンクリックで右からスライドイン（transform translateX(100%) → 0、`cubic-bezier(.16,1,.3,1)` 0.35s）
- スクリム（半透明黒）クリック・ESC キー・リンククリック・×ボタンで閉じる
- 開いている間 `body { overflow: hidden }`
- ハンバーガーアイコンも×に変形

### FAQ アコーディオン
- 各項目は独立開閉（複数同時に開ける）
- `max-height` トランジションでスムーズに展開
- `+` アイコンが回転・消失で `−` 風になる演出

### Reveal アニメーション
- IntersectionObserver で各セクションのカードが視界に入ったら `opacity 0→1`, `translateY(24px→0)` を 0.8s
- 同セクション内の複数カードは 80ms ずつズラして連続演出（最大 4個まで波）

### ホバーステート
- Primary ボタン: 背景色ダーク化 + `translateY(-1px)`
- Outline ボタン: 背景塗り + 文字白に反転
- プランカード: `translateY(-4px)` + ドロップシャドウ強化
- ナビゲーションリンク: 文字色テラコッタに

### フォーム
- メール入力 `type="email" required`
- 送信時は `event.preventDefault()` でダミーアラート（本実装では API へ送信）

---

## State Management

プロトタイプ段階では State はバニラ JS で最小限。本実装で必要になる State:

- **Drawer**: `isOpen: boolean`
- **FAQ**: 各項目の `isOpen: boolean`
- **メール登録フォーム**: `email: string`, `isSubmitting: boolean`, `submitResult: 'idle' | 'success' | 'error'`
- **スクロール状態**: `isScrolled: boolean`（しきい値20px）, `isOverHero: boolean`
- **プラン選択（CTAリンク先で必要）**: `selectedPlan: 'light' | 'standard' | 'premium'`

データ取得は不要（静的LP）。プラン情報・FAQ・お客様の声は CMS 化を推奨。

---

## Design Tokens

すべて `:root` の CSS 変数で定義済み（`styles.css` 冒頭）。

### Colors

| トークン | 値 | 用途 |
|---------|----|----|
| `--c-bg` | `#FBF8F3` | オフホワイト（本体背景） |
| `--c-cream` | `#F1E9DA` | クリーム（産地・流れ・FAQ背景） |
| `--c-cream-2` | `#E8DEC9` | 濃いめクリーム（プレースホルダー等） |
| `--c-ink` | `#2B1810` | ダークブラウン（本文・フッター背景・featured plan） |
| `--c-ink-2` | `#4A3328` | セカンダリブラウン（本文補助） |
| `--c-mute` | `#8A7363` | ミュート（注釈・キャプション） |
| `--c-line` | `#D9CDB8` | ヘアライン |
| `--c-accent` | `#C2603F` | テラコッタ（CTA・アクセント） |
| `--c-accent-2` | `#A14D2E` | テラコッタ濃（ホバー） |
| `--c-accent-soft` | `#E9A988` | テラコッタ薄（暗背景上のハイライト） |

### Typography

| トークン | フォント |
|---------|----------|
| `--font-sans` | `"Noto Sans JP", system-ui, -apple-system, "Helvetica Neue", "Hiragino Sans", sans-serif` |
| `--font-serif` | `"Noto Serif JP", "Hiragino Mincho ProN", serif` |

ウェイト: 300 / 400 / 500 / 600 / 700（Sans）、400 / 500 / 600（Serif）

**サイズスケール（H1〜本文）**:
| 用途 | 値 |
|------|-----|
| Hero H1 | `clamp(30px, 6vw, 72px)`, line-height 1.3 |
| Section H2 | `clamp(28px, 4vw, 44px)` |
| Origin H3 | `clamp(26px, 3.4vw, 38px)` |
| Plan title | 28px |
| Commit H3 | `clamp(20px, 2.4vw, 26px)` |
| Plan price | 48px（Serif） |
| Body | 14-16px / line-height 1.7-2.0 |
| Eyebrow | 12px / letter-spacing 0.22em / uppercase |

`body { font-feature-settings: "palt" }` で日本語の括弧・句読点を詰めています。

### Spacing & Radii

| トークン | 値 |
|---------|----|
| `--r-sm` | 6px |
| `--r-md` | 12px |
| `--r-lg` | 20px |
| `--r-xl` | 28px |
| `--maxw` | 1200px |
| `--pad-x` | `clamp(20px, 4vw, 56px)` |
| section vertical padding | `clamp(72px, 10vw, 120px)` |
| section heading bottom margin | `clamp(40px, 6vw, 64px)` |

### Shadows

- プランホバー: `0 20px 40px -24px rgba(43,24,16,0.2)`
- Featured plan: `0 30px 50px -20px rgba(43,24,16,0.4)`
- Primary ボタン: `0 6px 18px -8px rgba(161, 77, 46, 0.6)`
- Origin 画像: `0 20px 40px -24px rgba(43,24,16,0.3)`

### Breakpoints

| ブレークポイント | 切替内容 |
|--------------|---------|
| ≤960px | ナビをハンバーガーに、プラン1カラム、Voice 1カラム、Flow 2×2 |
| ≤880px | Origin 縦積み、フッター 1カラム |
| ≤720px | Commitment 1カラム、Hero メタ縦並び |
| ≤560px | Flow 1カラム、Final CTAフォーム縦積み、FAQ パディング縮小 |
| ≤380px | Hero H1 を 28px に追加縮小 |

---

## Assets

### フォント
Google Fonts から読み込み。本実装では `next/font` 等で self-host を推奨。
```
https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600&display=swap
```

### 画像

最終版の画像が `images/` フォルダに同梱されています（全 14 ファイル）。すべて Adobe Firefly で生成されたもので、ナチュラルモダンなトーンに統一されています。

詳細は下記「Files」の画像一覧表を参照してください。

### アイコン
現状アイコンライブラリは未使用（CSS で完結）。SVGアイコンを使う場合は Lucide / Heroicons 等を推奨。

---

## Files

| ファイル | 内容 |
|---------|------|
| `index.html` | マークアップ（セマンティックHTML、全セクション） |
| `styles.css` | スタイル一式（CSS変数 / セクション別ブロック） |
| `app.js` | バニラ JS（Drawer / FAQ / Nav scroll / Reveal animation） |
| `images/` | 本実装で利用する画像一式（差し替え済み・最終版） |
| `screenshots/` | 完成版のスクリーンショット（PC幅・全セクション） |

### 画像一覧（`images/`）

| ファイル | 用途 | サイズ比 |
|---------|------|---------|
| `hero.jpg` | Hero 背景 | 16:9 |
| `commitment-01.jpg` | こだわり 産地直送 | 16:9 |
| `commitment-02.jpg` | こだわり 鮮度保証 | 16:9 |
| `commitment-03.jpg` | こだわり 焙煎士が選ぶ | 16:9 |
| `commitment-04.jpg` | こだわり 通常購入よりお得 | 16:9 |
| `origin-ethiopia.jpg` | 産地 エチオピア | 16:9 |
| `origin-colombia.jpg` | 産地 コロンビア | 16:9 |
| `origin-guatemala.jpg` | 産地 グアテマラ | 16:9 |
| `origin-brazil.jpg` | 産地 ブラジル | 16:9 |
| `cta-banner.jpg` | 中間CTAバナー背景 | 16:9 |
| `flow-01.jpg`〜`04.jpg` | お届けの流れ4ステップ | 1:1 (`object-fit:cover` で 4:3 表示) |
| `voice-01.jpg`〜`03.jpg` | お客様の声アバター | 1:1 |
| `cta-final.jpg` | 最終CTA背景 | 16:9 |

### スクリーンショット一覧（`screenshots/`）

| ファイル | 内容 |
|---------|------|
| `01-hero.png` | Hero ファーストビュー |
| `02-commitment-top.png` | こだわり 01・02 |
| `03-commitment-bottom.png` | こだわり 03・04 |
| `04-origins-ethiopia.png` | 産地 エチオピア |
| `05-origins-colombia.png` | 産地 コロンビア |
| `06-origins-guatemala.png` | 産地 グアテマラ |
| `07-origins-brazil.png` | 産地 ブラジル |
| `08-cta-banner.png` | 中間CTAバナー |
| `09-plans.png` | 3プラン比較 |
| `10-flow.png` | お届けの流れ 4ステップ |
| `11-voice.png` | お客様の声 3件 |
| `12-faq.png` | FAQ（一部開いた状態） |
| `13-cta-final.png` | 最終CTA |
| `14-footer.png` | フッター |

> **注**: スクリーンショットは約 909px 幅のビューポートでキャプチャされているため、ナビゲーションはハンバーガー表示になっています（≤960px のブレークポイント）。フル PC のデスクトップナビ表示は実機の幅 1000px 以上で確認してください。

### ファイル内構造

**`styles.css` の区切り**（コメント `/* === */` で目視可能）:
1. CSS 変数（`:root`）
2. Reset / 基本
3. Helpers（container, ph placeholder, eyebrow, button, section frame）
4. Nav / Drawer
5. Hero
6. Commitment
7. Origins
8. CTA Banner
9. Plans
10. Flow
11. Voice
12. FAQ
13. Final CTA
14. Footer
15. Reveal animations

**`app.js` の機能ブロック**:
1. Nav scroll state
2. Drawer open/close
3. FAQ accordion
4. IntersectionObserver reveal

---

## 推奨される実装方針

### React / Next.js の場合
1. `app/page.tsx` を 9セクションのコンポーネントに分割（`<Hero />`, `<Commitment />`, `<Origins />`…）
2. CSS 変数は `globals.css` または Tailwind の `theme.extend.colors` に移植
3. データ（プラン・産地・FAQ・お客様の声）は `lib/data.ts` で配列化、map で描画
4. Drawer / FAQ は `useState` でローカル管理
5. Reveal アニメは `framer-motion` の `whileInView` または既存の IntersectionObserver パターンで
6. 画像は `next/image` で配信、Hero は `priority` 指定

### Astro / 静的サイトの場合
1. セクションごとに `.astro` コンポーネント
2. CSS はほぼそのまま流用可能
3. JS は最小限なので `<script>` でインラインでも可

### CMS 連携が必要な項目
- プラン（価格・内容）
- 産地ストーリー
- お客様の声
- FAQ

---

## 確認したいポイント

1. **画像差し替え**: 16:9 / 4:3 / 1:1 のアスペクト比固定で差し替えてください。`object-fit: cover` で枠内にトリミングされる前提のレイアウトです。
2. **フォーム送信先**: 最終CTAのメール登録フォームの送信先 API は未定義。Mailchimp / SendGrid 等のエンドポイントを設定してください。
3. **プランCTAのリンク先**: 現状すべて `#cta-final` に飛ぶようになっています。本実装では決済画面 or 申込みフォームに繋いでください。
4. **ナビCTAボタン**: 「まず試してみる」はサイト内アンカーですが、本実装では別ページの申込みフローに遷移させる可能性があります。
5. **解析タグ**: Google Analytics / GTM / Meta Pixel 等のタグは未設置です。
