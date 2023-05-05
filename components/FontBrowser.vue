<template>
  <div class="w-full" :class="hover ? 'flex flex-wrap ' : 'relative justify-center mr-12'">
    <TypoBig @mouseover="hover = true"   v-bind="typo" v-for="(typo, index) in fonts " class="transform w-112  h-152 transition duration-300 shrink-0 hover:-translate-y-1" :class="hover ? ' mx-4 translate-y-0' : '-translate-x-0 absolute '" :style="hover? `z-index: ${(fonts.length)*10}` : `z-index: ${(fonts.length - index - 1)*10}; 	transform: translateY(${index}rem) translateX(${-fonts.length+index*3}rem);`"/>
  </div>
</template>

<script setup lang="ts">


const hover = ref(false)

const fonts = useState('font', () => {
  const typos: Array<Font> = []

  useFetch("https://api.notion.com/v1/databases/0d70e9e7157b447b92d98b9f4808857d/query",
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
    
  } ).then(response => {
      response.data.value.results.forEach(element => {
        if (element.properties.Publier.checkbox) {
          typos.push({ 
          name: element.properties.Name.title[0].plain_text, 
          preview: element.properties.preview.rich_text[0].plain_text.split(';'), 
          text: element.properties.Citation.rich_text[0].plain_text,
          description: element.properties.Presentation.rich_text[0].plain_text,
        })
        }
       
      });
    })

    return typos;
  })
  




</script>