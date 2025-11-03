# UNSON OS Create Movie - 統合ガイド

## 概要

このドキュメントは、`unson-os-create-movie`プロジェクトが`unson-os-market-research`の出力データをどのように活用して動画を生成するかを説明します。

## データフロー

```
unson-os-market-research
  └── pb000_deliverables/executions/exec_20250925_mcp_auto_complete/
      ├── persona_profiles.md          → ペルソナ特性理解
      ├── persona_insights.json        → 詳細データ活用
      ├── issue_analysis.md            → 痛点ベースストーリー
      ├── solution_ideas.md            → ソリューション価値提案
      ├── competitive_analysis.md      → 差別化ポイント
      ├── final_positioning.md         → メッセージング・台本構造 ⭐ 主要ソース
      └── executive_summary.md         → 全体戦略理解

                    ↓ パース・変換

unson-os-create-movie
  ├── src/storyboard/                  → シーン構成設計
  ├── src/scripts/                     → ナレーション台本生成
  └── output/
      ├── education/                   → 教育者向け動画
      ├── freelancer/                  → フリーランス向け動画
      ├── enterprise/                  → 企業向け動画
      └── social/                      → SNS用ショート動画
```

## 主要データソース: final_positioning.md

### 動画台本に活用するセクション

#### 1. LP用メッセージング戦略

**教育者向け60秒動画台本例**:

```
[0-5秒] イントロ - 問題提起
ビジュアル: 学生が環境構築でエラーに困っている様子
ナレーション: "Your Students Deserve Better Than Setup Struggles"
              (生徒はセットアップの苦労よりも良い体験を得るべきです)
出典: final_positioning.md - 教育者向けHeadline

[5-25秒] ソリューション紹介
ビジュアル: UNSON OSのロゴ、5秒起動のデモ
ナレーション: "Create. Teach. Inspire. Let us handle the environment."
              (創造し、教え、刺激を与えましょう。環境は私たちに任せてください)
              "5秒で開発環境が起動。学生は学習に集中できます。"
出典: final_positioning.md - Subheadline + Key Benefits

[25-45秒] ベネフィット
ビジュアル: 統計グラフ、満足した学生の様子
ナレーション: "5秒で学生をオンボーディング"
              "セットアップ説明時間を60%削減"
              "学生完了率85%向上"
出典: final_positioning.md - Key Benefits (教育者向け)

[45-55秒] デモ
ビジュアル: 実際の5秒起動の画面録画
ナレーション: "どんなデバイスでも、どんなブラウザでも動作します"
出典: final_positioning.md - "Works on any device, any browser"

[55-60秒] CTA + Social Proof
ビジュアル: UNSON OSのサインアップ画面
ナレーション: "私のコーディングブートキャンプ完了率は、UNSON OSに切り替えた後、
              45%から89%に跳ね上がりました - @TechTalkHQ"
出典: final_positioning.md - Social Proof
```

#### 2. ペルソナ別ストーリーボード構造

**フリーランス向け45秒デモ動画**:

```
[0-10秒] Before - 問題シーン
ビジュアル: カレンダー、時間が消費されるアニメーション
ナレーション: "2-3日のプロジェクトスタート時間"
              "月15時間の環境管理"
出典: final_positioning.md - Key Benefits (Beforeデータ)

[10-25秒] After - ソリューションシーン
ビジュアル: UNSON OS起動、30分カウンター
ナレーション: "30分でプロジェクトスタート"
              "月2時間に環境管理を削減"
              "請求可能時間に変換"
出典: final_positioning.md - Key Benefits (Afterデータ)

[25-40秒] 成果シーン
ビジュアル: クライアントとのリアルタイムデモ、収益グラフ上昇
ナレーション: "クライアントにリアルタイムでデモ"
              "プロジェクト単価20%向上"
出典: final_positioning.md - Key Benefits

[40-45秒] CTA
ビジュアル: ROI計算ツール画面
ナレーション: "あなたの時間節約を計算しましょう"
出典: final_positioning.md - ROI Calculator
```

