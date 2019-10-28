<template>
	<view class="">
		<view class="page-section-spacing swiper-cont">
			<swiper @change="bannerFn" class="swiper" :circular=true :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerList" :key='index'>
					<view class="swiper-item uni-bg-red">
						<image :src="item.templateMaterial.widgetImage" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="line-cont">
				<view 
					v-for="(item,index) in bannerList.length" 
					:class="idx===index?'active':''"
				>
				</view>
			</view>
		</view>
		<view class="itemList" 
			v-for="(item,index) in itemList" 
			
			@click="Jump(index)"
		>
			<view class="itemListInfo">
				<view class="itemListInfoTitle">{{item.templateMaterial.widgetTitle}}</view>
				<view class="itemListInfoAuthor">
					<view>{{item.templateMaterial.authorName}}</view>
					<view class="itemListInfoRecommend">{{item.templateMaterial.templateType}}收藏</view>					
				</view>
			</view>
			<view class="itemListImg">
				<image :src="item.templateMaterial.widgetImage"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				bannerList:[],
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				idx : 0,
				itemList:[],
				p:1//当前分页页数
			}
		},
		onLoad() {
			// 请求轮播数据
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/home/recommend/carousel',
				method: 'GET',
				success: res => {
					// console.log(res.data.data.bannerList)
					this.bannerList = res.data.data.bannerList
				},
			});
			//请求列表数据
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/home/recommend/list',
				method: 'GET',
				success: res => {
					// console.log(res.data.data.itemList)
					this.itemList = res.data.data.itemList
				},
			});
		},
		// 页面滚动到底部事件
		onReachBottom() {
			// 提示数据加载事件
			uni.showLoading({
				title:'正在加载中...'
			})
			// 请求列表数据
			this.p++;
			uni.request({
				url: `http://rap2api.taobao.org/app/mock/234738/get/home/recommend/list?_page=${this.p}&_limit=${this.itemList.length}`,
				method: 'GET',
				success: res => {
					console.log(res.data.data.itemList)
					// 判断数据的length为0的时候,数据就停止请求
					if(res.data.data.itemList.length==0){
						uni.showToast({
							title:"我是有底线的"
						})
					}else{
						// 重新保存到数据堆里面  当前数据            重新获取到的数据
						this.itemList = [...this.itemList,...res.data.data.itemList]
						console.log(this.itemList)
					}
					// 当执行到改方法的时候,说明已经请求完数据的操作,
					// 停止了正在加载中的操作
					uni.hideLoading()
				}
			});
		},
		methods:{
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			bannerFn(ev){
				// console.log(ev.detail)
				this.idx = ev.detail.current
			},
			Jump(i){
				uni.navigateTo({
					url:"../../components/IndexListPages?id="+i
				})
			}
		}
	}
</script>

<style>
	.swiper-item image{
		width: 100%;
		height: 334upx;
	}
	.swiper-cont{
		position: relative;
		margin-bottom: 30upx;
	}
	.line-cont{
		position: absolute;
		bottom:-28upx;
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.line-cont>view{
		width: 15upx;
		height: 15upx;
		background:#dedede;
		margin: 0 10upx;
		transform: rotate(45deg);
	}
	.line-cont>view.active{
		background: #4084ff;
	}
	
	/* 列表 */
	.itemList{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	/* 列表信息 */
	.itemListInfo{
		width: 70%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
	.itemListInfoTitle{
		font-size: 32upx;
		color: #333;
	}
	.itemListInfoAuthor{
		display: flex;
		justify-content: space-between;
		font-size: 12upx;
		color: #949494;
	}
	/* 列表图片 */
	.itemListImg{
		width: 190upx;
		height: 190upx;
	}
	.itemListImg>image{
		width: 100%;
		height: 100%;
	}
</style>
