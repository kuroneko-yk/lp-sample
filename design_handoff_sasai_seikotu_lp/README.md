# Handoff: 笹井整骨院 ランディングページ（交通事故・むちうち専門）

## Overview
神戸市中央区にある「笹井整骨院」のサービスサイト／ランディングページ。
**交通事故・むちうち専門**であり、**自賠責保険対応で自己負担0円**であることを最大の訴求軸として、事故後の不調に悩む20〜60代の男女から、電話・WEB予約・無料相談の3つのいずれかでコンバージョンを獲得することを目的とする。

清潔感・安心感・医療系の信頼感をベースに、緊急性（事故後の早期施術の重要性）を控えめに添えたトーンで設計している。

---

## About the Design Files
このバンドルに含まれる `sasai_seikotu.html` は **HTMLで制作したデザインリファレンス（プロトタイプ）** です。**そのまま本番にデプロイするための実装コードではありません。**

開発者の方は、対象コードベースの環境（Next.js / Astro / WordPress / 静的サイトジェネレーター 等）で **このHTMLデザインを再現** してください。既存のコンポーネントライブラリ・CSS設計・ビルド構成があればそちらに合わせ、まだ環境が決まっていない場合は本LP単体の特性（SEO重視・低運用コスト）を踏まえて適切なフレームワークを選定してください（推奨: Astro もしくは Next.js App Router の静的書き出し）。

## Fidelity
**High-fidelity (hifi)** — 色・タイポグラフィ・余白・コンポーネント形状はすべて確定値です。ピクセル単位で再現してください。

ただし以下は未確定／プレースホルダー：
- すべての画像（`placehold.co` の灰緑プレースホルダーで代用中）
- 電話番号 `078-000-0000`、住所末尾の番地、ビル名、院長経歴の年号
- 地図：現状 OpenStreetMap 埋め込み（実装時に Google Maps 等へ差し替え推奨）

---

## ページ構成（縦スクロール 1ページ）

1. **ヘッダー（固定）** — ロゴ、ナビ、電話、無料相談ボタン
2. **ヒーロー** — メインキャッチ、3つの指標、CTA二段、信頼マーキー
3. **症状チェックリスト** — 2カラム（左：6項目／右：画像 + RISKバッジ）
4. **選ばれる5つの理由** — Reason帯バー + 交互2カラム（PC）／縦積み（SP）
5. **CTAバナー（背景画像）①**
6. **施術の流れ** — 5ステップ縦並び、点線コネクター
7. **院内雰囲気ギャラリー** — 6枚モザイクグリッド
8. **CTAバナー（背景画像）②** — 転院サポート訴求
9. **料金案内** — 自賠責¥0強調カード + 通常料金テーブル
10. **患者様の声** — 3カラム
11. **院長挨拶** — 写真 + 経歴・資格カード
12. **よくある質問** — 5問アコーディオン
13. **アクセス・診療時間** — 院情報・時間表 + 地図
14. **予約CTA** — 電話・WEB予約の2カード
15. **フッター**
16. **フローティングCTA（画面下固定）** — 全デバイス常時表示

---

## Design Tokens

### Colors
ブランドグリーンを中心とした9段階パレット。背景は白とクリーム系で清潔感を確保。

| Token | Hex | 用途 |
|---|---|---|
| `brand-50` | `#f1f9f5` | 最浅背景 |
| `brand-100` | `#dcefe3` | 淡背景、バッジ背景 |
| `brand-200` | `#bbdfca` | ボーダー、点線 |
| `brand-300` | `#8ec8a8` | フォーカスリング |
| `brand-400` | `#5aaa84` | ホバー（明） |
| `brand-500` | `#2d8a6e` | **メインアクセント** |
| `brand-600` | `#206d58` | リンク、見出し強調、ボタンホバー |
| `brand-700` | `#1a5747` | 濃いBG、テーブルヘッダ |
| `brand-800` | `#16463a` | CTAバナー背景 |
| `brand-900` | `#123a30` | フッター直前の濃BG |
| `ink-900` | `#0d1f1a` | 本文濃 |
| `ink-800` | `#1f3530` | 本文 |
| `ink-700` | `#3a4a45` | 本文薄 |
| `ink-500` | `#6b7a75` | キャプション |
| `ink-400` | `#94a09c` | 罫線テキスト、無効 |
| `paper` | `#fbfaf6` | セクション淡背景 |
| `cream` | `#f4efe5` | 画像プレースホルダー基調 |
| `alert` | `#c0492b` | 緊急性（赤茶系） |
| `white` | `#ffffff` | 主背景 |