**企業向け60秒プロモーション動画**:

```
[0-10秒] イントロ - 複雑性の可視化
ビジュアル: 8つのマイクロサービス、複雑なアーキテクチャ図
ナレーション: "Your Team's Complexity Deserves Simplicity"
              (チームの複雑性にはシンプルさが必要です)
出典: final_positioning.md - 企業向けHeadline

[10-30秒] ソリューション - シンプル化
ビジュアル: ワンクリックで8マイクロサービス起動
ナレーション: "Enterprise architecture. Startup speed."
              (エンタープライズアーキテクチャ。スタートアップのスピード)
              "8つのマイクロサービスがワンクリックで起動"
出典: final_positioning.md - Subheadline + Key Benefits

[30-50秒] ベネフィット
ビジュアル: チームコラボレーション、効率化グラフ
ナレーション: "チーム時間の20%が環境問題対応から2%に削減"
              "新メンバーのオンボーディングが2週間から30分に"
              "デプロイ成功率85%から99%に向上"
出典: final_positioning.md - Key Benefits (企業向け)

[50-60秒] Social Proof + CTA
ビジュアル: エンジニアのインタビュー、デモスケジュールフォーム
ナレーション: "環境関連インシデントを78%削減しました - シニアDevOpsエンジニア"
              "エンタープライズデモをスケジュールする"
出典: final_positioning.md - Enterprise Proof + CTA
```

#### 3. SNS用ショート動画（15-30秒）

**Instagram用30秒動画（教育者向け）**:

```
[0-5秒] フック
ビジュアル: 学生が挫折している様子
テキストオーバーレイ: "60% of students quit during setup"
出典: final_positioning.md - コンテンツ作成効率60%改善余地

[5-15秒] ソリューション
ビジュアル: 5秒起動タイマー、学生が笑顔
テキストオーバーレイ: "5-second onboarding with UNSON OS"
出典: final_positioning.md - Key Benefits

[15-25秒] 成果
ビジュアル: 完了率グラフ 45% → 89%
テキストオーバーレイ: "45% → 89% completion rate"
出典: final_positioning.md - Social Proof

[25-30秒] CTA
ビジュアル: UNSON OSロゴ、QRコード
テキストオーバーレイ: "Start teaching today - Free trial"
出典: final_positioning.md - 教育者向けCTA
```

## データパーサー実装ガイド

### 1. final_positioning.mdのパース（動画用）

```javascript
// src/parsers/messaging-parser.js

const fs = require('fs');

class MessagingParser {
  constructor(filePath) {
    this.content = fs.readFileSync(filePath, 'utf-8');
  }

  // ペルソナ別メッセージング抽出（動画用）
  extractVideoMessaging(persona) {
    const messaging = this.extractPersonaMessaging(persona);

    // 動画用に変換
    return {
      hook: messaging.headline,          // フック（0-5秒）
      solution: messaging.subheadline,   // ソリューション紹介
      benefits: messaging.benefits,      // ベネフィット羅列
      socialProof: messaging.socialProof, // 実績・評価
      cta: this.extractCTA(persona)      // アクション促進
    };
  }

  extractPersonaMessaging(persona) {
    const patterns = {
      education: /#### 教育系クリエイター用LP\n```\n([\s\S]*?)\n```/,
      freelancer: /#### フリーランス開発者用LP\n```\n([\s\S]*?)\n```/,
      enterprise: /#### フルスタック開発者用LP\n```\n([\s\S]*?)\n```/
    };

    const match = this.content.match(patterns[persona]);
    if (!match) return null;

    return this.parseMessagingBlock(match[1]);
  }

  parseMessagingBlock(text) {
    const lines = text.split('\n');
    const messaging = {
      headline: '',
      subheadline: '',
      benefits: [],
      socialProof: ''
    };

    lines.forEach(line => {
      if (line.startsWith('Headline:')) {
        messaging.headline = line.replace('Headline:', '').trim().replace(/"/g, '');
      } else if (line.startsWith('Subheadline:')) {
        messaging.subheadline = line.replace('Subheadline:', '').trim().replace(/"/g, '');
      } else if (line.startsWith('✅')) {
        messaging.benefits.push(line.replace('✅', '').trim());
      } else if (line.includes('Proof:') || line.includes('Calculator:')) {
        const parts = line.split(':');
        if (parts.length >= 2) {
          messaging.socialProof = parts.slice(1).join(':').trim().replace(/"/g, '');
        }
      }
    });

    return messaging;
  }

  extractCTA(persona) {
    const ctaMap = {
      education: "Start Teaching Today - Free Trial",
      freelancer: "Calculate Your Time Savings",
      enterprise: "Schedule Enterprise Demo"
    };
    return ctaMap[persona] || "Get Started Free";
  }

  // Before/After データ抽出
  extractBeforeAfter(persona) {
    const messaging = this.extractPersonaMessaging(persona);
    const beforeAfter = [];

    messaging.benefits.forEach(benefit => {
      const match = benefit.match(/(.+?)→(.+)/);
      if (match) {
        beforeAfter.push({
          before: match[1].trim(),
          after: match[2].trim()
        });
      }
    });

    return beforeAfter;
  }

  // 統計データ抽出
  extractStatistics(persona) {
    const messaging = this.extractPersonaMessaging(persona);
    const statistics = [];

    messaging.benefits.forEach(benefit => {
      const percentMatch = benefit.match(/(\d+)%/g);
      if (percentMatch) {
        statistics.push({
          text: benefit,
          numbers: percentMatch
        });
      }
    });

    return statistics;
  }
}

module.exports = MessagingParser;
```

