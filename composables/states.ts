import Font from "~~/typescript/Font";

export const useGetFonts = async() => {
  const fonts = ref<Array<Font>>([])
  const { data } = await useFetch("https://api.notion.com/v1/databases/0d70e9e7157b447b92d98b9f4808857d/query",
  {
      method: "POST",
      onRequest({ url, options, cancel }) {
          options.headers = {
              ...options.headers,
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
              'Notion-Version': '2022-06-28',
          }
      }})
  
      data.value.results.forEach(element => {
        fonts.value.push({ 
          name: element.properties.Name.title[0].plain_text, 
          preview: element.properties.preview.rich_text[0].plain_text.split(';'), 
          text: element.properties.Citation.rich_text[0].plain_text,
          description: element.properties.Presentation.rich_text[0].plain_text,
          url: element.url
        })
      })

      return fonts
}

