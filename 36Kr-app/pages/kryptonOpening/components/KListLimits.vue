<template>
	<!-- 限时热卖全页面 -->
	<view class="">
		<view class="klistlimitstitBox">
			<view @click="goback" class="iconfont icon-zuojiantou"></view>
			<view class="klistlimitstit">{{klistlimitstitle}}</view>
		</view>
		<view class="LimitedBox">
			<view class="">
				<!-- <view class="LimitedTit">{{LimitedBox.name}}</view> -->
				<view class="LimitedList" 
					v-for="(item,index) in klistlimits" 
					:key='index'
					@click='JumpLimit(index)'
				>
					<view class="LimitedListImg">
						<image :src="item.list_cover" mode=""></image>
					</view>
					<view class="LimitedListInfo">
						<view class="LimitedListInfoName">{{item.name}}</view>
						<view class="LimitedListInfoIntro">{{item.brief_intro}}</view>
						<view class="LimitedListInfoChapters">{{item.chapters}}</view>
						<view class="LimitedListInfoType" v-if="item.prices_current[0].promotional_copy">{{item.prices_current[0].promotional_copy}}</view>
						<view class="LimitedListInfoPrice">
							<!-- 用class进行判断他的数据是否有某个属性，从而进行修改其显示不同的样式 -->
							<view
								:class="item.prices_current[0].type=='限时优惠'?'LimitedListInfoPriceC':'LimitedListInfoPrice1'">
								<view>{{item.prices_current[0].amount}}</view> 元/份
							</view>
							<view class="LimitedListInfoPrice2" v-if="item.prices_current[0].promotional_copy">{{item.prices_current[0].amount_origin}} 元/份</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				klistlimits:[],
				klistlimitstitle:''
			}
		},
		created() {
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/open/listlimits',
				method: 'GET',
				success: res => {
					console.log(res.data.data)
					this.klistlimits = res.data.data.items;
				}
			});
		},
		onLoad(options) {
			console.log(options.title);
			this.klistlimitstitle = options.title
		},
		methods:{
			goback(){
				uni.navigateBack({
					delta:1
				})
			},
			JumpLimit(i){
				console.log(i);
				uni.navigateTo({
					url:'../../components/KListLimitPages?id='+i
				})
			},
		}
	}
</script>

<style>
	.klistlimitstitBox{
		padding: 0 20upx;
		display: flex;
		align-items: center;
	}
	.klistlimitstitBox>.klistlimitstit{
		/* text-align: center; */
		margin: 0 auto;
	}
	.LimitedBox{
		padding: 0 20upx;
		margin-top: 20upx;
		background: #FFFFFF;
	}
	.LimitedTit{
		font-size:40upx;
		line-height: 80upx;
	}
	.LimitedList{
		display:flex;
		margin-bottom:40upx;
		justify-content: space-between;
		height:260upx;
	}
	.LimitedListImg{
		width:30%;
		height:260upx;
	}
	.LimitedListImg>image{
		border-radius:5upx;
		width:100%;
		height:100%;
	}
	.LimitedListInfo{
		display:flex;
		width:67%;
		flex-direction:column;
		position: relative;
	}
	/* 热卖标题 */
	.LimitedListInfoName{
		font-size: 30upx;
		line-height:50upx;
	}
	/* 热卖信息 */
	.LimitedListInfoIntro{
		margin: 15upx 0;
		font-size: 28upx;
		line-height:28upx;
		color:#999;
	}
	/* 热卖课讲 */
	.LimitedListInfoChapters{
		line-height:24upx;
		font-size:24upx;
		line-height:36upx;
		width:100upx;
		padding:2upx 5upx;
		background:#f4f4f4;
		color:#999;
		text-align:center;
		border-radius:25upx;
	}
	/* 限时热卖 */
	.LimitedListInfoType{
		line-height:18upx;
		background:#ff6773;
		color:#fff;
		padding:5upx 10upx;
		font-size:18upx;
		width:100upx;
		border-radius:5upx;
		margin-top: 35upx;
	}
	/* 热卖价格 */
	.LimitedListInfoPrice{
		display:flex;
		align-items: center;
		position: absolute;
		bottom: 0;
	}
	/* 此样式是他有限时优惠时的显示样式 */
	.LimitedListInfoPriceC{
		display:flex;
		align-items: center;
		margin-right:20upx;
		color:#ff6773;
		font-size:22upx;
	}
	/* 此样式是他没有限时优惠时的显示样式 */
	.LimitedListInfoPrice1{
		display:flex;
		align-items: center;
		margin-right:20upx;
		color:#007AFF;
		font-size:22upx;
	}
	.LimitedListInfoPrice1>view,.LimitedListInfoPriceC>view{
		font-size:36upx;
	}
	/* 此样式是他有限时优惠时的显示他的原价 */
	.LimitedListInfoPrice2{
		color: #999;
		text-decoration:line-through;
	}
	.LimitedLook{
		text-align: center;
		color: #999;
		padding:10upx 0;
	}
	
</style>
