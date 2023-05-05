<template>
    <div class="flex flex-col my-8 mx-8 max-w-4xl">
        <h1 :style="{ 'font-family': font?.name }" class="text-6xl text-green my-8" >{{ font?.name }}</h1>
        <div class="my-16">
            <p class="text-green">
                {{ font?.description }}            
            </p>
            <div class="my-16">
                <div v-for="prev in font?.preview" :style="{ 'font-family': font?.name }" class="text-green text-2xl my-4">
                    {{ prev }}
                </div>
            </div>
            <h2 contenteditable="true" spellcheck="false" :style="{ 'font-family': font?.name }" class="text-4xl text-green border-2 relative rounded-md p-8 border-green my-8 ">
                {{ font?.text }}
            <div class="absolute top-0 right-0 p-2"><GlyphsEdit class="h-5"/></div>
            </h2>
            <div></div>
            <div class="my-16" v-if="font?.name == 'digitale'">
                <h4 class="font-semibold text-xl text-green">Exemples d'utilisation</h4>
                <div class="flex flex-col md:flew-row items-center">
                    <div class="bg-green w-fit h-fit my-4">
                        <img class="mix-blend-screen" src="~/assets/images/digitale-1.png"/>
                    </div>
                    <div class="bg-green w-fit h-fit my-4">
                        <img class="mix-blend-screen" src="~/assets/images/digitale-2.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Font from '~~/typescript/Font';


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
    
    
    const route = useRoute();
    const font: Font | undefined = fonts.value.find(typo => typo.name.toLowerCase() == route.params.typo.toString().toLowerCase())
    if (!font) {
        clearError({ redirect: '/' })
    }
    
</script>

<style lang="css">
[contenteditable] {
    outline: 0px solid transparent;
}
</style>