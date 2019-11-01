<template>
	<view class="">
		<!-- <view v-for="(item,index) in KSP" :key='index'> -->
			<!-- <image :src="KSP.url"></image> -->
		<!-- </view> -->
		<!-- localtion.href -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				KSP:[]
			}
		},
		onLoad(option){
			// console.log(option.id)
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/open/swiper',
				method: 'GET',
				success: res => {
					console.log(res.data.data.items[option.id])
					this.KSP = res.data.data.items[option.id]
					console.log(this.KSP)
				}
			});
		},
	}
</script>

<style>
	
</style>
