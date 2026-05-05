# Handoff: Pilates Studio BLOOM ランディングページ

## Overview
横浜市高島の女性向け完全予約制プライベートマシンピラティススタジオ「Pilates Studio BLOOM」のランディングページ。
20〜40代女性をターゲットに、無料体験レッスンの申し込み（CVR最大化）をゴールとした1ページ構成のLPです。
やわらかなクリーム × ローズピンク × ウォームブラウンのフェミニンで上質なトーンで、信頼感と特別感を訴求します。

## About the Design Files
このバンドルに含まれる `LP.html` は **HTMLで作成されたデザインリファレンス**です。
最終的な見た目・挙動・コピーを示すプロトタイプであり、そのままプロダクションコードとして使用することは想定していません。

実装タスクは、この HTML デザインを **既存コードベースの環境（Next.js / React / Astro / WordPress 等）** で再現することです。
コードベースの既存パターン（コンポーネント構造、スタイリング手法、ルーティング、フォーム処理など）に沿って実装してください。
もしまだ環境が決まっていない場合は、SEO とパフォーマンスを重視して **Next.js (App Router) + Tailwind CSS** を推奨します（このデザインがすでに Tailwind ベースのため移植が容易）。

## Fidelity
**High-fidelity (hifi)** です。
カラー、タイポグラフィ、余白、画像配置、インタラクションまで最終形を想定しています。
ピクセルパーフェクトでの再現を目指してください。

## Tech Stack（リファレンス側）
- **Tailwind CSS** （CDN: `https://cdn.tailwindcss.com`）— カスタムカラーは `tailwind.config` で `bloom.*` として定義
- **Google Fonts** — Noto Serif JP (300/400/700) / Noto Sans JP (300/400/500/700)
- **Vanilla JS** — ナビ追従、モバイルメニュー開閉、IntersectionObserver によるフェードイン、フローティングCTA表示制御

実装側では Tailwind CDN ではなくビルド版の Tailwind を使うこと。フォントは `next/font` 等で self-host を推奨します。

---

## ページ構成（セクション順）

LP は単一ページに以下のセクションが順番に配置されます。各セクションには `id` が付いており、ナビゲーションのアンカーリンクで遷移します。

| # | セクション | id | 役割 |
|---|---|---|---|
| 1 | グローバルナビ | `#navbar` | 固定ヘッダ。スクロール時に背景色付与 |
| 2 | ヒーロー | `#hero` | キャッチコピー＋無料体験CTA |
| 3 | お悩み | `#pain` | YOUR CONCERNS — チェックリスト＋画像＋共感メッセージ |
| 4 | 選ばれる3つの理由 | `#reasons` | WHY CHOOSE BLOOM — 理由3つ（画像＋テキスト交互レイアウト） |
| 5 | ご利用の流れ | `#flow` | HOW TO START — STEP 1〜3 を縦のコネクタで接続 |
| 6 | プラン | `#plan` | PLANS & PRICING — 料金テーブル |
| 7 | お客様の声 | `#voice` | CUSTOMER VOICE — レビューカード3枚（イニシャル丸囲み付き） |
| 8 | よくあるご質問 | `#faq` | Q & A — Q&Aアコーディオン風カード3つ |
| 9 | インストラクター紹介 | `#instructor` | INSTRUCTOR — 写真＋プロフィール＋資格リスト |
| 10 | お問い合わせ | `#contact` | CONTACT — 体験申込フォーム |
| 11 | フッター | — | サイト情報、ナビ、コピーライト |
| 12 | フローティングCTA | `#float-cta` | スクロール後に下部固定で表示される常時CTA |

---

## Design Tokens

### Colors（Tailwind config 準拠）

| Token | Hex | 用途 |
|---|---|---|
| `bloom.brown` | `#8b7355` | 主要テキスト、ロゴ、テーブルヘッダ背景 |
| `bloom.rose` | `#c86584` | アクセント（CTA、ボーダー、見出し下のeyebrow） |
| `bloom.rose-light` | `#d4849d` | CTAホバー時 |
| `bloom.beige` | `#f5f0e8` | セクション背景、テーブル偶数行 |
| `bloom.beige-dark` | `#ede5d8` | カードボーダー（FAQなど） |
| `bloom.cream` | `#faf7f2` | ページ背景（body） |
| `bloom.muted` | `#999999` | サブテキスト |
| 本文テキスト | `#3a3530` | body デフォルト文字色 |
| 段落テキスト | `#555555` | カード内・テーブル内本文 |

