<template>
	<view class="IndexListPages">
		<view class="IndexListPagesHeader">
			<view @click="goBack" class="iconfont icon-zuojiantou"></view>
			<view class="iconfont icon-fenxiang"></view>
		</view>
		<view class="IndexListPagesInfo">
			<image :src="PagesData.templateMaterial.widgetImage"></image>
			<view class="">{{PagesData.templateMaterial.authorName}}</view>			
			<view class="">{{PagesData.templateMaterial.widgetTitle}}</view>
		</view>
		<view class="IndexListPagesFooter">
			<view class="IndexListPagesFooterInput">有何高见，展开讲讲</view>
			<view class="IndexListPagesFooterInfo iconfont icon-pinglun"></view>
			<view class="IndexListPagesFooterDz iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-1"></view>
			<view class="IndexListPagesFooterSc iconfont icon-xingxing"></view>
			<view class="IndexListPagesFooterFx iconfont icon-fenxiang"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				PagesData:[],
				
			}
		},
		onLoad(options){
			console.log(options.id)//得到当前列表的下标
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/home/recommend/list',
				// url: './index.components/IndexRecommend.',
				method: 'GET',
				success: res => {
					this.PagesData = res.data.data.itemList[options.id]// 保存当前数据
					console.log(this.PagesData)
					// console.log(res)
				}
			});
		},
		methods:{
			goBack(){
				// 返回
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.IndexListPagesHeader{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height:100upx;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 24upx;
	}
	.IndexListPagesInfo{
		margin-top: 100upx;		
	}
	.IndexListPagesFooter{
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		width: 100%;
		height: 100upx;
		align-items: center;
		justify-content: space-around;
		border-top: 1px solid #EEEEEE;
		display: flex;
	}
	.IndexListPagesFooterInput{
		padding: 15upx;
		background: #EEEEEE;
		font-size: 12upx;
		color: #999999;
	}
</style>
