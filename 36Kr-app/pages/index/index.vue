<template>
	<view class="Index">
		<view class="IndexSearch">
			<view class="SignIn iconfont icon-Sign"></view>
			<view class="IndexFrom iconfont icon-sousuo">大家都在搜：淘集集</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			
		}
	}
</script>

<style>
	/* 首页主页 */
	.Index{
		height: 100%;
		padding: 0 25upx;
		background: #FFFFF;
	}
	/* 首页头部搜索 */
	.IndexSearch{
		padding: 10upx 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.IndexSearch>.SignIn{
		font-size: 34upx;
	}
	.IndexSearch>.IndexFrom{
		background: #fbfbfb;
		font-size: 12upx;
		display: inline-block;
		font-size: 26upx;
		width: 90%;
		text-align: center;
		padding:10upx 0;
		color: #898989;
	}
</style>
