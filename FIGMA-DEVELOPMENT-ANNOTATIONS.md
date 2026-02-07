# Figma Development アノテーション一覧

Figma MCP では Development ラベルが取得できないため、スクリーンショットから手動で抽出した一覧です。

---

## 1. Hero セクション（ポラロイド画像）

| 対象 | Development アノテーション |
|------|---------------------------|
| 左ポラロイド（Kyoto, Japan の画像） | **smaller size** |

→ ポラロイドを現在より小さめのサイズで実装する。

---

## 2. Topics for Our Chat セクション

| 対象 | Development アノテーション |
|------|---------------------------|
| セクションの Frame（1320 × 885 Hug） | **Added bottom padding** |

→ プロパティ: Padding 左 24, 上 24, 右 80, **下 80**  
→ コンテナに `padding-bottom` を追加／80px に合わせる。

---

## 3. Use Cases セクション（Case 1 / Case 2）

| 対象 | Development アノテーション |
|------|---------------------------|
| Case 1 のブロック全体 | **Full device width** |
| Case 1 のブロック | **no left-border** |

その他:
- 「実際の写真への差し替えが必要」というアノテーションあり（画像の差し替え）

→ ケースカードはフル幅で表示し、左側にボーダーをつけない。

---

## 4. Meet Sammy セクション

| 対象 | Development アノテーション |
|------|---------------------------|
| 地図上の円形イラスト（人物＋ラップトップ） | **Added Illustration** |

→ 地図イラスト内の「人物＋デスク」の円形イラストを実装に含める（Figma で追加された要素）。

---

## 5. Stories from Our Community セクション

| 対象 | Development アノテーション |
|------|---------------------------|
| セクションの Frame（1320 (max) × 736.25 Hug） | **Added bottom padding** |

→ セクションに `padding-bottom` を追加する。

---

## 実装チェックリスト (V4 で反映済み)

- [x] Hero: 左ポラロイドを smaller size に
- [x] Topics: セクションに padding-bottom: 80px（左右 24/80, 上 24 も確認）
- [x] Use Cases: フル幅レイアウト、no left-border
- [x] Meet Sammy: 地図上の「Added Illustration」円形イラストを実装
- [x] Stories: セクションに bottom padding 追加

---

*最終更新: V4 にて全項目反映*
