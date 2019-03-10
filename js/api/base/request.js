import store from '../../store';
import config from '../../config'
import qs from 'qs'

const promiseRequest = (method, url, params, noDefault, contentType = 'application/x-www-form-urlencoded') => {

    const userParams = {};
    const userId = store.getUserId();
    if (userId) {
        userParams.userId = userId;
    }
    let finalParams = Object.assign(userParams, params);
    if (noDefault) {
        finalParams = params;
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method,
            data: finalParams,
            header: {
                'token': store.get('token'),
                'content-type': contentType,
//                 // 'token': store.get('token'),
// 				'token' : 'em14enZldGdhdGdmc3BleHluc2ZrYW9kd3lydzQyOTM0M2E3ZjIyYjQyYjZhMTJmODkyNTQ5MDlmMzIw',
// 				// 'token' : '00068c65ad1548eab4afdf85730b1888',

            },
            success: res => {
                const resData = res.data;
                const code = resData['code'];
                if(code === '0000') {
                    resolve(resData.result||'');
                } else if (code === '1002') {
                    uni.reLaunch({ url: '/pages/login/zero' });
                }else {
                    reject(resData);
                }
            },
            fail: res => {
                reject(res.data);
            },
        });
    })
}

const get = (url, params, host = config.HOST) => promiseRequest('GET', host + '/' + url, params)
const post = (url, params, host = config.HOST) => promiseRequest('POST', host + '/' + url, params)
const postUrlencoded = (url, params, host = config.HOST) => promiseRequest('POST', host + '/' + url, params, false, 'application/x-www-form-urlencoded')
const postJson = (url, params, host = config.HOST) => promiseRequest('POST', host + '/' + url, params, false, 'application/json;charset=UTF-8')
const noFixParamsGet = (url, params, host = config.HOST) => promiseRequest('GET', host + '/' + url, params, true)
const noFixParamsPost = (url, params, host = config.HOST) => promiseRequest('POST', host + '/' + url, params, true)

export { get, post, noFixParamsGet, noFixParamsPost, postUrlencoded, postJson };