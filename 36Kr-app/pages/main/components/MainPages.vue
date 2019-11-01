<template>
	<view class="MainPages">
		<view class="MainPagesH">
			<view @click="goBack" class="MainPagesGo iconfont icon-zuojiantou"></view>
			<view class="MainPagesMe">
				<view class="MainPagesMeImg"></view>
				<view class="MainPagesMeTit">{{MainPagesMeTit}}</view>
				<view class="MainPagesMeBj">{{MainPagesMeBj}}</view>
			</view>
			<view class="MainPagesIntro">{{MainPagesIntro}}</view>
		</view>
		<view class="MainPagesInfo">{{MainPagesInfo}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				MainPagesInfo:'目前还没有动态',
				MainPagesIntro:'TA还在犹豫如何开场',
				MainPagesMeTit:'新用户xxx',
				MainPagesMeBj:'编辑'
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>

</style>
