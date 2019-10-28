<template>
	<view class="Index">
		<view class="IndexSearch">
			<view class="SignIn iconfont icon-Sign"></view>
			<view class="IndexFrom iconfont icon-sousuo">大家都在搜：淘集集</view>
		</view>
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
						<block>
							<IndexRecommend/>
						</block>
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
	import IndexRecommend from './components/IndexRecommend'
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
			hotlist,
			IndexRecommend

		}
	}
</script>

<style scoped>
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
	/* 首页主页 */
	.Index{
		height: 100%;
		padding: 0 25upx;
		background: #fff;
	}
	/* 首页头部搜索 */
	.IndexSearch{
		padding: 10upx 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.IndexSearch>.SignIn{
		font-size: 34upx;
	}
	.IndexSearch>.IndexFrom{
		background: #fbfbfb;
		font-size: 12upx;
		display: inline-block;
		font-size: 26upx;
		width: 90%;
		text-align: center;
		padding:10upx 0;
		color: #898989;
	}
</style>
