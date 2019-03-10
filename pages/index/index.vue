<template>
	<view class="content">
		<view>
           <button @click="tap1">跳分包</button>
        </view>
		<view class="title">11</view>
		<text class="icon">&#xe610;</text>
	</view>
</template>

<script>
	 import {mapState,mapMutations} from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			console.info(this.nickname);
			 this.setNickname(456);
			console.info(this.nickname);
			this.asyncTap();
		},
		computed:{
			 ...mapState(['nickname'])
		},
		methods: {
			...mapMutations(['setNickname']),
			tap1(){
				uni.navigateTo({
					url:'../../page1/home'
				})
			},
			post(){
				 this.$api.getUserInfo().then(result => {
				  store.updateUser(result);
				  if (!result.nickName) {
				    this.redirectTo('/pages/login/basic');
				  }
				}).catch(err=>{})
			},
			async asyncTap(){
				let aa= await this.aTap();
				console.info(aa);
				let bb= await this.bTap();
				console.info(bb);
			},
			aTap(){
				 return new Promise((resolve, reject) => {
					 setTimeout(()=>{
						resolve(1) 
					 },3000)
				 })
			},
			bTap(){
				 return new Promise((resolve, reject) => {
					 resolve(2)
				 })
			}
		}
	}
</script>

<style lang="less">
	@import "../../css/base.less";
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
		.buttonRadius();
	}
</style>
