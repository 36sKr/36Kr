<template>
	<view class="KListPages">
		<view class="KListPagesHeader">
			<view @click="goback" class="iconfont icon-zuojiantou"></view>
			<view class="iconfont icon-fenxiang"></view>
		</view>
		<view class="KListPagesInfo">
			<view class="KListPagesInfoTit">
				<view class="">
					<view class="">{{KListPages.name}}</view>
					<view class="">{{KListPages.description}}</view>
				</view>
				<view class="">
					<image :src="KListPages.list_cover" mode=""></image>
				</view>
			</view>
			<view class="">
				<!-- <view class="iconfont icon-remen">{{}}</view> -->
				<view class="iconfont icon-remen">{{KListPages.producer_intro}}</view>
				<!-- <view class="iconfont icon-remen">{{}}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				KListPages:{}
			}
		},
		onLoad(options){
			// console.log('接收列表数据')
			console.log(options);
			uni.request({
				url:'http://rap2api.taobao.org/app/mock/234738/get/open/list2',
				method:"GET",
				success:(res)=>{
					console.log(res.data.data.items[options.id])
					// console.log(res.data.items[options.id])
					this.KListPages = res.data.data.items[options.id]
					console.log(this.KListPages)
				}
			})
		},
		methods:{
			goback(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.KListPages{
		padding:0 20upx;
	}
	.KListPagesHeader{
		display:flex;
		justify-content: space-between;
	}
</style>