### 2. ストーリーボード生成エンジン

```javascript
// src/storyboard/storyboard-generator.js

const MessagingParser = require('../parsers/messaging-parser');

class StoryboardGenerator {
  constructor(marketResearchPath) {
    const positioningPath = require('path').join(
      marketResearchPath,
      'final_positioning.md'
    );
    this.parser = new MessagingParser(positioningPath);
  }

  generatePromoVideo(persona, duration = 60) {
    const messaging = this.parser.extractVideoMessaging(persona);
    const beforeAfter = this.parser.extractBeforeAfter(persona);
    const statistics = this.parser.extractStatistics(persona);

    const storyboard = {
      title: `UNSON OS - ${persona} Promo Video`,
      duration: duration,
      scenes: []
    };

    // Scene 1: Hook (0-5秒)
    storyboard.scenes.push({
      id: 1,
      startTime: 0,
      endTime: 5,
      type: 'hook',
      visual: this.getHookVisual(persona),
      narration: messaging.hook,
      textOverlay: messaging.hook,
      bgm: 'attention-grabbing',
      transition: 'fade'
    });

    // Scene 2: Solution (5-25秒)
    storyboard.scenes.push({
      id: 2,
      startTime: 5,
      endTime: 25,
      type: 'solution',
      visual: 'UNSON OS logo animation + 5-second startup demo',
      narration: messaging.solution,
      textOverlay: 'Stop Setting Up. Start Creating.',
      bgm: 'uplifting',
      transition: 'zoom'
    });

    // Scene 3: Benefits (25-45秒)
    const benefitScenes = this.createBenefitScenes(messaging.benefits, 25, 45);
    storyboard.scenes.push(...benefitScenes);

    // Scene 4: Social Proof (45-55秒)
    storyboard.scenes.push({
      id: 4,
      startTime: 45,
      endTime: 55,
      type: 'social-proof',
      visual: this.getSocialProofVisual(persona),
      narration: messaging.socialProof,
      textOverlay: messaging.socialProof,
      bgm: 'testimonial',
      transition: 'fade'
    });

    // Scene 5: CTA (55-60秒)
    storyboard.scenes.push({
      id: 5,
      startTime: 55,
      endTime: 60,
      type: 'cta',
      visual: 'UNSON OS signup screen + CTA button animation',
      narration: messaging.cta,
      textOverlay: messaging.cta,
      bgm: 'energetic',
      transition: 'none'
    });

    return storyboard;
  }

  generateDemoVideo(persona, duration = 45) {
    const beforeAfter = this.parser.extractBeforeAfter(persona);

    const storyboard = {
      title: `UNSON OS - ${persona} Demo Video`,
      duration: duration,
      scenes: []
    };

    // Before Scene (0-15秒)
    storyboard.scenes.push({
      id: 1,
      startTime: 0,
      endTime: 15,
      type: 'before',
      visual: 'Traditional environment setup struggles',
      narration: beforeAfter.map(ba => ba.before).join('. '),
      textOverlay: 'The Old Way',
      bgm: 'tense',
      transition: 'slide'
    });

    // After Scene (15-30秒)
    storyboard.scenes.push({
      id: 2,
      startTime: 15,
      endTime: 30,
      type: 'after',
      visual: 'UNSON OS 5-second startup + smooth workflow',
      narration: beforeAfter.map(ba => ba.after).join('. '),
      textOverlay: 'The UNSON OS Way',
      bgm: 'uplifting',
      transition: 'wipe'
    });

    // Result Scene (30-45秒)
    storyboard.scenes.push({
      id: 3,
      startTime: 30,
      endTime: 45,
      type: 'result',
      visual: 'Time savings visualization + happy user',
      narration: 'Reclaim your time. Focus on what matters.',
      textOverlay: 'Transform Your Workflow',
      bgm: 'victorious',
      transition: 'fade'
    });

    return storyboard;
  }

  generateSocialVideo(persona, platform = 'instagram', duration = 30) {
    const messaging = this.parser.extractVideoMessaging(persona);
    const statistics = this.parser.extractStatistics(persona);

    const storyboard = {
      title: `UNSON OS - ${persona} ${platform} Video`,
      duration: duration,
      platform: platform,
      resolution: this.getResolution(platform),
      scenes: []
    };

    // Hook (0-5秒)
    storyboard.scenes.push({
      id: 1,
      startTime: 0,
      endTime: 5,
      type: 'hook',
      visual: 'Eye-catching problem visualization',
      narration: null, // SNS用は音声なしも想定
      textOverlay: messaging.hook,
      bgm: 'trending-sound',
      transition: 'fast-cut'
    });

    // Solution (5-15秒)
    storyboard.scenes.push({
      id: 2,
      startTime: 5,
      endTime: 15,
      type: 'solution',
      visual: '5-second timer countdown + product demo',
      narration: null,
      textOverlay: '5 seconds to productivity',
      bgm: 'upbeat',
      transition: 'fast-cut'
    });

    // Proof (15-25秒)
    if (statistics.length > 0) {
      storyboard.scenes.push({
        id: 3,
        startTime: 15,
        endTime: 25,
        type: 'proof',
        visual: 'Animated statistics',
        narration: null,
        textOverlay: statistics[0].text,
        bgm: 'upbeat',
        transition: 'fast-cut'
      });
    }

    // CTA (25-30秒)
    storyboard.scenes.push({
      id: 4,
      startTime: 25,
      endTime: 30,
      type: 'cta',
      visual: 'QR code + logo',
      narration: null,
      textOverlay: messaging.cta,
      bgm: 'upbeat',
      transition: 'zoom'
    });

    return storyboard;
  }

  createBenefitScenes(benefits, startTime, endTime) {
    const duration = endTime - startTime;
    const timePerBenefit = duration / benefits.length;

    return benefits.map((benefit, index) => ({
      id: 3 + index / 10,
      startTime: startTime + (index * timePerBenefit),
      endTime: startTime + ((index + 1) * timePerBenefit),
      type: 'benefit',
      visual: `Benefit ${index + 1} visualization`,
      narration: benefit,
      textOverlay: benefit,
      bgm: 'uplifting',
      transition: 'fade'
    }));
  }

  getHookVisual(persona) {
    const visuals = {
      education: 'Students struggling with setup errors',
      freelancer: 'Calendar showing wasted time on environment',
      enterprise: 'Complex microservices architecture diagram'
    };
    return visuals[persona] || 'Generic problem visualization';
  }

  getSocialProofVisual(persona) {
    const visuals = {
      education: 'Educator testimonial with completion rate graph',
      freelancer: 'Freelancer success story with revenue increase',
      enterprise: 'DevOps engineer interview with incident reduction chart'
    };
    return visuals[persona] || 'Generic testimonial';
  }

  getResolution(platform) {
    const resolutions = {
      instagram: '1080x1920',
      youtube: '1920x1080',
      twitter: '1280x720',
      tiktok: '1080x1920'
    };
    return resolutions[platform] || '1920x1080';
  }
}

module.exports = StoryboardGenerator;
```

