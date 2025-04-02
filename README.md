# website を管理するリポジトリ

## メニュー

ハンバーガーメニューは[このサイト](https://baigie.me/engineerblog/definitive-hamburger-menu/)を参照

- Home
- About
- GitHub

## 階層構造

```
/Users/hope/myWebsite
├── app.js
├── public
│   └── css
│   └── images
│   └── js
├── views
│   └── partials
├── build
└── README.md
```

## パッケージ

### npm

- express
- ejs
- pm2
  - `pm2 start app.js`でサーバ起動
  - `pm2 stop app.js`でサーバ停止
- dotenv

### css フレームワーク

- skeleton-2.0.4 [公式サイト](http://getskeleton.com/)

## cloudflare pages を用いたデプロイの仕方

- `package.json`の`script`プロパティに  
  `"build": "ejs views/index.ejs -o build/index.html && ejs views/about.ejs -o build/about.html && cp -r public/* build/"`  
  を追加

- EJS を HTML に変換，静的ファイルを`build`ディレクトリにコピー

  - `npm run build`

- [cloudflare](https://www.cloudflare.com/ja-jp/)にログイン，
- リポジトリをインポート
- ビルド設定
  - ビルドコマンド: `npm run build`
  - 出力ディレクトリ: `build`
- 設定を保存すると自動的にデプロイ開始
- [nzm-blog.com](https://nzm-blog.com)にアクセスして確認
