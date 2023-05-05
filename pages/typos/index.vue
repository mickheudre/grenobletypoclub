<template>
  <div class="flex flex-col relative md:mx-4 lg:mx-12 mt-4">
    <TypoSmall v-bind="typo" v-for="(typo, index) in fonts" class="my-4"/>
  </div>
</template>
<script setup lang="ts">
useHead({
  script: [
  { 
    async: true,
    src: 'https://scripts.withcabin.com/hello.js',
  }]
})


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