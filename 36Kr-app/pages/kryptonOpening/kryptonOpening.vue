<template>
	<view class="KOpen">
		<view class="KOpenTit">开氪</view>
		<Kswiper></Kswiper>
		<KList></KList>
	</view>
</template>

<script>
	import Kswiper from './components/Kswiper'
	import KList from './components/KList'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			Kswiper,
			KList
		}
	}
</script>

<style>
.KOpen{
	overflow-x: hidden;
	padding:50upx 0 0;
	background: #eee;
}
.KOpenTit{
	line-height: 80upx;
	font-size: 40upx;
	background: #FFFFFF;
	text-align: center;
}
</style>
