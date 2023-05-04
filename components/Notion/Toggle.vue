<template>
    <div class="notion-toggle">
        <div class="flex justify-between cursor-pointer" @click="visible=!visible">
            <h5 class="inline-block">
                {{ block.toggle.rich_text[0].plain_text }}
            </h5>
            <Chevron class="inline-block text-leaf transform" :class="[visible ? 'rotate-90' :'']" />
        </div>
        <div  :class="visible ? 'block' : 'hidden'">
            <p class="toggle-text" v-for="element in this.block.children.results" :key="element.id"><RichText :rich-text="element.paragraph.rich_text" /></p>
        </div>
    </div>
</template>

<script>
import Chevron from './Chevron.vue'
import RichText from './RichText.vue';

export default {
    name: 'Toggle',
    components: { Chevron, RichText },
    props: {
        block: Object
    },
    data () {
        return {
            visible: false
        }
    }
}
</script>
