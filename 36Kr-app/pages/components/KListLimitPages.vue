<template>
	<view class="KListPagesBox">
		<view class="bg" :style="{background:'url('+bg+') no-repeat center'}"></view>
		<view class="KListPages">
			<view class="KListPagesHeader">
				<view @click="goback" class="zjt iconfont icon-zuojiantou"></view>
				<view class="fx iconfont icon-fenxiang"></view>
			</view>
			<view class="KListPagesInfo">
				<view class="KListPagesInfoTit">
					<view class="KListPagesInfoTitName">
						<view class="KListPagesInfoTitName1">{{KListPages.name}}</view>
						<view class="KListPagesInfoTitName2">{{KListPages.description}}</view>
					</view>
					<view class="KListPagesInfoTitImg">
						<image :src="KListPages.list_cover" mode=""></image>
					</view>
				</view>
				<view class="remen">
					<view class="iconfont icon-remen">{{pps}}</view>
					<view class="iconfont icon-remen">{{KListPages.producer_intro}}</view>
					<view class="iconfont icon-remen">已更新至{{KListPages.counters.published_post_total}}课</view>
				</view>
			</view>
		</view>
		<view class="KListPagesList">
			<view @click="Jumpclass" v-for="(item,index) in Kclass" :key="index">
				{{item}}
			</view>
		</view>		
		<view class="KListPagesFooter">
			<view class="KListPagesFootermf">{{ftrTit}}</view>
			<view class="KListPagesFooteryh">{{KListPages.prices_current[0].type}}: {{KListPages.prices_current[0].amount}}元/{{KListPages.prices_current[0].description}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				KListPages:{},
				bg:'',
				pps:'2.2万人参加',
				ftrTit:'免费试读',
				Kclass:['课程内容','课程介绍','氪星人评价']
			}
		},
		onLoad(options){
			// console.log('接收列表数据')  
			console.log(options);
			uni.request({
				url:'http://rap2api.taobao.org/app/mock/234738/get/open/listlimits',
				method:"GET",
				success:(res)=>{
					console.log(res.data.data.items[options.id])
					this.KListPages = res.data.data.items[options.id]
					console.log(this.KListPages)
					this.bg = this.KListPages.detail_cover
					console.log(this.bg);
				}
			})
		},
		methods:{
			goback(){
				uni.navigateBack({
					delta:1
				})
			},
			Jumpclass(){
				
			}
		}
	}
</script>

<style>
	.KListPages{
		padding:0 20upx;
		height: 400upx;
		background: rgba(169,169,169,.5);
		color: #FFFFFF;
	}
	.bg{
		position: absolute;
		top: 0;
		left: 0;
		height: 400upx;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		-webkit-filter: blur(15px);
		-moz-filter: blur(15px);
		-o-filter: blur(15px);
		-ms-filter: blur(15px);
		filter: blur(15px);
		z-index: -999;
	}
	.KListPagesHeader{
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.zjt{
		font-size: 60upx;
	}
	.fx{
		font-size: 40upx;
	}
	
	.KListPagesInfoTit{
		display: flex;
	}
	.KListPagesInfoTitName{
		width: 70%;
		height: 200upx;
	}
	.KListPagesInfoTitName1{
		font-size: 46upx;
		line-height: 50upx;
		/* color */
	}
	.KListPagesInfoTitName2{
		color: #778896;
		line-height:40upx;
	}
	.KListPagesInfoTitImg{
		width: 30%;
	}
	.KListPagesInfoTitImg>image{
		width: 100%;
		height: 100%;
	}
	.remen{
		display: flex;
		justify-content: space-between;
		font-size: 12upx!important;
		height: 94upx;
		align-items: center;
	}
	.KListPagesList{
		padding: 0 20upx;
		border-bottom: 1px solid #999;
		height: 80upx;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color:#999;
	}
	.KListPagesList>view:nth-of-type(1){
		color: #007AFF;
	}
	
	/* 底部 */
	.KListPagesFooter{
		position: fixed;
		bottom:0;
		left:0;
		width: 100%;
		height: 100upx;
		display:flex;
		border-top: 1px solid #EEEEEE;
		align-items: center;
	}
	.KListPagesFootermf{
		width:40%;
		color:#000000;
		text-align: center;
	}
	.KListPagesFooteryh{
		background:red;
		color:#fff;
		width: 60%;
		line-height: 100upx;
		text-align: center;
	}
</style>
