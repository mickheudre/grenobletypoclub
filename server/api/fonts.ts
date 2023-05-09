import Font from "~~/typescript/Font"

export default defineEventHandler(async (event) => {
    const fonts: Array<Font> = []
    const query = getQuery(event)

    const data  = await $fetch("https://api.notion.com/v1/databases/0d70e9e7157b447b92d98b9f4808857d/query",
    {
        method: "POST",
        
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
        }
    })
    for (const font of data.results ) {
        const url : string = font.url
        const  data  = await $fetch(`https://api.notion.com/v1/blocks/${url.slice(url.length - 32, url.length)}/children`,
        {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
                'Notion-Version': '2022-06-28',
            }
        })
        fonts.push({ 
            name: font.properties.Name.title[0].plain_text, 
            preview: font.properties.preview.rich_text[0].plain_text.split(';'), 
            text: font.properties.Citation.rich_text[0].plain_text,
            description: font.properties.Presentation.rich_text[0].plain_text,
            url: font.url,
            page: data
        })
    }
    if (query.typo) {
        return {
            api: fonts.find(v =>  v.name.toLowerCase() === query.typo?.toString().toLowerCase())
        }
    }
    return {
        api: fonts
    }
})