### Typography
- **本文**: Noto Sans JP（400 / 500 / 700 / 900）
- **見出し**: Noto Serif JP（500 / 700 / 900）— クラス名は `.serif`
- **英数字**: Inter（400 / 600 / 700 / 800）letter-spacing 0.04em — クラス名は `.en`

タイプスケール（Tailwind準拠）：
- h1 hero: `text-3xl sm:text-4xl lg:text-[3.1rem] xl:text-[3.4rem]` / `leading-[1.25] sm:leading-[1.5] lg:leading-[1.55]` / `font-black` / Noto Serif JP
- h2 section: `text-3xl lg:text-5xl` / `font-black` / Noto Serif JP
- h3 sub: `text-xl lg:text-2xl` / `font-bold` / Noto Serif JP
- 本文: `text-base lg:text-lg` / `leading-relaxed`
- キャプション: `text-xs` / `text-sm`
- Eyebrow: `text-[0.78rem]` / `font-bold` / `tracking-[0.18em]` / brand-500

### Spacing & Layout
- 最大幅: `max-w-7xl`（1280px）中央寄せ、`px-5 lg:px-8`
- セクション縦余白: `py-20 lg:py-28`
- カード角丸: `rounded-2xl`（16px）／ 大カード: `rounded-[2rem]`（32px）／ ボタン: `rounded-full`
- ボーダー: `border-brand-100` 基本

### Shadows
- カード: `shadow-sm`（標準） / `shadow-lg` / `shadow-xl`
- CTAボタン: `shadow-lg shadow-brand-500/20`
- CTAパルス: `@keyframes softPulse` で2.4秒ループ

### Breakpoints (Tailwind default)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px ← レイアウト切替の主要ブレイクポイント
- `xl`: 1280px

---

## Components

### 1. Header（固定）
- 高さ: `h-16 lg:h-20`、`bg-white/95 backdrop-blur`、`border-b border-ink-900/5`
- ロゴ: 40〜44pxの円形 `bg-brand-500` に白「笹」のセリフ太字、その右に小さい英タグ「KOBE · CHUO」+ 院名
- PCナビ: 7項目（症状/選ばれる理由/施術の流れ/料金/患者様の声/よくある質問/アクセス）
- 右端: 電話番号（sm以上で表示）+ 緑の「無料相談」ピル

### 2. Hero
- 背景: `bg-paper` + 装飾円形ぼかし2つ（brand-100 / brand-50）
- 12カラムグリッド（lg: 7:5）
- 左 col-span-7:
  - バッジ群（3つ）: 赤の「交通事故・むちうち専門」/ 白枠「自賠責保険適用 自己負担¥0」/ 白枠「国家資格者在籍」
  - h1: 2行構成 ── 1行目「交通事故の **つらい痛み、**」（後半がブランド色＋下線ハイライト brand-100）、2行目「我慢していませんか？」 / `whitespace-nowrap` で1行目固定 / `mt-8 lg:mt-10` で本文へ
  - 本文（max-w-xl）
  - 3列指標（dl/dt/dd）: ¥0〜 / 3,200件 / 20時まで
  - CTA二段: pulse付き緑（24時間WEB予約・無料相談）+ 白×緑枠（電話）
  - 補足: 受付時間/三宮駅徒歩5分
- 右 col-span-5:
  - aspect-[4/5] のメイン画像、`rounded-[2rem] shadow-2xl`
  - 左上に「SINCE 2008 / 地域に根差して17年」浮きカード
  - 左下にレビューチップ（星5・4.9）

### 3. 信頼マーキー
- 白背景に 7項目の信頼バッジが marquee アニメーション（28秒ループ）

### 4. 症状セクション
- `paper-tex` 紙風テクスチャ背景
- 12カラム（lg: 7:5）
- 左: 緑チェック（カスタムSVG）付きカード×6、最後に brand-700 警告メッセージカード
- 右: 患者画像 + 右上に回転した赤丸「RISK 放置で慢性化」、`sticky top-28`

### 5. 選ばれる理由（5項目）
- 各項目：
  - **Reason帯**（1カラム全幅）: `bg-brand-500 text-white rounded-xl` に `REASON 01 タイトル` を並列
  - その下に2カラム（lg: 5:7）で 写真 + テキスト
  - **写真と見出しの頭の縦位置を揃える**（共に items-start で上端揃え）
