# Notion Clone (Udemy 学習用)

## このリポジトリについて

Udemy 講座 **「React + TypeScript で超本格的な Notion クローンを作ろう」** の写経・学習用リポジトリです。

- 講座を進めながら手を動かして実装するためのワークスペース
- 個人学習が目的で、商用利用や Notion 公式サービスの再配布を意図したものではありません

## 技術スタック

| カテゴリ | 内容 |
| --- | --- |
| ライブラリ | React 19 (`^19.2.5`) / React DOM (`^19.2.5`) |
| 言語 | TypeScript (`~6.0.2`) |
| ビルドツール | Vite (`^8.0.10`) + `@vitejs/plugin-react` |
| Lint | ESLint (`^10.2.1`) + `eslint-plugin-react-hooks` / `eslint-plugin-react-refresh` / `typescript-eslint` |

## セットアップ

前提: Node.js がインストールされていること。

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動 (HMR 有効)
npm run dev

# プロダクションビルド (型チェック + Vite ビルド)
npm run build

# ESLint 実行
npm run lint

# ビルド成果物のローカルプレビュー
npm run preview
```

## React のバージョンに関する補足

講座では React **19.2.0** が使用されていますが、本リポジトリでは `^19.2.5` を採用しています。SemVer のマイナー互換のため、講座の内容を進める上で動作上の支障はない見込みです。

完全に講座と同じバージョンに固定したい場合は、以下のコマンドで合わせられます。

```bash
npm install react@19.2.0 react-dom@19.2.0 --save-exact
```

## 注意書き

本リポジトリは学習目的で作成されています。Notion は Notion Labs, Inc. の商標であり、本プロジェクトは Notion 公式とは一切関係ありません。
