<template>
	<view class="">
		<view class="list" v-for="(item,index) in dataTop" :key="index">
			<view class="fnc-26 title">
				{{item.templateMaterial.widgetTitle}}
			</view>
			<scroll-view>
				<image :src="item.templateMaterial.widgetImage" lazy-load="true"></image>
			</scroll-view>
			<text class="fnc-20 color">{{(item.templateMaterial.statRead/10000).toFixed(1)}}万阅读</text>
		</view>
	</view>
</template>

<script>
	import {getData} from '@/data/index.js'
	export default{
		data(){
			return{
				dataTop:[]
			}
		},
		created(){
			getData('home/hotlist/top').then(res=>{
				console.log(res)
				if(res[1].data.code===0){
					this.dataTop=res[1].data.data.itemList
					console.log(this.dataTop)
				}
			})
		}
	}
</script>

<style scoped>
	.list{
		display: flex;
		position: relative;
		justify-content: space-between;
		padding: 24upx 0;
	}
	.list scroll-view{
		width:150upx;
		padding: 0 20upx;
	}
	.list .title{
		font-weight: 700;
		line-height: 34upx;
		padding: 0 20upx;
	}
	.list scroll-view image{
		width:150upx;
		height: 150upx;
	}
	.list text{
		position: absolute;
		left:20upx;
		bottom: 48upx;
		font-size: 18upx;
		line-height: 30upx;
	}
</style>
