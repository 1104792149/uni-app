import format from 'date-fns/format'
import qs from 'qs';
import config from '@/js/config'
import store from '@/js/store'

const common = {};

common.install = (Vue) => {
    Vue.mixin({
        computed: {
            isActivityOpen () {
                return new Date().getTime() >= config.START_TIME;
            }
        },
        methods: {
            /**
             * uni 页面跳转修改，支持传入对象参数
             * @param url uni 跳转的页面
             * @param params 参数
             */
            navigateTo (url, params = {}) {
                uni.navigateTo({url: `${url}?${qs.stringify(params, {encode: false})}`});
            },
            redirectTo (url, params = {}) {
                uni.redirectTo({url: `${url}?${qs.stringify(params, {encode: false})}`});
            },
            /**
             * 请求的错误处理
             * @param error 错误对象或者字符串
             * @param title 提示的标题
             */
            showError (error, title = '提示') {
                uni.showModal({
                    title,
                    content: error ? error.message || error : '请检查网络是否连接',
                    showCancel: false,
                });
            },
            formatDate(date, dateFormat = 'YYYY-MM-DD') {
                return format(date, dateFormat);
            },
            showToast (message) {
                uni.showToast({
                    icon: 'none',
                    title: message,
                    duration: 2000
                });
            },

            /**
             * 上传文件
             */
            uploadFile (file) {
                return new Promise((resolve, reject) => {
                    uni.showLoading();
                    uni.uploadFile({
                        url: `${config.HOST}/user/uploadImage`,
                        filePath: file.path,
                        name: 'image',
                        formData: {
                            'name': file.path,
                        },
                        success: (uploadFileRes) => {
                            uni.hideLoading();
							console.log(JSON.stringify(uploadFileRes))
                            if (uploadFileRes.statusCode === 200) {
								try{
									const result = JSON.parse(uploadFileRes.data);
									if (result.code !== '0000') {
										this.showToast(result.message);
									} else {
										resolve(result.result)
									}
								} catch (err) {
									this.showToast('上传失败')
								}
                                
                            }
                        },
                        fail: (error => {
                            reject(error);
                            uni.hideLoading();
                            this.showError('上传失败');
                        })
                    });
                })
            },

            hidePhone (phone) {
                return phone.substring(0, 3) + '****' + phone.substring(7, 11)
            },

            getCurrentUser () {
                return store.getUser() || {};
            },

        }
    });
};

export default common;