## ナレーション台本生成

### 台本フォーマット

```javascript
// src/scripts/script-generator.js

class ScriptGenerator {
  generateNarrationScript(storyboard) {
    let script = `# ${storyboard.title}\n\n`;
    script += `Duration: ${storyboard.duration} seconds\n`;
    script += `Platform: ${storyboard.platform || 'Web'}\n\n`;
    script += `---\n\n`;

    storyboard.scenes.forEach(scene => {
      script += `## Scene ${scene.id}: ${scene.type.toUpperCase()}\n`;
      script += `**Time**: ${scene.startTime}s - ${scene.endTime}s\n\n`;
      script += `**Visual**: ${scene.visual}\n\n`;

      if (scene.narration) {
        script += `**Narration**:\n`;
        script += `> ${scene.narration}\n\n`;
      }

      if (scene.textOverlay) {
        script += `**Text Overlay**: ${scene.textOverlay}\n\n`;
      }

      script += `**BGM**: ${scene.bgm}\n`;
      script += `**Transition**: ${scene.transition}\n\n`;
      script += `---\n\n`;
    });

    return script;
  }

  generateVoiceoverTimeline(storyboard) {
    const timeline = [];

    storyboard.scenes.forEach(scene => {
      if (scene.narration) {
        timeline.push({
          startTime: scene.startTime,
          endTime: scene.endTime,
          text: scene.narration,
          voice: this.getVoiceProfile(scene.type),
          speed: 1.0,
          emotion: this.getEmotion(scene.type)
        });
      }
    });

    return timeline;
  }

  getVoiceProfile(sceneType) {
    const profiles = {
      hook: 'energetic-male',
      solution: 'confident-female',
      benefit: 'friendly-neutral',
      'social-proof': 'authentic-customer',
      cta: 'energetic-female'
    };
    return profiles[sceneType] || 'neutral';
  }

  getEmotion(sceneType) {
    const emotions = {
      hook: 'urgent',
      solution: 'hopeful',
      benefit: 'excited',
      'social-proof': 'satisfied',
      cta: 'encouraging'
    };
    return emotions[sceneType] || 'neutral';
  }
}

