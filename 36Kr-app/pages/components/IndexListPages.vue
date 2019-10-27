<template>
	<view class="IndexListPages">
		<view class="">
			<image :src="PagesData.templateMaterial.widgetImage"></image>
		</view>
		<view class="">{{PagesData.templateMaterial.authorName}}</view>			
		<view class="">{{PagesData.templateMaterial.widgetTitle}}</view>			
	</view>
</template>

<script>
	export default{
		data(){
			return {
				idx:0,
				PagesData:[]
			}
		},
		onLoad(option){
			console.log(option.id)//得到当前列表的下标
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/home/recommend/list',
				// url: '',
				method: 'GET',
				success: res => {
					console.log(res.data.data.itemList[option.id])// 能得到当前数据
					this.PagesData = res.data.data.itemList[option.id]// 保存当前数据
					console.log(this.PagesData)
				}
			});
		}
	}
</script>

<style>
</style>
