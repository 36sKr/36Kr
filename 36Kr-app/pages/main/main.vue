<template>
	<view class="Main">
		<view class="MainLoginBox">
			<view class="MainLogin" @click="Jump">
				<view class="MainLoginImg iconfont icon-wode"></view>
				<view class="MainLoginText">
					<view class="MainLoginText1">{{title}}</view>
					<view class="MainLoginText2">{{titleInfo}}</view>
				</view>
				<view class="MainLoginCheck">
					<view class="">{{checkReg}}</view>
					<view class="MainLoginyoujiantou iconfont icon-iconfonti"></view>
				</view>
				
			</view>
			<view class="MainRenWu">
				<view class="MainRenWuBox">
					<view class="MainRenWuIcon iconfont icon-Group-"></view>
					<view class="MainRenWuTitle">积分商城</view>
					<view class="MainRenWuTitleInfo1">36氪周边</view>
				</view>
				<view class="MainRenWuBox">
					<view class="MainRenWuIcon iconfont icon-jifen"></view>
					<view class="MainRenWuTitle">积分任务</view>
				</view>
				<view class="MainRenWuBox">
					<view class="MainRenWuIcon iconfont icon-ziyuan"></view>
					<view class="MainRenWuTitle">签到</view>
					<view class="MainRenWuTitleInfo2">赚积分</view>
				</view>
			</view>
		</view>
		<view class="MainListBox">
			<view class="MainListImg">
				<image src="../../static/img/logo.png" mode=""></image>
			</view>
			<view class="MainList1">
				<view class="" @click="JumpMainPage">
					<view class="iconfont icon" :class='icon'>
						<view>{{tit}}</view>
					</view>
					<view class="iconfont icon-iconfonti"></view>
				</view>
				<view class="" v-for="(item,index) in mainList1" :key='index'>
					<view class="icon iconfont" :class=item.icon>
						<view>{{item.tit}}</view>
					</view>
					<view class="iconfont icon-iconfonti"></view>
				</view>
			</view>
			<view class="MainList2">
				<view class="" v-for="(item,index) in mainList2" :key='index'>
					<view class="icon iconfont" :class=item.icon>
						<view>{{item.tit}}</view>
					</view>
					<view class="iconfont icon-iconfonti"></view>
				</view>
			</view>
			<view class="MainList3">
				<view class="" v-for="(item,index) in mainList3" :key='index'>
					<view class="icon iconfont" :class=item.icon>
						<view>{{item.tit}}</view>
					</view>
					<view class="iconfont icon-iconfonti"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkReg:'',
				title:'未登录',
				titleInfo:'点击登录,有好礼',
				tit:'个人中心',
				icon:'icon-wode',
				mainList1:[
					{'tit':'信息中心','icon':'icon-tongzhi'},
					{'tit':'我的关注','icon':'icon-icon_follow'},
					{'tit':'我的评论','icon':'icon-pinglun'},
					{'tit':'我的收藏','icon':'icon-shoucang'},
					{'tit':'浏览记录','icon':'icon-jiludanzilishijilu'},
				],
				mainList2:[
					{'tit':'我的钱包','icon':'icon-wallet-fill'},
					{'tit':'我的开氪','icon':'icon-K1'},
					{'tit':'已订专栏','icon':'icon-Group-'},
				],
				mainList3:[
					{'tit':'寻求报道','icon':'icon-mtbd'},
					{'tit':'意见反馈','icon':'icon-yijianfankui'},
					{'tit':'设置','icon':'icon-shezhi'},
				],
			}
		},
		methods: {
			Jump(){
				uni.navigateTo({
					url:"../login/login"
				})
			},
			JumpMainPage(){
				console.log('正在进入个人中心')
				uni.navigateTo({
					url:"./components/MainPages"
				})
			}
		},
		onShow() {
			uni.getStorage({
				key:'storage',
				success: (res) => {
					console.log(res)
					this.title = res.data.phone
					this.titleInfo = '写点什么，介绍下自己吧'
					this.checkReg = '切换登录'
				}
			})
		}
	}
</script>

<style>
::-webkit-scrollbar{display:none}
.Main{
	padding:50upx 0 0;
	height: 100%;
	background: #FFFFFF;
	/* padding: 40upx; */
	overflow-x: hidden;
}
.MainLoginBox{
	margin: 0 25upx;
	height: 500upx;
	box-shadow: 0upx 0upx 6upx 6upx #EEEEEE;
	margin-bottom: 50upx;
}
.MainLogin{
	display: flex;
	height: 50%;
	align-items: center;
}
.MainLoginImg{
	font-size: 100upx;
	margin:0 40upx;
}
.MainLoginCheck{
	display: flex;
	align-items: center;
	color: #999;
}
.MainLoginyoujiantou{
	font-size: 30px;
	color: #999;
}
.MainLoginText{
	flex: 1;
	position: relative;
}
.MainLoginText1{
	font-size: 40upx;
}
.MainLoginText2{
	font-size: 20upx;
	color: #999;
}
.MainRenWu{
	display: flex;
	justify-content: space-around;
	/* align-items: center; */
}
.MainRenWuBox{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.MainRenWuIcon{
	font-size: 80upx;
}
.MainRenWuTitle{
	font-size: 30upx;
}
.MainRenWuTitleInfo1{
	color: red;
	font-size: 24upx;
}
.MainRenWuTitleInfo2{
	color: #999;
	font-size: 24upx;
}
.icon-kbishangcheng{
	/* color: #000000!important; */
}

.MainListBox{
	background: #EEEEEE;
}
.MainListImg{
	padding: 0 25upx;
	background: #FFFFFF;
	width: 100%;
	height: 200upx;
}
.MainListImg>image{
	height: 100%;
	width: 100%;
}
.MainList1,.MainList2,.MainList3{
	padding: 0 25upx;
	margin-bottom: 20upx;
	background: #fff;
}
.MainList1>view,.MainList2>view,.MainList3>view{
	line-height: 100upx;
	font-size: 50upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.icon{
	font-size: 50upx;
	color: #778899;
	height: 100upx;
	padding-left:20upx;
	display: flex;
	align-items: center;
}
.icon>view{
	font-size: 40upx;
	padding-left:20upx;
	color: #000000;
}
</style>
