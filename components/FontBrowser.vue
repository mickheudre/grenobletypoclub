<template>
    <div class="w-full" :class="hover ? 'flex flex-wrap ' : 'relative justify-center mr-12'">
      <TypoBig @mouseover="hover = true"   v-bind="typo" v-for="(typo, index) in typos " class="transform w-112  h-152 transition duration-300 shrink-0 hover:-translate-y-1" :class="hover ? ' mx-4 translate-y-0' : '-translate-x-0 absolute '" :style="hover? `z-index: ${(typos.length)*10}` : `z-index: ${(typos.length - index - 1)*10}; 	transform: translateY(${index}rem) translateX(${-typos.length+index*3}rem);`"/>
  </div>
</template>

<script setup lang="ts">

const hover = ref(false)

const typos : Array<Typo> = [
]

const { data, pending, error, refresh } = await useFetch("https://api.notion.com/v1/databases/0d70e9e7157b447b92d98b9f4808857d/query",
  {
    method: "POST",
    onRequest({ url, options, cancel }) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    }
    
  } )

data.value.results.forEach(element => {
  console.log(element.properties.Citation.rich_text[0].plain_text)
  typos.push({ 
    name: element.properties.Name.title[0].plain_text, 
    preview: element.properties.preview.rich_text[0].plain_text.split(';'), 
    text: element.properties.Citation.rich_text[0].plain_text
  })
});

</script>