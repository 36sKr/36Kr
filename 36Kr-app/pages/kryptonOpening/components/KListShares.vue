<template>
	<!-- 干货分享全页面 -->
	<view class=""></view>
</template>

<script>
	export default{
		created() {
			uni.request({
				url: 'http://rap2api.taobao.org/app/mock/234738/get/open/open/listshares',
				method: 'GET',
				success: res => {
					console.log(res)
				}
			});
		}
	}
</script>

<style>
</style>
