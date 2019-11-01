<template>
	<view class="Klist">
		<!-- 限时热卖 -->
		<view class="LimitedBox">
			<view class="">
				<view class="LimitedTit">{{LimitedBox.name}}</view>
				<view class="LimitedList" 
					v-for="(item,index) in LimitedBox.items" 
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
				<view class="LimitedLook" @click='LimitedLook(LimitedBox.name)'>查看更多 ></view>
			</view>
		</view>
		<!-- 干货分享 -->
		<view class="shareBox">
			<view class="">
				<view class="shareTit">{{shareBox.name}}</view>
				<view class="shareList" 
					v-for="(item,index) in shareBox.items" 
					:key='index'
					@click='JumpShare(index)'
				>
					<view class="shareListImg">
						<image :src="item.list_cover" mode=""></image>
					</view>
					<view class="shareListInfo">
						<view class="shareListInfoName">{{item.name}}</view>
						<view class="shareListInfoIntro">{{item.brief_intro}}</view>
						<view class="shareListInfoChapters">{{item.chapters}}</view>
						<view class="shareListInfoPrice">
							<view class="">{{item.prices_current[0].amount}}</view> 元/份
						</view>
					</view>
				</view>
				<view class="LimitedLook" @click='ShareLook'>查看更多 ></view>
			</view>
		</view>
		<!-- 全部 -->
		<view class="totalBox"></view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				LimitedBox:[],//限时热卖数据
				shareBox:[],//干货分享数据
			}
		},
		created() {
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/open/list1',
				method: 'GET',
				success: res => {
					console.log(res.data.data)
					this.LimitedBox = res.data.data
				}
			});
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/open/list2',
				method: 'GET',
				success: res => {
					console.log(res.data.data)
					this.shareBox = res.data.data
				}
			});
		},
		methods:{
			// 点击进入详情页
			JumpLimit(i){
				console.log(i);
				uni.navigateTo({
					url:'../components/KListLimitPages?id='+i
				})
			},
			JumpShare(i){
				console.log(i);
				uni.navigateTo({
					url:'../components/KListSharePages?id='+i
				})
			},
			// 开氪全部页
			LimitedLook(tit){
				uni.navigateTo({
					url:'components/KListLimits?title='+tit
				})
			},
			ShareLook(){
				uni.navigateTo({
					url:'components/KListShare'
				})
			}
		}
	}
</script>

<style scoped>
	.uni-view{
		line-height:auto;
	}
	/* 限时热卖 */
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
	
	/* 干货分享 */
	.shareBox{
		margin-top: 20upx;
		padding: 0 20upx;
	}
	.shareBox{
		padding: 0 20upx;
		margin-top: 20upx;
		background: #FFFFFF;
	}
	.shareTit{
		font-size:40upx;
		line-height: 80upx;
	}
	.shareList{
		display:flex;
		margin-bottom:40upx;
		justify-content: space-between;
		height:260upx;
	}
	.shareListImg{
		width:30%;
		height:260upx;
	}
	.shareListImg>image{
		border-radius:5upx;
		width:100%;
		height:100%;
	}
	.shareListInfo{
		display:flex;
		width:67%;
		flex-direction:column;
		justify-content:space-between;
	}
	.shareListInfoName{
		font-size: 30upx;
		line-height:30upx;
	}
	.shareListInfoIntro{
		font-size: 28upx;
		line-height:28upx;
		color:#999;
	}
	.shareListInfoPrice{
		display:flex;
		align-items: center;
		color:#007AFF;
		font-size:22upx;
	}
	.shareListInfoPrice>view{
		font-size:36upx;
	}
	.shareListInfoChapters{
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
	.shareListInfoType{
		line-height:18upx;
		background:#ff6773;
		color:#fff;
		padding:5upx 10upx;
		font-size:18upx;
		width:100upx;
		border-radius:5upx;
	}
	.shareLook{
		text-align:center!important;
		color:#999!important;
	}
</style>
