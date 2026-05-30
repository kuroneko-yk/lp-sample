# Handoff: Lueur Candle Studio – ランディングページ

## 概要 / Overview

東京都練馬区大泉のキャンドル教室「Lueur Candle Studio（リュール）」の体験レッスン予約用ランディングページです。初心者向け手作りキャンドル教室の魅力を伝え、予約コンバージョンにつなげることが目的。

ターゲットは20〜50代女性で、癒し・趣味・ギフト制作に関心のある層。

## このバンドルについて / About the Design Files

本フォルダ内の `Lueur_index.html` は **デザインリファレンス** です。HTMLで作られた完成形のプロトタイプであり、見た目・レイアウト・挙動を確認するためのものです。

これをそのまま本番に乗せることもできますが、**Next.js / Astro / WordPress / Jekyll など既存のフロントエンド環境がある場合は、その環境のパターンに合わせて再実装してください**。コンポーネント分割や CMS 連携などは、選定する環境のベストプラクティスに従ってください。

## 忠実度 / Fidelity

**高忠実度（hi-fi）**。色・タイポグラフィ・余白・アニメーション・インタラクションすべて確定済みです。実装時はそのまま再現してください。

---

## 技術仕様 / Technical Specs

- **CSS**: Tailwind CSS v3 系（CDN 経由）
- **フォント**: Google Fonts（Noto Serif JP / Noto Sans JP）
- **画像**: すべて 16:9 アスペクト比、ファイル名は `<name>_Lueur.jpg`
- **完全レスポンシブ**：モバイルファースト、Tailwind のブレークポイント使用
- **スムーススクロール**：`html { scroll-behavior: smooth; }`
- **JS依存**：Intersection Observer による reveal-on-scroll のみ（vanilla）
- **meta / OGP**：設定済み
- **1ファイル完結**：`Lueur_index.html` 内に CSS / JS / マークアップを内包

---

## デザイントークン / Design Tokens

### Colors

| 役割 | 値 | 用途 |
|---|---|---|
| **Primary (Rose)** | `#c86584` | メインカラー（ダスティローズ）。CTA、見出しアクセント、装飾線 |
| Rose deep | `#a44769` | hover、強調文字 |
| Rose soft | `#e9b8c6` | フッターのリンク hover |
| **Accent (Beige)** | `#d8bfae` | アクセント（ナチュラルベージュ）。区切り線、補助要素 |
| Beige soft | `#ede2d6` | セクション背景の差し色 |
| **Sub (Milk)** | `#faf7f5` | ベース背景（ミルキーホワイト） |
| **Text (Ink)** | `#4a3f3f` | 本文・見出し（深ブラウン） |
| Ink soft | `#7a6c6c` | サブテキスト |

### Typography

- **Hero / Headlines**: `Noto Serif JP`（weight 300 / 400 / 500）
- **Body / UI**: `Noto Sans JP`（weight 300 / 400 / 500 / 600 / 700）

| 役割 | font-size | line-height | letter-spacing | weight |
|---|---|---|---|---|
| H1（ヒーロー） | 30/40/58px（sm/md/lg） | 1.55/1.45/1.4 | 0.08em | 500（serif） |
| H2（セクション見出し） | 28/34/40px | 1.5 | 0.06em | 500（serif） |
| H3（カード・サブ） | 20/22/26/30px | 1.55 | — | 500（serif） |
| Lead / 本文 | 14〜15px | 2.0〜2.1 | 0.08em | 400 |
| キャプション / micro | 10〜13px | 1.9〜2.0 | 0.12〜0.18em | 400〜500 |

JP 用に `letter-spacing` をやや広めに（0.08em / 0.18em の2レベル）。

### Spacing

- セクション縦余白：`py-24 lg:py-36`（モバイル 96px / PC 144px）
- コンテナ最大幅：`max-w-7xl`（80rem / 1280px）、テキスト多めのセクションは `max-w-5xl` / `max-w-4xl`
- 内側パディング：`px-6 lg:px-10`

### Radius / Shadows

