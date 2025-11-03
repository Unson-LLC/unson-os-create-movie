#!/usr/bin/env node

/**
 * UNSON OS Create Movie - メインエントリーポイント
 *
 * unson-os-market-researchの市場調査結果から
 * ペルソナ別最適化動画を自動生成
 */

const fs = require('fs');
const path = require('path');

// 設定ファイル読み込み
const config = require('../config/paths.json');

// コマンドライン引数処理
const command = process.argv[2] || 'help';

function showHelp() {
  console.log(`
UNSON OS Create Movie - 動画自動生成システム

使用方法:
  npm run dev              開発モード起動
  npm run generate         動画生成実行
  npm run storyboard       ストーリーボード生成
  npm run script           ナレーション台本生成
  npm run preview          生成された動画のプレビュー

コマンド:
  generate [persona] [type]  指定されたペルソナ・タイプの動画を生成
                            persona: education, freelancer, enterprise, all (デフォルト)
                            type: promo, demo, social

  storyboard [persona]      ストーリーボード生成
                           persona: education, freelancer, enterprise, all

  script [persona]          ナレーション台本生成
                           persona: education, freelancer, enterprise, all

  preview [persona]         生成された動画をプレビュー

  validate                 market-researchデータの検証

  help                     このヘルプを表示

例:
  node src/index.js generate education promo
  node src/index.js storyboard all
  node src/index.js script freelancer
  node src/index.js validate
  `);
}

function validateMarketResearchData() {
  console.log('📊 Market Research データ検証中...\n');

  const executionPath = path.join(
    __dirname,
    '..',
    config.marketResearch.basePath,
    config.marketResearch.defaultExecution
  );

  console.log(`実行パス: ${executionPath}\n`);

  let allValid = true;

  Object.entries(config.marketResearch.files).forEach(([key, filename]) => {
    const filePath = path.join(executionPath, filename);
    const exists = fs.existsSync(filePath);

    console.log(`${exists ? '✅' : '❌'} ${key}: ${filename}`);

    if (!exists) {
      allValid = false;
    }
  });

  console.log(allValid ? '\n✅ すべてのファイルが存在します' : '\n❌ 一部のファイルが見つかりません');

  return allValid;
}

function generateStoryboard(persona = 'all') {
  console.log(`🎬 ストーリーボード生成を開始します: ${persona}\n`);

  // データ検証
  if (!validateMarketResearchData()) {
    console.error('\n❌ データ検証に失敗しました。処理を中断します。');
    process.exit(1);
  }

  console.log('\n🔧 ストーリーボード生成機能は実装中です...');
  console.log('次のステップ:');
  console.log('  1. src/parsers/ にデータパーサーを実装');
  console.log('  2. src/storyboard/ にストーリーボード生成ロジックを実装');
  console.log('  3. ペルソナ別シーン構成を設計');
}

function generateScript(persona = 'all') {
  console.log(`📝 ナレーション台本生成を開始します: ${persona}\n`);

  // データ検証
  if (!validateMarketResearchData()) {
    console.error('\n❌ データ検証に失敗しました。処理を中断します。');
    process.exit(1);
  }

  console.log('\n🔧 台本生成機能は実装中です...');
  console.log('次のステップ:');
  console.log('  1. src/parsers/ にメッセージングパーサーを実装');
  console.log('  2. src/scripts/ に台本生成ロジックを実装');
  console.log('  3. ペルソナ別ナレーション最適化');
}

function generateVideo(persona = 'all', type = 'promo') {
  console.log(`🎥 動画生成を開始します: ${persona} (${type})\n`);

  // データ検証
  if (!validateMarketResearchData()) {
    console.error('\n❌ データ検証に失敗しました。処理を中断します。');
    process.exit(1);
  }

  console.log('\n🔧 動画生成機能は実装中です...');
  console.log('次のステップ:');
  console.log('  1. ストーリーボード生成');
  console.log('  2. ナレーション台本生成');
  console.log('  3. 素材収集/生成');
  console.log('  4. 動画合成エンジン実装');
  console.log('  5. プラットフォーム別最適化');
}

// コマンド実行
switch (command) {
  case 'generate':
    const persona = process.argv[3] || 'all';
    const type = process.argv[4] || 'promo';
    generateVideo(persona, type);
    break;

  case 'storyboard':
    const storyboardPersona = process.argv[3] || 'all';
    generateStoryboard(storyboardPersona);
    break;

  case 'script':
    const scriptPersona = process.argv[3] || 'all';
    generateScript(scriptPersona);
    break;

  case 'validate':
    validateMarketResearchData();
    break;

  case 'preview':
    console.log('🔧 プレビュー機能は実装中です...');
    break;

  case 'help':
  default:
    showHelp();
    break;
}
