<template>
	<view class="navbar">
		<view >
			{{title}}
		</view>
		<view>
			<image :src="urlpicture" v-if="picshow" class="img"></image>
		</view>
	</view>
</template>
<script>
	import mIcon from '../m-icon/m-icon.vue'
	export default {
		components: {
			mIcon
		},
		props: {
			/**
			 * 图片
			 */
			urlpicture: String,
			picshow: {
				type: [Boolean, String],
				default: false
			},
			
			title: {
				type: String,
				default: '标题'
			},
			
			clearable: {
				type: [Boolean, String],
				default: false
			},
		},
		
		data() {
			return {
				
			}
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