- 偶数項目（02・04）は逆順（`lg:order-1` / `lg:order-2`）
- スマホは全部縦積み
- 内訳:
  - 01: 高い専門性 / 4項目チェックリスト
  - 02: 自賠責¥0 / 慰謝料¥4,300・施術費¥0の2カード
  - 03: オーダーメイド施術 / 資格チップ4つ
  - 04: 夜20時・土日祝 / 診療時間3列要約
  - 05: 保険・弁護士連携 / 4項目リスト

### 6. CTAバナー（背景画像）
- 背景画像 + `bg-gradient-to-r from-brand-900/95 via-brand-800/85 to-brand-700/70` オーバーレイ
- 左にコピー、右に電話+WEB予約ボタン
- バナー②は逆方向グラデーション

### 7. 施術の流れ（5ステップ）
- max-w-4xl
- 各ステップ: 左に72×72pxの緑ロゴカード「STEP 01」、右にタイトル+説明のカード
- ステップ間は CSS 点線コネクター（`.step-row::before`）で繋ぐ
- STEP 05 のみ `bg-brand-600` + `ring-4 ring-brand-100` で強調

### 8. 院内ギャラリー（6枚モザイク）
- 12カラムグリッド
- メイン1枚（lg: col-span-7, aspect-square）+ サイド5枚を配置
- 各画像下に小さいキャプション

### 9. 料金
- ハイライトカード（`from-brand-600 to-brand-800` グラデ）
  - 左: 「自賠責保険適用で 自己負担 **¥0**」（¥0 は8xl）
  - 右: 適用範囲チェックリスト4項目
- 通常料金テーブル: 5行（初診料/一般施術/骨盤矯正/スポーツ整体/回数券）

### 10. 患者様の声
- 3カラム、`bg-paper` カード、左上に大きい引用符 `"`
- 星5、見出し、本文、アバター+氏名/年代

### 11. 院長挨拶
- 2カラム（lg: 5:7）
- 左 sticky: 4:5縦写真、`-top/-left` オフセットの brand-100 影、右下に「DIRECTOR 笹井 望」プレート
- 右: 挨拶テキスト3段落 + 経歴/資格 2カード + 署名

### 12. FAQ（5問）
- `<details>` アコーディオン、デフォルトで Q1 のみ open
- 左に丸い「Q」「A」ラベル、右に+アイコン（open時 45度回転で×に）

### 13. アクセス
- 2カラム（lg: 5:7）
- 左: 院情報カード + 診療時間テーブル（月〜日祝、9-13/15-20、木曜定休）
- 右: 地図（OpenStreetMap 埋め込み、下部に院情報チップ）

### 14. 予約CTA
- `.stripe-bg`（135度2色グラデ）背景
- 2カードCTA: 電話 / WEB予約
- 下に LINE 公式案内

### 15. フッター
- `bg-ink-900 text-ink-400`
- 3カラム: ブランド / 院情報 / メニューリンク

### 16. フローティングCTA
- `fixed bottom-0` 全幅、`pb-[env(safe-area-inset-bottom)]`
- 左（md以上）: 「自賠責適用 自己負担 ¥0」訴求
- 中: 電話ボタン
- 右: 緑のWEB予約ボタン

---

## Interactions & Behavior

- **スムーススクロール**: `html { scroll-behavior: smooth; }` でナビアンカー
- **FAQアコーディオン**: `<details>` のネイティブ動作、+アイコン CSS transition 0.25s
- **CTAパルス**: メインCTAボタンの周囲に2.4秒間隔で広がる影リング（`.pulse-ring`）
- **信頼マーキー**: 28秒線形ループ
- **focus-visible**: ボタンに `outline:3px solid #8ec8a8; offset:3px`
- **電話リンク**: `tel:0780000000`（実装時に正しい番号へ）
- **WEB予約リンク**: 現在は `#reserve` アンカー、実装時に予約システムへ
- **印刷時**: フローティングCTAは非表示

---

## Responsive Behavior

- **スマホ（〜640px）**: 全セクション縦積み、ヒーロー画像が下、フローティングCTAは縦長で2ボタン構成
- **タブレット（640〜1024px）**: 主要レイアウト維持、一部2カラム化
- **PC（1024px〜）**: 全ての2カラム/モザイクが本来の形に

---

## Assets（プレースホルダー一覧）
すべて `placehold.co` で代用中。`/images/` フォルダに実画像を配置し、参照パスを差し替えてください。

