---
title: Vue 3の新機能
description: Vue 3で追加された新しい機能について
date: 2025-01-17
---

# Vue 3の新機能

Vue 3では多くの新機能が追加されました。

## Composition API

Composition APIを使うことで、より柔軟なコンポーネント設計が可能になります。

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

## Teleport

コンポーネントのテンプレートの一部を、DOMの別の場所に「テレポート」できます。

## Suspense

非同期コンポーネントの読み込み状態を管理できます。