module.exports = ScriptGenerator;
```

## 動画生成実行フロー

```bash
# 1. データ検証
npm run dev validate

# 2. ストーリーボード生成
npm run storyboard education

# 3. ナレーション台本生成
npm run script education

# 4. 動画生成（プロモーション）
npm run generate education promo

# 5. SNS用ショート動画生成
npm run generate education social

# 6. 全タイプ生成
npm run generate all
```

## 出力例

### 生成されるファイル構造

```
output/
├── education/
│   ├── promo-60s.mp4               # プロモーション動画
│   ├── demo-45s.mp4                # デモ動画
│   ├── social-instagram-30s.mp4    # Instagram用
│   ├── social-youtube-60s.mp4      # YouTube用
│   ├── storyboard.json             # ストーリーボードデータ
│   ├── script.md                   # ナレーション台本
│   └── voiceover-timeline.json     # 音声タイムライン
├── freelancer/
│   └── (同様)
└── enterprise/
    └── (同様)
```

## 関連ドキュメント

- `README.md` - プロジェクト概要
- `../unson-os-market-research/pb000_deliverables/executions/exec_20250925_mcp_auto_complete/final_positioning.md` - データソース
- `src/storyboard/README.md` - ストーリーボード生成ガイド（TBD）
- `src/scripts/README.md` - 台本生成ガイド（TBD）
