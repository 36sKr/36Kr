<template>
	<view>
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="swiper-tab-list" :class="{'active':index==tabIndex}" @tap="chenge(index)">
						{{tab.name}}
						<view class=""></view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="uni-tab-bar">
			<swiper 
			class="swiper-box"
			:style="{height:swiperheight+'px'}"
			:current="tabIndex"
			@change="tabChange">
				<swiper-item>
					<scroll-view scroll-y class="list">
						关注
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						推荐
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						<block>
							<hotlist/>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						快讯
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						视频
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						重庆
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list">
						汽车
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import hotlist from './hotlist/hotlist.vue'
	export default {
		data() {
			return {
				swiperheight:0,
				tabIndex:0,
				tabBars:[
					{name:"关注",id:'guanzhu'},
					{name:"推荐",id:'tuijian'},
					{name:"热榜",id:'tiyu'},
					{name:"快讯",id:'kuaixun'},
					{name:"视频",id:'shipin'},
					{name:"重庆",id:'chongq'},
					{name:"汽车",id:'qiche'},
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success:(res)=> {
					let height=res.windowHeight-uni.upx2px(100)
					this.swiperheight=height
					
			        console.log(res.windowHeight);
			    }
			});
		},
		methods: {
			chenge(xb){
				this.tabIndex=xb;
			},
			//滑动事件
			tabChange(e){
				this.tabIndex=e.detail.current
			}
		},
		components:{
			hotlist
		}
	}
</script>

<style>
	.swiper-tab-list{
		color: #969696;
		font-weight: 800;
	}
	.active{
		color: #343434;
		justify-content: center;
	}
	.active view{
		border-bottom: 2upx solid #3f83f4;
		width:30upx;
		border-top: 2upx solid #3f83f4;
		border-radius: 5upx;
		position: relative;
		left: 50%;
		margin-left: -15upx;
		background: #3f83f4;
	}
</style>
