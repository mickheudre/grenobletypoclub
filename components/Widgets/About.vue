<template>
    <div class="bg-green rounded-md hidden lg:block my-4">
        <div class="border-2 border-white m-2 rounded-md">
            <h6 class="text-white text-center mt-6 text-2xl font-digitale">A Propos</h6>
            <NotionPage class="text-white text-sm mb-6 m-4" :page="data"/>
        </div>
    </div>
</template>

<script setup lang="ts">

  const { data } = await useFetch('https://api.notion.com/v1/blocks/6525a38b904f481b8ed11e8a6f17d713/children',
{
  onRequest({ url, options, cancel }) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    }
  }
} )

</script>