- `border-radius`：`rounded-sm`（2px）— 写真・カードすべてシャープなコーナー
- `box-shadow.soft`：`0 30px 60px -30px rgba(74,63,63,0.25)` — 写真・カードの淡い影
- フローティング CTA：`0 18px 40px -12px rgba(200,101,132,0.55), 0 4px 8px rgba(74,63,63,0.1)`

### Breakpoints（Tailwind 標準）

| 名前 | min-width | 用途 |
|---|---|---|
| sm | 640px | スマホ横向き |
| md | 768px | タブレット |
| lg | 1024px | PC（メインのレスポンシブ切替点） |
| xl | 1280px | 大型PC |

---

## ブランドポリシー

- **雰囲気**：ナチュラル・癒し・柔らかい光・手作り感
- **NG**：派手なグラデーション、絵文字、丸すぎるカード、過剰な影
- **OK**：薄い影、薄いベージュ系のセクション差し色、点線・装飾的な短い線
- 装飾線（`.rule`）：ローズの細線（28px × 1px）と小さなテキストラベルの組み合わせ

---

## セクション構成 / Sections

セクションは10個。各セクションは横幅 `max-w-7xl` 中央寄せ、`px-6 lg:px-10`。

### 1. Header（固定なし、ヒーロー上に絶対配置）

- ロゴ：`Lueur`（Serif 26px）＋ サブ `Candle Studio`（uppercase 10px tracking 0.18em）
- ナビ：ABOUT / REASONS / LESSONS / PRICE / TEACHER / ACCESS（13px tracking 0.18em）— hover で下線アニメーション
  - ナビリンク群は **半透明ミルキーホワイトのピル型背景** で囲む（`rgba(250,247,245,0.6)` + `backdrop-filter: blur(6px)`、`rounded-full`）— ヒーロー画像の暗部でも視認性を確保
- 右端：「ご予約 / RESERVE →」（ローズ色、下線）

### 2. Hero

**画像**: `hero_Lueur.jpg`（手作りソイキャンドル × ダスティローズの花）

**PC レイアウト**:
- 画像をフルブリード（`absolute inset-0`）の背景に
- 左側にフェードオーバーレイ（ミルキーホワイト → 透明）
- テキストは左寄せ、`max-w-xl`
- ヒーロー全体は `min-h-[100svh]`

**モバイル レイアウト**:
- 画像は 4:5（sm から 16:10）の **ブロック要素として上部に配置**（切り抜きなし）
- 画像下部にミルキーホワイトのフェード
- テキストは画像の **下に中央配置**

**コピー**:
- ラベル：`Lueur Candle Studio`
- H1：「世界にひとつだけの **灯り** をつくる時間。」（"灯り" がローズ deep カラー）
- サブ：「東京・大泉の小さなアトリエで、ナチュラル素材のキャンドルを手づくり。初心者歓迎 ・ 手ぶらOK ・ 当日予約OK。」
- ボタン：「体験レッスンを予約する →」（btn-primary）＋ 「レッスンを見る」（下線リンク）
- タグ：`NATURAL · SMALL CLASS · FOR BEGINNERS`

**下部マルチー**：営業時間・所在地・定休日を1行で表示

### 3. About — キャンドル教室とは？

- 背景：`bg-milk`
- 上部：左にラベル＋H2、右にリード文（PC は 7:5 グリッド、モバイル縦積み）
  - H2：「ゆらぐ炎を見つめながら、自分のための時間をひとつ、灯す。」
- 4枚の写真グリッド
  - **モバイル・タブレット**：縦積み 1 カラム
  - **PC（lg〜）**：2 カラム × 2 行
  - 各カード：16:9 写真 + ナンバー（01 — Atelier 等、Rose 10px）+ 短文キャプション
  - 写真ファイル: `about1_Lueur.jpg` 〜 `about4_Lueur.jpg`
  - キャプション：
    - 01 Atelier「夢中になれる、しずかな90分。」
    - 02 Material「大豆ワックスと、本物のドライフラワー。」
    - 03 Process「温度を確かめ、ゆっくり溶かす。」
    - 04 Finish「世界にひとつだけ、完成。」

### 4. Reasons — 選ばれる理由

