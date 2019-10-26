<template>
	<view class="">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in bannerList" :key='index'>
							<view class="swiper-item uni-bg-red">
								<image :src="item.templateMaterial.widgetImage" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
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
				duration: 500
			}
		},
		onLoad() {
			console.log(1)
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/home/recommend/carousel',
				method: 'GET',
				success: res => {
					console.log(res.data.data.bannerList)
					this.bannerList = res.data.data.bannerList
				},
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
			}
		}
	}
</script>

<style>
</style>
