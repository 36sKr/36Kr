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
			:style="{height:swiperheight+'px',border:'1px solid red'}"
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
						热榜
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
	export default {
		data() {
			return {
				swiperheight:600,
				tabIndex:0,
				newList:[
					{
						list:[
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/43.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/1.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/11.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/11.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/42.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/10.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/41.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/9.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/40.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/8.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/39.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/7.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/38.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/6.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/37.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/5.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/36.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/4.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/35.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/3.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/34.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/2.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/33.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
					{
						list:[
							{
								userpic:"../../static/demo/userpic/12.jpg",
								username:"小花生不上课",
								isguanzhu:false,
								title:"如何用手账改变你的一生？",
								type:'img',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/43.jpg",
								infounm:{
									index:0,//0:没有操作，1：顶，2：踩
									dingnum:987,
									cainum:10,
								},
								commentnum:34,
								sharenum:7
							},
							{
								userpic:"../../static/demo/userpic/1.jpg",
								username:"卤大湿",
								isguanzhu:true,
								title:"走出去，才发现跟别人差的不是一点半点",
								type:'video',//两种类型 图文跟视频
								titlepic:"../../static/demo/datapic/11.jpg",
								playnum:'20W',
								long:"2:47",
								infounm:{
									index:1,//0:没有操作，1：顶，2：踩
									dingnum:570,
									cainum:2,
								},
								commentnum:21,
								sharenum:14
							}
						]
					},
				],
				
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
