const onlineEnv = {
	"SHARE_HOST": 'http://h5.chaintop.io/',
	"HOST": 'http://api.chaintop.io/chaining_mine'
}

const testEnv = {
	"SHARE_HOST": 'http://10.0.0.53/',
	"HOST": 'http://10.0.0.53:8081/chaining_mine'
}

const devEnv = {
	"SHARE_HOST": 'http://10.0.0.44/',
	"HOST": 'http://10.0.0.44:8080/chaining_mine'
}
const dai = {
	"SHARE_HOST": 'http://10.0.0.44/',
	"HOST": 'http://192.168.0.102:8081/chaining_mine'
}
const env = onlineEnv;

export default {
    HOST: env["HOST"],
	//扫码-分享
    DOWNLOAD_URL: env["SHARE_HOST"] + 'download/index.html#/',
	//更新
	UPDATE_URL: env["SHARE_HOST"] + 'download/index.html#/pages/download/download',
    SHARE_ACTIVITY_DETAIL_URL: env["SHARE_HOST"] + 'share/index.html',
    START_TIME: 1545580800000
}