| 役割 | 推奨ファイル名 | 仕様 |
|---|---|---|
| ヒーロー施術風景 | `images/hero-treatment.jpg` | 4:5、640×800以上、明るい施術シーン |
| 症状セクション患者 | `images/symptoms-patient.jpg` | 4:5、520×650以上、悩む表情 or 首を押さえる |
| Reason 01 写真 | `images/reason-01.jpg` | 4:3、600×450以上、専門施術風景 |
| Reason 02 写真 | `images/reason-02.jpg` | 4:3、保険手続き or 受付シーン |
| Reason 03 写真 | `images/reason-03.jpg` | 4:3、施術中の手元 |
| Reason 04 写真 | `images/reason-04.jpg` | 4:3、夜間営業 or 院外観 |
| Reason 05 写真 | `images/reason-05.jpg` | 4:3、相談中のシーン |
| CTAバナー① | `images/cta-banner-01.jpg` | 1920×500、暗めの落ち着いた院内 |
| CTAバナー② | `images/cta-banner-02.jpg` | 1920×500、施術手元のクローズアップ等 |
| 院内ギャラリー | `images/clinic-01〜06.jpg` | 待合・施術ベッド・受付・キッズ・機器・外観の6枚 |
| 患者様の声 アバター×3 | `images/voice-01〜03.jpg` | 80×80 円形 |
| 院長写真 | `images/director.jpg` | 4:5、640×800以上、笹井望氏 |

実画像が用意できるまでは `placehold.co` のままでもレイアウト確認は可能です。

---

## Screenshots
PC幅（1280px）でキャプチャしたデザインリファレンス。実装時のビジュアルゴールとして参照してください。

| # | セクション | ファイル |
|---|---|---|
| 01 | ヒーロー | `screenshots/01-hero.png` |
| 02 | 症状チェックリスト | `screenshots/02-symptoms.png` |
| 03 | 選ばれる理由（上部） | `screenshots/03-reasons-top.png` |
| 04 | 選ばれる理由（中盤） | `screenshots/04-reasons-middle.png` |
| 05 | 施術の流れ | `screenshots/05-flow-top.png` |
| 06 | CTAバナー | `screenshots/06-cta-banner.png` |
| 07 | 料金 | `screenshots/07-pricing.png` |
| 08 | 患者様の声 | `screenshots/08-voices.png` |
| 09 | 院長挨拶 | `screenshots/09-director.png` |
| 10 | FAQ | `screenshots/10-faq.png` |
| 11 | アクセス | `screenshots/11-access.png` |
| 12 | 予約CTA | `screenshots/12-reserve-cta.png` |

> 画像は `placehold.co` プレースホルダーが表示されています。実装時は `/images/` 配下に実画像を配置してください。

---

## Files

| ファイル | 説明 |
|---|---|
| `sasai_seikotu.html` | 完全な単一HTMLファイル。Tailwind CDN + インラインCSS、JS不要 |
| `images/` | 実装時に画像を格納するフォルダ（現在は空 / 仕様だけ記載） |
| `screenshots/` | 各セクションのPCビュー キャプチャ |
| `README.md` | 本書 |

### 実装スタック（プロトタイプの構成）
- **Tailwind CSS**: CDN（`https://cdn.tailwindcss.com`）
  - 実装時はビルド版 Tailwind に置き換え、`tailwind.config.js` の `theme.extend.colors` に brand パレットを移植
- **Google Fonts**: Noto Sans JP / Noto Serif JP / Inter
- **依存JS**: なし（`<details>` のネイティブ動作のみ）

### 実装時の推奨アクション
1. Tailwind の `tailwind.config.js` に本書の **Design Tokens > Colors** を `theme.extend.colors.brand` として登録
2. `fontFamily` に `sans: ['Noto Sans JP', ...]`, `serif: ['Noto Serif JP', ...]`, `en: ['Inter', ...]` を登録
3. プロトタイプ末尾のインライン CSS（`.eyebrow`, `.check`, `.stripe-bg`, `.paper-tex`, `softPulse`, `.section-num`, `.step-row::before`, `marquee` 等）を `globals.css` 等に移植
4. 画像を `public/images/` 等に配置、`<img src>` を差し替え
5. 電話番号・住所・経歴の年号・予約URLを実値へ
6. 地図を Google Maps Embed 等に差し替え（API キー必要）
7. 患者の声・院長の写真は **薬機法・景品表示法を確認**（個人の感想であることの注記は実装済）
8. WEB予約ボタンを実際の予約システムへ接続（外部SaaS or 内製フォーム）
9. SEOメタタグ（OGP、構造化データ LocalBusiness）の追加
10. アクセシビリティ最終チェック（alt属性、コントラスト、キーボード操作）
