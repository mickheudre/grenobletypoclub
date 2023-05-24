<template>
    <div class="rounded-md border-2 border-green hidden lg:block my-4">
        <div class="rounded-md m-2">
            <h6 class="text-green text-center mt-6 text-2xl font-lustucrust uppercase">Actualites</h6>
            <NotionPage :page="data" class="text-green text-sm mb-6 m-4" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('https://api.notion.com/v1/blocks/5a37c7079ccf41f09990146b25852260/children',
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