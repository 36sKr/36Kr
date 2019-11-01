export const getData= async (src)=>{
	return await uni.request({
		url:`http://rap2api.taobao.org/app/mock/234738/get/${src}`,
	})
}