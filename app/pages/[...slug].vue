<template>
  <div class="container mx-auto px-4 py-8">
    <article v-if="article" class="prose prose-lg mx-auto">
      <NuxtLink to="/" class="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← 記事一覧に戻る
      </NuxtLink>
      
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      
      <div class="text-gray-600 mb-8">
        <time>{{ new Date(article.date).toLocaleDateString('ja-JP') }}</time>
      </div>
      
      <ContentRenderer :value="article" />
    </article>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-500 mb-4">記事が見つかりませんでした</p>
      <NuxtLink to="/" class="text-blue-600 hover:text-blue-800">
        記事一覧に戻る
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: article } = await useAsyncData(
  `article-${route.path}`,
  () => queryContent(route.path).findOne()
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article Not Found'
  })
}

useHead({
  title: article.value?.title,
  meta: [
    { name: 'description', content: article.value?.description }
  ]
})
</script>