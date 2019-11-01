<template>
	<view class="page-section-spacing swiper-cont">
		<swiper @change="bannerFn" class="swiper" :circular=true :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in bannerList" :key='index'>
				<view class="swiper-item uni-bg-red">
					<image @click="KSP(index)" :src="item.cover" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="line-cont">
			<view
				v-for="(item,index) in bannerList.length" 
				:class="idx===index?'active':''"
				:key="index"
			>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				idx:0,
				bannerList:[]
			}
		},
		created() {
			uni.request({
				url:"http://rap2api.taobao.org/app/mock/234738/get/open/swiper",
				method:"GET",
				success: (res) => {
					// console.log(res.data.data.items)
					this.bannerList = res.data.data.items
				}
			})
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
			// 获取到轮播的下标事件
			bannerFn(ev){
				// console.log(ev.detail.current)
				this.idx = ev.detail.current
			},
			// 图片点击传参
			KSP(i){
				// uni.navigateTo({
				// 	url:'./KswiperPages?id='+i
				// })
				// location.href="this.KSP[i].url"
			}
		}
	}
</script>

<style scoped>
	.swiper-item image{
		width: 100%;
		height: 334upx;
	}
	.swiper-cont{
		background: #FFFFFF;
		padding: 0 20upx;
		position: relative;
		padding-bottom: 60upx;
	}
	.line-cont{
		position: absolute;
		bottom:20upx;
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
</style>
