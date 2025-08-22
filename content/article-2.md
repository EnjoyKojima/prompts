---
title: Nuxt Contentの使い方
description: Nuxt Contentモジュールの基本的な使い方を解説
date: 2025-01-16
---

# Nuxt Contentの使い方

Nuxt Contentを使うと、Markdownファイルからコンテンツを簡単に取得できます。

## 主な機能

1. **Markdown対応**: `.md`ファイルをそのまま使える
2. **YAMLフロントマター**: メタデータを定義できる
3. **検索機能**: コンテンツの検索が簡単
4. **シンタックスハイライト**: コードブロックの強調表示

## サンプルコード

```vue
<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>
```