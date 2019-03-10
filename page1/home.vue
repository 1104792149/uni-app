<template>
	<view id="app">
		<button @click="tap2">分包跳分包</button>
	</view>
</template>

<script>
    //import item1 from '@/components/common/item1'//组件
	export default {
		data() {
			return {
				msg: ''
			}
		},
		onLoad() {
			
		},
		//事件
		methods: {
			tap2(){
				uni.navigateTo({
					url:'../page2/fb2'
				})
				}
		},
		//模板
		components: {},
         //过滤器
		computed: {

		},
		
		           
	}
</script>

<style>

</style>
