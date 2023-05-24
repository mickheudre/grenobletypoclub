<template>
	<div class="notion-rich-text">
		<span
			v-for="(element, index) in richText"
			:key="index"
			:class="{
				'notion-text-bold': element.annotations.bold,
				'notion-text-italic': element.annotations.italic,
				'notion-text-strikethrough': element.annotations.strikethrough,
				'notion-text-underline': element.annotations.underline,
				'notion-text-code':
					element.annotations.code,
				'notion-text-red': element.annotations.color == 'red',
				'notion-text-pink': element.annotations.color == 'pink',
				'notion-text-purple': element.annotations.color == 'purple',
				'notion-text-blue': element.annotations.color == 'blue',
				'notion-text-green': element.annotations.color == 'green',
				'notion-text-yellow': element.annotations.color == 'yellow',
				'notion-text-orange': element.annotations.color == 'orange',
				'notion-text-brown': element.annotations.color == 'brown',
				'notion-text-gray': element.annotations.color == 'gray',
				'notion-bg-red':
					element.annotations.color == 'red_background',
				'notion-bg-pink':
					element.annotations.color == 'pink_background',
				'notion-bg-purple':
					element.annotations.color == 'purple_background',
				'notion-bg-blue':
					element.annotations.color == 'blue_background',
				'notion-bg-green':
					element.annotations.color == 'green_background',
				'notion-bg-yellow':
					element.annotations.color == 'yellow_background',
				'notion-bg-orange':
					element.annotations.color == 'orange_background',
				'notion-bg-brown':
					element.annotations.color == 'brown_background',
				'notion-bg-gray':
					element.annotations.color == 'gray_background',
			}"
		>
			<a
				v-if="element.href && element.type != 'mention'"
				:href="element.href"
				class="notion-link"
			>
				<span v-if="element.type == 'mention'">
					<NotionMention :mention="element" />
				</span>
				{{ element[element.type].content }}
			</a>
			<span v-else>

				{{ element[element.type].content }}
			</span>
		</span>
	</div>
</template>

<script setup>
const props = defineProps(["richText"]);
</script>