- 背景：`bg-beige-soft/60`
- 中央タイトル：「小さなアトリエだから、できること。」
- 4ブロック、**PC は左右交互の 2 カラム（7:5）**、モバイルは縦積み
- 各ブロック：大きな番号（Serif 64〜88px、Rose 50%）→ 見出し → 本文 → 16:9 写真
- ファイル: `reason1_Lueur.jpg` 〜 `reason4_Lueur.jpg`
- 見出し：
  1. 初心者でも、はじめての日から安心。
  2. 1/fゆらぎ × アロマの、深い癒し。
  3. "あの人へ" を込めた、特別なギフトに。
  4. 少人数制（最大4名）で、ゆったりと。

### 5. CTA 1（フルブリード）

- 背景：`cta_Lueur.jpg` + 暗いオーバーレイ（`rgba(20,12,12,0.55)`）
- 中央タイトル（Serif 28〜44px）「静かな炎の前で、自分のための90分を。」
- ボタン3つ横並び（モバイルはラップ）：
  - **MAIL**（白背景・Ink 文字）`mailto:hello@lueur-candle.jp`
  - **LINE**（btn-ghost、白枠）
  - **TEL**（btn-ghost）`tel:03-0000-0000`

### 6. Lessons — レッスン内容

- 背景：`bg-milk`
- テーブル風のリスト（4コース）。番号 / コース名 / カテゴリ / 説明 を行で並べる
- 区切り：`border-top` ベージュ（1px）
- コース：
  1. **体験コース** FOR BEGINNERS — 90分／手ぶらOK／当日のお持ち帰り
  2. **アロマキャンドルコース** AROMA — 120分／お持ち帰り2点
  3. **ボタニカルキャンドルコース** BOTANICAL — 120分／お持ち帰り1点
  4. **季節のキャンドル** SEASONAL — 120分／月替わり

### 7. Price — 料金

- 背景：`price_Lueur.jpg`（候補のキャンドルが並ぶ）+ 半透明ミルキーオーバーレイ（92%）
- タイトル：「わかりやすい、税込価格で。」
- 2 × 2 のカードグリッド（モバイル縦積み）
- 各カード：`bg-white/92%`、`border-beige/50`、`backdrop-blur`
- 価格表示：Serif 44〜52px、Rose deep（`#a44769`）
  - 体験レッスン ¥3,500 / 90分（FIRST VISIT）
  - アロマキャンドルコース ¥8,000 / 120分（AROMA）
  - ボタニカルキャンドルコース ¥8,000 / 120分（BOTANICAL）
  - 親子レッスン ¥6,000 / ペア（PARENT & CHILD）

### 8. CTA 2

- セクション5と同じ構造、画像は `cta2_Lueur.jpg`、コピーのみ変更
- タイトル：「気になる日程があれば、お気軽にお問い合わせください。」
- **上マージン**：`mt-16 lg:mt-24`（モバイル 64px / PC 96px）で Price セクションと区切り

### 9. Teacher — 講師紹介

- **上マージン**：`mt-16 lg:mt-24`（モバイル 64px / PC 96px）で CTA2 と区切り
- 背景：`teacher_Lueur.jpg`（講師の制作風景）+ 左ダーク → 右クリアのグラデ
- 左側に紹介テキスト（白）：
  - 「Aya Mizuhara / 水原 綾 ／ 主宰」
  - 経歴文（AEAJ 認定、フランス修行、2018年開校、1,200名以上）
  - 資格リスト（3項目）

### 10. Access — アクセス

- 背景：`bg-milk`
- 上部：タイトル「大泉学園駅から徒歩7分。住宅街に佇む、小さなアトリエ。」
- 左に外観写真（`access_Lueur.jpg`）、右に住所表
  - 店名 / 住所 / アクセス / 営業時間 / 定休日 / Contact（メール・電話）
  - dt 部分は Rose 11px、tracking 0.18em
- 下に Google Maps iframe（高さ 380px）

### 11. Booking — ご予約