### Typography
- **Serif（見出し系）**: `"Noto Serif JP"`, weight 300/400/700
- **Sans（本文・ナビ・ボタン）**: `"Noto Sans JP"`, weight 300/400/500/700
- 主な見出しサイズ:
  - H1（Hero PC）: `text-5xl` (3rem) / Serif Bold / `leading-relaxed`
  - H1（Hero SP）: `text-3xl` (1.875rem) / Serif Bold
  - H2（セクション見出し）: `text-2xl md:text-3xl` / Serif Bold / Brown
  - H3（カード見出し）: `text-xl` / Sans Bold / Brown
  - eyebrow（英語小見出し）: `text-xs tracking-[0.3em] text-bloom-rose`
- 本文: `text-[14px] leading-[2]` または `leading-[1.9]`
- ボタンラベル: `text-sm tracking-[0.2em]` Sans Bold

### Spacing & Layout
- セクション縦余白: `py-20`（80px 上下）
- コンテナ最大幅: `max-w-3xl`（読み物系）/ `max-w-4xl`（流れ）/ `max-w-5xl`（理由・声）/ `max-w-6xl`（ヒーロー）
- 横パディング: `px-6`（モバイル基準）
- カード間 gap: `gap-6` 〜 `gap-10`

### Border Radius
- 画像: `rounded-2xl`（16px）
- カード: `rounded-sm`（2px、控えめ）
- バッジ・ピル: `rounded-full`
- フォーム入力: `rounded-sm`

### Shadows
- 画像: `shadow-md`
- カード（声・FAQ）: `shadow-sm`
- CTAバナー画像: `shadow-lg`
- ナビ（スクロール後）: `0 2px 20px rgba(139,115,85,0.12)`

### Gradients（特殊効果）
- ローズグラデ文字: `linear-gradient(90deg, #c86584, #e8a0b4)` を background-clip:text で
- ブラウングラデ文字: `linear-gradient(90deg, #8b7355, #b09a7a)`
- ご利用の流れ STEPバッジ: `linear-gradient(135deg, #8b7355, #b09a7a)`
- ご利用の流れ見出し枠: `linear-gradient(135deg, #c86584, #e8a0b4)` の border-image 風 2px 枠

---

## セクション詳細

### 1. グローバルナビ `#navbar`
- 固定（`fixed top-0`）、幅100%、`z-50`
- 初期は背景透明、スクロール後 `.scrolled` で `rgba(250,247,242,0.97)` + box-shadow
- 左：ロゴ「BLOOM」（Serif Bold、Brown、tracking-widest）
- 右：「ご予約」ボタン（PCのみ、ローズの枠線、ホバーで塗り）／ハンバーガー（SPのみ）
- モバイルメニュー：`#mobile-menu` を `hidden` トグル。Cream背景で全画面、各セクションへのアンカー6本＋ご予約CTA

### 2. ヒーロー `#hero`
- **PC**: 背景画像 `uploads/hero.jpg`（`bg-cover bg-center`）の上にクリーム色グラデオーバーレイを左から重ね、左揃えで以下を配置
  - eyebrow: `Pilates Studio BLOOM | 横浜市高島`
  - H1（2行）: 「今のあなたを変える / やさしいピラティス」
  - サブコピー: 「体と心に寄り添う / オーダーメードレッスン」
  - CTAボタン: 「無料体験レッスンを予約する」（`bg-bloom-rose`、`px-10 py-4`、`tracking-[0.2em]`）
  - メールアドレス: `info@bloom-pilates.jp`
- **SP**: 画像（`aspect-[4/5]`）＋下にクリーム背景のテキストエリアを縦積み。CTAは `w-full`
- フェードインを 0 / 0.1s / 0.2s / 0.3s でずらして適用

