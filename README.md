# UNSON OS Create Movie

動画自動生成システム - unson-os-market-researchの市場調査結果から動画コンテンツを自動生成

## 概要

このプロジェクトは、`unson-os-market-research`プロジェクトで生成された市場調査データを活用して、ターゲットペルソナに最適化された動画コンテンツを自動生成します。

## 主な機能

### 入力データソース
- **ペルソナ分析**: `persona_profiles.md`, `persona_insights.json`
- **課題分析**: `issue_analysis.md`
- **ソリューション**: `solution_ideas.md`
- **競合分析**: `competitive_analysis.md`
- **ポジショニング**: `final_positioning.md`
- **メッセージング**: 動画用メッセージング戦略

### 出力成果物
- ペルソナ別最適化動画（教育者向け、フリーランス向け、企業向け）
- プロモーション動画
- デモ動画
- ソーシャルメディア用ショート動画
- ストーリーボード
- ナレーション台本

## プロジェクト構造

```
unson-os-create-movie/
├── README.md
├── .gitignore
├── package.json
├── src/
│   ├── templates/          # 動画テンプレート
│   ├── generators/         # 動画生成エンジン
│   ├── parsers/           # market-researchデータパーサー
│   ├── scripts/           # ナレーション台本生成
│   ├── storyboard/        # ストーリーボード生成
│   └── utils/             # ユーティリティ
├── output/                # 生成された動画
│   ├── education/         # 教育者向け動画
│   ├── freelancer/        # フリーランス向け動画
│   ├── enterprise/        # 企業向け動画
│   └── social/            # SNS用ショート動画
├── assets/                # 動画素材
│   ├── images/            # 画像素材
│   ├── videos/            # ビデオクリップ
│   ├── audio/             # BGM・効果音
│   └── fonts/             # フォント
└── config/                # 設定ファイル
```

## 使用技術

- **動画編集**: (TBD - FFmpeg/Remotion/MLT Frameworkなど)
- **テキスト読み上げ**: (TBD - Google TTS/Amazon Polly/ElevenLabsなど)
- **AI画像生成**: (TBD - Stable Diffusion/DALL-E/Midjourneyなど)
- **アニメーション**: (TBD - After Effects API/Lottieなど)

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/Unson-LLC/unson-os-create-movie.git
cd unson-os-create-movie

# 依存関係のインストール
npm install

# market-researchデータへのパス設定
# config/paths.json に unson-os-market-research のパスを設定

# 動画生成実行
npm run generate
```

## データ連携

### market-researchプロジェクトとの連携

```javascript
// market-researchの実行結果を読み込み
const executionPath = '../unson-os-market-research/pb000_deliverables/executions/exec_20250925_mcp_auto_complete/';

// ペルソナデータの取得
const personas = parsePersonaData(executionPath + 'persona_profiles.md');

// メッセージング戦略の取得
const messaging = parseMessaging(executionPath + 'final_positioning.md');

// ストーリーボード生成
const storyboard = generateStoryboard(personas, messaging);

// 動画生成
generateVideo(storyboard);
```

## 動画生成プロセス

1. **データ読み込み**: market-research実行結果からデータ抽出
2. **ペルソナ選択**: 教育者/フリーランス/企業から選択
3. **台本生成**: ペルソナ別メッセージング適用
4. **ストーリーボード作成**: シーン構成設計
5. **素材生成/収集**: 画像・動画・音声素材準備
6. **動画合成**: 素材を統合して動画生成
7. **最適化**: 各プラットフォーム向けに最適化
8. **出力**: 完成した動画ファイルを生成

## 動画構成要素

### 動画タイプ

#### プロモーション動画（60-90秒）
- **イントロ**: 問題提起（5-10秒）
- **ソリューション**: UNSON OS紹介（20-30秒）
- **ベネフィット**: 主要価値提案（20-30秒）
- **デモ**: 5秒起動デモ（10-15秒）
- **CTA**: アクション促進（5-10秒）

#### デモ動画（30-45秒）
- **Before**: 従来の環境構築の問題点（10-15秒）
- **After**: UNSON OSでの5秒起動（10-15秒）
- **結果**: 時間節約の効果（10-15秒）

#### ソーシャルメディア用（15-30秒）
- **フック**: 注目を引く問題提起（3-5秒）
- **ソリューション**: 簡潔な解決策提示（7-12秒）
- **CTA**: 強力なアクション促進（5-8秒）

### ペルソナ別カスタマイズ例

#### 教育者向け動画
- **ナレーション**: "学生がセットアップで挫折するのを見るのは、もう終わりです。"
- **ビジュアル**: 教室、学生、コーディング学習シーン
- **BGM**: アップビート、希望的な音楽
- **CTA**: "今すぐ無料で試す"

#### フリーランス向け動画
- **ナレーション**: "セットアップ時間を請求可能時間に変換しましょう。"
- **ビジュアル**: ホームオフィス、複数プロジェクト、時間管理
- **BGM**: プロフェッショナル、エネルギッシュ
- **CTA**: "時間節約を計算する"

#### 企業向け動画
- **ナレーション**: "チームの複雑性をシンプルに。"
- **ビジュアル**: オフィス、チームコラボレーション、エンタープライズ環境
- **BGM**: 信頼感、プロフェッショナル
- **CTA**: "デモをスケジュールする"

## 台本テンプレート例

### 教育者向け60秒動画台本

```
[0-5秒] イントロ - 問題提起
ビジュアル: 学生が環境構築でエラーに困っている様子
ナレーション: "コーディングを教えていますか？学生の60%がセットアップで挫折していることをご存知ですか？"

[5-25秒] ソリューション紹介
ビジュアル: UNSON OSのロゴ、5秒起動のデモ
ナレーション: "UNSON OSなら、5秒で開発環境が起動。学生は学習に集中でき、あなたは教えることに集中できます。"

[25-45秒] ベネフィット
ビジュアル: 統計グラフ、満足した学生の様子
ナレーション: "セットアップ時間60%削減、完了率85%向上。実際の教育者が証明しています。"

[45-55秒] デモ
ビジュアル: 実際の5秒起動の画面録画
ナレーション: "ワンクリックで、学生全員が同じスタートラインに。"

[55-60秒] CTA
ビジュアル: UNSON OSのサインアップ画面
ナレーション: "今すぐ無料で試して、学生の成功をサポートしましょう。"
```

## 開発ロードマップ

- [ ] プロジェクト構造セットアップ
- [ ] market-researchデータパーサー実装
- [ ] 台本生成エンジン
- [ ] ストーリーボード生成ツール
- [ ] 動画テンプレート設計
- [ ] テキスト読み上げ統合
- [ ] 動画合成エンジン
- [ ] プラットフォーム別最適化
- [ ] バッチ処理機能
- [ ] プレビュー機能

## ライセンス

Private - Unson LLC

## 関連プロジェクト

- [unson-os-market-research](https://github.com/Unson-LLC/unson-os-market-research) - 市場調査データソース
- [unson-os-create-lp](https://github.com/Unson-LLC/unson-os-create-lp) - LP自動生成システム