- 背景：`bg-beige-soft/60`
- タイトル：「ご予約はこちら」 + サブ「STORES予約での承りとなります。」
- **STORES予約埋め込みエリア**：高さ 400px の `<div id="stores-reservation-widget">`。内部に説明テキストのプレースホルダーが入っているので、本番では STORES の埋め込みコードに差し替え
  - 例：`<script src="https://reserve.stores.jp/embed.js" data-reservation-page-id="XXXX"></script>`

### 12. Footer

- 背景：`bg-ink`（深ブラウン）、文字：`text-milk`
- 3 カラム：店舗住所 / Contact（メール・電話・営業情報） / Follow（Instagram・LINE）
- 下部：コピーライト

### Floating CTA（全画面共通）

- 右下固定（`right: 20px; bottom: 20px;`）
- ローズ pill ボタン「ご予約」、左端に黄色のドット（炎をイメージ、`flame` keyframes でパルスアニメーション）
- hover で持ち上がる + 影が濃くなる
- アンカー：`#booking`

---

## インタラクション / Interactions

### Reveal on Scroll

`.reveal` クラスの要素は IntersectionObserver で監視され、12% 露出した時点で `.in` を付与してフェードイン（`opacity 0→1` / `translateY 24px→0`、`transition .9s ease`）。

### Smooth Scroll

`html { scroll-behavior: smooth }` + 各 `<a href="#section-id">` で実現。

### Nav Hover

`.nav-link::after` を `width 0 → 100%` でアニメーション（`.3s ease`、Rose の下線が左から伸びる）。

### Flame Pulse

フローティング CTA のドットが `transform: scale(1) → scale(1.25)` を 1.6s で繰り返す。

### Button Hover

- `.btn-primary`：背景色を `rose → rose deep`、`translateY(-1px)`
- `.btn-ghost`：背景に薄い白を載せる、ボーダーを `white/55 → white`

---

## 状態管理 / State

このページは **完全に静的** です。状態管理ライブラリは不要。

唯一の動的処理：
1. IntersectionObserver による reveal-on-scroll
2. STORES予約ウィジェットの埋め込み（外部スクリプト）

---

## アセット / Assets

すべて 16:9（1600 × 900px、JPEG）。本番画像はユーザーから支給済み。

| ファイル名 | 用途 |
|---|---|
| `hero_Lueur.jpg` | ヒーロー背景 |
| `about1_Lueur.jpg` | 生徒さんの制作風景 |
| `about2_Lueur.jpg` | 材料が並ぶテーブル |
| `about3_Lueur.jpg` | ワックスを溶かす手元 |
| `about4_Lueur.jpg` | 制作途中のキャンドル |
| `reason1_Lueur.jpg` | 初心者でも安心 |
| `reason2_Lueur.jpg` | 1/fゆらぎ × アロマ |
| `reason3_Lueur.jpg` | ギフトにも喜ばれる |
| `reason4_Lueur.jpg` | 少人数制でゆったり |
| `cta_Lueur.jpg` | 予約 CTA 1 |
| `cta2_Lueur.jpg` | 予約 CTA 2 |
| `price_Lueur.jpg` | 料金セクション背景 |
| `teacher_Lueur.jpg` | 講師紹介 |
| `access_Lueur.jpg` | アトリエ外観 |

---

## TODO（実装時に差し替える項目）

- [ ] STORES予約 ID（`#stores-reservation-widget` 内の埋め込みコード）
- [ ] メールアドレス（現在 `hello@lueur-candle.jp` プレースホルダー）
- [ ] 電話番号（現在 `03-0000-0000`）
- [ ] 住所番地（現在 `〒178-0063 東京都練馬区東大泉 0-00-00 ◯◯ハイツ 1F`）
- [ ] LINE 公式アカウントの URL（現在 `#`）
- [ ] Instagram URL（現在 `#`）
- [ ] Google Maps の正確な座標（iframe `src` 内の query）
- [ ] 講師プロフィールの本文（経歴・掲載雑誌名）
- [ ] OGP 画像の確定版

---

## ファイル / Files

- `Lueur_index.html` — 完成プロトタイプ（1ファイル完結）
- `*.jpg`（14 枚） — 本番画像