### 3. お悩み `#pain`
- 背景: cream
- 上部: eyebrow「YOUR CONCERNS」+ H2「こんなお悩みありませんか？」
- 中段（2カラム、SPは縦積み、`mb-20` で下に余白）:
  - **左**: チェックリスト4項目（`.check-item::before` で角丸ローズ枠＋チェックアイコン）
    - 「ダイエットが続かない」「肩こり・腰痛が辛い」「姿勢が悪い」「運動が苦手」など（実コピーは LP.html 参照）
  - **右**: 画像 `uploads/onayami.jpg`（`rounded-2xl shadow-md`）
- 下段: 共感メッセージ「完全予約制のプライベートスタジオ・・・」（中央揃え、本文）

### 4. 選ばれる3つの理由 `#reasons`
- 背景: 白
- 各理由ブロックを `mb-20` で区切り、PCは画像とテキスト 1:1 を **交互配置**（1: 画像左 / 2: 画像右 / 3: 画像左）
- 各テキスト側:
  - **REASON バッジ**: `block bg-bloom-rose text-white text-xs tracking-[0.25em] px-4 py-1.5 rounded-full text-center`
    - 横幅は親（画像と同じ幅）いっぱいに広がる（`block` + `text-center`）
  - H3: 「完全予約制で / プライベートな空間」など
    - `<br class="hidden md:inline">` で **PCのみ改行、スマホは1行**
  - 本文（14px、leading-2、`#555`）
- セクション末尾に CTAバナー（`uploads/bloom_cta-22d7b74f.jpg` ＋下にローズの「まずは無料体験レッスンへ →」帯）。最大幅576px、SPは `90vw`

### 5. ご利用の流れ `#flow`
- 背景: `bg-bloom-beige`
- eyebrow「HOW TO START」
- 見出し: ローズの2pxグラデ枠 + パディング枠の中に「初回体験ご利用の流れ」（グラデ文字）
- サブテキスト: 「体験レッスン 60分」
- STEP 1〜3 を縦に並べる:
  - 左に **STEPバッジ**（64×64px、ブラウングラデ背景、白文字「STEP / 1」）＋下に縦のコネクタ線（同グラデ）
  - 右に H3 + 本文 + 画像（`md:w-72`、`rounded-2xl shadow`）
  - STEP 3 のみコネクタ無し / `pb-4`
- ステップ内容（実コピー）:
  1. **お申込み** — フォームから申込→持ち物等を返信
  2. **姿勢チェックとカウンセリング** — 来店→着替え→姿勢分析→カウンセリング
  3. **レッスン体験後・継続のご相談** — レッスン→感想ヒアリング→継続相談

### 6. プラン `#plan`
- 背景: 白
- eyebrow「PLANS & PRICING」、H2「プラン」
- `<table class="plan-table">` を `overflow-x-auto` で囲む
- ヘッダ行: ブラウン背景、白文字、太字
- セル: `padding: 14px 16px`、`border: 1px solid #e0d8cc`
- 偶数行に `bg-bloom-beige` 自動付与（CSSで `tr:nth-child(even):not(.plan-spacer) td:not(.bg-bloom-beige)`）
- 構成:
  - **体験レッスン** 行（手動でベージュ背景指定）: 1回60分 / ¥8,000
  - **入会金** 行: ¥10,000（即日入会で半額 ¥5,000）※注釈はローズ色 `text-xs`
  - **スペーサー行** `<tr class="plan-spacer">`: 高さ14pxの透明な区切り
  - **パーソナルレッスン（月謝）見出し行**: 白背景、サブヘッダ風
  - 月謝プラン行: 月2回 / 月4回 / 月6回 など（実コピーは LP.html）

### 7. お客様の声 `#voice`
- 背景: `bg-bloom-beige`
- eyebrow「CUSTOMER VOICE」、H2「お客様の声」
- カード3枚（PC: 3列グリッド `gap-6`、SP: 縦積み）。各カード:
  - 上段（flex justify-between）:
    - 左: 星5つ `★★★★★`（ローズ色、`tracking-wider`）
    - 右: **イニシャル丸アイコン**（40×40px、`bg-bloom-beige`、`border-2 border-bloom-rose/40`、Serif Bold ローズ文字）+ 「M様」「K様」「A様」
  - 「40代 女性」など属性（Sans Bold Brown）
  - サブ属性「産後の体型改善」など（`text-xs text-bloom-muted`）
  - 本文（`text-[14px] leading-[1.9] text-[#555]`）

