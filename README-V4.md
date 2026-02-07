# Sakura Talk – V4 (Figma Development 反映版)

V3 をベースに、Figma の Development アノテーションとデザイン差分をすべて反映したバージョンです。

## 反映した変更一覧

### 1. Hero セクション
- **smaller size**: 左ポラロイド（Kyoto, Japan）を小さめに変更（画像 160×208px、パディング調整）
- 大画面・タブレットでも左ポラロイドは右より小さく維持

### 2. Topics for Our Chat
- **Added bottom padding**: セクションのパディングを Figma に合わせて調整（左 24px、上 24px、右 80px、下 80px）
- レスポンシブで 1024px / 768px / 480px ごとにパディングを調整

### 3. Use Cases
- **Full device width**: ケースカードはフル幅のまま維持
- **no left-border**: ケースカードに左ボーダーがないことを明示（`border-left: none`）

### 4. Meet Sammy
- **Added Illustration**: 地図イラストを追加（Osaka, Tokyo, Indonesia, Sweden のラベルと経路風の線）
- 地図上に円形の「人物＋ラップトップ」インセット（Added Illustration）を追加
- 従来の 4 つのハイライトバッジはそのまま表示

### 5. Stories from Our Community
- **Added bottom padding**: セクションに `padding-bottom: 80px` を追加（768px 以下は 48px、480px 以下は 40px）

### 6. How It Works
- ステップ間の矢印コネクターを非表示（`.step-connector { display: none }`）
- ステップ間の余白を `gap: var(--space-8)` に変更
- 桜の装飾用 SVG を右側に配置（`::after`）

### 7. Pricing
- **Single Session を左側のまま**（HTML の並びは変更なし）
- **Most Popular** バッジは従来どおり左のカードに表示
- 中央強調用の `transform: scale(1.02)` を削除（左揃えの見た目に合わせる）

---

## ファイル構成

V3 と同じ。差分は主に以下です。

- `index.html` … クラス追加、How It Works の矢印削除、Meet Sammy に地図イラスト追加
- `css/components.css` … 上記すべてのスタイル追加・変更
- `css/responsive.css` … Topics / Stories / 地図イラストのレスポンシブ対応

## 確認方法

`v4-instagram/index.html` をブラウザで開くか、ルートの `index.html` で `#/v4-instagram/` のように V4 を指すようにして表示してください。
