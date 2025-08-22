<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">ブログ記事一覧</h1>
    
    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="記事を検索..."
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="grid gap-6">
      <article
        v-for="article in filteredArticles"
        :key="article._path"
        class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink :to="article._path" class="block">
          <h2 class="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
            {{ article.title }}
          </h2>
          <p class="text-gray-600 mb-2">{{ article.description }}</p>
          <time class="text-sm text-gray-500">
            {{ new Date(article.date).toLocaleDateString('ja-JP') }}
          </time>
        </NuxtLink>
      </article>
    </div>

    <div v-if="filteredArticles.length === 0" class="text-center py-12 text-gray-500">
      記事が見つかりませんでした
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('/')
    .sort({ date: -1 })
    .find()
)

const filteredArticles = computed(() => {
  if (!searchQuery.value) {
    return articles.value || []
  }
  
  const query = searchQuery.value.toLowerCase()
  return (articles.value || []).filter(article => 
    article.title.toLowerCase().includes(query) ||
    article.description.toLowerCase().includes(query)
  )
})
</script>