### 8. よくあるご質問 `#faq`
- 背景: 白
- eyebrow「Q & A」、H2「よくあるご質問」
- カード3枚を縦に `gap-6`。各カード:
  - `border border-bloom-beige-dark rounded-sm p-6 bg-bloom-cream`
  - 上段: 「Q」（Serif Bold Rose、xl）+ 質問文（Sans Bold Brown）
  - 下段: 「A」（Serif Bold Brown、xl）+ 回答文（14px、leading-2、`#555`）
- 実コピー:
  - Q1: 何をもっていけばいいですか？ → 運動できる上下のウェア、ソックス、タオル、お飲み物をご持参下さい。
  - Q2: レッスンのどれくらい前に行けばいいですか？ → ご予約時間の20分前まで。入会の場合はレッスン後15分の説明あり。
  - Q3: 運動が苦手ですが・・・ → 運動経験がない・体力に自信がない・体が硬い方でも安心して受けられます。

### 9. インストラクター紹介 `#instructor`
- 背景: 白
- eyebrow「INSTRUCTOR」、H2「インストラクター紹介」
- 中央寄せ、PCは横並び（写真左 224px / プロフィール右）、SPは縦積み
- 写真: `uploads/instructor.jpg`（`rounded-2xl shadow-md object-cover`）
- 右側:
  - eyebrow 小: `INSTRUCTOR`
  - 名前: 「花田 美樹」（Serif Bold 2xl Brown）
  - ローマ字: 「Miki Hanada」（Sans Sub）
  - 資格リスト（`<ul>`、各行は `—` プレフィックス + テキスト）
    - STOTT PILATES® 国際認定インストラクター ほか（実コピー LP.html 参照）

### 10. お問い合わせ `#contact`
- 背景: cream
- eyebrow「CONTACT」、H2「無料体験レッスンのご予約・お問合せ」
- フォーム（`max-w-xl mx-auto`）:
  - 入力フィールド: お名前 / メールアドレス / 電話番号 / ご希望日時 / メッセージ
  - スタイル: `w-full px-4 py-3 border border-bloom-beige-dark rounded-sm bg-white focus:border-bloom-rose focus:outline-none`
  - 送信ボタン: ローズ塗り full-width、`tracking-[0.2em]` 、ホバーで `rose-light`
- 実装側で送信先を設定すること（メール送信API or フォームサービス）

### 11. フッター
- 背景: ブラウン or ダーク。文字は cream / 白
- ロゴ「BLOOM」、住所、メール、ナビリンク（お悩み/理由/流れ/プラン/声/FAQ）、コピーライト

### 12. フローティングCTA `#float-cta`
- 画面下部に固定（`fixed bottom-0 left-0 right-0`）
- 初期は `transform: translateY(120%)` で隠れている
- ヒーローを抜けたら `.show` クラスで表示
- 中身: 「無料体験レッスンを予約する」CTAボタン

---

## Interactions & Behavior

### スクロール連動
- **ナビ背景**: `window.scrollY > 50` で `#navbar.scrolled` を付与
- **フェードイン**: `IntersectionObserver` で `.fade-in` 要素が viewport に入ったら `.visible` 付与
  - delay: `.fade-in-delay-1/2/3` で 0.1s/0.2s/0.3s ずらし
  - transition: `opacity 0.7s, transform 0.7s`
- **フローティングCTA**: ヒーロー（`#hero`）の bottom を抜けたら `.show` 付与

### ナビゲーション
- アンカーリンクで該当セクションへ `scroll-behavior: smooth`
- モバイルメニュー: `#menu-btn` クリックで `#mobile-menu` から `hidden` 除去 + `flex` 付与、`#menu-close` および各リンクの `onclick="closeMobileMenu()"` で閉じる

### ホバー
- CTAボタン: `bg-bloom-rose` → `bg-bloom-rose-light`、`transition-all duration-300`
- ナビCTA: 枠線→塗り
- フッターリンク: `hover:text-white`

