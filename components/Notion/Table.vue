<template>
    <table class="table-auto">
        <thead>
            <tr>
                <th :class="`notion-table-header-col-${index}`" v-for="(cells, index) in this.block.children.results[0].table_row.cells"> {{ cells[0].plain_text }} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(element, index) in this.block.children.results" :key="element.id">
                <td v-if="index > 0"  :class="`notion-table-content-col-${id}`" v-for="(cell, id) in element.table_row.cells"> <RichText :richText="cell" /> </td>
            </tr>

        </tbody>
    </table>
</template>

<script>
import RichText from './RichText.vue';

export default {
    components: { RichText },
    name: 'Table',
    props: {
        block: Object
    }
}
</script>