### レスポンシブ
- ブレークポイント: Tailwind デフォルト（`md: 768px` 主体）
- ヒーローはPC/SPで完全に別レイアウト（PCは `hidden md:flex`、SPは `md:hidden`）
- 「3つの理由」と「ご利用の流れ」のテキスト改行は `<br class="hidden md:inline">` でPCのみ改行
- グリッド: PC=3列、SP=1列縦積み（`grid-cols-1 md:grid-cols-3`）

---

## State Management
このLP単体ではほぼステートレス（純粋な静的ページ）。実装側で必要になるのは:
- フォーム入力値のステート（`useState` 等）
- 送信中・成功・エラーのステート（送信ボタンのローディング、サンクス画面遷移）
- モバイルメニューの開閉ステート

## Form Submission
- フォーム送信先は **未実装**（プロトタイプ）
- 推奨実装: Resend / SendGrid / Formspree / 自社CRM API
- 送信成功時は `/thanks` 等のサンクスページへ遷移、または同ページ内でメッセージ表示
- バリデーション: 必須＝お名前 / メール / 電話 / 希望日時。メール形式チェック、電話番号は数値+ハイフン許容

## Assets

`uploads/` フォルダに含まれる画像:

| ファイル | 用途 |
|---|---|
| `hero.jpg` | ヒーロー背景 |
| `onayami.jpg` | お悩みセクション右側 |
| `reason1.jpg` | 選ばれる理由①（完全予約制） |
| `reason2.jpg` | 選ばれる理由②（マンツーマン） |
| `reason3.jpg` | 選ばれる理由③（上質な空間） |
| `usageflow1.jpg` | ご利用の流れ STEP 1 |
| `usageflow2.jpg` | ご利用の流れ STEP 2 |
| `usageflow3.jpg` | ご利用の流れ STEP 3 |
| `instructor.jpg` | インストラクター紹介 |
| `bloom_cta-22d7b74f.jpg` | CTAバナー画像 |
| `experience_bloom.jpg` | 予備（必要に応じて） |

実装時は Next.js の `<Image>` や Astro の `<Image>` を使い、`width/height` 指定 + 適切な loading/sizes を設定してください。alt 属性は LP.html の現状値を踏襲してください。

## SEO / Meta（実装時に確認）
- `<title>`: Pilates Studio BLOOM | 横浜市高島の完全予約制プライベートマシンピラティス
- `<meta name="description">`: 神奈川県横浜市高島の完全予約制プライベートマシンピラティススタジオ。国際資格を持つインストラクターがマンツーマンで丁寧に指導します。
- OG タグ完備（`og:title`, `og:description`, `og:type=website`, `og:locale=ja_JP`）
- 実装側で `og:image`、`og:url`、`twitter:card` を追加すること
- 構造化データ（LocalBusiness / FAQ）を JSON-LD で追加することを推奨

## Files
- `LP.html` — 完全な HTML プロトタイプ（このバンドルのソース・オブ・トゥルース）
- `uploads/*.jpg` — 上記の画像アセット
- `README.md` — 本ファイル

`LP.html` のコメント（`<!-- ═══ N. セクション名 ═══ -->`）は実装時のセクション境界の目印として活用してください。

---

## 実装チェックリスト（推奨）

- [ ] フォントを self-host（`next/font` 等）に変更
- [ ] Tailwind を CDN からビルド版に変更し `bloom.*` カラーを `tailwind.config.ts` に移植
- [ ] 画像を `<Image>` コンポーネント＋WebP/AVIF最適化
- [ ] フォーム送信処理を実装（送信先・バリデーション・サンクスページ）
- [ ] アナリティクス（GA4 / GTM）を導入し、CTAクリック・フォーム到達・送信完了をイベント計測
- [ ] 構造化データ（LocalBusiness, FAQPage）を追加
- [ ] アクセシビリティ: フォームに `<label>`、ボタンに `aria-label`、コントラスト確認
- [ ] Lighthouse Performance / SEO / Accessibility を 90+ に
- [ ] 実機（iPhone SE / Pixel / iPad / デスクトップ）でレスポンシブ確認
